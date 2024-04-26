import NavBar from "@/components/ui/NavBar";
import { TopMenu2 } from "@/components/ui/TopMenu2";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="w-full fixed top-0">
        <TopMenu2 />
        <NavBar />
      </div>
      <div className="pt-20">
        <div style={{height:"146px"}} />
        {children}
      </div>
    </main>
  );
}