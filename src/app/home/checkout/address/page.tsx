import { AddressForm } from "./ui/AdressForm";

export default async function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <h2 className="text-2xl font-bold mb-2">Dirección de Facturación</h2>

        <AddressForm />
      </div>
    </div>
  );
}
