"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import timelineData from "@/data/timeline.json";

export default function JourneyPage() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 1.5rem 5rem",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
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
              Perjalanan
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
              Setiap tahun adalah bab baru.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: "1.8",
                maxWidth: "520px",
              }}
            >
              Ini bukan daftar CV. Ini adalah cerita — pelajaran yang diambil
              dari setiap langkah, setiap kesalahan, dan setiap momen yang
              membentuk siapa saya hari ini.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "4.5rem",
              top: 0,
              bottom: 0,
              width: "1px",
              backgroundColor: "var(--color-border-subtle)",
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0rem" }}
          >
            {timelineData.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.08}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "5rem 1fr",
                    gap: "2rem",
                    paddingBottom: "3rem",
                  }}
                >
                  {/* Year */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      paddingTop: "0.25rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-lora, serif)",
                        fontSize: "1.0625rem",
                        color: "var(--color-accent)",
                        fontStyle: "italic",
                      }}
                    >
                      {item.year}
                    </span>
                    {/* Dot */}
                    <div
                      style={{
                        position: "absolute",
                        right: "-2.375rem",
                        top: "0.5rem",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent)",
                        border: "2px solid var(--color-bg)",
                        zIndex: 1,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h2
                      style={{
                        fontSize: "1.0625rem",
                        fontWeight: 500,
                        color: "var(--color-text)",
                        marginBottom: "0.5rem",
                        lineHeight: "1.4",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-muted)",
                        lineHeight: "1.85",
                        fontFamily: "var(--font-lora, serif)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Still writing indicator */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "5rem 1fr",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    right: "-2.375rem",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-text-faint)",
                    zIndex: 1,
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-faint)",
                  fontStyle: "italic",
                  fontFamily: "var(--font-lora, serif)",
                  paddingTop: "0.1rem",
                }}
              >
                Perjalanan ini masih berlanjut…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
