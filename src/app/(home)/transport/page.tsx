"use client";

import CarCard from "@/components/cars/CarCard";
import { useState } from "react";
import { FilterCategory, Transport } from "@/lib/definitions";
import { Stack } from "@mui/material";
import { getCars } from "@/lib/placeholder-data";
import Filter from "@/components/ui/Filter";

export default function AccommodationPage() {
  const cars : Transport[] = getCars();
  const categories : FilterCategory[] = [
    {name: "Tipo de combustible", filters:["Gasolina", "Diesel", "Eléctrico"]},
    {name: "Transmisión", filters:["Manual", "Automática"]},
    {name: "Pasajeros", filters:["2", "4", "5", "7"]},
  ]

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (category : string, filter : string) => {
    setSelectedFilters(prev => ({...prev, [category]: filter}));
  }

  const filteredCars = cars.filter(car => {
    // Aquí va la lógica de filtrado basada en selectedFilters
    // Esto depende de cómo estén estructurados los objetos de los autos y los filtros
  });

  return (
    <div className='w-full h-full flex justify-center items-center position-relative'>
      <div style={{
        position: "absolute",
        left: "5%",
        top: "30%",
        width: "100%"
      }}>
        <Filter categories={categories}/>
      </div>
      <Stack direction="column" spacing={2} sx={{ marginTop: "5px" }}>
        {cars.map((item, index) => (
          <CarCard transport={item} key={index}/>
        ))}
      </Stack>
    </div>
  );
}