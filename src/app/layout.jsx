import "./globals.css";

export const metadata = {
  title: "Jessie Cullen",
  description: "git-chad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">{children}</body>
    </html>
  );
}
