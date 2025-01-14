export interface UserType {
    _id: string;
    name: string;
    lastname: string;
    password: string;
    email: string | null;
    role?: string;
    shippingAddresses?: string;
}