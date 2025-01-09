export interface Subcategory {
	_id: string;
	name: string;
	slug: string;
	description: string;
	isActive: boolean;
}

export interface CategoryType {
	_id: string;
	name: string;
	slug: string;
	description: string;
	image: string;
	subcategories: Subcategory[];
	isActive: boolean;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
