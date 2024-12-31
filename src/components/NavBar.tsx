import { type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";

// interface MenuItem {
//   name: string;
//   path: string;
// }

const menuItems = [
	{ name: "Home", path: "/" },
	{ name: "Contact", path: "/contact" },
	{ name: "About", path: "/about" },
	{ name: "Sign up", path: "/auth" },
];

export const NavBar: FC = () => {
	const { pathname } = useLocation();

	return (
		<div className="border-b border-button">
			<header className="container flex items-center justify-between pt-10 pb-4">
				<Link to="/" className="font-inter text-2xl font-bold">
					Exclusive
				</Link>

				<nav aria-label="Main navigation">
					<ul className="flex items-center gap-12">
						{menuItems.map(({ name, path }) => (
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
									{name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="flex items-center gap-6">
					<SearchInput />
					<div className="flex items-center gap-4">
						<button
							aria-label="Favorites"
							className="hover:opacity-80 transition-opacity"
						>
							<img src="/icons/heart.svg" alt="" />
						</button>
						<button
							aria-label="Shopping cart"
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
