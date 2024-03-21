import type { Metadata } from "next";
import { IBM_Plex_Sans} from 'next/font/google'
import "./globals.css";
import { NotificationsProvider} from '@/context/NotificationsContext'

const ibm_plex_sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400','500', '600', '700'] })

export const metadata: Metadata = {
  title: "Rumco Peru - Construcción, Ingenieros y Arquitectos",
  description: "Líderes en construcción de casas y proyectos residenciales, ofrecemos soluciones innovadoras y de alta calidad en diseño de vivienda y cimentación. Desde encofrado y vaciado de concreto hasta asentamiento de ladrillo, garantizamos resultados excepcionales en cada etapa.",
  openGraph:{
    title: "Rumco Peru - Construcción, Ingenieros y Arquitectos ",
    description: "Líderes en construcción de casas y proyectos residenciales, ofrecemos soluciones innovadoras y de alta calidad en diseño de vivienda y cimentación. Desde encofrado y vaciado de concreto hasta asentamiento de ladrillo, garantizamos resultados excepcionales en cada etapa.",
    url: "https://rumco.pe/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="es">
    <head>
      <link rel="canonical" href="https://rumco.pe/" />
    </head>
    <body className={ibm_plex_sans.className}>
        <NotificationsProvider>
        {children}
        </NotificationsProvider>
      </body>
    </html>
  );
}
