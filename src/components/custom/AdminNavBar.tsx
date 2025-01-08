import { ChevronLeft, Menu } from "lucide-react";

import AdminNavItem from "./AdminNavItem";
import { adminNavMenuList } from "@/data/adminNavMenuList";

interface AdminNavBarProps {
	isCollapsed: boolean;
	setIsCollapsed: (value: boolean) => void;
}

const AdminNavBar = ({ isCollapsed, setIsCollapsed }: AdminNavBarProps) => {
	return (
		<aside
			className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
				isCollapsed ? "w-20" : "w-64"
			}`}
		>
			<div className="flex flex-col h-full">
				<div className="flex items-center justify-between p-4 border-b border-gray-200">
					{!isCollapsed && (
						<h1 className="text-xl font-bold text-admin-dark">
							Admin
						</h1>
					)}
					<button
						onClick={() => setIsCollapsed(!isCollapsed)}
						className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
					>
						{isCollapsed ? (
							<Menu size={20} />
						) : (
							<ChevronLeft size={20} />
						)}
					</button>
				</div>

				<nav className="flex-1 p-4 space-y-2">
					{adminNavMenuList.map((item) => (
						<AdminNavItem
							key={item.label}
							icon={item.icon}
							label={item.label}
							path={item.path}
							isCollapsed={isCollapsed}
						/>
					))}
				</nav>
			</div>
		</aside>
	);
};

export default AdminNavBar;
