import { useState, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useTranslation } from "react-i18next";
import { menuItems } from "../../data/MenuItems";
import MobileNavBar from "./MobileNavBar";
import ProfileMenu from "./ProfileMenu";
import { useAuth } from "@/states/authStore";
import { useWishList } from "@/states/wishListStore";

export const NavBar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

	const { isAuth } = useAuth((state) => state);

	const { pathname } = useLocation();
	const { t } = useTranslation();

	const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	const toggleProfileMenu = () =>
		setIsProfileMenuOpen((isProfileMenuOpen) => !isProfileMenuOpen);

	const { wishCount } = useWishList((state) => state);

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
							<Link to={"/wishlist"}>
								<button className="relative navbar_icons_styles">
									<img
										src="/icons/heart.svg"
										alt="heart_icon"
										className="filter invert-0 brightness-0 "
									/>
									{wishCount > 0 && (
										<p className="font-poppins text-xs absolute top-0 right-0 text-text bg-secondary2 size-5 p-2 font-medium flex items-center justify-center rounded-full">
											{wishCount}
										</p>
									)}
								</button>
							</Link>
							<button className="relative navbar_icons_styles">
								<img
									src="/icons/cart.svg"
									alt="cart_icon"
									className="filter invert-0 brightness-0 "
								/>
								<p className="font-poppins text-xs absolute top-0 right-0 text-text bg-secondary2 size-5 p-2 font-medium flex items-center justify-center rounded-full">
									2
								</p>
							</button>
							{isAuth && (
								<button
									onClick={toggleProfileMenu}
									className="navbar_icons_styles group"
								>
									<img
										src="/icons/profile_icon.svg"
										alt="profile_icon"
										className="filter invert-0 brightness-0 group-hover:invert group-hover:brightness-0"
									/>
								</button>
							)}
							{isProfileMenuOpen && (
								<ProfileMenu
									isProfileMenuOpen={isProfileMenuOpen}
									closeMenu={() =>
										setIsProfileMenuOpen(false)
									}
								/>
							)}
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
