import { type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useTranslation } from "react-i18next";

interface MenuItemsTypes {
	name: string;
	translationKey: string;
	path: string;
}

export const NavBar: FC = () => {
	const { pathname } = useLocation();
	const { t } = useTranslation();

	const menuItems: MenuItemsTypes[] = [
		{ name: "Home", translationKey: "menuHome", path: "/" },
		{ name: "Contact", translationKey: "contact", path: "/contact" },
		{ name: "About", translationKey: "about", path: "/about" },
		{ name: "Sign up", translationKey: "auth", path: "/auth" },
	];

	return (
		<div className="border-b border-button">
			<header className="container flex items-center justify-between pt-10 pb-4">
				<Link to="/" className="font-inter text-2xl font-bold">
					Exclusive
				</Link>

				<nav aria-label="Main navigation">
					<ul className="flex items-center gap-12">
						{menuItems.map(({ translationKey, path }) => (
							<li key={path}>
								<Link
									to={path}
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
					</ul>
				</nav>

				<div className="flex items-center gap-6">
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
			</header>
		</div>
	);
};

export default NavBar;
