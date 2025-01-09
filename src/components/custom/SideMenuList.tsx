import SideMenuListItem from "./SideMenuListItem";
import { ApiError } from "@/types/ApiRequest";
import { CategoryType } from "@/types/CategoryType";
import Loader from "./Loader";

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

	console.log("error: ", error);
	console.log("data: ", console.log("error: ", error));

	return (
		<ul className="flex flex-col space-y-4 w-[220px]">
			{data?.map((item) => (
				<SideMenuListItem
					key={item._id}
					name={item.name}
					arrow={item.subcategories.length > 0}
					translationKey={item.slug}
				/>
			))}
		</ul>
	);
};

export default SideMenuList;
