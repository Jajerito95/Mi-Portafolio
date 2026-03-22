import "./globals.css";

export const metadata = {
  title: "ReyKamiS5 — Portafolio",
  description: "Portafolio personal de ReyKamiS5. Joven apasionado por la tecnología, el gaming y la moderación de comunidades.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `window.history.scrollRestoration = 'manual'; window.scrollTo(0, 0);`
        }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f]">
        {children}
      </body>
    </html>
  );
}