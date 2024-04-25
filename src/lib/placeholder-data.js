export const getCars = () => {
    return [ 
    {
    id: "1",
    name: "Renault Logan",
    image: "/imgs/carsexample/logan_lrg.jpg",
    price: 100,
    description: ["Cobertura por daño y robo con franquicia","Seguro de responsabilidad civil","Conductor adicional","Cancelación hasta 24 horas antes del retiro"],
    rating: 4,
    fuelType: "Gasolina",
    transmission: "Automatico",
    passengers: 4,
  },
  {
    id: "2",
    name: "Suzuki Swift",
    image: "/imgs/carsexample/swift_4_doors_lrg.jpg",
    price: 90,
    description: ["Cobertura por daño y robo con franquicia","Seguro de responsabilidad civil","Conductor adicional"],
    rating: 3,
    fuelType: "Diesel",
    transmission: "Automatico",
    passengers: 5,
  }
]};

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