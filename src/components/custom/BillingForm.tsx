import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomInput from "./CustomInput";
import { billingSchema } from "@/schemas/billingSchema";
import { Form } from "../ui/form";
import { useCart } from "@/states/cartStore";
import CartTotal from "./CartTotal";
import CustomCheckbox from "./CustomCheckbox";

const BillingForm = () => {
	const form = useForm<z.infer<typeof billingSchema>>({
		resolver: zodResolver(billingSchema),
		defaultValues: {
			fullname: "",
			additional: "",
			address: "",
			city: "",
			email: "",
			phone: "",
			payment_method: { bank: true, cash: false },
		},
	});

	const onSubmit = (values: z.infer<typeof billingSchema>) => {
		console.log(values);
	};

	const { shippingPrice, sumPrice, totalPrice } = useCart((state) => state);

	return (
		<Form {...form}>
			<form className="flex justify-between items-end">
				<div className="min-w-[470px] max-w-3xl space-y-8">
					<h1 className="font-poppins text-text2 font-medium text-3xl">
						Billing Details
					</h1>
					<CustomInput
						control={form.control}
						name="fullname"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="Your fullname"
						labelStyle="font-poppins font-medium"
					/>
					<CustomInput
						control={form.control}
						name="address"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="Address"
						labelStyle="font-poppins font-medium"
					/>
					<CustomInput
						control={form.control}
						name="city"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="City"
						labelStyle="font-poppins font-medium"
					/>
					<CustomInput
						control={form.control}
						name="additional"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="Apartment, floor, etc"
						labelStyle="font-poppins font-medium"
					/>
					<CustomInput
						control={form.control}
						name="phone"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="Phone number"
						labelStyle="font-poppins font-medium"
					/>
					<CustomInput
						control={form.control}
						name="email"
						styles="bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 h-[50px] text-text2 font-poppins text-medium"
						placeholder="example@gmail.com"
						labelStyle="font-poppins font-medium"
					/>
				</div>
				<div>
					<div className="space-y-4 mb-8">
						<h1 className="font-poppins text-text2 font-medium text-xl">
							Payment method
						</h1>
						<CustomCheckbox
							control={form.control}
							id="bank-checkbox"
							label="Bank"
							name="payment_method.bank" // Use dot notation for nested fields
							value={true} // Check this box if it's selected
							// onChange={(checked) => form.setValue("payment_method.bank", checked)}
						/>
						<CustomCheckbox
							control={form.control}
							id="cash-checkbox"
							label="Cash on delivery"
							name="payment_method.cash" // Use dot notation for nested fields
							value={true} // Check this box if it's selected
							// onChange={(checked) => form.setValue("payment_method.cash", checked)}
						/>
					</div>
					<CartTotal
						subtotal={sumPrice}
						shipping={shippingPrice}
						total={totalPrice}
						onClick={form.handleSubmit(onSubmit)}
					/>
				</div>
			</form>
		</Form>
	);
};

export default BillingForm;
