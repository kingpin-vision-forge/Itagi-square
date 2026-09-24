'use client';

import { useRef, useState, type KeyboardEvent, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RoomData } from '@/types/room';
import { roomsData } from '@/data/rooms';
import { RoomCard } from '@/components/molecules/room-card';
import { cn } from '@/lib/utils';
import styles from './rooms-suites-section.module.css';

export interface RoomsSuitesSectionProps {
  rooms?: RoomData[];
  className?: string;
  onExploreRoom?: (room: RoomData) => void;
}

export function RoomsSuitesSection({
  rooms = roomsData,
  className,
  onExploreRoom,
}: RoomsSuitesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const currentIndex = rooms.length ? activeIndex % rooms.length : 0;
  const orderedRooms = [...rooms.slice(currentIndex), ...rooms.slice(0, currentIndex)];

  const move = (direction: number) => {
    if (rooms.length < 2) return;
    setActiveIndex((index) => (index + direction + rooms.length) % rooms.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || !event.changedTouches[0]) return;
    const touch = event.changedTouches[0];
    const dx = start.x - touch.clientX;
    const dy = start.y - touch.clientY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 1 : -1);
  };

  if (!rooms.length) return null;

  return (
    <section id="rooms" aria-labelledby="rooms-heading" className={cn(styles.section, className)}>
      <div className={styles.intro}>
        <h2 id="rooms-heading" className={styles.heading}>ROOMS AND SUITES</h2>
        <p className={styles.subtitle}>
          Thoughtfully designed spaces where contemporary comfort meets effortless relaxation.
        </p>
      </div>

      <div
        className={styles.carousel}
        role="region"
        aria-roledescription="carousel"
        aria-label="Rooms and suites"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        <button
          type="button"
          className={cn(styles.arrow, styles.previous)}
          aria-label="Previous room"
          aria-controls="room-cards"
          disabled={rooms.length < 2}
          onClick={() => move(-1)}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <div id="room-cards" className={styles.cards}>
          {orderedRooms.map((room) => (
            <RoomCard key={room.id} room={room} onExplore={onExploreRoom} className={styles.slide} />
          ))}
        </div>

        <button
          type="button"
          className={cn(styles.arrow, styles.next)}
          aria-label="Next room"
          aria-controls="room-cards"
          disabled={rooms.length < 2}
          onClick={() => move(1)}
        >
          <ChevronRight aria-hidden="true" />
        </button>
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {rooms[currentIndex].title}, room {currentIndex + 1} of {rooms.length}
        </p>
      </div>
    </section>
  );
}
