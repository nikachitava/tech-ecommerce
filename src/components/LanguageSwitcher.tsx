import i18n from "i18next";
import { useState } from "react";

const LanguageSwitcher = () => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const [activeValue, setActiveValue] = useState(
		i18n.language === "en"
			? "English"
			: i18n.language === "ge"
			? "Georgian"
			: "Spanish"
	);

	const languagesList = [
		{ name: "English", key: "en" },
		{ name: "Georgian", key: "ge" },
		{ name: "Spanish", key: "es" },
	];

	const changeLanguage = (lng: string, name: string) => {
		i18n.changeLanguage(lng);
		setActiveValue(name);
		setIsDropDownOpen(false);
	};

	const toggleDropDownMenu = () => setIsDropDownOpen(!isDropDownOpen);

	return (
		<div className="relative text-text">
			<div
				className="flex items-center gap-2 cursor-pointer font-poppins"
				onClick={toggleDropDownMenu}
				aria-haspopup="true"
				aria-expanded={isDropDownOpen}
			>
				<p>{activeValue}</p>
				<img src="/icons/arrow_down.svg" alt="arrow_down" />
			</div>

			{isDropDownOpen && (
				<div className="absolute top-10 w-full bg-slate-500 p-2 flex flex-col gap-2 z-10">
					{languagesList
						.filter(({ name }) => name !== activeValue)
						.map(({ name, key }) => (
							<button
								key={key}
								className="text-center hover:bg-slate-600 text-sm p-2 rounded"
								onClick={() => changeLanguage(key, name)}
							>
								{name}
							</button>
						))}
				</div>
			)}
		</div>
	);
};

export default LanguageSwitcher;
