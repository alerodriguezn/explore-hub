"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTheme } from '@mui/material/styles';
import { Stack } from "@mui/system";
import Link from "next/link";

export const TopMenu = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={2} sx={{ marginTop: "5px", justifyContent: "space-between" }}>
      
      {/* Logo and name of the app */}
      <Link href="/home">
        <Stack direction="row" spacing={2} sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/imgs/logo-nw.png" alt="Logo" width={125} height={125} />
          <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, color: "#D97227", fontWeight: "bold", display: "flex", alignItems: "center"}}
          >
          ExploreHub
          </Typography>
        </Stack>
      </Link>

      {/* Shopping cart and user profile */}
      <Box sx={{ 
      display: "flex", 
      gap: "20px", 
      height: "80px", 
      backgroundColor: theme.palette.secondary.main, 
      borderRadius: "0 0 0 60px",
      padding: "30px",
      }}>
        {/* Shopping cart */}
        <IconButton>
          <Link href="/home/checkout">
          <ShoppingCartIcon sx={{ color: "#D97227", fontSize: "40px" }} />
          </Link>
        </IconButton>

        {/* User profile */}
        <IconButton>
          <Link href={'/home/profile'} key={'/home/profile' }>
            <AccountCircleIcon color="primary" sx={{ fontSize: "40px" }} />
            <Typography color="primary" component="p" sx={{ flexGrow: 1, fontWeight: "bold", marginLeft: "10px", fontSize:"20px"}}>
              My Account
            </Typography>
          </Link>
        </IconButton>
      </Box>
    </Stack>
  );
};
