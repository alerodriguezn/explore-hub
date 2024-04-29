import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Accommodation } from "@/lib/definitions";
import { StarIcon, LocationOnIcon } from "@/lib/icons";

export default function CarCard({accommodation} : {accommodation : Accommodation}) {
  return (
    <Card sx={{ display: "flex", borderRadius: "15px", padding: "12px"}}>
      <CardMedia
        component="img"
        sx={{ width: 250, objectFit: "cover", borderRadius: "15px 0 0 15px"}}
        image={accommodation.image}
        alt="Example"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {/* Title and rating box */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            
            { /* Title */ }
            <Typography component="div" variant="h5">
              {accommodation.name}
            </Typography>
            
            {/* Stars */}
            {accommodation.type === "Hotel" ?
              <Box component="div" sx={{ marginBottom: "15px", display: "flex", gap: "4px" }}>
              <StarIcon sx={{fontSize:"25px"}} color={accommodation.stars > 0 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"25px"}} color={accommodation.stars > 1 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"25px"}} color={accommodation.stars > 2 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"25px"}} color={accommodation.stars > 3 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"25px"}} color={accommodation.stars > 4 ? "primary" : "secondary"} fontSize="small"/>
            </Box>
            :
            <Box component="div" sx={{ width: "40px", backgroundColor: "#ffdebf", padding: "5px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Typography className="" variant="h6" color={"primary"}>
                  {accommodation.stars.toFixed(1)}
              </Typography>
            </Box>
            }
          </Box>
          <Chip
            className="mb-4"
            label={accommodation.type}
            size="small"
            color="secondary"
          />

          <Box className="mb-2" component="div" sx={{ display: "flex", gap: "2px"}}>
            <LocationOnIcon fontSize="small" color={"primary"}/>
            <Typography color={"gray"}>
              {`${accommodation.city} - ${accommodation.location}`}
            </Typography>
          </Box>          

          {/* Description */}
          <Typography variant="subtitle1" color="black" sx={{ maxWidth: "40ch", marginBottom: "15px" }}>
            {accommodation.description}
          </Typography>

          {/* Price */}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
              color="white"
              className="text-right bg-amber-600 px-4 rounded-lg font-bold"
            >
              Desde ${accommodation.price.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
