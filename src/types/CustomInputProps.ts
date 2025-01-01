import { Control } from "react-hook-form";

export interface CustomInputProps {
	control: Control<any>;
	name: string;
	label?: string;
	description?: string;
	placeholder?: string;
	type?: string;
	onChange?: (e: any) => void;
    styles?: string;
}