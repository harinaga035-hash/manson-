import s from "./Programs.module.css";
import { useModals } from "../ModalProvider";

const programs = [
  {
    tag: "Undergraduate",
    title: "BBA",
    sub: "Bachelor of Business Administration",
    duration: "3 Years",
    eligibility: "10+2, any stream",
    points: [
      "Foundational business, finance & analytics",
      "Industry-led electives in semester 5 & 6",
      "Two internships built into the program",
      "Aptitude + soft-skills lab from day one",
    ],
  },
  {
    tag: "Postgraduate",
    title: "MBA",
    sub: "Master of Business Administration",
    duration: "2 Years",
    eligibility: "Graduate + valid score",
    points: [
      "Specialisations: Marketing, Finance, HR, Analytics",
      "Live capstone with a corporate sponsor",
      "1:1 mentorship from industry CXOs",
      "International business case competitions",
    ],
  },
  {
    tag: "Undergraduate",
    title: "B.Com",
    sub: "Bachelor of Commerce",
    duration: "3 Years",
    eligibility: "10+2, Commerce preferred",
    points: [
      "Strong financial accounting & taxation core",
      "CA / CMA / CS foundation alignment",
      "Capital markets simulation lab",
      "Corporate internship in the final year",
    ],
  },
];

export function Programs() {
  const { open } = useModals();
  return (
    <section className={s.section} id="programs">
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <span className="msb-eyebrow">Programs Offered</span>
            <h2 className={s.heading}>
              Three programs. <em>One uncompromising standard.</em>
            </h2>
          </div>
          <p className={s.lede}>
            BBA, MBA and B.Com — each program is engineered around outcomes, mentorship and industry
            exposure. Pick your path; we'll build the rest with you.
          </p>
        </header>
        <div className={s.grid}>
          {programs.map((p) => (
            <article className={`${s.card} msb-reveal`} key={p.title}>
              <span className={s.tag}>{p.tag}</span>
              <h3 className={s.title}>{p.title}</h3>
              <p className={s.sub}>{p.sub}</p>
              <div className={s.meta}>
                <div className={s.metaItem}>
                  <span className={s.metaLbl}>Duration</span>
                  <span className={s.metaVal}>{p.duration}</span>
                </div>
                <div className={s.metaItem}>
                  <span className={s.metaLbl}>Eligibility</span>
                  <span className={s.metaVal}>{p.eligibility}</span>
                </div>
              </div>
              <ul className={s.bullets}>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className={s.actions}>
                <button className={s.btnPrimary} onClick={() => open("enquire")}>
                  Apply Now
                </button>
                <button className={s.btnGhost} onClick={() => open("brochure")}>
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
