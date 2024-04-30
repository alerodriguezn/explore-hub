/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Link from "next/link";
import MUIButton from "@/components/simple/button";
import Typography from "@mui/material/Typography";
import { SnackbarProvider} from 'notistack'
import { InputControl, ModalComponent } from "@/components/commons";
import { useEffect, useState } from "react";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
export default function Home() {
  const profile = {
    name: "John Doe",
    age: 30,
    location: "San Francisco",
    travelPreferences: ["Beaches", "Historic Sites"],
    notifications: [
      { 
        id: 1, 
        type: "Recent booking updates", 
        message: "Flight details\nNew booking confirmation received", 
        time: "Hace 1 minuto", 
        icon: "flight", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 2, 
        type: "Special Offer", 
        message: "¡Oferta especial! 20% de descuento en paquetes de viaje a destinos seleccionados.", 
        time: "hace 30 minutos", 
        icon: "offer", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 3, 
        type: "Reminder", 
        message: "¡Tu viaje a Bali está a punto de comenzar! No olvides completar tu check-in y revisar tu itinerario.", 
        time: "hace 1 día", 
        icon: "reminder", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 4, 
        type: "New Review", 
        message: "¡Nueva reseña en tu experiencia de buceo en Tailandia! Echa un vistazo para ver lo que otros viajeros están diciendo.", 
        time: "hace 2 horas", 
        icon: "review", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 5, 
        type: "Upcoming Event", 
        message: "¡No te pierdas el festival de música en Ibiza este fin de semana! Asegúrate de tener tus boletos listos.", 
        time: "hace 3 días", 
        icon: "event", 
        read: false, 
        profileImage: "E" 
      },
      { 
        id: 6, 
        type: "Payment Confirmation", 
        message: "Confirmación de pago recibida para tu excursión de safari en África. ¡Prepárate para una aventura inolvidable!", 
        time: "hace 1 hora", 
        icon: "payment", 
        read: false, 
        profileImage: "E" 
      }
    ],
    filters: {
      flightDetails: true,
      hotelBookings: true,
      travelReviews: false,
      tripMentions: false,
      purchaseHistory: false,
      messages: true
    }
  };
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);
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