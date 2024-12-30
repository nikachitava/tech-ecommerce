import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
	const isAuthenticated = false;

	return isAuthenticated ? <Navigate to="/auth" replace /> : <Outlet />;
};

export default PrivateRoute;
