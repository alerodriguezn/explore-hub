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
    {displayName: "Tipo de combustible", name: "fuelType", filters:["Gasolina", "Diesel", "Electrico"]},
    {displayName: "Transmisión", name: "transmission", filters:["Manual", "Automatico"]},
    {displayName: "Pasajeros", name: "passengers", filters:["2", "4", "5", "7"]},
  ]
  
  return (
    <div className='w-full h-full flex justify-center items-center position-relative'>
      <div style={{
        position: "absolute",
        left: "5%",
        top: "30%",
        width: "100%"
      }}>
        <Filter onFilterChange={handleFilterChange} categories={categories}/>
      </div>
      <Stack direction="column" spacing={2} sx={{ marginTop: "5px" }}>
        {cars.map((item, index) => (
          <CarCard transport={item} key={index}/>
        ))}
      </Stack>
    </div>
  );
}