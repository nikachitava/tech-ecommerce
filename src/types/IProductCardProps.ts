export interface IProductCardProps {
	id: string;
	discountPercentage?: number;
	title: string;
	price: number;
	thumbnail: string;
    isDiscount: boolean;
}