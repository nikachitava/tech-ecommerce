export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: MetaData;
    images: string[];
    thumbnail: string;
}

interface Review {
    rating: number;
    comment: string;
    date: string; // Use `Date` type if you are working with actual Date objects.
    reviewerName: string;
    reviewerEmail: string;
}

interface MetaData {
    createdAt: string; // Use `Date` type if you are working with actual Date objects.
    updatedAt: string; // Use `Date` type if you are working with actual Date objects.
    barcode: string;
    qrCode: string;
}
