import AccountProfileMenu from "@/components/custom/AccountProfileMenu";
import EditProfileForm from "@/components/custom/EditProfileForm";
import { useAccountProfileActiveItem } from "@/states/accountProfileMenuStore";

const AccountPage = () => {
	const { activeItem } = useAccountProfileActiveItem((state) => state);

	return (
		<section className="min-h-screen container my-20 flex">
			<AccountProfileMenu />
			{activeItem === "My Profile" && <EditProfileForm />}
		</section>
	);
};

export default AccountPage;
