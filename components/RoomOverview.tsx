import type { RoomData } from "@/data/rooms";

interface RoomOverviewProps {
  room: RoomData;
}

const RoomOverview = ({ room }: RoomOverviewProps) => {
  return (
    <section className="border-b border-neutral-200 pb-6">
      <p className="mb-2 text-sm text-neutral-600">{room.categoryLabel}: residencia en {room.location}</p>
      <h1 className="text-2xl font-semibold leading-tight">{room.title}</h1>
      <p className="mt-4 text-sm leading-6 text-neutral-700">{room.metadata}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
        <span>★ {room.rating}</span>
        <span>Favorito entre huéspedes</span>
        <span>{room.reviews} Evaluaciones</span>
      </div>
    </section>
  );
};

export default RoomOverview;
