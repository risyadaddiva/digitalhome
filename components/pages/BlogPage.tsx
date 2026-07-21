"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  thumbnail: string;
  content: string; // reading time (minutes as string)
}

const samplePosts = [
  {
    title: "Belajar dari PMII: Ketika Organisasi Mengajarkan Lebih Banyak dari Kelas",
    link: "#",
    pubDate: "2026-06-01",
    categories: ["Organisasi", "Refleksi", "PMII"],
    thumbnail: "",
    content: "5",
  },
  {
    title: "Apa yang Secangkir Kopi Ajarkan tentang Melayani",
    link: "#",
    pubDate: "2026-05-15",
    categories: ["Barista", "Kehidupan", "Refleksi"],
    thumbnail: "",
    content: "4",
  },
  {
    title: "Belajar dari Gunung: Pelajaran yang Tidak Ada di Kurikulum",
    link: "#",
    pubDate: "2026-04-20",
    categories: ["Alam", "Mahapeka", "Refleksi"],
    thumbnail: "",
    content: "6",
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/medium")
      .then((r) => r.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        } else {
          setPosts(samplePosts);
        }
      })
      .catch(() => setPosts(samplePosts))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section style={{ minHeight: "100vh", padding: "8rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        {/* Header */}
        <AnimatedSection>
          <div style={{ marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "0.75rem",
              }}
            >
              Catatan Perjalanan
            </p>
            <h1
              style={{
                fontFamily: "var(--font-lora, serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
                lineHeight: "1.25",
                marginBottom: "1rem",
              }}
            >
              Catatan-catatan kecil dari perjalanan.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: "1.8",
                maxWidth: "520px",
              }}
            >
              Belajar dari PMII. Belajar dari coffee shop. Belajar dari gunung.
              Belajar dari skripsi. Belajar dari hidup. Karena setiap momen
              punya pelajaran — asal kita mau berhenti sejenak untuk
              memperhatikannya.
            </p>
          </div>
        </AnimatedSection>

        {/* Posts */}
        {loading ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: "140px",
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border-subtle)",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {posts.map((post, index) => (
              <AnimatedSection key={`${post.link}-${index}`} delay={index * 0.07}>
                <Link
                  href={post.link}
                  target={post.link === "#" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <article
                    style={{
                      padding: "1.5rem 0",
                      borderBottom: "1px solid var(--color-border-subtle)",
                      transition: "opacity 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.75")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.opacity = "1")
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        flexWrap: "wrap",
                        marginBottom: "0.625rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-text-faint)",
                        }}
                      >
                        {formatDate(post.pubDate)}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-text-faint)",
                        }}
                      >
                        ·
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-text-faint)",
                        }}
                      >
                        {post.content} menit baca
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "var(--font-lora, serif)",
                        fontSize: "1.125rem",
                        color: "var(--color-text)",
                        lineHeight: "1.5",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {post.title}
                    </h2>

                    {post.categories.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.375rem",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                          {post.categories.map((cat) => (
                            <span
                              key={cat}
                              style={{
                                fontSize: "0.75rem",
                                padding: "0.2rem 0.625rem",
                                borderRadius: "100px",
                                border: "1px solid var(--color-border-subtle)",
                                color: "var(--color-text-faint)",
                              }}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                        <span
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--color-accent)",
                          }}
                        >
                          Baca →
                        </span>
                      </div>
                    )}
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Medium link */}
        <AnimatedSection delay={0.3}>
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link
              href="https://medium.com/@risyadaddiva"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ display: "inline-flex" }}
            >
              Baca semua di Medium →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
