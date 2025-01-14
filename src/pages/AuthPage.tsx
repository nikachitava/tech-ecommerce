import AuthFormSection from "@/sections/authpage/AuthFormSection";
import SignUpFormSection from "@/sections/authpage/SignUpFormSection";
import { useAuth } from "@/states/authStore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const AuthPage = () => {
	const [isSignUpSection, setIsSignUpSection] = useState(false);

	const handleSignUpSection = () => {
		setIsSignUpSection((isSignUpSection) => !isSignUpSection);
	};

	const { isAuth } = useAuth((state) => state);

	const navigate = useNavigate();

	const { t } = useTranslation();

	useEffect(() => {
		if (isAuth) navigate("/");
	}, [isAuth]);

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
			<div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
				<div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
					<div className="text-center">
						<Link
							to="/"
							className="font-inter text-3xl font-bold text-secondary2"
						>
							Exclusive
						</Link>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-full flex-1 mt-8">
							{isSignUpSection ? (
								<SignUpFormSection />
							) : (
								<AuthFormSection />
							)}
							<p
								className="mx-auto max-w-xs text-sm mt-4 text-right text-text2 opacity-50 hover:opacity-100 cursor-pointer"
								onClick={handleSignUpSection}
							>
								{isSignUpSection
									? t("AlreadyHaveAnAccount")
									: t("DontHaveAnAccount")}
							</p>
						</div>
					</div>
				</div>
				<div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
					<div
						className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
						style={{
							backgroundImage:
								"url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
