import type { Listing } from "@/types/listing";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <article className="w-[72vw] max-w-[280px] shrink-0">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 via-orange-100 to-sky-100 text-5xl">
        <span aria-hidden="true">{listing.image}</span>
        {listing.guestFavorite ? <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-800">Favorito entre huéspedes</span> : null}
        <button type="button" aria-label={`Añadir ${listing.title} a favoritos`} className="absolute right-3 top-3 text-2xl text-white drop-shadow">♡</button>
      </div>
      <div className="pt-3 text-sm text-neutral-900">
        <p className="font-medium">{listing.title}</p>
        <p className="mt-1"><span className="font-semibold">{listing.price}</span> {listing.pricingQualifier}</p>
        <p className="mt-1 text-neutral-600">★ {listing.rating}</p>
      </div>
    </article>
  );
};

export default ListingCard;
