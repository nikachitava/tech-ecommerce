import { SideMenuListItemProps } from "../../types/SideMenuListItemProps";
import { motion, AnimatePresence } from "framer-motion";

const SideMenuListItem = ({
	id,
	name,
	arrow,
	subcategories,
	isOpen,
	onToggle,
}: SideMenuListItemProps) => {
	return (
		<>
			<motion.li
				className="flex items-center justify-between text-text2 font-poppins cursor-pointer"
				value={name}
				onClick={() => onToggle(id)}
				whileHover={{ backgroundColor: "rgb(243 244 246)" }}
				transition={{ duration: 0.2 }}
			>
				{name}
				{arrow && (
					<motion.img
						src="/icons/arrow_right.svg"
						alt="arrow_right"
						animate={{
							rotate: isOpen ? 90 : 0,
						}}
						transition={{
							duration: 0.2,
							ease: "easeInOut",
						}}
						className="w-4 h-4"
					/>
				)}
			</motion.li>
			<AnimatePresence>
				{isOpen && subcategories && (
					<motion.ul
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: "auto",
							opacity: 1,
							transition: {
								height: {
									duration: 0.3,
									ease: "easeOut",
								},
								opacity: {
									duration: 0.2,
									delay: 0.1,
								},
							},
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: {
								height: {
									duration: 0.3,
									ease: "easeInOut",
								},
								opacity: {
									duration: 0.2,
								},
							},
						}}
						className="space-y-2 px-3 overflow-hidden"
					>
						{subcategories.map((subcategory) => (
							<motion.li
								key={subcategory._id}
								initial={{ x: -10, opacity: 0 }}
								animate={{
									x: 0,
									opacity: 1,
									transition: {
										duration: 0.2,
										delay: 0.1,
									},
								}}
								exit={{
									x: -10,
									opacity: 0,
									transition: {
										duration: 0.2,
									},
								}}
								className="font-poppins text-sm text-primary1 py-1 hover:text-primary2 transition-colors duration-200"
							>
								{subcategory.name}
							</motion.li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</>
	);
};

export default SideMenuListItem;
