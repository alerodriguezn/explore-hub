"use client";

import AccommodationCard from '@/components/cards/AccommodationCard';
import { Stack } from "@mui/material";
import { Accommodation, FilterCategory, FilterProp } from '@/lib/definitions';
import Filter from "@/components/ui/Filter";
import { filterAccommodations } from '@/lib/placeholder-data';
import { useState } from 'react';
import { handleFilters } from '@/lib/util/filters';

export default function AccommodationPage() {
  const [selectedFilters, setSelectedFilters] = useState({});
  
  const accommodations : Accommodation[] = filterAccommodations(selectedFilters);
  
  const handleFilterChange = (category : string, filter : string, checked : boolean) => {
    setSelectedFilters((prev : FilterProp) => {
      return handleFilters(prev, category, filter, checked);
    });
  }

  const categories : FilterCategory[] = [
    {displayName: "Tipo", name: "type", filters:["Hotel", "Casa / Apartamento"]},
  ]

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
      <div style={{ width: '20%' }}>
        <Filter onFilterChange={handleFilterChange} categories={categories}/>
      </div>
      <div>
        <Stack direction="column" spacing={2}>
          {accommodations.map((item, index) => (
              <AccommodationCard accommodation={item} key={index}/>
          ))}
        </Stack>
      </div>
    </div>
  );
}