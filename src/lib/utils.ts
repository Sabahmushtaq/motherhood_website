import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes with support for conditional classes and proper merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
