import i18n from "i18next";

const LanguageSwitcher = () => {
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="text-text">
			<button onClick={() => changeLanguage("en")}>English</button>
			<button onClick={() => changeLanguage("ge")}>French</button>
		</div>
	);
};

export default LanguageSwitcher;
