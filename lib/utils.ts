import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const fmt = (n: number) => `${n}€`;
export const ab = (n: number) => `ab ${fmt(n)}`;