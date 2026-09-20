import type { NavigationItem } from "@/types/listing";
import MobileBottomNavItem from "./MobileBottomNavItem";

interface MobileBottomNavProps {
  items: NavigationItem[];
}

const MobileBottomNav = ({ items }: MobileBottomNavProps) => {
  return (
    <nav aria-label="Navegación principal" className="mt-8 flex border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur">
      {items.map((item, index) => <MobileBottomNavItem key={item.id} item={item} active={index === 0} />)}
    </nav>
  );
};

export default MobileBottomNav;
