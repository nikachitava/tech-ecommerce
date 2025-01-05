import { Outlet } from "react-router-dom";
import NavBar from "../components/custom/NavBar";
import Advertisement from "../components/custom/Advertisement";
import Footer from "@/components/custom/Footer";

const RootLayout = () => {
	return (
		<div className="relative">
			<Advertisement />
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
