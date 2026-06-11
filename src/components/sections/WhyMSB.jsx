import { Award, Building2, GraduationCap, Handshake, Sparkles, Users } from "lucide-react";
import s from "./WhyMSB.module.css";

const features = [
  {
    icon: Award,
    title: "Hyderabad's 1st B-School",
    body: "A pioneering legacy of business education in the city — built on rigour, ethics and ambition.",
  },
  {
    icon: GraduationCap,
    title: "Industry-Oriented Curriculum",
    body: "Curriculum designed with industry leaders, refreshed each year to reflect today's business reality.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    body: "Research scholars and senior industry practitioners delivering a two-way learning experience.",
  },
  {
    icon: Building2,
    title: "Corporate Exposure",
    body: "Live projects, structured internships and mentorship from working professionals across sectors.",
  },
  {
    icon: Sparkles,
    title: "Modern Infrastructure",
    body: "Premium classrooms, collaborative studios and a fully digital library — built for focused learning.",
  },
  {
    icon: Handshake,
    title: "Strong Alumni Network",
    body: "5,000+ alumni leading at Accenture, Deloitte, TCS, Amazon, KPMG and across the founder ecosystem.",
  },
];

export function WhyMSB() {
  return (
    <section className={s.section} id="why">
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <span className="msb-eyebrow">Why MSB</span>
            <h2 className={s.heading}>
              A premium business education, <em>engineered for outcomes.</em>
            </h2>
          </div>
          <p className={s.lede}>
            At Manson School of Business, we don't just teach business — we cultivate the artistry
            of leadership. Six reasons ambitious students choose MSB year after year.
          </p>
        </header>
        <div className={s.grid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <article className={`${s.card} msb-reveal`} key={f.title}>
                <span className={s.num}>0{i + 1}</span>
                <div className={s.iconWrap}>
                  <Icon size={24} />
                </div>
                <h3 className={s.cardTitle}>{f.title}</h3>
                <p className={s.cardBody}>{f.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
