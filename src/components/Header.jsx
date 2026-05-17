"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { locale, changeLanguage, t, mounted } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav", "home") },
    { href: "/swing-doors", label: t("nav", "swingDoors") },
    { href: "/sliding-doors", label: t("nav", "slidingDoors") },
    { href: "/accessories", label: t("nav", "accessories") },
    { href: "/projects", label: t("nav", "projects") },
  ];

  if (!mounted) return null;

  if (pathname === "/swing-doors" || pathname === "/sliding-doors") {
    return null;
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <strong>Union</strong>doors
        </Link>

        <nav className="top-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-utils">
          <div className="lang-switch">
            {["uz", "en", "ru"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={locale === lang ? "active" : ""}
              >
                {lang}
              </button>
            ))}
          </div>
          
          <div className="social-icons" style={{ display: 'flex', gap: '15px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </a>
          </div>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'white',
          zIndex: 999,
          padding: '40px'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ fontSize: '20px', fontWeight: '500' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
