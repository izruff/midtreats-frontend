import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Shadcn-ui utils
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMobileWidth() {
  return window.innerWidth < 768;
}
