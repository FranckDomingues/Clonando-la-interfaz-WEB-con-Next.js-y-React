import Link from "next/link";

const CatalogHeader = () => {
  return (
    <header className="flex items-center gap-3 border-b border-neutral-100 bg-white px-4 py-3">
      <Link href="/" aria-label="Volver a Home" className="text-2xl leading-none">←</Link>
      <button type="button" className="min-w-0 flex-1 rounded-full border border-neutral-200 px-4 py-2 text-left shadow-sm">
        <span className="block truncate text-sm font-semibold">Homes nearby</span>
        <span className="block truncate text-xs text-neutral-500">Any week · Add guests</span>
      </button>
      <button type="button" aria-label="Filtrar resultados" className="rounded-full border border-neutral-200 p-2 text-lg">☷</button>
    </header>
  );
};

export default CatalogHeader;