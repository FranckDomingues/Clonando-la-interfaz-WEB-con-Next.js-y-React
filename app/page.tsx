import CategoryNavigation from "@/components/CategoryNavigation";
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
  { id: "orlando-1", image: "🏡", title: "Alojamiento en Orlando", price: "$244", pricingQualifier: "por 2 noches", rating: "4.9", guestFavorite: true },
  { id: "orlando-2", image: "🌴", title: "Casa cerca de Orlando", price: "$227", pricingQualifier: "por 2 noches", rating: "4.8" },
  { id: "orlando-3", image: "🏨", title: "Habitación en Orlando", price: "$198", pricingQualifier: "por 2 noches", rating: "4.7" },
];

const hotelListings: Listing[] = [
  { id: "hotel-1", image: "🏨", title: "Hotel en el centro", price: "$216", pricingQualifier: "por 2 noches", rating: "4.8", guestFavorite: true },
  { id: "hotel-2", image: "🌆", title: "Hotel excelente", price: "$238", pricingQualifier: "por 2 noches", rating: "4.9" },
  { id: "hotel-3", image: "🛏️", title: "Habitación de hotel", price: "$205", pricingQualifier: "por 2 noches", rating: "4.6" },
];

const navigationItems: NavigationItem[] = [
  { id: "explore", label: "Explorar", icon: "⌕" },
  { id: "favorites", label: "Favoritos", icon: "♡" },
  { id: "login", label: "Iniciar sesión", icon: "◯" },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-white px-5 pb-28 pt-5 text-neutral-900">
      <MobileSearch />
      <CategoryNavigation categories={categories} />
      <ListingSection title="Alojamientos populares en Orlando" listings={popularListings} />
      <ListingSection title="Hoteles excelentes para tu próximo viaje" description="Además, te llevarás crédito de Airbnb por tu estancia en uno de los hoteles destacados." listings={hotelListings} />
      <PriceNotice />
      <MobileBottomNav items={navigationItems} />
    </main>
  );
};

export default Home;
