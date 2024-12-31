import { sideMenuList } from "../../data/SideMenuList";
import SideMenuListItem from "./SideMenuListItem";

const SideMenuList = () => {
	return (
		<ul className="flex flex-col space-y-4 w-[220px]">
			{sideMenuList.map(({ name, translationKey, arrow }) => (
				<SideMenuListItem
					key={name}
					name={name}
					arrow={arrow}
					translationKey={translationKey}
				/>
			))}
		</ul>
	);
};

export default SideMenuList;
