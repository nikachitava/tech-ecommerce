import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Advertisement from "../components/Advertisement";

const RootLayout = () => {
	return (
		<div>
			<Advertisement />
			<NavBar />
			<Outlet />
		</div>
	);
};

export default RootLayout;
