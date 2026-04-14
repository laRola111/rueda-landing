import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rueda La Rola Media | Your Art Comes to Life · Austin, TX",
  description:
    "Bordado, DTF, Vehicle Wraps, Marketing Digital y Diseño Gráfico en Austin, TX. Llámanos al (469) 428-6018 · Lun–Sáb 8am–6pm. Your Art Comes to Life.",
  keywords: [
    "bordado Austin TX",
    "DTF printing Austin Texas",
    "vehicle wraps Austin",
    "diseño gráfico Austin Texas",
    "marketing digital Austin",
    "Rueda La Rola Media",
    "custom embroidery Austin",
    "impresión DTF Texas",
  ],
  openGraph: {
    title: "Rueda La Rola Media | Your Art Comes to Life",
    description:
      "Tu agencia creativa en Austin, TX. Bordado, DTF, Vehicle Wraps, Marketing Digital y más. Contáctanos hoy.",
    type: "website",
    locale: "es_US",
    alternateLocale: ["en_US"],
    url: "https://ruedalarolamedia.com",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0c0b16" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
