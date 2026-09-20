"use client";

interface MobileSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const MobileSearch = ({ value, onChange }: MobileSearchProps) => {
  return (
    <label
      className="flex w-full items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-4 text-left shadow-sm"
    >
      <span aria-hidden="true" className="text-lg">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Comienza a explorar"
        aria-label="Buscar alojamientos"
        className="min-w-0 flex-1 bg-transparent text-sm font-medium text-neutral-700 outline-none placeholder:text-neutral-700"
      />
    </label>
  );
};

export default MobileSearch;
