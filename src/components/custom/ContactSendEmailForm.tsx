import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomInput from "./CustomInput";
import { useTranslation } from "react-i18next";
import CustomTextarea from "./CustomTextArea";
import { Button } from "../ui/button";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z
		.string()
		.min(1, { message: "This field has to be filled." })
		.email("This is not a valid email."),
	phone: z.string().min(2).max(50),
	message: z.string().min(2).max(500),
});

const ContactSendEmailForm = () => {
	const { t } = useTranslation();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};
	return (
		<div className="flex-1">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="flex flex- items-center justify-between gap-6">
						<CustomInput
							control={form.control}
							name="name"
							placeholder={t("YourName")}
							styles="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
						/>
						<CustomInput
							control={form.control}
							name="email"
							placeholder={t("YourEmail")}
							styles="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
						/>
						<CustomInput
							control={form.control}
							name="phone"
							placeholder={t("YourPhone")}
							styles="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
						/>
					</div>
					<CustomTextarea
						control={form.control}
						name="message"
						placeholder={t("YourMessage")}
						styles="w-full h-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
					/>
					<div className="text-right">
						<Button className="px-12 py-4 h-14 bg-secondary2 hover:bg-[#E85C5C] font-poppins">
							Send Message
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default ContactSendEmailForm;
