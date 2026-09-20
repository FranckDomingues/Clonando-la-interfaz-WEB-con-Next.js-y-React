"use client";

import { useMemo, useState } from "react";
import CatalogControls from "@/components/CatalogControls";
import CatalogHeader from "@/components/CatalogHeader";
import ListingCard from "@/components/ListingCard";
import MapPlaceholder from "@/components/MapPlaceholder";
import type { Listing } from "@/types/listing";

const catalogListings: Listing[] = [
  { id: "high-springs-1", image: "🏡", title: "Home in High Springs", price: "$245", priceValue: 245, pricingQualifier: "night", rating: "4.98", reviewCount: 206, categoryId: "stays", guestFavorite: true, metadata: "Home in High Springs" },
  { id: "orlando-cottage-1", image: "🌴", title: "Cottage near Orlando", price: "$180", priceValue: 180, pricingQualifier: "night", rating: "4.9", reviewCount: 128, categoryId: "stays", metadata: "Quiet place near local sights" },
  { id: "lake-house-1", image: "🏞️", title: "Lake house retreat", price: "$320", priceValue: 320, pricingQualifier: "night", rating: "4.87", reviewCount: 94, categoryId: "stays", metadata: "Lakefront home with a peaceful view" },
  { id: "garden-home-1", image: "🌿", title: "Garden home", price: "$210", priceValue: 210, pricingQualifier: "night", rating: "4.92", reviewCount: 76, categoryId: "stays", metadata: "Comfortable home for your next stay" },
  { id: "city-loft-1", image: "🌆", title: "City loft", price: "$275", priceValue: 275, pricingQualifier: "night", rating: "4.8", reviewCount: 61, categoryId: "stays", metadata: "Central location close to restaurants" },
  { id: "cozy-room-1", image: "🛏️", title: "Cozy room", price: "$155", priceValue: 155, pricingQualifier: "night", rating: "4.75", reviewCount: 42, categoryId: "stays", metadata: "A simple room for a short visit" },
];

const CatalogPage = () => {
  const [sort, setSort] = useState("recommended");
  const sortedListings = useMemo(() => {
    if (sort === "recommended") return catalogListings;
    return [...catalogListings].sort((a, b) => sort === "low" ? (a.priceValue ?? 0) - (b.priceValue ?? 0) : (b.priceValue ?? 0) - (a.priceValue ?? 0));
  }, [sort]);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <CatalogHeader />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-5 md:grid md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] md:items-start md:gap-8 md:px-8">
        <section className="order-1 min-w-0 rounded-t-3xl bg-white md:order-1">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-neutral-300" />
          <div className="flex items-center gap-2 border-b border-neutral-100 py-3 text-sm"><span aria-hidden="true">🏷</span><span>Prices include all fees</span></div>
          <CatalogControls count={sortedListings.length} sort={sort} onSortChange={setSort} />
          <div className="grid gap-8">
            {sortedListings.map((listing) => <ListingCard key={listing.id} listing={listing} variant="catalog" />)}
          </div>
        </section>
        <div className="order-2"><MapPlaceholder /></div>
      </div>
    </main>
  );
};

export default CatalogPage;