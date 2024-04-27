"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";

export const PlaceOrder = () => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl shadow-xl p-7">
      <h2 className="text-2xl mb-2 font-bold">Dirección de Facturación</h2>
      <div className="mb-10">
        <p className="text-xl">Alejandro Uscátegui </p>
        <p> Carrera 7 N° 40-62. Bandera de Colombia Bogotá</p>
        <p> Calle 18 N° 118-250</p>
        <p>21007</p>
        <p>Bogotá, Colombia</p>
      </div>

      <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

      <h2 className="text-2xl mb-2">Order Summary</h2>
      <div className="grid grid-cols-2">
        <span>No. Productos</span>
        <span className="text-right">2</span>

        <span>Subtotal</span>
        <span className="text-right">$190</span>

        <span>Taxes (10%) </span>
        <span className="text-right">$3</span>

        <span className="text-2xl mt-5">Total:</span>
        <span className="text-right mt-5 text-2xl">$193</span>
      </div>

      {/* Disclaimer */}
      <div className="mt-5 mb-2 w-full">
        <p className="mb-5">
          <span className="text-xs">
            Al crear tu orden, aceptas todos nuestos
            <a href="#" className="underline">
              {" "}
              términos y condiciones{" "}
            </a>
            y{" "}
            <a href="#" className="underline">
              políticas de privacidad
            </a>
            .
          </span>
        </p>

        <button className="bg-primary text-white w-full py-3 rounded-xl font-bold">
          Confirmar Orden
        </button>
      </div>
    </div>
  );
};
