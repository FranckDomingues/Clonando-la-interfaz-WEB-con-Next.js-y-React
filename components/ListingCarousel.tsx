import type { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";

interface ListingCarouselProps {
  listings: Listing[];
}

const ListingCarousel = ({ listings }: ListingCarouselProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 pt-5 md:grid-cols-3">
      {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
    </div>
  );
};

export default ListingCarousel;
