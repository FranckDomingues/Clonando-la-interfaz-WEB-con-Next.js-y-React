"use client";

import { useState } from "react";

interface RoomGalleryProps {
  images: string[];
  title: string;
}

const RoomGallery = ({ images, title }: RoomGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const previous = () => setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const next = () => setActiveIndex((index) => (index + 1) % images.length);

  return (
    <section aria-label={`${title}: galería de imágenes`} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-100 via-orange-100 to-sky-100">
      <div className="flex aspect-[4/3] items-center justify-center text-7xl" aria-live="polite">
        <span aria-hidden="true">{images[activeIndex]}</span>
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
        <button type="button" onClick={previous} aria-label="Imagen anterior" className="rounded-full bg-white/90 px-3 py-2 text-sm shadow">←</button>
        <span className="rounded-full bg-black/60 px-3 py-1 text-sm text-white">{activeIndex + 1} / {images.length}</span>
        <button type="button" onClick={next} aria-label="Imagen siguiente" className="rounded-full bg-white/90 px-3 py-2 text-sm shadow">→</button>
      </div>
    </section>
  );
};

export default RoomGallery;
