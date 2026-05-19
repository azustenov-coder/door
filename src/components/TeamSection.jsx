"use client";

import styles from "./TeamSection.module.css";
import Reveal from "./Reveal";

const teamMembers = [
  {
    name: "Haydar Mo'minov",
    role: "Бош директор",
    image: "/images/boshdrektor.jpg" // User uploaded this image
  },
  {
    name: "Azizbek Ustenov",
    role: "Жамоа раҳбари",
    image: "/images/azizbek.jpg",
    objectPosition: "left center" // Moves image to the right by anchoring left
  },
  {
    name: "Ilhomjon Zayniyev",
    role: "Backend дастурчи",
    image: "/images/ilhomjon.jpg"
  },
  {
    name: "Ozoda Urazbayeva",
    role: "UI/UX designer",
    image: "/images/ozoda.jpg"
  }
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <Reveal key={index} delay={index * 0.1} width="fit-content">
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.profileImage}
                  style={member.objectPosition ? { objectPosition: member.objectPosition } : {}}
                  onError={(e) => {
                    // Fallback if image is not uploaded yet
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span style="color:#666; font-size:40px;">${member.name.charAt(0)}</span>`;
                  }}
                />
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
