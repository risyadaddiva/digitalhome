import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsPage from "@/components/pages/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyek",
  description:
    "Setiap proyek punya cerita. Bukan sekadar daftar teknologi — tetapi alasan di baliknya, masalah yang ingin dipecahkan, dan pelajaran yang didapat.",
};

export default function Proyek() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <ProjectsPage />
      </main>
      <Footer />
    </>
  );
}
