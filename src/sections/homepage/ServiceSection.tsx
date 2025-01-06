import ServiceCard from "@/components/custom/ServiceCard";
import { serviceList } from "@/data/ServiceList";
import { useTranslation } from "react-i18next";

const ServiceSection = () => {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col items-center gap-8 md:flex-row md:justify-around">
			{serviceList.map((service, index) => (
				<ServiceCard
					key={index}
					image={service.image}
					title={t(service.titleTranslationKey)}
					description={t(service.descriptionTranslationKey)}
				/>
			))}
		</div>
	);
};

export default ServiceSection;
