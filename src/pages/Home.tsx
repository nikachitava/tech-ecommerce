import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

	return (
		<div className="container w-full bg-red-400">{t("welcomeMessage")}</div>
	);
};

export default Home;
