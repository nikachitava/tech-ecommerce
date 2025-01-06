import { useTranslation } from "react-i18next";

const HeroSection = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col-reverse items-center gap-2 md:flex-row md:gap-20 lg:justify-between">
			<div className="flex flex-col items-start py-36 space-y-10 break-words w-1/2">
				<h1 className="font-poppins font-medium text-text2 text-5xl">
					{t("OurStory")}
				</h1>
				<div className="space-y-6">
					<p className="font-poppins text-text2">
						{t("OurStoryText1")}
					</p>
					<p className="font-poppins text-text2">
						{t("OurStoryText2")}
					</p>
				</div>
			</div>
			<div>
				<img
					src="/images/about_page_main.svg"
					alt="about_hero_iamge"
					loading="lazy"
					className="w-full object-contain"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
