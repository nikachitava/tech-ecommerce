import Loader from "@/components/custom/Loader";
import { useAuth } from "@/states/authStore";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const { isAuth, isLoading } = useAuth();

	if (isLoading) {
		return <Loader />;
	}

	if (!isAuth) {
		return <Navigate to="/auth" replace />;
	}

	return children;
}
