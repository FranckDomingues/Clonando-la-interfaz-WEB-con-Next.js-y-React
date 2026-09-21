interface AmenitiesSectionProps {
  amenities: string[];
}

const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
  return (
    <section className="border-b border-neutral-200 py-6">
      <h2 className="text-xl font-semibold">Lo que ofrece este lugar</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {amenities.map((amenity) => <li key={amenity} className="flex items-center gap-3 text-sm"><span aria-hidden="true">✓</span>{amenity}</li>)}
      </ul>
      <button type="button" className="mt-6 rounded-lg border border-neutral-800 px-4 py-3 text-sm font-semibold">Mostrar las 24 amenidades</button>
      <h2 className="mt-8 text-xl font-semibold">Dónde vas a estar</h2>
      <p className="mt-2 text-sm text-neutral-600">La ubicación exacta se proporciona después de reservar.</p>
    </section>
  );
};

export default AmenitiesSection;
