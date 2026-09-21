import React from 'react';
import { LayoutGrid, Bed, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export type RoomSpecType = 'area' | 'bed' | 'guests';

export interface RoomSpecBadgeProps {
  type: RoomSpecType;
  label: string;
  className?: string;
  iconClassName?: string;
}

const iconMap: Record<RoomSpecType, React.ElementType> = {
  area: LayoutGrid,
  bed: Bed,
  guests: Users,
};

export const RoomSpecBadge: React.FC<RoomSpecBadgeProps> = ({
  type,
  label,
  className,
  iconClassName,
}) => {
  const IconComponent = iconMap[type];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 text-xs text-[#1D161F] font-medium',
        className
      )}
    >
      <div className="flex items-center justify-center w-5 h-5 text-[#481454]">
        <IconComponent
          className={cn('w-4 h-4 stroke-[1.75]', iconClassName)}
          aria-hidden="true"
        />
      </div>
      <span className="tracking-wide text-neutral-800">{label}</span>
    </div>
  );
};
