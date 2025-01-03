import { useState, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useTranslation } from "react-i18next";
import { menuItems } from "../../data/MenuItems";
import MobileNavBar from "./MobileNavBar";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import ProfileMenu from "./ProfileMenu";

export const NavBar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

	const { pathname } = useLocation();
	const { t } = useTranslation();

	const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	const toggleProfileMenu = () =>
		setIsProfileMenuOpen((isProfileMenuOpen) => !isProfileMenuOpen);

	const isAuth = useSelector((state: RootState) => state.auth.isAuth);

	// const filteredMenuItems = menuItems.filter(
	// 	(item) => !(isAuthorized && item.translationKey === "auth")
	// );

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
											pathname === path
												? "page"
												: undefined
										}
									>
										{t(translationKey)}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className="hidden lg:flex items-center gap-6">
						<SearchInput />
						<div className="flex items-center gap-4 relative">
							<button className="hover:opacity-80 hover:bg-secondary2 p-2 rounded-full transition-opacity group">
								<img
									src="/icons/heart.svg"
									alt=""
									className="filter invert-0 brightness-0 group-hover:invert group-hover:brightness-0"
								/>
							</button>
							<button className="hover:opacity-80 hover:bg-secondary2 p-2 rounded-full transition-opacity group">
								<img
									src="/icons/cart.svg"
									alt=""
									className="filter invert-0 brightness-0 group-hover:invert group-hover:brightness-0"
								/>
							</button>
							{!isAuth && (
								<button
									onClick={toggleProfileMenu}
									className="hover:opacity-80 hover:bg-secondary2 p-2 rounded-full transition-opacity group"
								>
									<img
										src="/icons/profile_icon.svg"
										alt=""
										className="filter invert-0 brightness-0 group-hover:invert group-hover:brightness-0"
									/>
								</button>
							)}
							{isProfileMenuOpen && <ProfileMenu />}
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
