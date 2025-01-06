import HeroSection from "@/sections/aboutpage/HeroSection";
import StaffSection from "@/sections/aboutpage/StaffSection";
import ServiceSection from "@/sections/homepage/ServiceSection";

const AboutPage = () => {
	return (
		<div className="container my-16 space-y-[140px]">
			<HeroSection />
			<StaffSection />
			<ServiceSection />
		</div>
	);
};

export default AboutPage;
