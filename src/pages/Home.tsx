import Header from "../components/Header";
import SideMenuList from "../components/SideMenuList";

const Home = () => {
	return (
		<div className="container">
			<section className="flex items-start justify-between gap-28 py-10">
				<SideMenuList />
				<img
					src="/images/main_banner.svg"
					alt="main_banner"
					className="flex-1"
					loading="lazy"
				/>
			</section>
			<Header title="Today's" />
		</div>
	);
};

export default Home;
