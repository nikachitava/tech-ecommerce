import { IServiceCardProps } from "@/types/IServiceCardProps";

const ServiceCard: React.FC<IServiceCardProps> = ({
	image,
	title,
	description,
}) => {
	return (
		<div className="flex flex-col items-center">
			<img src={image} alt={image} />
			<div className="space-y-2 mt-6 text-center">
				<h3 className="font-poppins uppercase text-black text-xl font-semibold ">
					{title}
				</h3>
				<h4 className="font-poppins uppercase text-black text-sm font-semibold">
					{description}
				</h4>
			</div>
		</div>
	);
};

export default ServiceCard;
