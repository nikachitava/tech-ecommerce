import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";

interface FilterSidebarProps {
	isOpen: boolean;
	onClose: () => void;
	priceRange: [number, number];
	onPriceChange: (value: [number, number]) => void;
	categories: Array<{ id: string; name: string; count: number }>;
	selectedCategories: string[];
	onCategoryChange: (categoryId: string) => void;
}

const FilterSidebar = ({
	isOpen,
	onClose,
	priceRange,
	onPriceChange,
	categories,
	selectedCategories,
	onCategoryChange,
}: FilterSidebarProps) => {
	return (
		<>
			{/* Overlay with blur effect */}
			<div
				className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				} z-40`}
				onClick={onClose}
			/>

			{/* Sidebar with glass morphism effect */}
			<div
				className={`fixed inset-y-0 left-0 w-80 bg-white/90 backdrop-blur-md p-6 shadow-2xl transform transition-transform duration-300 ease-out ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-filter-primary/20 scrollbar-track-transparent font-poppins`}
			>
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl font-semibold bg-gradient-to-r from-filter-primary to-filter-secondary bg-clip-text text-text1">
						Filters
					</h2>
					<Button
						variant="ghost"
						size="icon"
						onClick={onClose}
						className="hover:bg-filter-primary/10 rounded-full transition-colors duration-200"
					>
						<X className="h-5 w-5 text-filter-primary" />
					</Button>
				</div>

				<div className="space-y-8">
					<div className="pb-6">
						<PriceFilter
							min={0}
							max={1000}
							value={priceRange}
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
		</>
	);
};

export default FilterSidebar;
