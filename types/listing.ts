export interface Listing {
  id: string;
  image: string;
  title: string;
  price: string;
  priceValue?: number;
  pricingQualifier: string;
  rating: string;
  categoryId: string;
  reviewCount?: number;
  metadata?: string;
  guestFavorite?: boolean;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
}
