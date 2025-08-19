export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background/80 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 p-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--secondary))_1px,transparent_1px)] [background-size:16px_16px]"></div>
      {children}
    </div>
  );
}
