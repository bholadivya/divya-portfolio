/*
  Toaster Component

  Purpose:
  Renders all active toast notifications

  Think:
  This is the "engine" that displays toasts
*/
import { useToast } from "@/hooks/use-toast";

//  Import UI components defined earlier
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  /*
    useToast = custom hook managing toast state

    returns:
    - toasts → array of active notifications
  */
  const { toasts } = useToast();

  return (
    // Provider enables toast system globally
    <ToastProvider>
        {/* Loop through all toasts and render them */}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {/* Text content */}
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>

            {/* Optional button (e.g., Undo) */}
            {action}

            {/* Close button */}
            <ToastClose />
          </Toast>
        );
      })}

      {/* Container where toasts appear */}
      <ToastViewport />
    </ToastProvider>
  );
}