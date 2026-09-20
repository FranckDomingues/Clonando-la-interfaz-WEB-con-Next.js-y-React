"use client";

interface CatalogControlsProps {
  count: number;
  sort: string;
  onSortChange: (value: string) => void;
}

const CatalogControls = ({ count, sort, onSortChange }: CatalogControlsProps) => {
  return (
    <div className="flex items-center justify-between gap-3 py-4">
      <p className="text-sm font-medium">{count} stays</p>
      <label className="flex items-center gap-2 text-sm text-neutral-600">
        <span className="sr-only">Ordenar resultados</span>
        <select value={sort} onChange={(event) => onSortChange(event.target.value)} className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800">
          <option value="recommended">Recommended</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </label>
    </div>
  );
};

export default CatalogControls;