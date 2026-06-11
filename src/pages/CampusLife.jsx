import { useEffect } from "react";
import s from "./Pages.module.css";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import aboutStudents from "@/assets/about-students.jpg";

export function CampusLife() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const galleryImages = [
    { src: gallery1, alt: "Classroom Lecture Session" },
    { src: gallery2, alt: "Collaborative Study Group" },
    { src: gallery3, alt: "Students Mentorship Session" },
    { src: gallery4, alt: "MSB Campus Activity" },
    { src: aboutStudents, alt: "Scholars Discussion" }
  ];

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Campus Experience</span>
          <h1 className={s.pageTitle}>Campus Life at MSB</h1>
        </header>

        {/* Learning Environment description */}
        <section className={s.card} style={{ marginBottom: "40px" }}>
          <h2 className={s.sectionHeader}>Engaging Learning Environment</h2>
          <div className={s.letterContent}>
            <p>
              Manson School of Business fosters a dynamic and lively atmosphere on campus, promoting strong mentor-mentee relationships and engaging student interactions. The emphasis on faculty with rich academic and industry experience ensures a comprehensive, well-rounded learning environment.
            </p>
            <p>
              Located in the premium area of <strong>Begumpet, Hyderabad (Uma Nagar, Kundanbagh)</strong>, the campus provides easy access to corporate hubs, allowing our scholars to stay connected with the city's business ecosystem. The campus is equipped with modern classrooms, research resources, and discussion spaces designed for collaborative learning.
            </p>
          </div>
        </section>

        {/* Core Pillars Grid */}
        <section className={s.grid2} style={{ marginBottom: "40px" }}>
          <div className={s.card}>
            <span className={s.badgeGold}>Approach</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>Practical & Collaborative Learning</h3>
            <p className={s.listText}>
              The convergence of academic expertise with industry practices, coupled with a two-way learning process between faculty and scholars, highlights a practical and collaborative educational approach at Manson.
            </p>
          </div>
          <div className={s.card}>
            <span className={s.badgeGold}>Mentorship</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>Vibrant Mentor-Mentee Bonds</h3>
            <p className={s.listText}>
              Scholars are guided closely by mentors and advisors who support them in academic studies, career planning, and corporate preparation. Staff and faculty support scholars with open arms.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <h2 className={s.sectionHeader}>Campus Gallery</h2>
        <section className={s.grid3} style={{ marginBottom: "48px" }}>
          {galleryImages.map((img, i) => (
            <div key={i} className={s.card} style={{ padding: "0", overflow: "hidden", borderRadius: "16px" }}>
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{ width: "100%", height: "240px", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
              <div style={{ padding: "16px", background: "#ffffff" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "#0b3d2e", fontFamily: "var(--font-sans)" }}>{img.alt}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
