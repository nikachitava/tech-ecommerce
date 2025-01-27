import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import FilterSidebar from "@/components/custom/FilterMenu/FilterSideBar";
import { useGetProductQueries } from "@/api/productQueries";
import ProductCard from "@/components/custom/ProductCard";
import { Link } from "react-router-dom";
import Loader from "@/components/custom/Loader";
import { useGetCategoriesQuery } from "@/api/categoryQueries";
import { useFilter } from "@/states/filterStore";

const FilterProducts = () => {
	const { priceRange, setPriceRange } = useFilter((state) => state);

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	const handleCategoryChange = (categoryId: string) => {
		setSelectedCategories((prev) =>
			prev.includes(categoryId)
				? prev.filter((id) => id !== categoryId)
				: [...prev, categoryId]
		);
	};

	const categories = useGetCategoriesQuery();
	const { data, isLoading } = useGetProductQueries();

	if (isLoading) return <Loader />;

	return (
		<div className="min-h-screen bg-gradient-to-br from-white to-filter-light/30">
			<div className="container mx-auto px-4 py-8">
				<h1>Min Price ${priceRange[0]}</h1>
				<h1>Max Price ${priceRange[1]}</h1>
				<div className="flex justify-between items-center mb-8">
					<Button
						onClick={() => setIsFilterOpen(true)}
						variant="outline"
						className="flex items-center gap-2 border-filter-primary/20 hover:bg-filter-primary/5 hover:border-filter-primary transition-colors duration-200"
					>
						<Filter className="h-4 w-4 text-filter-primary" />
						<span className="text-filter-text">Filters</span>
					</Button>
				</div>

				<FilterSidebar
					isOpen={isFilterOpen}
					onClose={() => setIsFilterOpen(false)}
					priceRange={priceRange}
					onPriceChange={setPriceRange}
					categories={categories.data}
					selectedCategories={selectedCategories}
					onCategoryChange={handleCategoryChange}
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{data &&
						data.map((product) => (
							<Link
								to={`/product/${product._id}`}
								key={product._id}
							>
								<ProductCard
									id={product._id}
									discountPercent={product.discountPercent}
									price={product.price}
									thumbnail={product.thumbnail}
									title={product.name}
								/>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};

export default FilterProducts;
