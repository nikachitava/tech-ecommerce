import CustomButton from "@/components/custom/CustomButton";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen container flex flex-col items-center justify-center space-y-20">
			<div className="space-y-10 text-center">
				<h1 className="font-poppins font-medium text-9xl">
					404 Not Found
				</h1>
				<p className="font-poppins text-text2">
					Your visited page not found. You may go home page.
				</p>
			</div>
			<CustomButton
				filled
				onClick={() => navigate("/")}
				title="Back to home page"
				otherStyles="px-12 py-4 rounded"
				textStyles="font-poppins font-medium text-text"
			/>
		</div>
	);
};

export default ErrorPage;
