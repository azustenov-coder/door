"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import "./bento.css";

export default function SwingDoorsPage() {
  const { t, mounted, locale, changeLanguage } = useLanguage();

  const [featuredRight, setFeaturedRight] = useState({
    src: "/images/image.webp",
    title: "Aurelia Living",
    style: { objectFit: "cover" }
  });

  const [smallCards, setSmallCards] = useState([
    { src: "/images/glavniy.webp", title: "Commercial", style: { objectFit: "cover" } },
    { src: "/images/4.jpg", title: "Residential", style: { objectFit: "cover" } },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", title: "Features", style: { objectFit: "cover" } }
  ]);

  const handleSwap = (index) => {
    const clicked = smallCards[index];
    const currentFeatured = featuredRight;
    
    setFeaturedRight(clicked);
    
    const newCards = [...smallCards];
    newCards[index] = currentFeatured;
    setSmallCards(newCards);
  };

  const casaImages = [
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", title: "Casa Noir Residence" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80", title: "Modern Minimalist" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", title: "Hidden Elegance" },
    { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", title: "Seamless Design" }
  ];
  const [casaIndex, setCasaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCasaIndex((prev) => (prev + 1) % casaImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bento-wrapper">
      <div className="bento-container">
        
        {/* Top Hero Section */}
        <Reveal style={{ width: '100%' }}>
          <div className="bento-hero">
            <img 
              src="/images/yashirineshik.jpg" 
              alt="Invisible Door Interior" 
              className="bento-hero-img" 
            />
            
            {/* Glass Navigation */}
            <div className="glass-nav">
              <Link href="/" className="logo" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>
                <strong>Union</strong>doors
              </Link>
              
              <div className="nav-links">
                <Link href="/">{t("nav", "home")}</Link>
                <Link href="/swing-doors">{t("nav", "swingDoors")}</Link>
                <Link href="/sliding-doors">{t("nav", "slidingDoors")}</Link>
                <Link href="/accessories">{t("nav", "accessories")}</Link>
                <Link href="/projects">{t("nav", "projects")}</Link>
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
            </div>

            {/* Bottom Cutouts Removed as per request */}
          </div>
        </Reveal>

        {/* Bottom Section */}
        <div className="bottom-section">
          
          {/* Left Column */}
          <div className="left-col">
            <Reveal delay={0.1} style={{ flexGrow: 1, display: 'flex' }}>
              <div className="text-block">
                <h1 className="bento-title">
                  {t("products", "swingTitle")}
                </h1>
                <p className="bento-desc">
                  {t("products", "swingDesc") || "We create calm, functional, and emotionally engaging interiors tailored for modern lifestyles."}
                </p>
                
                <Link href="https://t.me/union_doors_bot" target="_blank" className="consult-btn">
                  BOOK CONSULTATION
                </Link>
                
                <div className="socials">
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.2L8.2 4zm0 0l-1.5 2 7.5 10 1.5-2z"></path></svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="small-cards-row">
              {smallCards.map((card, index) => (
                <Reveal key={index} delay={0.2 + (index * 0.1)} style={{ height: '100%' }}>
                  <div 
                    className="bento-img-card" 
                    onClick={() => handleSwap(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={card.src} alt={card.title} style={card.style} />
                    <div className="label" style={card.textColor ? { color: card.textColor } : {}}>
                      {card.title}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="right-col">
            <Reveal delay={0.2} style={{ height: '100%', display: 'flex' }}>
              <div className="bento-img-card" style={{ flex: 1, position: 'relative' }}>
                {casaImages.map((img, idx) => (
                  <div key={idx} style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    opacity: idx === casaIndex ? 1 : 0, 
                    transition: 'opacity 1s ease-in-out',
                    pointerEvents: idx === casaIndex ? 'auto' : 'none'
                  }}>
                    <img src={img.src} alt={img.title} />
                    <div className="label">
                      View Project <span style={{ marginLeft: '5px' }}>→</span> {img.title}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3} style={{ height: '100%', display: 'flex' }}>
              <div className="bento-img-card" style={{ flex: 1 }}>
                <img src={featuredRight.src} alt={featuredRight.title} style={featuredRight.style} />
                <div className="label" style={featuredRight.textColor ? { color: featuredRight.textColor } : {}}>
                  View Project <span style={{ marginLeft: '5px' }}>→</span> {featuredRight.title}
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
}
