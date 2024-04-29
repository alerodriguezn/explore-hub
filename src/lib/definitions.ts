export type Accommodation = {
    id: number;
    name: string;
    type: string;
    city: string;
    location: string;
    description: string;
    stars: number;
    price: number;
    image: string;
};
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

export type Activity = {
    id: number;
    name: string;
    type: string;
    image: string;
    description: string;
    duration: string;
    price: number;
    stars: number;
    labels: string[];
};

export type FilterProp = {
    [key: string]: string[];
};

export type FilterCategory = {
    displayName: string;
    name: string;
    filters: string[];
}