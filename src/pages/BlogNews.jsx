import { useEffect } from "react";
import s from "./Pages.module.css";
import { BookOpen, Star, Award } from "lucide-react";

export function BlogNews() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Latest Press & Updates</span>
          <h1 className={s.pageTitle}>MSB Blog & News</h1>
        </header>

        {/* Article 1: Startup of the Year Appreciation Award 2021 */}
        <article className={s.card} id="startup-award" style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
            <span className={s.badgeGold}>Press Release</span>
            <span style={{ fontSize: "12px", color: "#747470", fontWeight: "600" }}>Year 2021</span>
          </div>
          <h2 className={s.sectionHeader} style={{ fontSize: "22px", marginBottom: "16px" }}>Startup Of The Year Appreciation Award 2021</h2>
          <div className={s.letterContent}>
            <p>
              In line with our endeavour to feature some phenomenal start-ups for the year 2021, we decided to highlight the story of Manson School of Business that has recently dipped its feet in the business education industry. For this, we sat down for a freewheeling conversation with the Chairperson — Ms. Lavanya Kanduri. This session was quite informative and we came back with some food for thought that our readers will find inspiring.
            </p>
            <p>
              Ms. Lavanya Kanduri highlighted that the core philosophy of Manson Center of Excellence is converting dreams into realistic possibilities. By bringing together experienced academicians and corporate trainers, MSB seeks to deliver a high level of excellence in BBA, B.Com, and MBA education that prepares scholars for real-world leadership challenges.
            </p>
          </div>
        </article>

        {/* Article 2: Certificate of Appreciation Award 2024 */}
        <article className={s.card} id="appreciation-award" style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
            <span className={s.badgeGold}>Accolade</span>
            <span style={{ fontSize: "12px", color: "#747470", fontWeight: "600" }}>Year 2024</span>
          </div>
          <h2 className={s.sectionHeader} style={{ fontSize: "22px", marginBottom: "16px" }}>Certificate of Appreciation Award 2024</h2>
          <div className={s.letterContent}>
            <p>
              Manson School of Business is honored to receive a Certificate of Appreciation, recognizing its significant impact as a business school. The accolade specifically applauds Manson School of Business' dedication to providing quality education, solidifying its reputation as a highly regarded institution in the field of management.
            </p>
            <p>
              This acknowledgment reinforces Manson School of Business' dedication to excellence in academia and its ongoing contributions to shaping future business leaders. The board of directors and faculty team express their gratitude to the corporate partners, students, and mentors who made this success possible.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
