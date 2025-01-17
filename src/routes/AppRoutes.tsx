import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import RootLayout from "../layouts/RootLayout";
import Loader from "@/components/custom/Loader";
import Dashboard from "@/pages/admin/Dashboard";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useAuth } from "@/states/authStore";
import { ProtectedRoute } from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Account = lazy(() => import("../pages/AccountPage"));
const About = lazy(() => import("../pages/AboutPage"));
const Auth = lazy(() => import("../pages/AuthPage"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/CheckoutPage"));
const Contact = lazy(() => import("../pages/Contact"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const WishlistPage = lazy(() => import("../pages/Wishlist"));

const AppRoutes = () => {
	const { checkAuth, isLoading } = useAuth();

	useEffect(() => {
		checkAuth();
	}, []);

	if (isLoading) return <Loader />;

	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Routes>
					/* Public Routes */
					<Route element={<RootLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/product/:id" element={<ProductPage />} />
						/* Private Routes */
						<Route
							path="/account"
							element={
								<ProtectedRoute>
									<Account />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/cart"
							element={
								<ProtectedRoute>
									<Cart />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/checkout"
							element={
								<ProtectedRoute>
									<Checkout />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/wishlist"
							element={
								<ProtectedRoute>
									<WishlistPage />
								</ProtectedRoute>
							}
						/>
					</Route>
					<Route path="/auth" element={<Auth />} />
					<Route element={<DashboardLayout />}>
						<Route path="/admin" element={<Dashboard />} />
					</Route>
					/* Error Page */
					<Route>
						<Route path="*" element={<ErrorPage />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
};

export default AppRoutes;
