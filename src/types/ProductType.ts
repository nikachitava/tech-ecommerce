export interface Product {
    _id: string;
	name: string;
	slug: string;
	sku: string;
	description: string;
	price: number;
	comparePrice: number;
	category: string;
	subcategory: string;
	brand: string;
	stock: number;
	thumbnail: string;
	images: string[];
	specifications: {
		name: string;
		value: string;
	}[];
	variants: any[]; 
	tags: string[];
	isActive: boolean;
	ratings: {
		average: number;
		count: number;
	};
}
