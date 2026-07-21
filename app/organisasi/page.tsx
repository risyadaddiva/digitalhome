import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationsPage from "@/components/pages/OrganizationsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organisasi",
  description:
    "Setiap organisasi adalah sekolah kehidupan yang berbeda. Di sini saya berbagi apa yang saya pelajari dari masing-masing.",
};

export default function Organisasi() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <OrganizationsPage />
      </main>
      <Footer />
    </>
  );
}
