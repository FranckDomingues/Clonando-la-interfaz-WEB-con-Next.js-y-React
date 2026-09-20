const MobileSearch = () => {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-4 text-left shadow-sm"
    >
      <span aria-hidden="true" className="text-lg">⌕</span>
      <span className="text-sm font-medium text-neutral-700">Comienza a explorar</span>
    </button>
  );
};

export default MobileSearch;
