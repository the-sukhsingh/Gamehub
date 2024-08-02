import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Games",
  description: "A single Place where you can play interactive games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <div className="relative">
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}