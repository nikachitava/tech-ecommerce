import { menuItems } from "@/data/MenuItems";
import { sideMenuList } from "@/data/SideMenuList";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import SideMenuListItem from "./SideMenuListItem";

const MobileNavBar: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
	const { pathname } = useLocation();
	const { t } = useTranslation();
	return (
		<div className="absolute bg-primary h-screen w-full top-0  flex  overflow-hidden z-10">
			<nav
				aria-label="Main navigation"
				className="container flex flex-col items-start gap-20"
			>
				<ul className="flex items-center gap-12 py-4">
					{menuItems.map(({ translationKey, path }) => (
						<li key={path}>
							<Link
								to={path || ""}
								className={`transition-all hover:text-gray-600 ${
									pathname === path
										? "underline font-semibold underline-offset-4"
										: ""
								}`}
								aria-current={
									pathname === path ? "page" : undefined
								}
							>
								{t(translationKey)}
							</Link>
						</li>
					))}
					<li onClick={toggleMenu}>
						<img
							src="/icons/hamburger-menu-svgrepo-com.svg"
							alt="hamburger-menu-svgrepo-com"
							className="size-10 cursor-pointer bg-white"
						/>
					</li>
				</ul>
				<ul className="flex flex-col space-y-4">
					{sideMenuList.map(({ name, translationKey, arrow }) => (
						<SideMenuListItem
							key={name}
							name={name}
							arrow={arrow}
							translationKey={translationKey}
						/>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default MobileNavBar;
