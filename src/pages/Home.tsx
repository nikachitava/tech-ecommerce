import { useSelector } from "react-redux";
import SideMenuList from "../components/custom/SideMenuList";
import { RootState } from "@/state/store";
import CategorySection from "@/sections/CategorySection";
import DiscountsSection from "@/sections/DiscountsSection";
import BestSellingProductsSection from "@/sections/BestSellingProductsSection";
import ExploreProductsSection from "@/sections/ExploreProductsSection";
import ServiceSection from "@/sections/ServiceSection";
import NewArrivalsSection from "@/sections/NewArrivalsSection";

const Home = () => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const currentUser = useSelector(
		(state: RootState) => state.auth.currentUser
	);

	return (
		<div className="container">
			{isAuth && (
				<h1 className="font-bold text-3xl font-roboto py-10">
					Hello, {currentUser?.displayName}
				</h1>
			)}
			<main className="flex flex-col 2xl:flex-row items-start justify-between gap-10 2xl:gap-28 py-10">
				<SideMenuList />
				<img
					src="/images/main_banner.svg"
					alt="main_banner"
					className="flex-1 "
					loading="lazy"
				/>
			</main>
			<div className="space-y-[140px] my-[140px]">
				<DiscountsSection />
				<CategorySection />
				<BestSellingProductsSection />
				<ExploreProductsSection />
				<NewArrivalsSection />
				<ServiceSection />
			</div>
		</div>
	);
};

export default Home;
