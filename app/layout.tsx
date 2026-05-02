import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matej Novak | Web Designer",
  description:
    "Minimal bilingual portfolio for a Slovak web designer with global internship experience.",
  verification: {
    google: "31UhUer78EgeNynWhjMWbnf0uFfN7G0qwqrlB10HhbU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
