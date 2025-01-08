import profileIcon from "/icons/profile_icon.svg";
import logOutIcon from "/icons/log_out.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAuth } from "@/states/authStore";
import { useEffect, useRef } from "react";

interface IProfileMenuProps {
	isProfileMenuOpen: boolean;
	closeMenu: () => void;
}

const ProfileMenu: React.FC<IProfileMenuProps> = ({
	isProfileMenuOpen,
	closeMenu,
}) => {
	const { t } = useTranslation();
	const { logout } = useAuth((state) => state);
	const menuRef = useRef<HTMLUListElement | null>(null);

	const handleLogOut = async () => {
		try {
			logout();
			closeMenu();
		} catch (error) {
			console.error("Google sign-in failed", error);
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isProfileMenuOpen, closeMenu]);

	return (
		<ul
			ref={menuRef}
			className="absolute top-[130%] right-0 bg-[#0000005A] bg-opacity-4 backdrop-blur-[15px] p-4 rounded-sm space-y-8 shadow-md"
		>
			<li className="w-[250px]">
				<Link
					to="/account"
					className="flex items-center gap-4"
					onClick={closeMenu}
				>
					<img
						src={profileIcon}
						alt={profileIcon}
						className="invert brightness-0"
					/>
					<h4 className="font-poppins text-text">{t("MyProfile")}</h4>
				</Link>
			</li>
			<li className="w-[250px]">
				<button
					className="flex items-center gap-4 w-full"
					onClick={handleLogOut}
				>
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
