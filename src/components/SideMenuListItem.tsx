import { useTranslation } from "react-i18next";
import { SideMenuListItemProps } from "../types/SideMenuListItemProps";

const SideMenuListItem = ({
	name,
	translationKey,
	arrow,
}: SideMenuListItemProps) => {
	const { t } = useTranslation();

	return (
		<li
			className="flex items-center justify-between text-text2 font-poppins"
			value={name}
		>
			{t(translationKey)}
			{arrow && <img src="/icons/arrow_right.svg" alt="arrow_right" />}
		</li>
	);
};

export default SideMenuListItem;
