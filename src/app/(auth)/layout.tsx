export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-white p-4 dark:from-blue-950/80 dark:via-slate-900 dark:to-background">
      {children}
    </div>
  );
}
