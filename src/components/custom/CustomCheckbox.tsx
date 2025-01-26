import React from "react";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Control } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

interface ICustomCheckbox {
	control: Control<any>;
	name: string;
	label: string;
	id: string;
	value: boolean;
}

const CustomCheckbox: React.FC<ICustomCheckbox> = ({
	label,
	control,
	name,
	id,
	value,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-row items-start space-x-3 space-y-0">
					<FormControl>
						<Checkbox
							id={id}
							checked={field.value === value}
							onCheckedChange={field.onChange}
						/>
					</FormControl>
					<div className="space-y-1 leading-none">
						<FormLabel>{label}</FormLabel>
						<FormMessage />
					</div>
				</FormItem>
			)}
		/>
	);
};

export default CustomCheckbox;
