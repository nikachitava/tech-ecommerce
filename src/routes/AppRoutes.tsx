import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";

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
	return (
		<Router>
			<Suspense fallback={<div>....Loading</div>}>
				<Routes>
					/* Public Routes */
					<Route element={<RootLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/productPage" element={<ProductPage />} />
						/* Private Routes */
						<Route path="/account" element={<Account />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/wishlist" element={<WishlistPage />} />
					</Route>
					<Route element={<AuthLayout />}>
						<Route path="/auth" element={<Auth />} />
					</Route>
					/* Eror Page */
					<Route>
						<Route path="*" element={<ErrorPage />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
};

export default AppRoutes;
