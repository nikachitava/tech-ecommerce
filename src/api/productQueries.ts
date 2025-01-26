import { useQuery } from "@tanstack/react-query"
import { useAxios } from "@/hooks/useAxios"
import { ApiError } from "@/types/ApiRequest"
import { Product } from "@/types/ProductType"
import { CartProductType } from "@/types/CartProductType"
import { useMemo } from "react"

export const useGetProductsByIdQueries = (products: CartProductType[]) => {
    const productIds = useMemo(() => products.map((product) => product.id), [products]);

    return useQuery({
        queryKey: ['getProductsById', productIds],
        queryFn: ()=> fetchProductsById(productIds),
        enabled: productIds.length > 0, 
        retry: 2, 
        staleTime: 1000 * 60 * 5
    })
}


export const useGetProductQueries = () => {
    return useQuery<Product[], ApiError>({
        queryKey: ['getProducts'],
        queryFn: fetchProducts
    })
}

export const useGetProductByIdQueries = (id: string) => {
    return useQuery<Product, ApiError>({
        queryKey: ['getProductById', id],
        queryFn: () => getProductById(id)
    })
}

export const useGetNewestProducts = () => {
    return useQuery<Product[], ApiError>({
        queryKey: ['getNewestProducts'],
        queryFn: fetchNewestProducts
    })
}

const fetchProductsById = async (productIds: string[]): Promise<Product[]> => {
    try {
        const response = await useAxios.post("/products/getproducts", { productIds });
    return response.data;
    } catch (error: any) {
        throw {
            message: error?.response?.data?.message || error?.message || 'Failed to fetch products',
            status: error?.response?.status || 500
        } as ApiError;
    } 
}

const fetchNewestProducts = async (): Promise<Product[]>  => {
    try {
        const { data } = await useAxios.get('/products/newestproducts') 
        return data;
    } catch (error: any) {
        throw {
            message: error?.response?.data?.message || error?.message || 'Failed to fetch products',
            status: error?.response?.status || 500
        } as ApiError;
    }
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

const getProductById = async (id: string): Promise<Product> => {
    try {
        const { data } = await useAxios.get(`/products/${id}`);
        return data;
    } catch (error: any) {
        throw {
            message: error?.response?.data?.message || error?.message || 'Failed to fetch products',
            status: error?.response?.status || 500
        } as ApiError;
    }
}