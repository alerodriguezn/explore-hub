import RegisterForm from "./ui/RegisterForm";

export default function NewAccountPage() {
  return (
    <div className=" w-full sm:w-1/2 flex flex-col items-center  bg-white rounded-3xl my-2">
      <h2 className="text-3xl text-center font-bold mt-2">
        Bienvenido a <span className="color-primary">ExploreHub</span>
      </h2>
      <p className="font-light">Disfruta la experiencia planeada para ti </p>
      <RegisterForm />
    </div>
  );
}
