import type { Category } from "@/types/listing";
import CategoryItem from "./CategoryItem";

interface CategoryNavigationProps {
  categories: Category[];
}

const CategoryNavigation = ({ categories }: CategoryNavigationProps) => {
  return (
    <nav aria-label="Categorías" className="flex gap-5 overflow-x-auto pt-5">
      {categories.map((category, index) => (
        <CategoryItem key={category.id} category={category} active={index === 0} />
      ))}
    </nav>
  );
};

export default CategoryNavigation;
