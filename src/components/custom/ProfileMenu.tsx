import profileIcon from "/icons/profile_icon.svg";
import ordersIcon from "/icons/my_order.svg";
import cancellationsIcon from "/icons/my_cancellations.svg";
import reviewIcon from "/icons/my_reviews.svg";
import logOutIcon from "/icons/log_out.svg";
import { useTranslation } from "react-i18next";

const ProfileMenu = () => {
	const menuList = [
		{ icon: profileIcon, titleTranslationKey: "MyProfile" },
		{ icon: ordersIcon, titleTranslationKey: "MyOrders" },
		{ icon: cancellationsIcon, titleTranslationKey: "MyCancellations" },
		{ icon: reviewIcon, titleTranslationKey: "MyReviews" },
		{ icon: logOutIcon, titleTranslationKey: "LogOut" },
	];

	const { t } = useTranslation();

	return (
		<div className="absolute top-[130%] right-0 bg-[#0000005A] bg-opacity-4 backdrop-blur-[15px] p-4 rounded-sm space-y-8 shadow-md">
			{menuList.map(({ icon, titleTranslationKey }) => (
				<div className="flex items-center gap-4 w-[250px]">
					<img
						src={icon}
						alt={icon}
						className="invert brightness-0"
					/>
					<h4 className="font-poppins text-text">
						{t(titleTranslationKey)}
					</h4>
				</div>
			))}
		</div>
	);
};

export default ProfileMenu;
