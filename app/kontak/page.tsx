import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPage from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Ada cerita yang ingin dibagikan? Ada kolaborasi yang ingin dibangun? Mari berbincang.",
};

export default function Kontak() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
