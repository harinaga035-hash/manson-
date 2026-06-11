import { useEffect } from "react";
import s from "./Pages.module.css";
import { Link2, Award, Briefcase, GraduationCap } from "lucide-react";

export function IndustryConnect() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Corporate Engagement</span>
          <h1 className={s.pageTitle}>Industry Connect & Exposure</h1>
        </header>

        {/* Introduction */}
        <section className={s.card} style={{ marginBottom: "40px" }}>
          <h2 className={s.sectionHeader}>Bridging the Academic-Industry Gap</h2>
          <div className={s.letterContent}>
            <p>
              Manson School of Business places a massive emphasis on industry integration. We believe that professional education is complete only when classroom learning converges with industry practices. MSB scholars interact with business managers, industry experts, and startup founders throughout their degree programs.
            </p>
          </div>
        </section>

        {/* Grid layout for pillars */}
        <section className={s.grid2} style={{ marginBottom: "40px" }}>
          <div className={s.card}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f0ec", color: "#0b3d2e", display: "grid", placeItems: "center", marginBottom: "16px" }}>
              <Briefcase size={20} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0b3d2e", margin: "0 0 12px 0" }}>Corporate Internships</h3>
            <p className={s.listText}>
              All BBA, B.Com, and MBA scholars undergo mandatory corporate internships. Placement counselors support students in finding the right internships across sectors like retail, banking, IT, manufacturing, and analytics, helping them build practical skills.
            </p>
          </div>
          <div className={s.card}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fdf6e2", color: "#c9a227", display: "grid", placeItems: "center", marginBottom: "16px" }}>
              <GraduationCap size={20} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0b3d2e", margin: "0 0 12px 0" }}>Mock Interview Sessions</h3>
            <p className={s.listText}>
              To prepare students for corporate selections, we run specialized mock interviews led by experienced HR professionals and recruiters. Scholars get regular feedback on their presentation, domain knowledge, and resume drafting.
            </p>
          </div>
        </section>

        {/* Global certification programs */}
        <section className={s.card} style={{ marginBottom: "48px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f0ec", color: "#0b3d2e", display: "grid", placeItems: "center", marginBottom: "16px" }}>
            <Award size={20} />
          </div>
          <h2 className={s.sectionHeader}>Business English Certificate Programs</h2>
          <p className={s.listText} style={{ marginBottom: "20px" }}>
            Improving communication and presentation capability is a high priority. In furtherance of enhancing career prospects and improving student work-readiness, Manson Center of Excellence provides globally accepted Business English Certificate Programs to scholars.
          </p>
          <div className={s.list}>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>Direct focus on corporate email drafting, presentation preparation, and report writing.</span>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>Cambridge BEC exam preparation modules.</span>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>Development of critical discussion, group interaction, and public speaking skills.</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
