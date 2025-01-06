import Header from "@/components/custom/Header";
import NewArrivalsCard from "@/components/custom/NewArrivalsCard";
import { arrivalsLists } from "@/data/ArrivalList";
import { useTranslation } from "react-i18next";

const NewArrivalsSection = () => {
	const { t } = useTranslation();

	return (
		<section className="space-y-16">
			<Header header={t("NewArrival")} title={t("Featured")} />

			<div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 w-full max-w-7xl">
				<div className="col-span-2 row-span-3">
					<NewArrivalsCard
						image={arrivalsLists[0].image}
						title={arrivalsLists[0].title}
						description={arrivalsLists[0].description}
					/>
				</div>
				<div className="col-span-2 row-span-2">
					<NewArrivalsCard
						image={arrivalsLists[1].image}
						title={arrivalsLists[1].title}
						description={arrivalsLists[1].description}
					/>
				</div>
				<div className="col-span-1">
					<NewArrivalsCard
						image={arrivalsLists[2].image}
						title={arrivalsLists[2].title}
						description={arrivalsLists[2].description}
					/>
				</div>
				<div className="col-span-1">
					<NewArrivalsCard
						image={arrivalsLists[3].image}
						title={arrivalsLists[3].title}
						description={arrivalsLists[3].description}
					/>
				</div>
			</div>
		</section>
	);
};

export default NewArrivalsSection;
