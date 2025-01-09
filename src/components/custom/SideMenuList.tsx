import SideMenuListItem from "./SideMenuListItem";
import { ApiError } from "@/types/ApiRequest";
import { CategoryType } from "@/types/CategoryType";
import Loader from "./Loader";
import { useState } from "react";

interface ISideMenuListProps {
	data?: CategoryType[];
	isLoading: boolean;
	error?: ApiError | null;
}

const SideMenuList: React.FC<ISideMenuListProps> = ({
	data,
	isLoading,
	error,
}) => {
	if (isLoading) return <Loader />;
	if (error) return <div>Error: {error.message}</div>;
	if (!data || data.length === 0) {
		return <div className="text-gray-500">No categories available</div>;
	}

	const [openMenuId, setOpenMenuId] = useState<string | null>(null);

	return (
		<ul className="flex flex-col space-y-4 w-[220px]">
			{data?.map((item) => (
				<SideMenuListItem
					key={item._id}
					name={item.name}
					arrow={item.subcategories.length > 0}
					translationKey={item.slug}
					subcategories={item.subcategories}
					id={item._id}
					isOpen={openMenuId === item._id}
					onToggle={(id) => {
						setOpenMenuId(openMenuId === id ? null : id);
					}}
				/>
			))}
		</ul>
	);
};

export default SideMenuList;
