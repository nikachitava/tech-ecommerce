import { useGetProductsByIdQueries } from "@/api/productQueries";
import Loader from "@/components/custom/Loader";
import ProductCard from "@/components/custom/ProductCard";

interface IWishlistSection {
	productIds: string[];
}

const WishlistsSection: React.FC<IWishlistSection> = ({ productIds }) => {
	const { data, isLoading, error } = useGetProductsByIdQueries(productIds);

	if (isLoading) return <Loader />;
	if (error) return <h1>{error.message}</h1>;
	if (!data) return <h1 className="text-2xl">Wish list is empty</h1>;

	return (
		<section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
			{data.map((item) => (
				<ProductCard
					key={item._id}
					id={item._id}
					discountPercent={item.discountPercent}
					price={item.price}
					thumbnail={item.thumbnail}
					title={item.name}
				/>
			))}
		</section>
	);
};

export default WishlistsSection;
