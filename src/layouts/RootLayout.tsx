import { Outlet } from "react-router-dom";
import NavBar from "../components/custom/NavBar";
import Advertisement from "../components/custom/Advertisement";

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
