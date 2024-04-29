import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Activity } from "@/lib/definitions";
import { StarIcon, TimeIcon } from "@/lib/icons";

export default function ActivityCard({activity} : {activity : Activity}) {
  return (
    <Card sx={{ display: "flex", borderRadius: "15px", padding: "12px"}}>
      <CardMedia
        component="img"
        sx={{ width: 250, objectFit: "cover", borderRadius: "15px 0 0 15px" }}
        image={activity.image}
        alt="Example"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {/* Title and rating box */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography fontSize={25} component="div" variant="h6">
              {activity.name}
            </Typography>
            <Box
              component="div"
              sx={{ marginLeft: "50px", display: "flex", gap: "4px" }}
            >
              <TimeIcon fontSize="medium"/>
              <Typography>
                {activity.duration}
              </Typography>
            </Box>
          </Box>

          <Typography component="div" variant="body2" className="bg-gray-200 inline-block pl-1 pr-1 rounded">
            {activity.type}
          </Typography>

          <Box
              component="div"
              sx={{ marginBottom: "15px", display: "flex", gap: "4px" }}
            >
              {/* Stars */}
              <StarIcon sx={{fontSize:"15px"}} color={activity.stars > 0 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"15px"}} color={activity.stars > 1 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"15px"}} color={activity.stars > 2 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"15px"}} color={activity.stars > 3 ? "primary" : "secondary"} fontSize="small"/>
              <StarIcon sx={{fontSize:"15px"}} color={activity.stars > 4 ? "primary" : "secondary"} fontSize="small"/>
            </Box>

          <Stack direction="row" spacing={.5} sx={{ marginBottom: "15px" }}>
            {activity.labels.map((item, index) => (
                <Chip
                label={item}
                size="small"
                color="secondary"
              />
            ))}
          </Stack>

          <Typography
            variant="subtitle1"
            color="black"
            sx={{ maxWidth: "40ch", marginBottom: "15px" }}
          >
            {activity.description}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
              color="white"
              className="text-right bg-amber-600 px-4 rounded-lg font-bold"
            >
              ${activity.price.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
