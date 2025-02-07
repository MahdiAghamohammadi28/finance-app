import { Poppins } from "next/font/google";
import "./globals.css";
import useServerDarkMode from "@/hooks/useServerDarkMode";

const poppins = Poppins({
  weight: ["100", "300", "400", "600", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Finance App",
    default: "Finance App",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const theme = useServerDarkMode();
  return (
    <html lang="en" className={theme}>
      <body className={`${poppins.className} min-h-screen flex flex-col px-8`}>
        {children}
      </body>
    </html>
  );
}
