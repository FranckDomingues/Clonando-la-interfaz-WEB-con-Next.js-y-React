import type { NavigationItem } from "@/types/listing";

interface MobileBottomNavItemProps {
  item: NavigationItem;
  active?: boolean;
}

const MobileBottomNavItem = ({ item, active = false }: MobileBottomNavItemProps) => {
  return (
    <button type="button" className={`flex flex-1 flex-col items-center gap-1 text-xs ${active ? "font-semibold text-neutral-900" : "text-neutral-500"}`}>
      <span aria-hidden="true" className="text-xl">{item.icon}</span>
      <span>{item.label}</span>
    </button>
  );
};

export default MobileBottomNavItem;
