import { TopMenu } from "@/components/ui/TopMenu";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      {children}
    </main>
  );
}