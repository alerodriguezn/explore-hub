import CarCard from "@/components/cars/CarCard";
import { Transport } from "@/lib/definitions";
import { Stack } from "@mui/material";
import { getCars } from "@/lib/placeholder-data";

export default function AccommodationPage() {
  const cars : Transport[] = getCars();

  return (
    <div className='w-full h-screen flex justify-center items-center '>   
      <Stack direction="column" spacing={2} sx={{ marginTop: "5px" }}>
        {cars.map((item, index) => (
          <CarCard transport={item} key={index}/>
        ))}
      </Stack>
    </div>
  );
}