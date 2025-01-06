import SideMenuList from "../components/custom/SideMenuList";
import CategorySection from "@/sections/homepage/CategorySection";
import DiscountsSection from "@/sections/homepage/DiscountsSection";
import BestSellingProductsSection from "@/sections/homepage/BestSellingProductsSection";
import ExploreProductsSection from "@/sections/homepage/ExploreProductsSection";
import ServiceSection from "@/sections/homepage/ServiceSection";
import NewArrivalsSection from "@/sections/homepage/NewArrivalsSection";
import { useAuth } from "@/states/authStore";

const Home = () => {
	const { isAuth } = useAuth((state) => state);

	return (
		<div className="container">
			{isAuth && (
				<h1 className="font-bold text-3xl font-roboto py-10">
					Hello, Nika
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
