import { useGetCategoriesQuery } from "@/api/categoryQueries";
import SideMenuList from "@/components/custom/SideMenuList";
import { FC } from "react";

const SideMenuListContainer: FC = () => {
	const { data, isLoading, error } = useGetCategoriesQuery();

	return <SideMenuList data={data} isLoading={isLoading} error={error} />;
};

export default SideMenuListContainer;
