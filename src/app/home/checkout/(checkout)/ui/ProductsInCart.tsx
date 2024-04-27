"use client";

import Image from "next/image";
import { getCars } from "@/lib/placeholder-data";

export const ProductsInCart = () => {
  const cars = getCars();

  return (
    <>
      <div className="flex flex-col">
        {cars.map((car, index) => (
          <div key={index} className="flex mb-5 items-center">
            <div className="px-4 bg-white rounded-lg mr-4 ">
              <Image
                src={car.image}
                alt={"Product"}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
                width={100}
                height={100}
              />
            </div>

            <div>
              <span>{car.name}</span>
              <p className="font-bold">${car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
