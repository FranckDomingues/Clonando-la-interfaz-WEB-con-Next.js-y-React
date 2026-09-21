export interface RoomData {
  id: string;
  title: string;
  location: string;
  metadata: string;
  rating: string;
  reviews: number;
  host: string;
  hostMetadata: string;
  amenities: string[];
  gallery: string[];
  originalPrice: string;
  currentPrice: string;
  stayText: string;
  categoryLabel: string;
}

const primaryRoom: RoomData = {
  id: "orlando-1",
  title: "15 recámaras / 16.5 baños / Sonoma Resort (4061 Sb)",
  location: "Kissimmee, Florida, Estados Unidos",
  metadata: "Más de 16 huéspedes · 15 habitaciones · 14 camas · 16.5 baños",
  rating: "4.83",
  reviews: 6,
  host: "Rodrigo (Master Vacation Homes)",
  hostMetadata: "SuperAnfitrión · 10 años de experiencia",
  amenities: ["Frente al agua", "Cocina", "Wifi", "Área para trabajar", "Alberca"],
  gallery: ["🏡", "🌴", "🛋️"],
  originalPrice: "$3,347 USD",
  currentPrice: "$3,096 USD",
  stayText: "Por 2 noches · 2–4 de oct",
  categoryLabel: "Alojamiento entero",
};

const roomVariations: RoomData[] = [
  { ...primaryRoom, id: "orlando-2", title: "Casa cerca de Orlando", rating: "4.8", reviews: 12, gallery: ["🌴", "🏠", "🌅"] },
  { ...primaryRoom, id: "orlando-3", title: "Habitación en Orlando", rating: "4.7", reviews: 8, gallery: ["🏨", "🛏️", "🌆"] },
  { ...primaryRoom, id: "hotel-1", title: "Hotel en el centro", rating: "4.8", reviews: 24, gallery: ["🏨", "🛋️", "🌇"] },
  { ...primaryRoom, id: "hotel-2", title: "Hotel excelente", rating: "4.9", reviews: 31, gallery: ["🌆", "🛏️", "🌴"] },
  { ...primaryRoom, id: "hotel-3", title: "Habitación de hotel", rating: "4.6", reviews: 15, gallery: ["🛏️", "🏨", "🪟"] },
  { ...primaryRoom, id: "high-springs-1", title: "Home in High Springs", rating: "4.98", reviews: 206, gallery: ["🏡", "🌳", "🛋️"] },
  { ...primaryRoom, id: "orlando-cottage-1", title: "Cottage near Orlando", rating: "4.9", reviews: 128, gallery: ["🌴", "🏠", "🌿"] },
  { ...primaryRoom, id: "lake-house-1", title: "Lake house retreat", rating: "4.87", reviews: 94, gallery: ["🏞️", "🛶", "🌅"] },
  { ...primaryRoom, id: "garden-home-1", title: "Garden home", rating: "4.92", reviews: 76, gallery: ["🌿", "🏡", "🌸"] },
  { ...primaryRoom, id: "city-loft-1", title: "City loft", rating: "4.8", reviews: 61, gallery: ["🌆", "🛋️", "🪟"] },
  { ...primaryRoom, id: "cozy-room-1", title: "Cozy room", rating: "4.75", reviews: 42, gallery: ["🛏️", "🕯️", "🏠"] },
];

export const rooms: RoomData[] = [primaryRoom, ...roomVariations];

export const findRoom = (id: string) => rooms.find((room) => room.id === id);
