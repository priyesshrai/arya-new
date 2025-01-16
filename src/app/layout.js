import "./globals.css";
import { Syne } from "next/font/google";
import { ReactLenis } from "lenis/react";

export const metadata = {
  title: "Arya Maurya - Graphic & UI/UX Portfolio",
  description: "Showcasing a blend of creativity and functionality through graphic and UI/UX designs. Explore projects that bring ideas to life with visually compelling and user-friendly experiences.",
};

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "700", '800'],
  variable: "--font-syne",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable}`}>
        {/* <ReactLenis root> */}
          <main className="main">
            {children}
          </main>
        {/* </ReactLenis> */}
      </body>
    </html>
  );
}
