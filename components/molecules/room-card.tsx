'use client';

import Image from 'next/image';
import { BedDouble, Grid2X2, Users } from 'lucide-react';
import { RoomData } from '@/types/room';
import { cn } from '@/lib/utils';
import styles from './room-card.module.css';

export interface RoomCardProps {
  room: RoomData;
  className?: string;
  onExplore?: (room: RoomData) => void;
}

export function RoomCard({ room, className, onExplore }: RoomCardProps) {
  const buttonLabel = room.ctaText || 'EXPLORE ITAGI';

  return (
    <article className={cn(styles.card, className)}>
      <div className={styles.imageFrame}>
        <Image
          src={room.image}
          alt={room.title}
          fill
          quality={100}
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 361px"
          className={styles.image}
        />
      </div>

      <div className={styles.face}>
        <h3 className={styles.title}>{room.title}</h3>
        <p className={styles.description}>{room.description}</p>
        <ul className={styles.specs} aria-label="Room details">
          <li><Grid2X2 aria-hidden="true" /><span>{room.area}</span></li>
          <li><BedDouble aria-hidden="true" /><span>{room.bedType}</span></li>
          <li><Users aria-hidden="true" /><span>{room.maxGuests}</span></li>
        </ul>
        <div className={styles.action}>
          {onExplore ? (
            <button type="button" onClick={() => onExplore(room)} className={styles.button}>
              {buttonLabel}<span className="sr-only"> — {room.title}</span>
            </button>
          ) : (
            <a href={room.ctaLink || '#contact'} className={styles.button}>
              {buttonLabel}<span className="sr-only"> — {room.title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
