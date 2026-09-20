"use client";

import type { Category } from "@/types/listing";
import CategoryItem from "./CategoryItem";

interface CategoryNavigationProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryNavigation = ({ categories, selectedCategory, onSelectCategory }: CategoryNavigationProps) => {
  return (
    <nav aria-label="Categorías" className="flex gap-5 overflow-x-auto pt-5">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          active={category.id === selectedCategory}
          onSelect={() => onSelectCategory(category.id)}
        />
      ))}
    </nav>
  );
};

export default CategoryNavigation;
