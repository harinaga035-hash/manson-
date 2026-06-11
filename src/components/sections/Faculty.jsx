import s from "./Faculty.module.css";
import f1 from "@/assets/faculty-1.jpg";
import f2 from "@/assets/faculty-2.jpg";
import f3 from "@/assets/faculty-3.jpg";

const faculty = [
  {
    img: f1,
    name: "Dr. Arjun Menon",
    role: "Dean — Academics",
    bio: "PhD in Strategy. 18 years across consulting, executive education and applied research with Fortune 500 leaders.",
  },
  {
    img: f2,
    name: "Prof. Lavanya Kanduri",
    role: "Chairperson",
    bio: "Founder & visionary of MSB. Award-winning educator focused on women in leadership and entrepreneurship.",
  },
  {
    img: f3,
    name: "Dr. Suresh Iyer",
    role: "Director — Placements",
    bio: "25+ years in talent strategy. Architected corporate-academic partnerships across consulting, BFSI and tech.",
  },
];

export function Faculty() {
  return (
    <section className={s.section} id="faculty">
      <div className={s.inner}>
        <header className={s.head}>
          <span className="msb-eyebrow">Faculty Excellence</span>
          <h2 className={s.heading}>
            Mentors who've <em>actually built things.</em>
          </h2>
          <p className={s.lede}>
            Senior practitioners, published researchers, founder-operators. The faculty at MSB
            doesn't just teach business — they've lived it.
          </p>
        </header>
        <div className={s.grid}>
          {faculty.map((p) => (
            <article className={`${s.card} msb-reveal`} key={p.name}>
              <div className={s.frame}>
                <img
                  className={s.portrait}
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={168}
                  height={168}
                />
              </div>
              <h3 className={s.name}>{p.name}</h3>
              <div className={s.role}>{p.role}</div>
              <p className={s.bio}>{p.bio}</p>
              <div className={s.divider} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
