import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./global.css";
import { StyledComponentsRegistry } from "@/lib";
import { Footer, Header, ParticlesAnimation } from "@/components/shared";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razvan Kokovics Portfolio",
  description: "Razvan Kokovics Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <ParticlesAnimation />
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
