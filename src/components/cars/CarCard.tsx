import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Transport } from "@/lib/definitions";
import { SettingsIcon, LocalGasStationIcon, StarIcon, PeopleIcon } from "@/lib/icons";

export default function CarCard({transport} : {transport : Transport}) {
  return (
    <Card sx={{ display: "flex", borderRadius: "15px", padding: "12px"}}>
      <CardMedia
        component="img"
        sx={{ width: 300, objectFit: "contain"}}
        image={transport.image}
        alt="Example"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {/* Title and rating box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}>
            <Typography component="div" variant="h5">
              {transport.name}
            </Typography>
            
            <Box
              component="div"
              sx={{ marginLeft: "50px", display: "flex", gap: "4px" }}
            >
              <PeopleIcon fontSize="medium"/>
              <Typography>
                {transport.passengers} ocupantes
              </Typography>
            </Box>

          </Box>

          <Box
              component="div"
              sx={{ marginBottom: "15px", display: "flex", gap: "4px" }}
            >
              {/* Stars */}
              <StarIcon sx={{fontSize:"15px"}} color={transport.rating > 0 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"15px"}} color={transport.rating > 1 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"15px"}} color={transport.rating > 2 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"15px"}} color={transport.rating > 3 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"15px"}} color={transport.rating > 4 ? "primary" : "secondary"} fontSize="small"/>
            </Box>

          <Stack direction="row" spacing={2} sx={{ marginBottom: "15px" }}>
            <Chip
              icon={<SettingsIcon sx={{color: 'white'}}/>}
              label={transport.transmission}
              size="small"
              color="secondary"
            />
            <Chip
              icon={<LocalGasStationIcon sx={{color: 'white'}}/>}
              label={transport.fuelType}
              size="small"
              color="secondary"
            />
          </Stack>

          <Typography
            variant="subtitle1"
            color="black"
            sx={{ maxWidth: "40ch", marginBottom: "15px" }}
          >
            {transport.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
              color="white"
              className="text-right bg-amber-600 px-4 rounded-lg font-bold"
            >
              ${transport.price.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
