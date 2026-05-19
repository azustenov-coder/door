"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./InteractiveDoorViewer.module.css";
import Reveal from "./Reveal";

// Using the specific 4 variants provided by the user
const doorImages = [
  "/images/sleptas.jpg", 
  "/images/sleptas-d.jpg",
  "/images/sleptas-du.jpg",
  "/images/sleptas-durv.jpg"
];

export default function InteractiveDoorViewer() {
  const { t, mounted } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  if (!mounted) return null;

  return (
    <div className={styles.viewerContainer}>
      <Reveal style={{ width: '100%' }}>
        <div className={styles.mainImageWrapper}>
          <img 
            src={doorImages[activeIndex]} 
            alt="Door View" 
            className={styles.mainImage} 
          />
        </div>

        <div className={styles.thumbnailsContainer}>
          {doorImages.map((src, index) => (
            <div 
              key={index} 
              className={`${styles.thumbnail} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={src} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>

        <h3 className={styles.title}>
          {t("doorViewer", "doorTitle")}
        </h3>
      </Reveal>
    </div>
  );
}
