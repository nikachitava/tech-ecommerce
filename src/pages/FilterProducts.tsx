import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import FilterSidebar from "@/components/custom/FilterMenu/FilterSideBar";
import { useGetProductQueries } from "@/api/productQueries";
import ProductCard from "@/components/custom/ProductCard";
import { Link } from "react-router-dom";
import Loader from "@/components/custom/Loader";
import { useGetCategoriesQuery } from "@/api/categoryQueries";
// import SortDropdown from "@/components/filters/SortDropdown";

// const SAMPLE_CATEGORIES = [
// 	{ id: "1", name: "Electronics", count: 120 },
// 	{ id: "2", name: "Clothing", count: 84 },
// 	{ id: "3", name: "Books", count: 56 },
// 	{ id: "4", name: "Home & Garden", count: 43 },
// ];

// const SORT_OPTIONS = [
// 	{ value: "newest", label: "Newest First" },
// 	{ value: "price-asc", label: "Price: Low to High" },
// 	{ value: "price-desc", label: "Price: High to Low" },
// 	{ value: "popular", label: "Most Popular" },
// ];

const FilterProducts = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(true);
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	// const [sortBy, setSortBy] = useState("newest");

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
				<div className="flex justify-between items-center mb-8">
					<Button
						onClick={() => setIsFilterOpen(true)}
						variant="outline"
						className="flex items-center gap-2 border-filter-primary/20 hover:bg-filter-primary/5 hover:border-filter-primary transition-colors duration-200"
					>
						<Filter className="h-4 w-4 text-filter-primary" />
						<span className="text-filter-text">Filters</span>
					</Button>
					{/* <SortDropdown
						options={SORT_OPTIONS}
						value={sortBy}
						onChange={setSortBy}
					/> */}
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
									discountPercentage={product.comparePrice}
									price={product.price}
									thumbnail={product.thumbnail}
									title={product.name}
									isDiscount
								/>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};

export default FilterProducts;
