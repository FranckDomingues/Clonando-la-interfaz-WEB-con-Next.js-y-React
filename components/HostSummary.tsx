import type { RoomData } from "@/data/rooms";

const HostSummary = ({ host, hostMetadata }: Pick<RoomData, "host" | "hostMetadata">) => {
  return (
    <section className="flex items-center gap-4 border-b border-neutral-200 py-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-2xl" aria-hidden="true">👤</div>
      <div>
        <h2 className="font-semibold">Anfitrión: {host}</h2>
        <p className="mt-1 text-sm text-neutral-600">{hostMetadata}</p>
      </div>
    </section>
  );
};

export default HostSummary;
