export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center h-screen bg-gradient-to-b from-[#D97227] to-slate-200">
      <div className="w-full flex justify-center px-10">
        {children}
      </div>
    </main>
  );
}
