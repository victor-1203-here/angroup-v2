import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(classes));
}
