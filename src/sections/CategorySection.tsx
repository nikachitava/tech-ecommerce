import CategoryCard from "@/components/custom/CategoryCard";
import Header from "@/components/custom/Header";

import phoneIcon from "/icons/phone.svg";
import computersIcon from "/icons/computers.svg";
import smartwachIcon from "/icons/smartwatch.svg";
import cameraIcon from "/icons/camera.svg";
import headphoneIcon from "/icons/headphone.svg";
import gamingIcon from "/icons/gaming.svg";
import { useTranslation } from "react-i18next";

const CategorySection = () => {
	const categoriesList = [
		{ icon: phoneIcon, transLationKey: "Phones" },
		{ icon: computersIcon, transLationKey: "Computers" },
		{ icon: smartwachIcon, transLationKey: "Smartwatches" },
		{ icon: cameraIcon, transLationKey: "Camera" },
		{ icon: headphoneIcon, transLationKey: "Headphone" },
		{ icon: gamingIcon, transLationKey: "Gaming" },
	];

	const { t } = useTranslation();

	return (
		<section className="space-y-16">
			<Header title="Categories" header="Browse By Category" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10">
				{categoriesList.map(({ icon, transLationKey }) => (
					<CategoryCard
						key={icon}
						icon={icon}
						title={t(transLationKey)}
					/>
				))}
			</div>
		</section>
	);
};

export default CategorySection;
