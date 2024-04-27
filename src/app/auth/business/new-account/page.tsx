import RegisterForm from "./ui/RegisterForm";

export default function NewAccountPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl p-10 ">
        <h2 className="text-3xl text-center font-bold mt-2">
          Bienvenido a <span className="color-primary">ExploreHub</span>
        </h2>
        <p className="font-light">Disfruta la experiencia planeada para ti </p>
        <RegisterForm />
      </div>
    </div>
  );
}
