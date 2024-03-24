import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="flex flex-col min-h-screen bg-gray-900"
      >
        {children}
      </body>
    </html>
  );
}
