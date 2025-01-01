import Header from "../components/custom/Header";
import SideMenuList from "../components/custom/SideMenuList";

const Home = () => {
	return (
		<div className="container">
			<section className="flex flex-col 2xl:flex-row items-start justify-between gap-10 2xl:gap-28 py-10">
				<SideMenuList />
				<img
					src="/images/main_banner.svg"
					alt="main_banner"
					className="flex-1 "
					loading="lazy"
				/>
			</section>
			<Header title="Today's" />
		</div>
	);
};

export default Home;
