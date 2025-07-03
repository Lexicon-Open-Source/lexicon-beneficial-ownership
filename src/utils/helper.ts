import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number with dots as thousands separators
 * @param num - The number to format
 * @returns Formatted string (e.g., 200000 → "200.000")
 */
export function formatNumber(num: number | string | null | undefined): string {
  if (num === null || num === undefined) return "0";

  const numValue = typeof num === "string" ? parseFloat(num) : num;

  if (isNaN(numValue)) return "0";

  return numValue.toLocaleString("de-DE"); // Uses dots as thousands separator
}
