import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';

interface Props {
  promo: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

export default function PromoCard({ promo }: Props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <Image
          src={promo.image}
          alt={promo.name}
          className="object-cover w-full h-48 rounded-t-lg"
          width={300}
          height={300}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", gap : "8px" }}>
            {promo.name}
            <CampaignIcon sx={{ fontSize: 30, color: "#D97227" }} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {promo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
