'use client'
import "./globals.css";
import Lenis from "@studio-freight/lenis";

export const metadata = {
  title: "Jessie Cullen",
  description: "git-chad",
};

export default function RootLayout({ children }) {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <html lang="en">
      <body className="h-screen">{children}</body>
    </html>
  );
}
