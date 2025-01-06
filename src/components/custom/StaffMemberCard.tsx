import linkedin_icon from "/icons/linkedin_icon.svg";
import instagram_icon from "/icons/instagram_icon.svg";
import { IStaffMemberDataType } from "@/types/StaffMemberDataType";

const StaffMemberCard: React.FC<IStaffMemberDataType> = ({
	image,
	name,
	role,
	socialmedia,
}) => {
	return (
		<div className="min-w-[370px] shadow-md">
			<div className="bg-secondary2 flex items-center justify-center">
				<img src={image} alt="staff_member" loading="lazy" />
			</div>
			<div className="space-y-4 p-1">
				<div className="mt-8">
					<h1 className="font-poppins text-3xl text-text2 font-medium">
						{name}
					</h1>
					<h4 className="font-poppins text-text2">{role}</h4>
				</div>
				<div className="bg-secondary1 flex items-center gap-4">
					<img
						src={instagram_icon}
						alt="instagram_icon"
						loading="lazy"
						className="brightness-0 cursor-pointer"
						onClick={() => {
							window.open(socialmedia.instagram, "_blank");
						}}
					/>
					<img
						src={linkedin_icon}
						alt="linkedin_icon"
						loading="lazy"
						className="brightness-0 cursor-pointer"
						onClick={() => {
							window.open(socialmedia.instagram, "_blank");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default StaffMemberCard;
