import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../ui/form";
import { editProfileFormSchema } from "@/schemas/editProfileFormSchema";
import { Label } from "../ui/label";

const EditProfileForm = () => {
	const form = useForm<z.infer<typeof editProfileFormSchema>>({
		resolver: zodResolver(editProfileFormSchema),
		defaultValues: {
			name: "",
			lastname: "",
			email: "",
			address: "",
			old_password: "",
			new_password: "",
			confirm_new_password: "",
		},
	});
	const onSubmit = (values: z.infer<typeof editProfileFormSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 max-w-3xl mx-auto py-10"
			>
				<h1 className="font-poppins text-secondary2 font-medium text-xl">
					Edit Your Profile
				</h1>
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-6">
						<CustomInput
							control={form.control}
							name="name"
							label="Name"
							styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
							placeholder="Your name"
							labelStyle="font-poppins font-medium"
						/>
					</div>
					<div className="col-span-6">
						<CustomInput
							control={form.control}
							name="lastname"
							label="Last Name"
							styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
							placeholder="Your Last Name"
							labelStyle="font-poppins font-medium"
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-6">
						<CustomInput
							control={form.control}
							name="name"
							label="Name"
							styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
							placeholder="Your name"
							labelStyle="font-poppins font-medium"
						/>
					</div>
					<div className="col-span-6">
						<CustomInput
							control={form.control}
							name="lastname"
							label="Last Name"
							styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
							placeholder="Your Last Name"
							labelStyle="font-poppins font-medium"
						/>
					</div>
				</div>
				<div className="space-y-4">
					<Label className="font-poppins text-text2">
						Password Change
					</Label>
					<CustomInput
						control={form.control}
						name="old_password"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="Currect Password"
						labelStyle="font-poppins font-medium"
					/>
					<CustomInput
						control={form.control}
						name="new_password"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="New Password"
						labelStyle="font-poppins font-medium"
					/>
					<CustomInput
						control={form.control}
						name="confirm_new_password"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="Confirm New Password"
						labelStyle="font-poppins font-medium"
					/>
				</div>
			</form>
		</Form>
	);
};

export default EditProfileForm;
