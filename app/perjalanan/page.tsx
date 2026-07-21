import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JourneyPage from "@/components/pages/JourneyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perjalanan",
  description:
    "Setiap tahun adalah bab baru. Ini adalah cerita perjalanan saya — bukan sekadar daftar pencapaian, tetapi pelajaran yang diambil dari setiap langkah.",
};

export default function Perjalanan() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <JourneyPage />
      </main>
      <Footer />
    </>
  );
}
