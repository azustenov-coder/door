"use client";

import { useLanguage } from "@/context/LanguageContext";
import CTA from "@/components/CTA";
import AccessoriesShowcase from "@/components/AccessoriesShowcase";

export default function AccessoriesPage() {
  const { mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="product-page" style={{ backgroundColor: "#0a0a0a" }}>
      <AccessoriesShowcase />
      <CTA />
    </div>
  );
}
