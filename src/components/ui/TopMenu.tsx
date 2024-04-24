"use client";

import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const TopMenu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Image src="/imgs/logo-eh.png" alt="Logo" width={100} height={100} />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#D97227", fontWeight: "bold" }}
          >
            ExploreHub
          </Typography>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <IconButton>
              <ShoppingCartIcon sx={{ color: "#D97227", fontSize: "35px" }} />
            </IconButton>

            <IconButton >
              <AccountCircleIcon sx={{ color: "#D97227", fontSize: "35px" }} />
              <Typography

                component="p"
                sx={{ flexGrow: 1, color: "#D97227", fontWeight: "bold", marginLeft: "10px"}}
              >
                My Account
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
