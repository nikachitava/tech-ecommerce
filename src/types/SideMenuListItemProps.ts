import { Subcategory } from "./CategoryType";

export interface SideMenuListItemProps {
    id: string;
    name: string;
    translationKey?: string;
    arrow?: boolean,
    subcategories?: Subcategory[];
    isOpen?: boolean,
    onToggle: (id: string) => void;
}
