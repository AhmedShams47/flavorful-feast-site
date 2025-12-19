import { MenuCategory } from "@/data/menuData";

interface MenuCategoryTabsProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const MenuCategoryTabs = ({ categories, activeCategory, onCategoryChange }: MenuCategoryTabsProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`menu-tab ${
              activeCategory === category.id
                ? "menu-tab-active"
                : "bg-card text-foreground hover:bg-card/80 border border-border/50"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryTabs;
