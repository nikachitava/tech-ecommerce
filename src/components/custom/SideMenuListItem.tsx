import { SideMenuListItemProps } from "../../types/SideMenuListItemProps";

const SideMenuListItem = ({ name, arrow }: SideMenuListItemProps) => {
	return (
		<li
			className="flex items-center justify-between text-text2 font-poppins"
			value={name}
		>
			{name}
			{arrow && <img src="/icons/arrow_right.svg" alt="arrow_right" />}
		</li>
	);
};

export default SideMenuListItem;
