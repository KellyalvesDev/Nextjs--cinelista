import type { Metadata } from "next";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "Cinelista",
  description: "No cinelista, você encontra os titulos mais populares, em alta e melhor avaliados em um só lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header/>
        {children}
        <footer/>
      </body>
    </html>
  );
}

