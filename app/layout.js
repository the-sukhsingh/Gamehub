
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "GameHub",
  description: "A single Place where you can play interactive games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` relative`}>
        <div className="relative">
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}
