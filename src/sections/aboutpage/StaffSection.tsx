import StaffMemberCard from "@/components/custom/StaffMemberCard";
import { staffMembersDataList } from "@/data/StaffMembersData";

const StaffSection = () => {
	return (
		<div className="flex flex-col gap-10 md:flex-row lg:flex-wrap lg:justify-between">
			{staffMembersDataList.map((member) => (
				<StaffMemberCard
					key={member.id}
					image={member.image}
					name={member.name}
					role={member.role}
					socialmedia={member.socialmedia}
				/>
			))}
		</div>
	);
};

export default StaffSection;
