"use client"
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import { nunito } from "@/config/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";

const loginOptions = [
  {
    icon: "/mail.svg",
    text: "Email",
  },
  {
    icon: "/google.svg",
    text: "Google",
  },
  {
    icon: "/facebook.svg",
    text: "Facebook",
  },
];

export default function LoginPage() {

  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center bg-white rounded-xl p-10">
        <h2 className="text-3xl text-center font-bold">
          Bienvenido a <span className="color-primary">ExploreHub</span>
        </h2>
        <p className="font-light text-center">Disfruta la experiencia planeada para ti </p>
        <Image
          width={200}
          height={200}
          src={"/imgs/logo-eh.png"}
          alt="Logo de ExploreHub"
        />
        <Stack spacing={2}>
          {loginOptions.map((option) => (
            <Button
              onClick={() => {
                router.push("/home/");
  
              }}
              key={option.text}
              sx={{
                borderRadius: "18px",
                border: "2px solid black",
                color: "black",
                textTransform: "none",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Image
                src={option.icon}
                alt={option.text}
                width={24}
                height={24}
                priority
              />
              <span className={`font-bold`}>
                Iniciar Sesión con {option.text}
              </span>
            </Button>
          ))}
        </Stack>

        <Link className="mt-8 underline font-bold" href="/auth/client/new-account">
          Crear Nueva Cuenta
        </Link>
      </div>
    </div>
  );
}
