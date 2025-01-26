import { useGetProductsByIdQueries } from "@/api/productQueries";
import ProductCard from "@/components/custom/ProductCard";
import { WishProductType } from "@/types/CartProductType";

interface IWishlistSection {
	products: WishProductType[];
}

const WishlistsSection: React.FC<IWishlistSection> = ({ products }) => {
	const { data, error } = useGetProductsByIdQueries(products);

	if (error) return <h1>{error.message}</h1>;

	return (
		<section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
			{data?.map((item) => (
				<ProductCard
					key={item._id}
					id={item._id}
					discountPercent={item.discountPercent}
					price={item.price}
					thumbnail={item.thumbnail}
					title={item.name}
					trashIcon
				/>
			))}
		</section>
	);
};

export default WishlistsSection;
