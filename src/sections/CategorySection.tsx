import CategoryCard from "@/components/custom/CategoryCard";
import Header from "@/components/custom/Header";

import phoneIcon from "/icons/phone.svg";
import computersIcon from "/icons/computers.svg";
import smartwachIcon from "/icons/smartwatch.svg";
import cameraIcon from "/icons/camera.svg";
import headphoneIcon from "/icons/headphone.svg";
import gamingIcon from "/icons/gaming.svg";

const CategorySection = () => {
	const categoriesList = [
		{ icon: phoneIcon, title: "Phone" },
		{ icon: computersIcon, title: "Computers" },
		{ icon: smartwachIcon, title: "Smartwatch" },
		{ icon: cameraIcon, title: "Camera" },
		{ icon: headphoneIcon, title: "Headphone" },
		{ icon: gamingIcon, title: "Gaming" },
	];

	return (
		<section className="space-y-16">
			<Header title="Today's" header="Browse By Category" />
			<div className="flex items-center justify-between">
				{categoriesList.map(({ icon, title }) => (
					<CategoryCard icon={icon} title={title} />
				))}
			</div>
		</section>
	);
};

export default CategorySection;
