import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryType } from "@/types/CategoryType";

interface CategoryFilterProps {
	categories: CategoryType[] | undefined;
	selectedCategories: string[];
	onCategoryChange: (categoryId: string[]) => void;
}

const CategoryFilter = ({
	categories,
	selectedCategories,
	onCategoryChange,
}: CategoryFilterProps) => {
	const handleCategoryChange = (categoryId: string) => {
		if (selectedCategories.includes(categoryId)) {
			onCategoryChange(
				selectedCategories.filter((id) => id !== categoryId)
			);
		} else {
			onCategoryChange([...selectedCategories, categoryId]);
		}
	};
	return (
		<div className="space-y-4">
			<h3 className="text-lg font-medium bg-gradient-to-r from-filter-primary to-filter-secondary bg-clip-text text-text1">
				Categories
			</h3>
			<div>
				{categories?.map((category) => (
					<div
						key={category._id}
						className="flex items-center space-x-3 group cursor-pointer hover:bg-filter-primary/5 rounded-lg p-2 transition-colors duration-200"
						onClick={() => handleCategoryChange(category._id)}
					>
						<Checkbox
							id={category._id}
							checked={selectedCategories.includes(category._id)}
						/>
						<Label
							htmlFor={category._id}
							className="text-sm text-gray-700 group-hover:text-filter-primary transition-colors flex-1 cursor-pointer flex items-center justify-between"
						>
							<span>{category.name}</span>
						</Label>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryFilter;
