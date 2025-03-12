import type { Metadata } from "next";
import "./globals.css";
import NavBarDesktop from "./components/navbar/NavBar";
import MobileNavBar from "./components/navbar/MobileNavBar";

export const metadata: Metadata = {
  title: "Nelis Valentin - Portfolio",
  description: "Développeur Web passionné spécialisé en Next.js, Java & Spring Boot. Découvrez mes projets et mon expertise en développement moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Métadonnées pour LinkedIn */}
        <meta property="og:title" content="Découvrez mon Portfolio - Nelis Valentin" />
        <meta property="og:description" content="Un portfolio interactif façon 'Livre dont vous êtes le héros'. Venez explorer mon parcours !" />
        <meta property="og:image" content="https://nelisvalentin.vercel.app/assets/preview.webp" />
        <meta property="og:url" content="https://nelisvalentin.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Métadonnées Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Découvrez mon Portfolio - Nelis Valentin" />
        <meta name="twitter:description" content="Un portfolio interactif façon 'Livre dont vous êtes le héros'. Venez explorer mon parcours !" />
        <meta name="twitter:image" content="https://nelisvalentin.vercel.app/assets/preview.webp" />
      </head>
      <body
      >
        <NavBarDesktop />
        {children}
        <MobileNavBar />
      </body>
    </html>
  );
}
