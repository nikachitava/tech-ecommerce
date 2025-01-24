import {create} from "zustand"

interface CartItem {
    id: string;
    quantity: number;
}

interface CartState {
    cartCount: number;
    cartList: CartItem[];
    addToCart: (id: string, quantity: number) => void;
    removeFromCart: (id: string) => void;
    moveAllToCart: (id: string[]) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>((set) => ({
    cartCount: 0,
    cartList: [],
    addToCart: (id, quantity = 1) => set((state) => {
        const existingItem = state.cartList.find(item => item.id === id);
        
        if (existingItem) {
            return {
                cartList: state.cartList.map(item => 
                    item.id === id 
                    ? {...item, quantity: item.quantity + quantity}
                    : item
                ),
                cartCount: state.cartCount + quantity
            };
        }
        
        return {
            cartList: [...state.cartList, { id, quantity }],
            cartCount: state.cartCount + quantity
        };
    }),
    
    removeFromCart: (id) => set((state) => {
        const existingItem = state.cartList.find(item => item.id === id);
        
        if (!existingItem) return state;
        
        if (existingItem.quantity > 1) {
            return {
                cartList: state.cartList.map(item => 
                    item.id === id 
                    ? {...item, quantity: item.quantity - 1}
                    : item
                ),
                cartCount: state.cartCount - 1
            };
        }
        
        return {
            cartList: state.cartList.filter(item => item.id !== id),
            cartCount: state.cartCount - 1
        };
    }),
    
    moveAllToCart: (ids) => set((state) => {
        const newItems = ids
            .filter(id => !state.cartList.some(item => item.id === id))
            .map(id => ({ id, quantity: 1 }));
        
        return {
            cartList: [...state.cartList, ...newItems],
            cartCount: state.cartCount + newItems.length
        };
    }),
    
    clearCart: () => set({
        cartList: [],
        cartCount: 0
    })
}))