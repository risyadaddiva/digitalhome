import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Risyad Addiva — Digital Home",
    template: "%s — Risyad Addiva",
  },
  description:
    "Mahasiswa Teknik Informatika, Barista, dan penjelajah yang percaya bahwa teknologi seharusnya menjadi jalan untuk menghadirkan manfaat bagi manusia.",
  keywords: [
    "Risyad Addiva",
    "Teknik Informatika",
    "UIN SGD Bandung",
    "Machine Learning",
    "Barista",
    "PMII",
    "Mahapeka",
    "HIMATIF",
  ],
  authors: [{ name: "Risyad Addiva", url: "https://risyadaddiva.com" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://risyadaddiva.com",
    title: "Risyad Addiva — Digital Home",
    description:
      "Bukan sekadar portofolio. Ini adalah perjalanan hidup yang masih terus ditulis.",
    siteName: "Risyad Addiva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risyad Addiva — Digital Home",
    description:
      "Bukan sekadar portofolio. Ini adalah perjalanan hidup yang masih terus ditulis.",
    creator: "@RisyadAddiva",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${lora.variable}`}
      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
    >
      <body
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </body>
    </html>
  );
}
