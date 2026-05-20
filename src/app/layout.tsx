import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Maison d\'Imprimeur | Imprimerie de Haute Précision',
  description: 'Votre expert en impression offset, digitale et finitions premium. Spécialiste de la papeterie haut de gamme pour les entreprises et les particuliers.',
  openGraph: {
    "title": "Maison d'Imprimeur",
    "description": "L'excellence en impression sur mesure.",
    "type": "website",
    "siteName": "Maison d'Imprimeur"
  },
};


const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
