import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/custom/CustomInput";
import { useTranslation } from "react-i18next";
import { authSchema } from "@/schemas/authSchema";
import { useAuth } from "@/states/authStore";
import Loader from "@/components/custom/Loader";
import { useNavigate } from "react-router-dom";

const AuthFormSection = () => {
	const form = useForm<z.infer<typeof authSchema>>({
		resolver: zodResolver(authSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const {
		formState: { isSubmitting },
	} = form;

	const { t } = useTranslation();

	const navigate = useNavigate();

	const { signIn } = useAuth((state) => state);

	const loginUser = async (values: z.infer<typeof authSchema>) => {
		try {
			await signIn(values);
			navigate("/");
		} catch (error: any) {
			if (error.message === "INVALID_EMAIL") {
				form.setError("email", {
					type: "manual",
					message: "Enter correct email",
				});
			}
			if (error.message === "INVALID_PASSWORD") {
				form.setError("password", {
					type: "manual",
					message: "Enter valid password",
				});
			}
		}
	};

	return (
		<div className="mx-auto max-w-xs">
			<h1 className="text-center mb-4 font-poppins text-2xl xl:text-3xl font-medium text-primary1 uppercase">
				{t("SignIn")}
			</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(loginUser)}
					className="space-y-8"
				>
					<CustomInput
						control={form.control}
						name="email"
						label={t("Email")}
						placeholder={t("Email")}
						styles="w-full px-8 py-6 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
					/>
					<CustomInput
						control={form.control}
						name="password"
						label={t("Password")}
						type="password"
						placeholder={t("Password")}
						styles="w-full px-8 py-6 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
					/>
					<button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
						{isSubmitting ? (
							<Loader />
						) : (
							<>
								<svg
									className="w-6 h-6 -ml-2"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
									<circle cx="8.5" cy="7" r="4" />
									<path d="M20 8v6M23 11h-6" />
								</svg>
								<span className="ml-3">{t("SignIn")}</span>
							</>
						)}
					</button>
				</form>
			</Form>
		</div>
	);
};

export default AuthFormSection;
