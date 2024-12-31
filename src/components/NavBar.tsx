import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<div className="border-b border-button">
			<header className="container flex items-center justify-between pt-10 pb-4">
				<h1 className="font-inter text-2xl font-bold ">Exclusive</h1>
				<nav className="flex">
					<ul className="flex items-center gap-12">
						<li className="font-poppins text-text2">Home</li>
						<li className="font-poppins text-text2">Contact</li>
						<li className="font-poppins text-text2">About</li>
						<li className="font-poppins text-text2">Sing Up</li>
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
