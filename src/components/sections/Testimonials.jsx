import { useEffect, useState } from "react";
import s from "./Testimonials.module.css";
import t1 from "@/assets/student-1.jpg";
import t2 from "@/assets/student-2.jpg";
import t3 from "@/assets/student-3.jpg";

const items = [
  {
    img: t1,
    name: "Ananya Reddy",
    role: "BBA '24 · Business Analyst, Deloitte",
    quote:
      "MSB didn't just prepare me for a job — it gave me the confidence to walk into a Big Four interview and leave with an offer.",
  },
  {
    img: t2,
    name: "Rohan Iyer",
    role: "MBA '24 · Associate, Accenture Strategy",
    quote:
      "The faculty knew the difference between a textbook and a boardroom. They taught us the boardroom.",
  },
  {
    img: t3,
    name: "Sneha Kapoor",
    role: "B.Com '23 · Product Analyst, Amazon",
    quote:
      "From day one, every project, internship and mentor at MSB was aligned with where I wanted my career to go.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, []);
  const item = items[i];
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <span className={s.eyebrow}>Student Voices</span>
        <span className={s.quoteMark}>"</span>
        <blockquote className={s.quote} key={i}>
          {item.quote}
        </blockquote>
        <div className={s.person}>
          <img
            className={s.avatar}
            src={item.img}
            alt={item.name}
            loading="lazy"
            width={56}
            height={56}
          />
          <div className={s.who}>
            <div className="n" style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>
              {item.name}
            </div>
            <div className="r" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
              {item.role}
            </div>
          </div>
        </div>
        <div className={s.dots}>
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`${s.dot} ${idx === i ? s.active : ""}`}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
