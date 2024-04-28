"use client";

import CarCard from "@/components/cars/CarCard";
import { useState } from "react";
import { FilterCategory, Transport, FilterProp } from "@/lib/definitions";
import { Stack } from "@mui/material";
import { filterCars } from "@/lib/placeholder-data";
import Filter from "@/components/ui/Filter";
import { handleFilters } from "@/lib/util/filters";

export default function AccommodationPage() {  
  const [selectedFilters, setSelectedFilters] = useState({});
  
  const cars : Transport[] = filterCars(selectedFilters);
  
  const handleFilterChange = (category : string, filter : string, checked : boolean) => {
    setSelectedFilters((prev : FilterProp) => {
      return handleFilters(prev, category, filter, checked);
    });
  }

  const categories : FilterCategory[] = [
    {displayName: "Tipo", name: "type", filters:["Privado", "Compartido"]},
    {displayName: "Tipo de combustible", name: "fuelType", filters:["Gasolina", "Hibrido", "Electrico"]},
    {displayName: "Transmisión", name: "transmission", filters:["Manual", "Automatico"]},
    {displayName: "Pasajeros", name: "passengers", filters:["4", "5", "7"]}
  ]
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
      <div style={{ width: '20%' }}>
        <Filter onFilterChange={handleFilterChange} categories={categories}/>
      </div>
      <div>
        <Stack direction="column" spacing={2}>
          {cars.map((item, index) => (
            <CarCard transport={item} key={index}/>
          ))}
        </Stack>
      </div>
    </div>
  );
}
