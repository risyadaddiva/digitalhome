"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/data/site";

const contactLinks = [
  {
    id: "whatsapp",
    icon: "💬",
    label: "WhatsApp",
    value: "+62 856-0163-7512",
    href: siteConfig.socials.whatsapp,
    description: "Untuk percakapan cepat dan kolaborasi",
  },
  {
    id: "email",
    icon: "✉️",
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Untuk hal-hal yang perlu lebih dari satu paragraf",
  },
  {
    id: "instagram",
    icon: "📸",
    label: "Instagram",
    value: "@nafsu.berkelana",
    href: siteConfig.socials.instagram,
    description: "Untuk cuplikan kehidupan sehari-hari",
  },
  {
    id: "github",
    icon: "🖥️",
    label: "GitHub",
    value: "@risyadaddiva",
    href: siteConfig.socials.github,
    description: "Untuk proyek dan kode",
  },
];

export default function ContactPage() {
  return (
    <section style={{ minHeight: "100vh", padding: "8rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
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
              Kontak
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
              Mari berbincang.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: "1.8",
                maxWidth: "480px",
              }}
            >
              Ada cerita yang ingin dibagikan? Ada kolaborasi yang ingin
              dibangun? Atau mungkin hanya ingin berdiskusi tentang teknologi,
              kopi, atau kehidupan — semua percakapan selalu disambut hangat.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
          {contactLinks.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.08}>
              <Link
                href={item.href}
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
                id={`contact-${item.id}`}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.125rem 1.375rem",
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: "12px",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "var(--color-border-subtle)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text)",
                        fontWeight: 500,
                        marginBottom: "0.125rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-text-faint)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-faint)",
                    }}
                  >
                    →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <AnimatedSection delay={0.4}>
          <div
            style={{
              padding: "1.25rem 1.5rem",
              backgroundColor: "var(--color-accent-subtle)",
              border: "1px solid rgba(201,169,110,0.15)",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-lora, serif)",
                fontSize: "0.9375rem",
                color: "var(--color-text-muted)",
                lineHeight: "1.75",
                fontStyle: "italic",
              }}
            >
              &ldquo;Saya percaya bahwa setiap percakapan yang baik adalah
              investasi — baik bagi yang berbicara maupun yang mendengarkan.
              Jadi jangan ragu untuk memulai.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
