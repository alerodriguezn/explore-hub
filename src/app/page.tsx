"use client";
import Image from "next/image";
import Link from "next/link";
import MUIButton from "@/components/simple/button";
import { SnackbarProvider} from 'notistack'
import { InputControl, ModalComponent } from "@/components/commons";
import { useState } from "react";
export default function Home() {

  return (
    <SnackbarProvider>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center items-center">
        <Image
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={"/imgs/logo-eh.png"}
          alt="Logo de ExploreHub"
          width={200}
          height={200}
        />
        <p className="text-center font-bold text-xl">¿Para qué vas a usar ExploreHub?</p>
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
    </main>
    </SnackbarProvider>

  );
}


/*
 
*/