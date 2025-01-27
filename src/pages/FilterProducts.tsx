import FilterSidebar from "@/components/custom/FilterMenu/FilterSideBar";
import { useGetProductQueries } from "@/api/productQueries";
import ProductCard from "@/components/custom/ProductCard";
import { Link } from "react-router-dom";
import Loader from "@/components/custom/Loader";
import { useGetCategoriesQuery } from "@/api/categoryQueries";
import { useFilter } from "@/states/filterStore";

const FilterProducts = () => {
	const { priceRange, setPriceRange, categories, setCategories } = useFilter(
		(state) => state
	);

	const { data: categoriesData } = useGetCategoriesQuery();
	const { data, isLoading } = useGetProductQueries();

	const filteredData = data?.filter((item) => {
		const isWithinPriceRange =
			item.price > priceRange[0] && item.price < priceRange[1];
		const isInSelectedCategories =
			categories.length === 0 || categories.includes(item.category);
		return isWithinPriceRange && isInSelectedCategories;
	});

	if (isLoading) return <Loader />;

	return (
		<div className="min-h-screen bg-gray-100">
			<FilterSidebar
				priceRange={priceRange}
				onPriceChange={setPriceRange}
				categories={categoriesData}
				selectedCategories={categories}
				onCategoryChange={setCategories}
			/>
			<div className="pl-72">
				<div className="p-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{filteredData &&
							filteredData.map((product) => (
								<Link
									to={`/product/${product._id}`}
									key={product._id}
								>
									<ProductCard
										id={product._id}
										discountPercent={
											product.discountPercent
										}
										price={product.price}
										thumbnail={product.thumbnail}
										title={product.name}
									/>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterProducts;
