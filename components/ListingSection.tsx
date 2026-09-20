import type { Listing } from "@/types/listing";
import ListingCarousel from "./ListingCarousel";
import SectionHeader from "./SectionHeader";

interface ListingSectionProps {
  title: string;
  description?: string;
  listings: Listing[];
}

const ListingSection = ({ title, description, listings }: ListingSectionProps) => {
  return (
    <section className="min-w-0 pt-8">
      <SectionHeader title={title} description={description} />
      <ListingCarousel listings={listings} />
    </section>
  );
};

export default ListingSection;
