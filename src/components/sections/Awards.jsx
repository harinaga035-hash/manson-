import s from "./Awards.module.css";

const awards = [
  {
    year: "2024",
    title: "Certificate of Appreciation Award",
    body: "Recognised for sustained impact in business education and the institution's contribution to shaping future business leaders.",
  },
  {
    year: "2023",
    title: "Top Emerging Business School — South India",
    body: "Awarded for industry-aligned curriculum, faculty calibre and consistent placement outcomes year on year.",
  },
  {
    year: "2022",
    title: "Excellence in Industry Engagement",
    body: "Honoured for the depth of corporate partnerships, live projects and mentor-driven placement infrastructure.",
  },
  {
    year: "2021",
    title: "Startup of the Year — Appreciation Award",
    body: "Featured by Business Connect India for redefining the early-career business education category in Hyderabad.",
  },
];

export function Awards() {
  return (
    <section className={s.section} id="awards">
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <span className="msb-eyebrow">Awards & Recognition</span>
            <h2 className={s.heading}>
              A short list of moments <em>worth marking.</em>
            </h2>
          </div>
          <p className={s.lede}>
            We don't build for awards — but the institution's commitment to academic excellence and
            student outcomes has not gone unnoticed.
          </p>
        </header>

        <div className={s.timeline}>
          {awards.map((a) => (
            <div className={`${s.item} msb-reveal`} key={a.title}>
              <div className={s.year}>{a.year}</div>
              <h3 className={s.itemTitle}>{a.title}</h3>
              <p className={s.itemBody}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
