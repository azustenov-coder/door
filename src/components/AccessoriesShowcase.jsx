"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AccessoriesShowcase.module.css";
import Reveal from "./Reveal";

const accessoriesData = [
  {
    id: 1,
    image: "/images/handle.png",
    nameKey: "handles",
    tooltips: [
      { top: "45%", left: "75%", key: "tooltip1" },
      { top: "65%", left: "25%", key: "tooltip2" }
    ]
  },
  {
    id: 2,
    image: "/images/zamok.jpg",
    nameKey: "locks",
    tooltips: [
      { top: "35%", left: "60%", key: "tooltip1" }
    ]
  },
  {
    id: 3,
    image: "/images/hinge.png",
    nameKey: "hinges",
    tooltips: [
      { top: "50%", left: "50%", key: "tooltip2" }
    ]
  },
  {
    id: 4,
    image: "/images/threshold.png",
    nameKey: "thresholds",
    tooltips: []
  }
];

export default function AccessoriesShowcase() {
  const { t, mounted } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  if (!mounted) return null;

  const activeItem = accessoriesData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % accessoriesData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + accessoriesData.length) % accessoriesData.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        
        {/* Left Content */}
        <div className={styles.leftColumn}>
          <Reveal>
            <h1 className={styles.title}>
              {t("accessoriesShowcase", "title").split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className={styles.description}>
              {t("accessoriesShowcase", "description")}
            </p>
          </Reveal>
        </div>

        {/* Right Main Image Area */}
        <div className={styles.rightColumn}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className={styles.mainImageContainer}
            >
              <img src={activeItem.image} alt={t("products", activeItem.nameKey)} className={styles.mainImage} />
              
              {/* Tooltips */}
              {activeItem.tooltips.map((tt, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.2) }}
                  className={styles.tooltip} 
                  style={{ top: tt.top, left: tt.left }}
                >
                  {t("accessoriesShowcase", tt.key)}
                  <div className={styles.tooltipDot}></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Tags */}
          <div className={styles.tagsContainer}>
            {['tag1', 'tag2', 'tag3', 'tag4', 'tag5'].map((tag, i) => (
              <Reveal key={i} delay={0.6 + (i * 0.1)}>
                <div className={styles.tag}>
                  {t("accessoriesShowcase", tag)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Overlapping Carousel */}
        <div className={styles.carouselWrapper}>
          <div className={styles.thumbnailContainer}>
            {accessoriesData.map((item, index) => (
               <div 
                  key={item.id} 
                  className={`${styles.thumbnail} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={item.image} alt={t("products", item.nameKey)} />
                  <div className={styles.thumbnailArrow}>↗</div>
                </div>
            ))}
          </div>
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={handlePrev}>←</button>
            <button className={styles.navBtn} onClick={handleNext}>→</button>
          </div>
        </div>

      </div>
    </div>
  );
}
