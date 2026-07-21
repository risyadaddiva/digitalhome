"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/perjalanan", label: "Perjalanan" },
  { href: "/organisasi", label: "Organisasi" },
  { href: "/proyek", label: "Proyek" },
  { href: "/catatan", label: "Catatan" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease",
        backgroundColor: scrolled
          ? "rgba(13,13,14,0.88)"
          : "rgba(13,13,14,0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-border-subtle)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-lora, serif)",
            fontSize: "1.0625rem",
            color: "var(--color-text)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Risyad Addiva
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", gap: "0.25rem" }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.375rem 0.75rem",
                borderRadius: "6px",
                fontSize: "0.875rem",
                color:
                  pathname === link.href
                    ? "var(--color-text)"
                    : "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
                backgroundColor:
                  pathname === link.href
                    ? "var(--color-surface-2)"
                    : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--color-text-muted)",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "currentColor",
              transition: "transform 0.2s",
              transform: menuOpen
                ? "translateY(6.5px) rotate(45deg)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "currentColor",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "currentColor",
              transition: "transform 0.2s",
              transform: menuOpen
                ? "translateY(-6.5px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-border-subtle)",
            backgroundColor: "rgba(13,13,14,0.97)",
            backdropFilter: "blur(12px)",
            padding: "0.75rem 1.5rem 1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                padding: "0.625rem 0",
                fontSize: "0.9375rem",
                color:
                  pathname === link.href
                    ? "var(--color-text)"
                    : "var(--color-text-muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
