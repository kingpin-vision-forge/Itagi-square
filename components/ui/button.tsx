import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'hero-pill' | 'purple-pill' | 'vintage-ticket' | 'icon-circle' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'purple-pill',
      size = 'md',
      icon,
      iconPosition = 'left',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-700/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer';

    // Variant styles
    const variantStyles = {
      'hero-pill':
        'bg-[#ADCDEE] hover:bg-[#96BFEC] text-[#1D161F] font-semibold rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 tracking-wider text-xs uppercase',
      'purple-pill':
        'bg-[#481454] hover:bg-[#5B1C69] text-white rounded-full shadow-[0_4px_14px_rgba(72,20,84,0.25)] hover:shadow-[0_6px_20px_rgba(72,20,84,0.35)] hover:-translate-y-0.5 active:translate-y-0 tracking-widest text-xs uppercase',
      'vintage-ticket':
        'bg-[#F7E5D4] hover:bg-[#F2DAC4] text-[#481454] border border-[#481454] rounded-full shadow-[0_4px_12px_rgba(72,20,84,0.12)] hover:shadow-[0_6px_16px_rgba(72,20,84,0.2)] tracking-widest text-xs uppercase font-serif px-6 py-2.5',
      'icon-circle':
        'bg-[#481454] hover:bg-[#5B1C69] text-white rounded-full aspect-square p-0 shadow-md hover:scale-105 active:scale-95',
      outline:
        'bg-transparent border border-[#481454] text-[#481454] hover:bg-[#481454]/10 rounded-full tracking-wider text-xs uppercase',
    };

    // Size styles
    const sizeStyles = {
      sm: variant === 'icon-circle' ? 'w-8 h-8 text-xs' : 'px-4 py-1.5 text-xs',
      md: variant === 'icon-circle' ? 'w-11 h-11 text-sm' : 'px-6 py-2.5 text-xs',
      lg: variant === 'icon-circle' ? 'w-14 h-14 text-base' : 'px-8 py-3.5 text-sm',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && icon && iconPosition === 'left' && (
          <span className={cn(children ? 'mr-2' : '')}>{icon}</span>
        )}
        {children}
        {!isLoading && icon && iconPosition === 'right' && (
          <span className={cn(children ? 'ml-2' : '')}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
