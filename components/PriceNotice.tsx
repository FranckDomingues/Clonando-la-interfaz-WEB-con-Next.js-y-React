const PriceNotice = () => {
  return (
    <div className="mx-auto mt-8 flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-neutral-900 px-4 py-3 text-xs font-medium text-white shadow-lg">
      <span aria-hidden="true">♢</span>
      <span>Los precios incluyen todas las tarifas</span>
    </div>
  );
};

export default PriceNotice;
