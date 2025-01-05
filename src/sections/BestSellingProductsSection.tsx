import Header from "@/components/custom/Header";
import BestSellingProductsContainer from "@/containers/BestSellingProductsContainer";

const BestSellingProductsSection = () => {
	return (
		<section className="space-y-16">
			<Header header="Best Selling Product" title="This Month" />
			<BestSellingProductsContainer />
		</section>
	);
};

export default BestSellingProductsSection;
