"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "3rem 1.5rem",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Closing message */}
        <p
          style={{
            fontFamily: "var(--font-lora, serif)",
            fontSize: "1.0625rem",
            color: "var(--color-text-muted)",
            lineHeight: "1.8",
            maxWidth: "560px",
            marginBottom: "2rem",
            fontStyle: "italic",
          }}
        >
          &ldquo;Terima kasih telah mampir. Semoga perjalananmu hari ini
          menemukan sesuatu yang layak untuk dikenang.&rdquo;
        </p>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-text-faint)" }}>
              <span style={{ fontFamily: "var(--font-lora, serif)" }}>
                Risyad Addiva
              </span>{" "}
              · {year} · Dibangun dengan niat baik
            </p>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-text-faint)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-faint)")
              }
            >
              Instagram
            </Link>
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-text-faint)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-faint)")
              }
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-text-faint)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-faint)")
              }
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
