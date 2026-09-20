import type { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";

interface ListingCarouselProps {
  listings: Listing[];
}

const ListingCarousel = ({ listings }: ListingCarouselProps) => {
  return (
    <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 pt-5">
      {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
    </div>
  );
};

export default ListingCarousel;
