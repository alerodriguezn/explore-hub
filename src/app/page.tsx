"use client";
import Image from "next/image";
import Link from "next/link";
import MUIButton from "@/components/simple/button";
import Typography from "@mui/material/Typography";
import { SnackbarProvider} from 'notistack'
import { InputControl, ModalComponent } from "@/components/commons";
import { useState } from "react";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
export default function Home() {

  return (
    <SnackbarProvider>
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div>
        <EmblaCarousel />
        <div className="flex flex-row justify-center items-center" style={{
          position: "absolute",
          bottom: "0",
          left: "0",
        }}>
          <Image
            className="transition duration-300 ease-in-out "
            src={"/imgs/logo-nw.png"}
            alt="Logo de ExploreHub"
            width={650}
            height={650}
          />
          <div>
            <Typography
              component="div"
              sx={{ flexGrow: 1, color: "black", fontWeight: "light", fontSize: "1.5rem"}}
            >
              Bienvenido a
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1, color: "#D97227", fontWeight: "bold" }}
            >
              ExploreHub
            </Typography>
            <div className="flex gap-4 mt-6">
              <Link href="/auth/client/login" className="bg-primary text-white p-2 rounded-lg hover:bg-amber-500 w-40 text-center content-center ">
                Explorar Servicios
              </Link>
              {}
              <Link href="/auth/business/new-account" className="bg-primary text-white p-2 rounded-lg hover:bg-amber-500 w-40 text-center content-center  ">
                Vender Servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    </SnackbarProvider>

  );
}