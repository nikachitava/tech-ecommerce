import Header from "@/components/custom/Header";
import BestSellingProductsContainer from "@/containers/BestSellingProductsContainer";
import { useTranslation } from "react-i18next";

const BestSellingProductsSection = () => {
	const { t } = useTranslation();

	return (
		<section className="space-y-16">
			<Header header={t("BestSellingProduct")} title={t("ThisMonth")} />
			<BestSellingProductsContainer />
		</section>
	);
};

export default BestSellingProductsSection;
