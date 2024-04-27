import Link from "next/link";
import Image from "next/image";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from "./ui/PlaceOrder";

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <h2 className="text-2xl font-bold">Verifica tu Compra</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Edita tu orden</span>
            <Link href={"/cart"} className="underline mb-5">
              Edit Cart
            </Link>

            <ProductsInCart />
          </div>
          {/* Order Summary */}
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
}
