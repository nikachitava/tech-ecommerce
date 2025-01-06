import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { CustomTextareaProps } from "@/types/CustomTextareaProps";
import { Textarea } from "../ui/textarea";

const CustomTextarea: React.FC<CustomTextareaProps> = ({
	control,
	label,
	name,
	description,
	placeholder,
	styles,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Textarea
							placeholder={placeholder}
							className={`${styles}`}
							{...field}
						/>
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomTextarea;
