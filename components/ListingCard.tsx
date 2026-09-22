"use client";

import Link from "next/link";
import type { Listing } from "@/types/listing";

interface ListingCardProps {
  listing: Listing;
  variant?: "home" | "catalog";
}

const ListingCard = ({ listing, variant = "home" }: ListingCardProps) => {
  return (
    <article className="relative w-full">
      <Link href={`/rooms/${listing.id}`} className="block">
        <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 via-orange-100 to-sky-100 text-5xl ${variant === "catalog" ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
          <span aria-hidden="true">{listing.image}</span>
          {listing.guestFavorite ? <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-800">Favorito entre huéspedes</span> : null}
        </div>
        <div className="pt-3 text-sm text-neutral-900">
          <p className="font-medium">{listing.title}</p>
          {variant === "catalog" && listing.metadata ? <p className="mt-1 text-neutral-600">{listing.metadata}</p> : null}
          <p className="mt-1"><span className="font-semibold">{listing.price}</span> {listing.pricingQualifier}</p>
          <p className="mt-1 text-neutral-600">★ {listing.rating}{listing.reviewCount ? ` (${listing.reviewCount})` : ""}</p>
        </div>
      </Link>
      <button type="button" aria-label={`Añadir ${listing.title} a favoritos`} className="absolute right-3 top-3 text-2xl text-white drop-shadow">♡</button>
    </article>
  );
};

export default ListingCard;
