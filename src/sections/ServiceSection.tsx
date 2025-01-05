import ServiceCard from "@/components/custom/ServiceCard";
import { serviceList } from "@/data/ServiceList";

const ServiceSection = () => {
	return (
		<div className="flex flex-col items-center gap-8 md:flex-row md:justify-around">
			{serviceList.map((service) => (
				<ServiceCard
					image={service.image}
					title={service.title}
					description={service.description}
				/>
			))}
		</div>
	);
};

export default ServiceSection;
