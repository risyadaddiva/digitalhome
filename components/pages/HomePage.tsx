"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/data/site";
import statusData from "@/data/status.json";
import reflectionsData from "@/data/reflections.json";

export default function HomePage() {
  // Pick today's reflection by day-of-month (1–31)
  const dayOfMonth = new Date().getDate();
  const reflection = reflectionsData[(dayOfMonth - 1) % reflectionsData.length];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 1.5rem",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="lg:grid-cols-[1fr_320px]"
        >
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: "0.875rem",
                color: "var(--color-accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Building Technology, Community, and Humanity
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-lora, serif)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "1.2",
                  color: "var(--color-text)",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                Halo, saya{" "}
                <span style={{ color: "var(--color-accent)" }}>
                  Risyad Addiva.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontFamily: "var(--font-lora, serif)",
                fontSize: "clamp(1rem, 2.5vw, 1.1875rem)",
                lineHeight: "1.9",
                color: "var(--color-text-muted)",
                maxWidth: "580px",
                marginBottom: "2.5rem",
              }}
            >
              <p>Mahasiswa Teknik Informatika.</p>
              <p>Barista.</p>
              <p>Aktivis</p>
              <p>Pencinta Alam.</p>
              <p style={{ marginTop: "1rem" }}>
                Sedang belajar bagaimana teknologi bisa menjadi jalan untuk
                menghadirkan manfaat bagi manusia.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Saya percaya bahwa ilmu tidak hanya diukur dari seberapa banyak
                yang kita ketahui, tetapi dari seberapa banyak yang bisa kita
                bagikan.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <Link href="/proyek" className="btn-primary">
                Lihat Proyek
              </Link>
              <Link href={siteConfig.cv} className="btn-ghost" target="_blank">
                Unduh CV
              </Link>
              <Link href="/kontak" className="btn-ghost">
                Kontak
              </Link>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "260px",
                height: "320px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <Image
                src="/hero.jpg"
                alt="Risyad Addiva — foto natural di coffee shop"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            {/* Currently card */}
            <div
              style={{
                width: "260px",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "12px",
                padding: "1rem 1.125rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-text-faint)",
                  marginBottom: "0.75rem",
                }}
              >
                Currently
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {statusData.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", lineHeight: "1.5" }}>
                      {item.icon}
                    </span>
                    <div>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--color-text-muted)",
                            lineHeight: "1.5",
                            textDecoration: "underline",
                            textDecorationColor: "var(--color-border)",
                            textUnderlineOffset: "3px",
                          }}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--color-text-muted)",
                            lineHeight: "1.5",
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Today's Reflection ───────────────────────────── */}
      <AnimatedSection>
        <section
          style={{
            padding: "4rem 1.5rem 5rem",
            borderTop: "1px solid var(--color-border-subtle)",
          }}
        >
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text-faint)",
                marginBottom: "1.5rem",
              }}
            >
              Refleksi Hari Ini
            </p>

            {reflection.arabic && (
              <p
                style={{
                  fontFamily: "var(--font-lora, serif)",
                  fontSize: "1.375rem",
                  direction: "rtl",
                  textAlign: "right",
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                  lineHeight: "1.8",
                }}
              >
                {reflection.arabic}
              </p>
            )}

            <blockquote
              style={{
                fontFamily: "var(--font-lora, serif)",
                fontSize: "clamp(1.125rem, 2.5vw, 1.4rem)",
                lineHeight: "1.75",
                color: "var(--color-text)",
                fontStyle: "italic",
                borderLeft: "2px solid var(--color-accent)",
                paddingLeft: "1.25rem",
                marginBottom: "1rem",
              }}
            >
              &ldquo;{reflection.quote}&rdquo;
            </blockquote>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
                lineHeight: "1.7",
                paddingLeft: "1.25rem",
                marginBottom: "0.5rem",
              }}
            >
              {reflection.reflection}
            </p>

            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-faint)",
                paddingLeft: "1.25rem",
              }}
            >
              — {reflection.source}
              {reflection.reference ? `, ${reflection.reference}` : ""}
            </p>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
