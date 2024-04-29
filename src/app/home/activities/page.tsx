"use client";

import CarCard from "@/components/cards/CarCard";
import { useState } from "react";
import { FilterCategory, Transport, FilterProp, Activity } from "@/lib/definitions";
import { Stack } from "@mui/material";
import { filterActivities, filterCars } from "@/lib/placeholder-data";
import Filter from "@/components/ui/Filter";
import { handleFilters } from "@/lib/util/filters";
import ActivityCard from "@/components/cards/ActivityCard";

export default function AccommodationPage() {  
  const [selectedFilters, setSelectedFilters] = useState({});
  
  const activities : Activity[] = filterActivities(selectedFilters);
  
  const handleFilterChange = (category : string, filter : string, checked : boolean) => {
      setSelectedFilters((prev : FilterProp) => {
      return handleFilters(prev, category, filter, checked);
    });
  }

  const categories : FilterCategory[] = [
    {displayName: "Tipo", name: "type", filters:["Actividad acuatica", "Tour guiado", "Excursion"]},
    {displayName: "Duración", name: "duration", filters:["1 dia", "3 horas", "8 horas"]},
    {displayName: "Etiquetas", name: "labels", filters:["Fauna", "Flora", "Aventura", "Cultura", "Volcan"]}
  ]
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
      <div style={{ width: '20%' }}>
        <Filter onFilterChange={handleFilterChange} categories={categories}/>
      </div>
      <div>
        <Stack direction="column" spacing={2}>
          {activities.map((item, index) => (
            <ActivityCard activity={item} key={index}/>
          ))}
        </Stack>
      </div>
    </div>
  );
}
