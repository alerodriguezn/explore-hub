import NavBar from "@/components/ui/NavBar";
import { TopMenu } from "@/components/ui/TopMenu";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="w-full fixed top-0 z-50 bg-gray-200">
        <TopMenu />
        <NavBar />
      </div>
      <div className="pt-20 pb-20">
        <div style={{height:"146px"}} />
        {children}
      </div>
    </main>
  );
}