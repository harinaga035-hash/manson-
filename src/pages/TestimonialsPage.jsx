import { useEffect } from "react";
import s from "./Pages.module.css";
import { Quote } from "lucide-react";

export function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const stories = [
    { name: "Rahul Sharma", course: "MBA (Class of 2024)", text: "The dual emphasis on MBA curricula and USA CMA certification at Manson was the biggest turning point for my career. The soft skills training, mock interview practice, and HR guidance got me placed at Deloitte with a great package!" },
    { name: "Sneha Reddy", course: "BBA (Class of 2023)", text: "The mentor-mentee relationship at MSB is truly unique. Faculty members are always ready to support with open arms. The data visualization and business analytics certifications helped me stand out in my interviews." },
    { name: "Aman Gupta", course: "B.Com (Class of 2024)", text: "Manson School of Business combines high-impact commerce programs with professional certifications. Completing the Tally, GST, and Business English certificates made me fully corporate-ready on day one." },
    { name: "Pooja Patel", course: "MBA (Class of 2023)", text: "Uma Nagar Begumpet campus is extremely engaging. Lively discussions and case study solving are the ethos here. The placements counselors guided me throughout to lock an internship and full-time role at Amazon." }
  ];

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Student Success</span>
          <h1 className={s.pageTitle}>Scholars' Feedback & Testimonials</h1>
        </header>

        {/* Introduction */}
        <section className={s.card} style={{ marginBottom: "40px" }}>
          <p className={s.listText} style={{ fontSize: "16px", textAlign: "center" }}>
            See what our alumni and scholars say about their academic journey, mentorship experience, placements, and campus environment at Manson School of Business.
          </p>
        </section>

        {/* Stories Board */}
        <h2 className={s.sectionHeader}>Scholars' Success Stories</h2>
        <section className={s.grid2} style={{ marginBottom: "48px" }}>
          {stories.map((story, i) => (
            <div key={i} className={s.card} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", margin: "0" }}>
              <div style={{ color: "rgba(201, 162, 39, 0.15)", marginBottom: "16px" }}>
                <Quote size={36} fill="currentColor" />
              </div>
              <p className={s.listText} style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: "14.5px", lineHeight: "1.7", color: "#3e3e3a", marginBottom: "20px" }}>
                "{story.text}"
              </p>
              <div style={{ borderTop: "1px solid rgba(12, 22, 18, 0.05)", paddingTop: "12px" }}>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#0b3d2e", display: "block" }}>{story.name}</span>
                <span style={{ fontSize: "12px", color: "#747470", fontWeight: "500" }}>{story.course}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
