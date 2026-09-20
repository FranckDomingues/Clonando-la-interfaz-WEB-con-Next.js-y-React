const markers = ["$800", "$860", "$1,721", "$1,349", "$1,045", "$1,159"];

const MapPlaceholder = () => {
  return (
    <section aria-label="Mapa de resultados" className="relative min-h-64 overflow-hidden rounded-2xl bg-emerald-50 p-5">
      <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:linear-gradient(25deg,transparent_45%,white_46%,white_48%,transparent_49%),linear-gradient(115deg,transparent_45%,white_46%,white_48%,transparent_49%)] [background-size:90px_70px]" />
      <p className="relative text-xs font-medium uppercase tracking-widest text-emerald-800">Map placeholder</p>
      <div className="relative mt-8 grid grid-cols-3 gap-6">
        {markers.map((marker) => <span key={marker} className="w-fit rounded-full bg-white px-3 py-2 text-xs font-semibold shadow-sm">{marker}</span>)}
      </div>
    </section>
  );
};

export default MapPlaceholder;