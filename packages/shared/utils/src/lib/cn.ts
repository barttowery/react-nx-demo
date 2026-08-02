import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-family': ['font-geist', 'font-inter'],
      'font-size': ['text-xsm', 'text-md'],
    },
  },
});
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
