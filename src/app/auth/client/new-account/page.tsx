import Image from "next/image";
import RegisterForm from "./ui/RegisterForm";

export default function NewAccountPageClient() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center bg-white rounded-xl p-10 ">
        <Image
          src="/imgs/logo-nw.png"
          alt="Picture of the author"
          width={60}
          height={60}
        />

        <h2 className="text-3xl text-center font-bold mt-2">Crea tu Cuenta</h2>
        <p className="font-light">Disfruta la experiencia planeada para ti </p>
        <RegisterForm />
      </div>
    </div>
  );
}
