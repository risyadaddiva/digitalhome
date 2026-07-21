import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomePage from "@/components/pages/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risyad Addiva — Digital Home",
  description:
    "Halo, saya Risyad Addiva. Mahasiswa Teknik Informatika, Barista, dan pencinta alam yang sedang belajar bagaimana teknologi bisa menjadi jalan untuk menghadirkan manfaat bagi manusia.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
