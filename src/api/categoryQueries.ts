import { useQuery } from "@tanstack/react-query"
import { useAxios } from "@/hooks/useAxios"
import { CategoryType } from "@/types/CategoryType"
import { ApiError } from "@/types/ApiRequest"

export const useGetCategoriesQuery = () => {
    return useQuery<CategoryType[], ApiError>({
        queryKey: ['getCategories'],
        queryFn: fetchCategories
    })
}

const fetchCategories = async (): Promise<CategoryType[]> => {
    try {
        const { data } = await useAxios.get('/category');
        return data;
    } catch (error: any) {
        throw {
            message: error?.response?.data?.message || error?.message || 'Failed to fetch categories',
            status: error?.response?.status || 500
        } as ApiError;
    }
}