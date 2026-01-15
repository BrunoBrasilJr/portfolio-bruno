import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Bruno Brasil | Desenvolvedor Front-end",
  description:
    "Portfólio de Bruno Brasil, desenvolvedor front-end com foco em UI, UX e aplicações web modernas.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
