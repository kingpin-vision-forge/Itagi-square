import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface VintageDividerProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  lineColor?: string;
}

export const VintageDivider: React.FC<VintageDividerProps> = ({
  className,
  orientation = 'vertical',
  lineColor = 'bg-[#481454]/40',
}) => {
  if (orientation === 'horizontal') {
    return (
      <div
        className={cn(
          'flex items-center justify-center w-full my-6 gap-4',
          className
        )}
      >
        <div className={cn('flex-1 h-[1px]', lineColor)} />
        <div className="relative w-12 h-16 shrink-0 opacity-85">
          <Image
            src="/images/icons/botanical-flower.png"
            alt="Botanical ornament"
            fill
            className="object-contain"
          />
        </div>
        <div className={cn('flex-1 h-[1px]', lineColor)} />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between h-full py-4',
        className
      )}
    >
      <div className={cn('w-[1px] flex-1', lineColor)} />
      <div className="relative w-16 h-24 my-3 shrink-0 opacity-85 hover:opacity-100 transition-opacity">
        <Image
          src="/images/icons/botanical-flower.png"
          alt="Vintage botanical engraving"
          fill
          className="object-contain"
        />
      </div>
      <div className={cn('w-[1px] flex-1', lineColor)} />
    </div>
  );
};
