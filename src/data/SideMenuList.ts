import { MenuItemsTypes } from "../types/MenuListItems";

export const sideMenuList: MenuItemsTypes[] = [
        {
            name: "Woman's Fashion",
            translationKey: "womanFashion",
            arrow: true,
        },
        { name: "Men's Fashion", translationKey: "menFashion", arrow: true },
        { name: "Electronics", translationKey: "electronics", arrow: false },
        {
            name: "Home & Lifestyle",
            translationKey: "homeNlifestyle",
            arrow: false,
        },
        { name: "Medicine", translationKey: "medicine", arrow: false },
        {
            name: "Sports & Outdoor",
            translationKey: "sportNOutdoor",
            arrow: false,
        },
        { name: "Baby's & Toys", translationKey: "babyNToys", arrow: false },
        {
            name: "Groceries & Pets",
            translationKey: "groceriesNPets",
            arrow: false,
        },
        {
            name: "Health & Beauty",
            translationKey: "HealthNBeauty",
            arrow: false,
        },
    ];