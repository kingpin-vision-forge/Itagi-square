import React from 'react';
import { PolicyGroup } from '@/types/guide';
import { cn } from '@/lib/utils';

export interface PolicyColumnProps {
  column: PolicyGroup;
  className?: string;
}

export function PolicyColumn({ column, className }: PolicyColumnProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {/* Column Title in Uppercase Serif with delicate bottom border */}
      <h3 className="text-base sm:text-lg font-serif font-medium tracking-[0.12em] text-[#1D161F] uppercase pb-3 border-b border-[#CFC2AE]">
        {column.title}
      </h3>

      {/* List Items matching Frame 72 editorial typography */}
      <div className="mt-4 space-y-3 text-xs sm:text-[13px] leading-relaxed text-[#4A4036] font-sans">
        {column.items.map((item, index) => (
          <div key={index} className="leading-snug">
            {item.label ? (
              <p>
                <span className="font-medium text-[#1D161F]">{item.label}: </span>
                <span className="text-[#4A4036]">{item.value}</span>
              </p>
            ) : (
              <p className="text-[#4A4036]">{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
