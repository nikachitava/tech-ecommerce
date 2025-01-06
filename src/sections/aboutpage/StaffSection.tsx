import StaffMemberCard from "@/components/custom/StaffMemberCard";

const StaffSection = () => {
	return (
		<div className="flex flex-col gap-10 md:flex-row lg:flex-wrap lg:justify-between">
			<StaffMemberCard />
			<StaffMemberCard />
			<StaffMemberCard />
		</div>
	);
};

export default StaffSection;
