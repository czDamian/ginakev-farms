import "./globals.css";
import localFont from "next/font/local";

const erasItcDemi = localFont({
  src: [
    {
      path: "./font/eras-itc-demi.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-eras-itc-demi",
  display: "swap",
});

export const metadata = {
  title: "Ginakev Farms",
  description: "Ginakev Farms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${erasItcDemi.className} antialiased`}>{children}</body>
    </html>
  );
}
