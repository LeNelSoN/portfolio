import type { Metadata } from "next";
import "./globals.css";

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
      <body
      >
        {children}
      </body>
    </html>
  );
}
