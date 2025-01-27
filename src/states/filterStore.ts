import { create } from "zustand";

interface FilterState {
    priceRange: [number, number];
    setPriceRange: (value: number, type: 'min' | 'max') => void;
    categories: string[];
    setCategories: (categoryId: string[]) => void;
}


export const useFilter = create<FilterState>((set)=> ({
    priceRange: [0, 100000],
    setPriceRange: (value, type) =>
        set((state) => ({
            priceRange: type === 'min' ? [value, state.priceRange[1]] : [state.priceRange[0], value],
        })),
    categories: [],
    setCategories: (categories) => set({categories})
}))