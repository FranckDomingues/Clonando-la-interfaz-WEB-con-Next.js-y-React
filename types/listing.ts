export interface Listing {
  id: string;
  image: string;
  title: string;
  price: string;
  pricingQualifier: string;
  rating: string;
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
