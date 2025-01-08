import { Link, useLocation } from "react-router-dom";

interface AdminNavItemProps {
	icon: any;
	label: string;
	path: string;
	isCollapsed: boolean;
}

const AdminNavItem = ({
	icon: Icon,
	label,
	path,
	isCollapsed,
}: AdminNavItemProps) => {
	const location = useLocation();
	const isActive = location.pathname === path;

	return (
		<Link
			to={path}
			className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
				isActive
					? "bg-admin-primary text-white"
					: "text-gray-600 hover:bg-gray-100"
			}`}
		>
			<Icon size={20} />
			{!isCollapsed && <span>{label}</span>}
		</Link>
	);
};

export default AdminNavItem;
