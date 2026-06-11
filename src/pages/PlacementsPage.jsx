import { useEffect } from "react";
import s from "./Pages.module.css";
import { useCounter } from "../hooks/useCounter";
import { Award, Briefcase, TrendingUp, Users, Send } from "lucide-react";
import { site } from "../lib/site-config";

function Stat({ value, suffix, prefix, label, icon: Icon }) {
  const { ref, value: n } = useCounter(value, 1800, true);
  return (
    <div className={s.card} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "0", padding: "20px" }}>
      <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#FAF8F4", border: "1px solid rgba(201, 162, 39, 0.2)", color: "#c9a227", display: "grid", placeItems: "center", flexShrink: "0" }}>
        <Icon size={20} />
      </div>
      <div>
        <span style={{ fontSize: "22px", fontWeight: "800", color: "#0c1612", fontFamily: "var(--font-sans)", display: "block" }}>
          {prefix}
          <span ref={ref}>{n}</span>
          {suffix}
        </span>
        <span style={{ fontSize: "11px", fontWeight: "600", color: "#747470", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
      </div>
    </div>
  );
}

export function PlacementsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const recruiters = [
    "Amazon", "Deloitte", "Tech Mahindra", "Genpact", "ICICI Bank", 
    "TCS", "Cognizant", "Wipro", "HDFC Bank", "Infosys", "Capgemini", "Accenture"
  ];

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Career Success</span>
          <h1 className={s.pageTitle}>Placements & Corporate Relations</h1>
        </header>

        {/* HR Dean Message */}
        <section className={s.letterhead} style={{ marginBottom: "40px" }}>
          <span className={s.letterRole}>HR & Placements Department</span>
          <h2 className={s.letterName}>Ms. Swathi B</h2>
          <span className={s.letterSubname}>Placements Officer | Manson Center of Excellence</span>
          <div className={s.letterContent}>
            <p>Dear Scholars,</p>
            <p>
              We understand that quality education is not enough but also it must lead to getting a placement in the right industry. Our placement counselors will guide and assist you in finding the right job subject to satisfactory performance. Manson has an extensive network with industry managers, national and international consultants for placements.
            </p>
            <p>
              The On-Campus and Off-Campus recruitment program has been successfully carried out to cater to the needs of various sectors of the industry. Our students have been trained well in soft skills, critical thinking, and communication to be the budding talented and challenging leaders in the changing business scenario.
            </p>
          </div>
          <div className={s.letterSign}>
            <span className={s.signTitle}>Swathi B</span>
            <span className={s.signDesc}>HR Specialist, Manson Center of Excellence</span>
          </div>
        </section>

        {/* Stats Grid */}
        <h2 className={s.sectionHeader}>Placement Outcomes</h2>
        <section className={s.grid3} style={{ marginBottom: "40px" }}>
          <Stat value={98} suffix="%" label="Placement Rate" icon={TrendingUp} />
          <Stat value={12.5} prefix="₹" suffix=" LPA" label="Highest Package" icon={Award} />
          <Stat value={6.2} prefix="₹" suffix=" LPA" label="Average Package" icon={Briefcase} />
        </section>

        {/* Recruiters List */}
        <section className={s.card} style={{ marginBottom: "40px" }}>
          <h2 className={s.sectionHeader}>Placement Partners</h2>
          <p className={s.listText} style={{ marginBottom: "24px" }}>
            Manson School of Business graduates are recruited by top multi-national companies and industry leaders. Over the past decade, our placement department has successfully placed scholars in:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "16px", textAlign: "center" }}>
            {recruiters.map((rec) => (
              <div key={rec} style={{ background: "#faf8f4", border: "1px solid rgba(12, 22, 18, 0.05)", borderRadius: "8px", padding: "16px", fontWeight: "700", color: "#0b3d2e", fontSize: "14px" }}>
                {rec}
              </div>
            ))}
          </div>
        </section>

        {/* CV Submission and Placement Assistance */}
        <section className={s.grid2} style={{ marginBottom: "48px" }}>
          <div className={s.card}>
            <span className={s.badgeGold}>Preparation</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>Internship Program</h3>
            <p className={s.listText} style={{ marginBottom: "12px" }}>
              Structured internships form an essential part of the BBA, B.Com, and MBA curriculum at MSB. These internships provide hands-on experience and corporate exposure.
            </p>
            <p className={s.listText}>
              Students are trained in specialized soft skills, data presentation, mock interviews, and Business English (BEC) to prepare them for demanding corporate environments.
            </p>
          </div>
          <div className={s.card} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className={s.badgeGold}>Careers</span>
              <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>Share Your CV</h3>
              <p className={s.listText} style={{ marginBottom: "20px" }}>
                Are you looking to kickstart your career or join our corporate team for an enriching and lively work environment? Send your profile to our placement counselors.
              </p>
            </div>
            <div style={{ background: "#faf8f4", border: "1px dashed #c9a227", borderRadius: "10px", padding: "16px" }}>
              <span style={{ fontSize: "12px", color: "#747470", fontWeight: "600", display: "block", marginBottom: "4px" }}>Send your resumes to:</span>
              <a href={`mailto:${site.email}`} style={{ fontSize: "14px", fontWeight: "700", color: "#0b3d2e", display: "block" }}>{site.email}</a>
              <a href={`mailto:${site.placementsEmail}`} style={{ fontSize: "14px", fontWeight: "700", color: "#0b3d2e", display: "block", marginTop: "2px" }}>{site.placementsEmail}</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
