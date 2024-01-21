import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="absolute loader animate-bounce">
        <Loader />
      </div>
      <div className="absolute bottom-10 left-10 ">
        <img src="/logo.png" alt="logo" className="" />
      </div>

      {children}
    </>
  );
}
