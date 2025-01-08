import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { CustomInputProps } from "@/types/CustomInputProps";

const CustomInput: React.FC<CustomInputProps> = ({
	control,
	label,
	name,
	description,
	type = "text",
	placeholder,
	styles,
	labelStyle,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className={`${labelStyle}`}>{label}</FormLabel>
					<FormControl>
						<Input
							placeholder={placeholder}
							className={`${styles}`}
							{...field}
							type={type}
						/>
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomInput;
