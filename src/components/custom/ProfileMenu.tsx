import profileIcon from "/icons/profile_icon.svg";
import logOutIcon from "/icons/log_out.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
	// const menuList = [
	// 	{
	// 		icon: profileIcon,
	// 		titleTranslationKey: "MyProfile",
	// 		path: "/account",
	// 	},
	// 	{ icon: logOutIcon, titleTranslationKey: "LogOut" },
	// ];

	const { t } = useTranslation();

	return (
		<ul className="absolute top-[130%] right-0 bg-[#0000005A] bg-opacity-4 backdrop-blur-[15px] p-4 rounded-sm space-y-8 shadow-md">
			<li className="w-[250px]">
				<Link to="/account" className="flex items-center gap-4">
					<img
						src={profileIcon}
						alt={profileIcon}
						className="invert brightness-0"
					/>
					<h4 className="font-poppins text-text">{t("MyProfile")}</h4>
				</Link>
			</li>
			<li className="w-[250px]">
				{/* Assuming you'll add an onClick handler for logout */}
				<button className="flex items-center gap-4 w-full">
					<img
						src={logOutIcon}
						alt={logOutIcon}
						className="invert brightness-0"
					/>
					<h4 className="font-poppins text-text">{t("LogOut")}</h4>
				</button>
			</li>
		</ul>
	);
};

export default ProfileMenu;
