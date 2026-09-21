"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AmenitiesSection from "@/components/AmenitiesSection";
import BookingPanel from "@/components/BookingPanel";
import HostProfileSection from "@/components/HostProfileSection";
import HostSummary from "@/components/HostSummary";
import LoadingIndicator from "@/components/LoadingIndicator";
import ReviewsSection from "@/components/ReviewsSection";
import RoomGallery from "@/components/RoomGallery";
import RoomOverview from "@/components/RoomOverview";
import { findRoom, type RoomData } from "@/data/rooms";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

const RoomDetailPage = ({ params }: RoomPageProps) => {
  const [room, setRoom] = useState<RoomData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: number | undefined;

    params.then(({ id }) => {
      timeoutId = window.setTimeout(() => {
        if (isMounted) {
          setRoom(findRoom(id) ?? null);
          setIsLoading(false);
        }
      }, 300);
    });

    return () => {
      isMounted = false;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [params]);

  if (isLoading) return <LoadingIndicator />;
  if (!room) return <main className="mx-auto max-w-2xl px-5 py-12 text-center"><h1 className="text-2xl font-semibold">No encontramos este alojamiento</h1><Link href="/catalog" className="mt-5 inline-block font-semibold underline">Volver al catálogo</Link></main>;

  return (
    <main className="mx-auto min-h-screen max-w-6xl overflow-x-hidden bg-white px-5 pb-36 pt-5 text-neutral-900 md:px-8 md:pb-10">
      <Link href="/catalog" className="mb-5 inline-block text-sm font-semibold underline">← Volver al catálogo</Link>
      <RoomGallery images={room.gallery} title={room.title} />
      <div className="mt-6 md:grid md:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] md:gap-10">
        <div>
          <RoomOverview room={room} />
          <div className="mt-6 md:hidden"><BookingPanel room={room} /></div>
          <HostSummary host={room.host} hostMetadata={room.hostMetadata} />
          <section className="border-b border-neutral-200 py-6"><h2 className="text-xl font-semibold">En Kissimmee, cerca de Disney y SeaWorld</h2><p className="mt-2 text-sm text-neutral-600">Disfruta de una ubicación conveniente para tu próxima estancia.</p></section>
          <AmenitiesSection amenities={room.amenities} />
          <ReviewsSection rating={room.rating} />
          <HostProfileSection />
        </div>
        <div className="mt-6 hidden md:block"><BookingPanel room={room} /></div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-neutral-200 bg-white px-4 py-2 md:hidden"><BookingPanel room={room} compact /></div>
    </main>
  );
};

export default RoomDetailPage;
