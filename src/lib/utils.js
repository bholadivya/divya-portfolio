/*
  Utility function to merge Tailwind classes safely
  Combines clsx + tailwind-merge

  Interview:
  Prevents conflicting Tailwind classes like "p-2 p-4"
*/

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  //cn = class name
/*  
Combines:
   - clsx → handles conditional classes
   - tailwind-merge → resolves Tailwind conflicts
*/
  return twMerge(clsx(inputs));
};
