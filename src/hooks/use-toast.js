/*
  Custom Toast Hook (State Management Layer)

  Purpose:
  Manages all toast notifications globally

  Think:
  This is like a mini Redux store (without Redux)

  Interview:
  Demonstrates global state management using reducer + listeners
*/


import * as React from "react";

const TOAST_LIMIT = 1; //Limit how many toasts can appear at once
const TOAST_REMOVE_DELAY = 1000000; //Delay before toast is removed from DOM (in ms)

//Simple ID generator for each toast
let count = 0; 
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map(); //Stores timeouts for removing toasts

/*
  Adds toast to removal queue after delay

  Prevents multiple timeouts for same toast
*/
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    // Dispatch remove action after delay
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/*
  Reducer function (like Redux)

  Handles all toast actions
*/
const reducer = (state, action) => {
  switch (action.type) {

    // Add new toast
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    // Update existing toast
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    
    // Close toast (not remove immediately)
    case "DISMISS_TOAST": {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }

    // Remove toast from state
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

// Listeners = components subscribed to state changes
const listeners = [];

let memoryState = { toasts: [] }; //Global state (outside React)

/*
  Dispatch function

  Updates state + notifies all listeners
*/
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

/*
  Main function to create a toast

  Usage:
  toast({ title: "Success" })
*/
function toast(props) {
  const id = genId();

  // Update existing toast
  const update = (props) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });

  // Dismiss toast manually
  const dismiss = () => 
    dispatch({ type: "DISMISS_TOAST", toastId: id });

  // Add new toast
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      // Called when toast closes (UI interaction)
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

/*
  Custom React Hook

  Subscribes component to toast state
*/
function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    // Add listener on mount
    listeners.push(setState);
    return () => {
        // Remove listener on unmount (cleanup)
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
      ...state,
    // Trigger new toast
    toast,
    // Dismiss toast manually
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };