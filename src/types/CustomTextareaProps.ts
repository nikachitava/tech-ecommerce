import { Control } from "react-hook-form";

export interface CustomTextareaProps {
    control: Control<any>;
    name: string;
    label?: string;
    description?: string;
    placeholder?: string;
    styles?: string;
}