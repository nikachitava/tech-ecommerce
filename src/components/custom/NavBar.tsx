import { useState, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useTranslation } from "react-i18next";
import { menuItems } from "../../data/MenuItems";
import MobileNavBar from "./MobileNavBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";

export const NavBar: FC = () => {
	const { pathname } = useLocation();
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

	const dispatch = useDispatch();
	const isAuthorized = useSelector(
		(state: RootState) => state.authorization.isAuthorized
	);

	const filteredMenuItems = menuItems.filter(
		(item) => !(isAuthorized && item.translationKey === "auth")
	);

	return (
		<>
			<div className="border-b border-button">
				<header className="container flex items-center justify-between pt-10 pb-4">
					<Link to="/" className="font-inter text-2xl font-bold">
						Exclusive
					</Link>

					<nav
						aria-label="Main navigation"
						className="hidden lg:block"
					>
						<ul className="flex items-center gap-12">
							{filteredMenuItems.map(
								({ translationKey, path }) => (
									<li key={path}>
										<Link
											to={path || ""}
											className={`transition-all hover:text-gray-600 ${
												pathname === path
													? "underline font-semibold underline-offset-4"
													: ""
											}`}
											aria-current={
												pathname === path
													? "page"
													: undefined
											}
										>
											{t(translationKey)}
										</Link>
									</li>
								)
							)}
						</ul>
					</nav>

					<div className="hidden lg:flex items-center gap-6">
						<SearchInput />
						<div className="flex items-center gap-4">
							<button
								aria-label={t("favorites")}
								className="hover:opacity-80 transition-opacity"
							>
								<img src="/icons/heart.svg" alt="" />
							</button>
							<button
								aria-label={t("shoppingCart")}
								className="hover:opacity-80 transition-opacity"
							>
								<img src="/icons/cart.svg" alt="" />
							</button>
						</div>
					</div>

					<div className="lg:hidden" onClick={toggleMenu}>
						<img
							src="/icons/hamburger-menu-svgrepo-com.svg"
							alt="hamburger-menu-svgrepo-com"
							className="size-12 cursor-pointer"
						/>
					</div>
				</header>
			</div>
			{isMenuOpen && <MobileNavBar toggleMenu={toggleMenu} />}
		</>
	);
};

export default NavBar;
