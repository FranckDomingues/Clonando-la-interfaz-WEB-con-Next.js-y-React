"use client";

import { useEffect, useMemo, useState } from "react";
import CategoryNavigation from "@/components/CategoryNavigation";
import LoadingIndicator from "@/components/LoadingIndicator";
import HomeTopNav from "@/components/HomeTopNav";
import ListingSection from "@/components/ListingSection";
import MobileBottomNav from "@/components/MobileBottomNav";
import MobileSearch from "@/components/MobileSearch";
import PriceNotice from "@/components/PriceNotice";
import type { Category, Listing, NavigationItem } from "@/types/listing";

const categories: Category[] = [
  { id: "all", label: "Todo", icon: "⌂" },
  { id: "stays", label: "Alojamientos", icon: "⌂" },
  { id: "experiences", label: "Experiencias", icon: "✦" },
];

const popularListings: Listing[] = [
  { id: "orlando-1", image: "🏡", title: "Alojamiento en Orlando", price: "$244", pricingQualifier: "por noche", rating: "4.9", categoryId: "stays", guestFavorite: true },
  { id: "orlando-2", image: "🌴", title: "Casa cerca de Orlando", price: "$227", pricingQualifier: "por noche", rating: "4.8", categoryId: "stays" },
  { id: "orlando-3", image: "🏨", title: "Habitación en Orlando", price: "$198", pricingQualifier: "por noche", rating: "4.7", categoryId: "stays" },
];

const hotelListings: Listing[] = [
  { id: "hotel-1", image: "🏨", title: "Hotel en el centro", price: "$216", pricingQualifier: "por noche", rating: "4.8", categoryId: "stays", guestFavorite: true },
  { id: "hotel-2", image: "🌆", title: "Hotel excelente", price: "$238", pricingQualifier: "por noche", rating: "4.9", categoryId: "stays" },
  { id: "hotel-3", image: "🛏️", title: "Habitación de hotel", price: "$205", pricingQualifier: "por noche", rating: "4.6", categoryId: "stays" },
];

const navigationItems: NavigationItem[] = [
  { id: "explore", label: "Explorar", icon: "⌕" },
  { id: "favorites", label: "Favoritos", icon: "♡" },
  { id: "login", label: "Iniciar sesión", icon: "◯" },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 450);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const filteredListings = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return [...popularListings, ...hotelListings].filter((listing) => {
      const matchesCategory = selectedCategory === "all" || listing.categoryId === selectedCategory;
      const matchesSearch = !query || listing.title.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const popularResults = filteredListings.filter((listing) => popularListings.some((item) => item.id === listing.id));
  const hotelResults = filteredListings.filter((listing) => hotelListings.some((item) => item.id === listing.id));

  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-white px-5 pb-8 pt-5 text-neutral-900 md:px-10 md:pt-8">
      <HomeTopNav value={searchQuery} onChange={setSearchQuery} />
      <div className="md:hidden"><MobileSearch value={searchQuery} onChange={setSearchQuery} /></div>
      <CategoryNavigation categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      {isLoading ? <LoadingIndicator /> : selectedCategory === "experiences" ? <p role="status" className="py-12 text-center text-sm text-neutral-500">No hay experiencias disponibles todavía.</p> : filteredListings.length === 0 ? <p role="status" className="py-12 text-center text-sm text-neutral-500">No encontramos alojamientos que coincidan con tu búsqueda.</p> : <>
        {popularResults.length > 0 ? <ListingSection title="Alojamientos populares en Orlando" listings={popularResults} /> : null}
        {hotelResults.length > 0 ? <ListingSection title="Hoteles excelentes para tu próximo viaje" description="Además, te llevarás crédito de Airbnb por tu estancia en uno de los hoteles destacados." listings={hotelResults} /> : null}
      </>}
      <PriceNotice />
      <MobileBottomNav items={navigationItems} />
    </main>
  );
};

export default Home;
