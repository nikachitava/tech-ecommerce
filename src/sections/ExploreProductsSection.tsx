import Header from "@/components/custom/Header";
import { useTranslation } from "react-i18next";

const ExploreProductsSection = () => {
	const { t } = useTranslation();

	return (
		<section className="space-y-16">
			<Header
				title={t("OurProducts")}
				header={t("ExploreOurProducts")}
				hasTimer={false}
			/>
		</section>
	);
};

export default ExploreProductsSection;
