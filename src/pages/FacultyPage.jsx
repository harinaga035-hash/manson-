import { useEffect } from "react";
import s from "./Pages.module.css";
import { Users } from "lucide-react";

export function FacultyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faculty = [
    { name: "Ms. Lavanya Kanduri", desc: "M.Com, M.B.A, FCMA, DGBM", role: "Dean & Chairperson" },
    { name: "Ms. S Gayatri", desc: "MSc, MCA, MPhil", role: "Vice-Principal" },
    { name: "Mr. Gurumurthy", desc: "MSc, MCA, MPhil", role: "Senior Lecturer" },
    { name: "Ms. Sonal Goyal", desc: "M.B.A", role: "Lecturer" },
    { name: "Mr. C Jagadish Reddy", desc: "B.E [MECH], LLM, MBA [FIN], Grad.CS, MSC [PSY]", role: "Senior Faculty" },
    { name: "Mr. Deepak Biradar", desc: "MBA", role: "Lecturer" },
    { name: "Ms. Sarvani Ravuluri", desc: "Masters in Communication & Journalism and Masters in Social Work (pursuing)", role: "Lecturer & Mentor" },
    { name: "Ms. Saritha Guvala", desc: "M.Com", role: "Lecturer" },
    { name: "Ms. Kunchala Varalaxmi", desc: "M.Sc.(Statistics)", role: "Lecturer" },
    { name: "Mr. Vijay Kiran Agastya", desc: "MBA, FCMA, ACCA, CIMA UK", role: "Visiting Professor" },
    { name: "Mr. DAKSHINA MURTHY C", desc: "M.Com, MBA, FCMA, ACMA (UK), CGMA", role: "Visiting Professor" },
    { name: "Ms. Manisha", desc: "MBA", role: "Lecturer" },
    { name: "Ms Prabhavathi", desc: "M.A.", role: "Lecturer" },
    { name: "Ms Swetha", desc: "MBA", role: "Lecturer" },
    { name: "Ms Bhargavi", desc: "MBA", role: "Lecturer" },
    { name: "Ms Divya Sree Polanki", desc: "MSW", role: "Counsellor & Mentor" }
  ];

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Our Leadership & Faculty</span>
          <h1 className={s.pageTitle}>MSB Faculty Profiles</h1>
        </header>

        {/* Introduction */}
        <section className={s.card}>
          <p className={s.listText} style={{ fontSize: "16px", textAlign: "center" }}>
            Manson School of Business comprises experienced academicians, corporate trainers, cost accountants, and research scholars dedicated to knowledge distribution.
          </p>
        </section>

        {/* Leadership & Faculty Grid */}
        <h2 className={s.sectionHeader}>Faculty Roster</h2>
        <section className={s.grid3} style={{ marginBottom: "48px" }}>
          {faculty.map((member) => (
            <div key={member.name} className={s.card} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", margin: "0" }}>
              <div>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#FAF8F4", border: "1px solid rgba(11, 61, 46, 0.1)", color: "#0b3d2e", display: "grid", placeItems: "center", marginBottom: "16px" }}>
                  <Users size={20} />
                </div>
                <h3 style={{ fontSize: "16.5px", fontWeight: "700", color: "#0b3d2e", margin: "0 0 4px 0", fontFamily: "var(--font-sans)" }}>{member.name}</h3>
                <span className={s.badgeGold} style={{ fontSize: "9.5px", padding: "2px 6px", display: "inline-block" }}>{member.role}</span>
              </div>
              <p style={{ fontSize: "12.5px", color: "#747470", margin: "12px 0 0 0", borderTop: "1px solid rgba(12, 22, 18, 0.05)", paddingTop: "10px", lineHeight: "1.5" }}>
                {member.desc}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
