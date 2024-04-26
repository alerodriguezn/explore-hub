export type Transport = {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string[];
    rating: number;
    fuelType: string;
    transmission: string;
    passengers: number;
};

export type FilterProp = {
    [key: string]: string[];
};

export type FilterCategory = {
    displayName: string;
    name: string;
    filters: string[];
}