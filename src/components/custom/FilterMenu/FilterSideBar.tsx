import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import { CategoryType } from "@/types/CategoryType";

interface FilterSidebarProps {
	priceRange: [number, number];
	onPriceChange: (value: number, type: "min" | "max") => void;
	categories: CategoryType[] | undefined;
	selectedCategories: string[];
	onCategoryChange: (categoryId: string[]) => void;
}

const FilterSidebar = ({
	priceRange,
	onPriceChange,
	categories,
	selectedCategories,
	onCategoryChange,
}: FilterSidebarProps) => {
	return (
		<div
			className={`w-72 bg-gray-50 p-6 h-screen fixed left-0 top-0 overflow-y-auto border-r font-poppins`}
		>
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-2xl font-semibold bg-gradient-to-r from-filter-primary to-filter-secondary bg-clip-text text-text1">
					Find your product
				</h2>
			</div>

			<div className="space-y-8">
				<div className="pb-6">
					<PriceFilter
						min={priceRange[0]}
						max={priceRange[1]}
						onChange={onPriceChange}
					/>
				</div>

				<div className="py-6 border-t border-filter-primary/10">
					<CategoryFilter
						categories={categories}
						selectedCategories={selectedCategories}
						onCategoryChange={onCategoryChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default FilterSidebar;
