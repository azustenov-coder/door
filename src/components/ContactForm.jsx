"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-container" style={{ maxWidth: "600px", margin: "0 auto", padding: "40px", background: "#fff", borderRadius: "16px", boxShadow: "0 20px 50px rgba(0,0,0,0.05)" }}>
      {status === "success" ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div style={{ fontSize: "50px", marginBottom: "20px" }}>✅</div>
          <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Rahmat!</h3>
          <p style={{ color: "var(--text-secondary)" }}>Sizning so'rovingiz qabul qilindi. Tez orada mutaxassislarimiz bog'lanishadi.</p>
          <button 
            onClick={() => setStatus("idle")}
            style={{ marginTop: "30px", padding: "12px 30px", background: "#000", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}
          >
            Yangi xabar
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}>Ismingiz</label>
            <input 
              type="text" 
              required
              placeholder="Masalan: Azizbek"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ width: "100%", padding: "15px", borderRadius: "8px", border: "1px solid #eee", background: "#f9f9f9", outline: "none" }}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}>Telefon raqamingiz</label>
            <input 
              type="tel" 
              required
              placeholder="+998 90 123 45 67"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={{ width: "100%", padding: "15px", borderRadius: "8px", border: "1px solid #eee", background: "#f9f9f9", outline: "none" }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}>Xabar (ixtiyoriy)</label>
            <textarea 
              placeholder="Qanday eshiklar sizni qiziqtirmoqda?"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              style={{ width: "100%", padding: "15px", borderRadius: "8px", border: "1px solid #eee", background: "#f9f9f9", outline: "none", resize: "none" }}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "loading"}
            style={{ 
              width: "100%", 
              padding: "18px", 
              background: "#000", 
              color: "#fff", 
              border: "none", 
              borderRadius: "8px", 
              fontSize: "16px", 
              fontWeight: "600", 
              cursor: status === "loading" ? "not-allowed" : "pointer",
              transition: "opacity 0.3s"
            }}
          >
            {status === "loading" ? "Yuborilmoqda..." : "Buyurtma berish"}
          </button>
          
          {status === "error" && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "15px", textAlign: "center" }}>
              Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
