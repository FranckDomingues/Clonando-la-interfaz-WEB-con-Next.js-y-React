interface ReviewsSectionProps {
  rating: string;
}

const ReviewsSection = ({ rating }: ReviewsSectionProps) => {
  return (
    <section className="border-b border-neutral-200 py-6">
      <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <p className="text-5xl font-semibold">{rating}</p>
        <div>
          <h2 className="text-xl font-semibold">Favorito entre huéspedes</h2>
          <p className="mt-1 text-sm leading-5 text-neutral-600">Una de las favoritas de Airbnb según las calificaciones, las evaluaciones y la confiabilidad.</p>
        </div>
      </div>
      <button type="button" className="mt-4 text-sm font-semibold underline">Cómo funcionan las evaluaciones</button>
      <h3 className="mt-8 font-semibold">Las evaluaciones de los huéspedes mencionan</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {['Familiar 4', 'Hospitalidad 4'].map((topic) => <span key={topic} className="rounded-full border border-neutral-300 px-3 py-2 text-sm">{topic}</span>)}
      </div>
    </section>
  );
};

export default ReviewsSection;
