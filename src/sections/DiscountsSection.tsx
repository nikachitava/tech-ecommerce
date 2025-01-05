import Header from "@/components/custom/Header";
import { useTranslation } from "react-i18next";
import DiscountsContainer from "@/containers/DiscountsContainer";

const DiscountsSection = () => {
	const { t } = useTranslation();

	return (
		<section className="space-y-16">
			<Header
				title={t("Todays")}
				header={t("FlashDiscount")}
				hasTimer={false}
			/>
			<DiscountsContainer />
		</section>
	);
};

export default DiscountsSection;
