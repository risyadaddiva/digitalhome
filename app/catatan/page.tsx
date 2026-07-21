import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPage from "@/components/pages/BlogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catatan Perjalanan",
  description:
    "Belajar dari PMII. Belajar dari Coffee Shop. Belajar dari Gunung. Belajar dari Hidup. Ini adalah catatan-catatan kecil dari perjalanan yang masih terus berlanjut.",
};

export default function Catatan() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <BlogPage />
      </main>
      <Footer />
    </>
  );
}
