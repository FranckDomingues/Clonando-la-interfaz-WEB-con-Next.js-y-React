const HostProfileSection = () => {
  return (
    <section className="border-b border-neutral-200 py-6">
      <h2 className="text-xl font-semibold">Conoce a tu anfitrión</h2>
      <div className="mt-4 rounded-2xl bg-neutral-50 p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-3xl" aria-hidden="true">👤</div>
          <div><h3 className="font-semibold">Rodrigo (Master Vacation Home...)</h3><p className="mt-1 text-sm text-neutral-600">✓ Superanfitrión</p></div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-neutral-200 py-4 text-center text-xs"><span><strong className="block text-sm">10,000+</strong>Evaluaciones</span><span><strong className="block text-sm">4.73</strong>Calificación</span><span><strong className="block text-sm">10</strong>Años de experiencia</span></div>
        <div className="space-y-3 pt-4 text-sm"><p>Mi trabajo: Alojamientos vacacionales principales</p><p>Mi habilidad menos útil: Puedo escribir al revés y al revés.</p><p>¡Hola, me llamo Rodrigo! Soy el propietario de Master Vacation Homes...</p></div>
      </div>
    </section>
  );
};

export default HostProfileSection;
