interface HomeTopNavProps {
  value: string;
  onChange: (value: string) => void;
}

const HomeTopNav = ({ value, onChange }: HomeTopNavProps) => (
  <header className="hidden items-center justify-between gap-6 border-b border-neutral-200 pb-5 md:flex">
    <div className="text-xl font-bold tracking-tight text-rose-600" aria-label="Airbnb inspirado">airbnb</div>
    <label className="flex max-w-md flex-1 items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 shadow-sm">
      <span aria-hidden="true">⌕</span>
      <span className="sr-only">Buscar alojamientos</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Comienza a explorar" className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
    </label>
    <div className="flex items-center gap-3" aria-label="Menú de usuario">
      <button type="button" className="rounded-full border border-neutral-300 px-3 py-2 text-sm">Anunciar</button>
      <button type="button" className="rounded-full border border-neutral-300 px-3 py-2" aria-label="Abrir menú de usuario">☰ ◯</button>
    </div>
  </header>
);

export default HomeTopNav;