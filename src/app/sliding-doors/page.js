"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./bento-sliding.css";

export default function SlidingDoorsPage() {
  const { t, mounted, locale, changeLanguage } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav", "home") },
    { href: "/swing-doors", label: t("nav", "swingDoors") },
    { href: "/sliding-doors", label: t("nav", "slidingDoors") },
    { href: "/accessories", label: t("nav", "accessories") },
    { href: "/projects", label: t("nav", "projects") },
  ];

  // Automatic hero image slider
  const heroImages = [
    { src: "/images/sliding_interior.png", title: "Sliding Systems" },
    { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80", title: "Premium Interiors" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80", title: "Minimalist Sliding" }
  ];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bento-wrapper">
      <div className="bento-container">
        
        {/* Top Hero Section */}
        <Reveal style={{ width: '100%' }}>
          <div className="sliding-hero">
            {heroImages.map((img, idx) => (
              <div 
                key={idx} 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  opacity: idx === heroIndex ? 1 : 0, 
                  transition: 'opacity 1s ease-in-out',
                  zIndex: idx === heroIndex ? 1 : 0
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="sliding-hero-img" 
                />
              </div>
            ))}
            
            {/* Glass Navigation */}
            <div className="glass-nav">
              <Link href="/" className="logo" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>
                <strong>Union</strong>doors
              </Link>
              
              <div className="nav-links">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={pathname === link.href ? "active" : ""}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

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

              {/* Hamburger Button for Mobile */}
              <button 
                className={`glass-mobile-toggle ${mobileOpen ? 'active' : ''}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            {/* Mobile Menu Overlay for Glass Nav */}
            {mobileOpen && (
              <div className="glass-mobile-menu">
                <ul className="glass-mobile-nav-links">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={pathname === link.href ? "active" : ""}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="glass-mobile-lang-switch">
                  {["uz", "en", "ru"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        changeLanguage(lang);
                        setMobileOpen(false);
                      }}
                      className={locale === lang ? "active" : ""}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Floating Info Details on Hero */}
            <div className="hero-overlay-details">
              <h1>{t("products", "slidingTitle") || "Sliding Systems"}</h1>
              <p>
                {t("products", "slidingDesc") || "Modern sliding doors that slide seamlessly inside or along your wall structures."}
              </p>
            </div>

            {/* Slider pill indicator */}
            <div className="hero-slider-switch">
              <div className="switch-dot"></div>
              <span>AUTO CAROUSEL</span>
            </div>
          </div>
        </Reveal>

        {/* Bottom Section */}
        <div className="sliding-bottom-grid">
          
          {/* Left Column - 3 Vertical Bento Cards */}
          <div className="vertical-cards-col">
            
            {/* Card 1: Space Saving */}
            <Reveal delay={0.1} style={{ flex: 1, display: 'flex' }}>
              <div className="vertical-bento-card side-by-side">
                <div className="card-content">
                  <div className="card-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                      <line x1="15" y1="3" x2="15" y2="21"></line>
                    </svg>
                  </div>
                  <h3>{t("products", "spaceSaving") || "Space Saving"}</h3>
                  <p>{t("products", "usableArea") || "Saves up to 100% of standard swing radius door space."}</p>
                </div>
                
                {/* Notched Circle Badge top-right */}
                <div className="notched-corner">
                  <div className="notched-badge">01</div>
                </div>

                <img 
                  src="/images/cassette.png" 
                  alt="Cassette system" 
                  className="card-img"
                  style={{ objectFit: 'contain', background: '#fff', padding: '5px', borderRadius: '15px', border: '1px solid #eee' }}
                />
              </div>
            </Reveal>

            {/* Card 2: Silent Motion */}
            <Reveal delay={0.2} style={{ flex: 1, display: 'flex' }}>
              <div className="vertical-bento-card side-by-side">
                <div className="card-content">
                  <div className="card-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                  </div>
                  <h3>{t("products", "silentMotion") || "Silent System"}</h3>
                  <p>{t("products", "silentSystem") || "State of the art Italian silent runners for smooth sliding motion."}</p>
                </div>

                {/* Notched Circle Badge top-right */}
                <div className="notched-corner">
                  <div className="notched-badge">02</div>
                </div>

                <img 
                  src="/images/surilma.jpg" 
                  alt="Silent sliding details" 
                  className="card-img" 
                  style={{ objectFit: 'contain', background: '#fff', padding: '5px', borderRadius: '15px', border: '1px solid #eee' }}
                />
              </div>
            </Reveal>

            {/* Card 3: Premium Aesthetics */}
            <Reveal delay={0.3} style={{ flex: 1, display: 'flex' }}>
              <div className="vertical-bento-card side-by-side">
                <div className="card-content">
                  <div className="card-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3>{t("products", "slidingOnWall") || "Minimalist Look"}</h3>
                  <p>{t("products", "slidingOnWallDesc") || "Seamless lines, flush hidden frames, and elegant integration."}</p>
                </div>

                {/* Notched Circle Badge top-right */}
                <div className="notched-corner">
                  <div className="notched-badge">03</div>
                </div>

                <img 
                  src="/images/suriladigan.png" 
                  alt="Sliding mechanism" 
                  className="card-img"
                  style={{ objectFit: 'contain', background: '#fff', padding: '5px', borderRadius: '15px', border: '1px solid #eee' }}
                />
              </div>
            </Reveal>

          </div>

          {/* Technical Specs Card Removed as per request */}

        </div>

      </div>
    </div>
  );
}
