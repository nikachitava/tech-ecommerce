import { menuItems } from "@/data/AccountProfileMenuList";
import { useAccountProfileActiveItem } from "@/states/accountProfileMenuStore";

const AccountProfileMenu = () => {
	const { activeItem, setActiveItem } = useAccountProfileActiveItem(
		(state) => state
	);

	const handleClick = (item: string) => {
		setActiveItem(item);
	};

	return (
		<div className="space-y-6">
			{Object.entries(menuItems).map(([key, section]) => (
				<div key={key}>
					<h4
						className="font-poppins font-medium text-text2 cursor-pointer"
						onClick={() => handleClick(section.title)}
					>
						{section.title}
					</h4>
					{section.items.length > 0 && (
						<div className="p-4">
							{section.items.map((item) => (
								<p
									key={item}
									className={`font-poppins  opacity-50 cursor-pointer hover:opacity-100 transition-opacity ${
										activeItem === item
											? "text-secondary2 opacity-100 font-medium"
											: "text-text2"
									}`}
									onClick={() => handleClick(item)}
								>
									{item}
								</p>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default AccountProfileMenu;
