import { useQuery } from "@tanstack/react-query"
import { useAxios } from "@/hooks/useAxios"
import { ApiError } from "@/types/ApiRequest"
import { Product } from "@/types/ProductType"

export const useGetProductQueries = () => {
    return useQuery<Product[], ApiError>({
        queryKey: ['getProducts'],
        queryFn: fetchProducts
    })
}

const fetchProducts = async (): Promise<Product[]> => {
    try {
        const { data } = await useAxios.get('/products');
        return data;
    } catch (error: any) {
        throw {
            message: error?.response?.data?.message || error?.message || 'Failed to fetch products',
            status: error?.response?.status || 500
        } as ApiError;
    }
}