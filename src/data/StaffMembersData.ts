import { IStaffMemberDataType } from "@/types/StaffMemberDataType";
import tom_cruise from "/icons/tom_cruise.svg";
import emma_watson from "/icons/emma_watson.svg";
import will_smith from "/icons/will_smith.svg";

export const staffMembersDataList: IStaffMemberDataType[] = [
	{
        id: 1,
        image: tom_cruise,
		name: "Tom Cruise",
		role: "Founder & Chairman",
		socialmedia: {
			instagram: "https://instagram.com/nikachitava18",
			linkedin: "https://linkedin.com/in/nikachitava",
		},
	},
	{
        id: 2,
        image: emma_watson,
		name: "Emma Watson",
		role: "Managing Director",
		socialmedia: {
			instagram: "https://instagram.com/nikachitava18",
			linkedin: "https://linkedin.com/in/nikachitava",
		},
	},
	{
        id: 3,
        image: will_smith,
		name: "Will Smith",
		role: "Product Designer",
		socialmedia: {
			instagram: "https://instagram.com/nikachitava18",
			linkedin: "https://linkedin.com/in/nikachitava",
		},
	},
];
