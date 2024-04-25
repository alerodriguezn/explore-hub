import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

export default function TransportCard() {
  const carImg : string = "/imgs/carsexample/logan_lrg.jpg"
  const carName : string = "Renault Logan";
  const carRating : number = 5;
  const carDescription : string = "Aquí va una descripción corta del hotel, por ejemplo esto .";
  const gearType : string = "Automatico";
  const fuelType : string = "Gasolina";

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit: "contain"}}
        image={carImg}
        alt="Example"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {/* Title and rating box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5">
              {carName}
            </Typography>
            <Typography
              component="div"
              variant="h5"
              sx={{ marginLeft: "10px", display: "flex", gap: "4px" }}
            >
              {/* Stars */}
              <Image src="/star.svg" alt="Star" width={15} height={15} />
              <Image src="/star.svg" alt="Star" width={15} height={15} />
              <Image src="/star.svg" alt="Star" width={15} height={15} />
              <Image src="/star.svg" alt="Star" width={15} height={15} />
              <Image src="/star.svg" alt="Star" width={15} height={15} />
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} sx={{ marginTop: "5px" }}>
            <Chip
              icon={<SettingsIcon sx={{color: 'white'}}/>}
              label={gearType}
              size="small"
              style={{color: 'white', background: '#d97706'}}
            />
            <Chip
              icon={<LocalGasStationIcon sx={{color: 'white'}}/>}
              label={fuelType}
              size="small"
              style={{color: 'white', background: '#d97706'}}
            />
            <Chip
              label="Comodo"
              size="small"
              style={{color: 'white', background: '#d97706'}}
            />
          </Stack>

          <Typography
            variant="subtitle1"
            color="black"
            sx={{ maxWidth: "32ch" }}
          >
            Aquí va una descripción corta del hotel, por ejemplo esto .
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
              color="white"
              className="text-right bg-amber-600 px-4 rounded-lg font-bold"
            >
              $100
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
