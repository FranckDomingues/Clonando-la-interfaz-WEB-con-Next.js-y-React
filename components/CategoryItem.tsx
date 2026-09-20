"use client";

import type { Category } from "@/types/listing";

interface CategoryItemProps {
  category: Category;
  active?: boolean;
  onSelect: () => void;
}

const CategoryItem = ({ category, active = false, onSelect }: CategoryItemProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex shrink-0 flex-col items-center gap-2 border-b-2 px-2 pb-3 text-xs ${
        active ? "border-neutral-900 font-semibold text-neutral-900" : "border-transparent text-neutral-500"
      }`}
    >
      <span aria-hidden="true" className="text-xl">{category.icon}</span>
      <span>{category.label}</span>
    </button>
  );
};

export default CategoryItem;
