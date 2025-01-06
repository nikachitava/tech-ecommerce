import emma_watson from "/icons/emma_watson.svg";
import linkedin_icon from "/icons/linkedin_icon.svg";
import instagram_icon from "/icons/instagram_icon.svg";

const StaffMemberCard = () => {
	return (
		<div className="min-w-[370px] shadow-md">
			<div className="bg-secondary2 flex items-center justify-center">
				<img src={emma_watson} alt="staff_member" loading="lazy" />
			</div>
			<div className="space-y-4 p-1">
				<div className="mt-8">
					<h1 className="font-poppins text-3xl text-text2 font-medium">
						Emma Watson
					</h1>
					<h4 className="font-poppins text-text2">
						Founder & Chairman
					</h4>
				</div>
				<div className="bg-secondary1 flex items-center gap-4">
					<img
						src={instagram_icon}
						alt="instagram_icon"
						loading="lazy"
						className="brightness-0"
					/>
					<img
						src={linkedin_icon}
						alt="linkedin_icon"
						loading="lazy"
						className="brightness-0"
					/>
				</div>
			</div>
		</div>
	);
};

export default StaffMemberCard;
