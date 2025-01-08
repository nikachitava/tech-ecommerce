import AdminNavBar from "@/components/custom/AdminNavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const DashboardLayout = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className="flex min-h-screen bg-gray-50">
			<AdminNavBar
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
			/>
			<main
				className={`flex-1 transition-all duration-300 ${
					isCollapsed ? "ml-20" : "ml-64"
				}`}
			>
				<div className="p-8">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default DashboardLayout;
