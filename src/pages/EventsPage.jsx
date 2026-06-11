import { useEffect } from "react";
import s from "./Pages.module.css";
import { Calendar, Award, Star } from "lucide-react";

export function EventsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const events = [
    { title: "Management Fest & Youth Summit", date: "Annually", desc: "A flagship student-driven event comprising corporate quizzes, business plan pitch competitions, mock stock selections, and young entrepreneur panels." },
    { title: "National Level Management Seminars", date: "Bi-Annually", desc: "Expert lectures and panel sessions where industry leaders and researchers speak on changing global business panaromas, analytics, and leadership." },
    { title: "Campus Recruitment Drives", date: "Quarterly", desc: "On-campus recruitment programs where our placement partners conduct aptitude evaluations, GDs, and mock interviews to hire scholars." },
    { title: "Cultural & Sports Meet", date: "Annually", desc: "A vibrant campus sports and cultural festival encouraging scholars to demonstrate leadership and collaboration outside academics." }
  ];

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Campus Events</span>
          <h1 className={s.pageTitle}>Campus Life & Event Logs</h1>
        </header>

        {/* Introduction */}
        <section className={s.card} style={{ marginBottom: "40px" }}>
          <p className={s.listText} style={{ fontSize: "16px", textAlign: "center" }}>
            Manson School of Business hosts regular academic seminars, corporate webinars, cultural fests, and student club activities to build management skills.
          </p>
        </section>

        {/* Events list */}
        <h2 className={s.sectionHeader}>Important Campus Activities</h2>
        <section className={s.grid2} style={{ marginBottom: "48px" }}>
          {events.map((event) => (
            <div key={event.title} className={s.card} style={{ display: "flex", gap: "16px", alignItems: "flex-start", margin: "0" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fdf6e2", color: "#c9a227", display: "grid", placeItems: "center", flexShrink: "0" }}>
                <Calendar size={20} />
              </div>
              <div>
                <span className={s.badgeGold} style={{ fontSize: "9px", padding: "2px 6px" }}>{event.date}</span>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#0b3d2e", margin: "6px 0 8px 0", fontFamily: "var(--font-sans)" }}>{event.title}</h3>
                <p className={s.listText} style={{ fontSize: "13.5px" }}>{event.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
