"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import organizationsData from "@/data/organizations.json";

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  amber: {
    bg: "rgba(201,169,110,0.08)",
    text: "var(--color-accent)",
    border: "rgba(201,169,110,0.2)",
  },
  emerald: {
    bg: "rgba(52,211,153,0.06)",
    text: "#6ee7b7",
    border: "rgba(52,211,153,0.15)",
  },
  blue: {
    bg: "rgba(96,165,250,0.06)",
    text: "#93c5fd",
    border: "rgba(96,165,250,0.15)",
  },
  rose: {
    bg: "rgba(251,113,133,0.06)",
    text: "#fda4af",
    border: "rgba(251,113,133,0.15)",
  },
};

export default function OrganizationsPage() {
  return (
    <section
      style={{ minHeight: "100vh", padding: "8rem 1.5rem 5rem" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
              Organisasi
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
              Setiap organisasi adalah sekolah.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: "1.8",
                maxWidth: "520px",
              }}
            >
              Bukan sekadar tempat untuk menambah baris di CV — tetapi tempat
              di mana karakter dibentuk, dan pelajaran terpenting justru datang
              dari momen-momen yang paling tidak terduga.
            </p>
          </div>
        </AnimatedSection>

        {/* Org cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {organizationsData.map((org, index) => {
            const colors = colorMap[org.color] || colorMap.amber;
            return (
              <AnimatedSection key={org.id} delay={index * 0.1}>
                <article
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: "14px",
                    padding: "1.75rem",
                    height: "100%",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "var(--color-border-subtle)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Header */}
                  <div style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.625rem",
                        borderRadius: "100px",
                        backgroundColor: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.border}`,
                        marginBottom: "0.625rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {org.period}
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-lora, serif)",
                        fontSize: "1.25rem",
                        color: "var(--color-text)",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.125rem",
                      }}
                    >
                      {org.name}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-text-faint)",
                      }}
                    >
                      {org.fullName}
                    </p>
                  </div>

                  {/* Narrative */}
                  <p
                    style={{
                      fontFamily: "var(--font-lora, serif)",
                      fontSize: "0.9375rem",
                      color: "var(--color-text-muted)",
                      lineHeight: "1.85",
                      marginBottom: "1.25rem",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{org.narrative}&rdquo;
                  </p>

                  {/* Values */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {org.values.map((val) => (
                      <span
                        key={val}
                        style={{
                          fontSize: "0.75rem",
                          padding: "0.2rem 0.625rem",
                          borderRadius: "100px",
                          border: "1px solid var(--color-border-subtle)",
                          color: "var(--color-text-faint)",
                        }}
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
