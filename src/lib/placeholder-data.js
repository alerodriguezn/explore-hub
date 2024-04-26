import cars  from "./exampleData/cars.json";

export const getCars = () => {
    return cars.cars
}

export const filterCars = (filters) => {
  return getCars().filter(car => {
    return Object.keys(filters).every(filterKey => {
        return String(filters[filterKey]).includes(String(car[filterKey]));
    });
  }); 
}


export const getInterestingPlaces = () => {
  return [
    {
      id: "1",
      name: "Playa Puerto Viejo",
      country: "Costa Rica",
      city: "Puerto Viejo",
      image: "/imgs/places/puertoviejo.jpg"
    },
    {
      id: "2",
      name: "Parque Nacional Tortuguero",
      country: "Costa Rica",
      city: "Tortuguero",
      image: "/imgs/places/tortuguero.jpg"
    },
    {
      id: "3",
      name: "Volcán Arenal",
      country: "Costa Rica",
      city: "Alajuela",
      image: "/imgs/places/volcanarenal.jpeg",
    },
    {
      id: "4",
      name: "Reserva Bosque Nuboso",
      country: "Costa Rica",
      city: "Monteverde",
      image: "/imgs/places/monteverde.jpg",
    }
  ]
};