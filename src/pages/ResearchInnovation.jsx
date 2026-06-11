import { useEffect } from "react";
import s from "./Pages.module.css";
import { BookOpen, Cpu, Lightbulb } from "lucide-react";

export function ResearchInnovation() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Analytical Thinking</span>
          <h1 className={s.pageTitle}>Research & Innovation</h1>
        </header>

        {/* Vision of Thinking */}
        <section className={s.card} style={{ marginBottom: "40px" }}>
          <h2 className={s.sectionHeader}>Nurturing Independent & Responsible Thinkers</h2>
          <div className={s.letterContent}>
            <p>
              In line with our mission, Manson Center of Excellence aims to shape brilliant minds as independent, socially responsible, and woke thinkers who can make a real mark at local and global levels. We push our scholars to ask critical questions, analyze business trends, and innovate.
            </p>
          </div>
        </section>

        {/* Pillars of Analytics and Innovation */}
        <section className={s.grid3} style={{ marginBottom: "48px" }}>
          <div className={s.card}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fdf6e2", color: "#c9a227", display: "grid", placeItems: "center", marginBottom: "16px" }}>
              <Lightbulb size={20} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0b3d2e", margin: "0 0 12px 0", fontFamily: "var(--font-sans)" }}>Lean Six Sigma Integration</h3>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              Scholars learn to analyze and refine company operations, eliminate process waste, reduce product defects, and improve corporate performance.
            </p>
          </div>
          <div className={s.card}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f0ec", color: "#0b3d2e", display: "grid", placeItems: "center", marginBottom: "16px" }}>
              <Cpu size={20} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0b3d2e", margin: "0 0 12px 0", fontFamily: "var(--font-sans)" }}>Data & Analytics Focus</h3>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              Specialized training in Business Intelligence (BI), Data Visualization (graphs/charts), Business Analytics, and Financial Analytics tools helps scholars make data-driven decisions.
            </p>
          </div>
          <div className={s.card}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f0ec", color: "#0b3d2e", display: "grid", placeItems: "center", marginBottom: "16px" }}>
              <BookOpen size={20} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0b3d2e", margin: "0 0 12px 0", fontFamily: "var(--font-sans)" }}>Academic Publications</h3>
            <p className={s.listText} style={{ fontSize: "13.5px" }}>
              MSB encourages scholars and faculty members to collaborate on research papers, analyze current market dynamics, and present at management seminars.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
