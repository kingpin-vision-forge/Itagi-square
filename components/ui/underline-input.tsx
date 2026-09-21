import React from 'react';
import { cn } from '@/lib/utils';

export interface UnderlineInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const UnderlineInput = React.forwardRef<
  HTMLInputElement,
  UnderlineInputProps
>(({ className, containerClassName, label, error, id, ...props }, ref) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <div className={cn('relative w-full group', containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs uppercase tracking-widest text-[#5C5260] mb-1 font-serif transition-colors group-focus-within:text-[#481454]"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          'w-full bg-transparent py-2 px-1 text-[#1D161F] text-sm md:text-base border-b border-[#8F7E71]/60 focus:border-[#481454] focus:outline-none transition-all duration-200 placeholder:text-[#8F7E71]/50 placeholder:font-serif',
          error && 'border-red-600 focus:border-red-600',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600 font-sans">{error}</p>
      )}
    </div>
  );
});

UnderlineInput.displayName = 'UnderlineInput';
