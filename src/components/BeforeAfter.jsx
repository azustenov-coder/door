"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function BeforeAfter() {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = (event.pageX || event.touches[0].pageX) - containerRect.left;
    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    
    setSliderPosition(position);
  };

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = () => {
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchEnd = () => {
    window.removeEventListener("touchmove", handleMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  return (
    <section className="before-after-section" style={{ padding: "100px 0", background: "#fcfcfc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "15px" }}>
            {t("beforeAfter", "title") || "Transform Your Space"}
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            {t("beforeAfter", "subtitle") || "Compare standard doors with our hidden systems to see the minimalist difference."}
          </p>
        </div>

        <div 
          ref={containerRef}
          className="ba-container"
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            cursor: "col-resize",
            userSelect: "none"
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Before Image (Standard) */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/Zamonaviy interyer dizayni bilan mukammal uyg'unlashgan yashirin eshiklar to'plamimizni kashf eting..jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="ba-label before" style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              background: "rgba(0,0,0,0.6)",
              color: "white",
              padding: "5px 15px",
              borderRadius: "20px",
              fontSize: "12px",
              textTransform: "uppercase"
            }}>{t("beforeAfter", "before") || "Standard Door"}</div>
          </div>

          {/* After Image (Hidden) */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/glavniy.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}>
            <div className="ba-label after" style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.8)",
              color: "black",
              padding: "5px 15px",
              borderRadius: "20px",
              fontSize: "12px",
              textTransform: "uppercase"
            }}>{t("beforeAfter", "after") || "Invisible System"}</div>
          </div>

          {/* Slider Handle */}
          <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            width: "2px",
            background: "white",
            zIndex: 10,
            boxShadow: "0 0 10px rgba(0,0,0,0.3)"
          }}>
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40px",
              height: "40px",
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8L22 12L18 16" />
                <path d="M6 8L2 12L6 16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
