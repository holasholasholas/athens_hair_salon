import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athens Hair Salon — Bespoke Hair Artistry",
  description:
    "Athens is a luxury hair salon offering bespoke cuts, technical colour, and transformative treatments. Experience the art of hair in an atmosphere of refined elegance.",
  keywords: "luxury hair salon, balayage, hair colour, keratin treatment, hair artistry",
  openGraph: {
    title: "Athens Hair Salon — Bespoke Hair Artistry",
    description:
      "Experience bespoke cuts, technical colour, and transformative treatments at Athens — where hair is elevated to art.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500&family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FDFDFD] text-[#2C2C2C] antialiased">
        {children}
      </body>
    </html>
  );
}
