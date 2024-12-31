import SearchInput from "./SearchInput";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const location = useLocation();

	const menuList = [
		{ name: "Home", path: "/" },
		{ name: "Contact", path: "/contact" },
		{ name: "About", path: "/about" },
		{ name: "Sign up", path: "/auth" },
	];

	return (
		<div className="border-b border-button">
			<header className="container flex items-center justify-between pt-10 pb-4">
				<h1 className="font-inter text-2xl font-bold ">Exclusive</h1>
				<nav className="flex">
					<ul className="flex items-center gap-12">
						{menuList.map((item) => (
							<Link to={`${item.path}`}>
								<li
									className={`menu_list_item ${
										location.pathname === item.path
											? "underline font-semibold underline-offset-4"
											: null
									}`}
								>
									{item.name}
								</li>
							</Link>
						))}
					</ul>
				</nav>
				<div className="flex items-center gap-6">
					<SearchInput />
					<div className="flex items-center gap-4">
						<img src="/icons/heart.svg" alt="heart_icon" />
						<img src="/icons/cart.svg" alt="cart_icon" />
					</div>
				</div>
			</header>
		</div>
	);
};

export default NavBar;
