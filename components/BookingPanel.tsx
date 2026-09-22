"use client";

import { useState } from "react";
import type { RoomData } from "@/data/rooms";

interface BookingPanelProps {
  room: RoomData;
  compact?: boolean;
}

const BookingPanel = ({ room, compact = false }: BookingPanelProps) => {
  const [guests, setGuests] = useState(1);

  if (compact) {
    return (
      <section className="flex items-center justify-between gap-3 bg-white text-sm">
        <div className="min-w-0">
          <p><span className="mr-1 text-neutral-500 line-through">{room.originalPrice}</span><strong>{room.nightlyPrice}</strong> por noche</p>
          <p className="truncate text-xs text-neutral-600">{room.currentPrice} · {room.stayText} · Cancelación gratuita</p>
        </div>
        <button type="button" className="shrink-0 rounded-xl bg-rose-600 px-4 py-3 font-semibold text-white">Reservar</button>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg md:sticky md:top-6">
      <div className="flex items-baseline gap-2"><span className="text-sm text-neutral-500 line-through">{room.originalPrice}</span><strong className="text-xl">{room.nightlyPrice}</strong><span className="text-sm text-neutral-600">por noche</span></div>
      <p className="mt-1 text-sm text-neutral-600">{room.currentPrice} · {room.stayText}</p>
      <p className="mt-4 text-sm font-medium">Cancelación gratuita</p>
      <div className="mt-5 flex items-center justify-between rounded-xl border border-neutral-300 p-3"><span className="text-sm font-medium">Huéspedes</span><div className="flex items-center gap-3"><button type="button" onClick={() => setGuests((count) => Math.max(1, count - 1))} aria-label="Reducir huéspedes" className="h-8 w-8 rounded-full border">−</button><span aria-live="polite">{guests}</span><button type="button" onClick={() => setGuests((count) => count + 1)} aria-label="Aumentar huéspedes" className="h-8 w-8 rounded-full border">+</button></div></div>
      <button type="button" className="mt-5 w-full rounded-xl bg-rose-600 px-4 py-3 font-semibold text-white">Reservar</button>
    </section>
  );
};

export default BookingPanel;
