import s from "./Gallery.module.css";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const tiles = [
  { img: g1, cap: "Classroom in session", tall: true },
  { img: g2, cap: "Graduation 2024" },
  { img: g3, cap: "The MSB Library" },
  { img: g4, cap: "Placement Day" },
];

export function Gallery() {
  return (
    <section className={s.section} id="gallery">
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <span className="msb-eyebrow">Campus Life</span>
            <h2 className={s.heading}>
              Where business education <em>actually happens.</em>
            </h2>
          </div>
          <p className={s.lede}>
            Classrooms, libraries, placement drives, graduation. A short look inside the everyday
            rhythm of MSB.
          </p>
        </header>
        <div className={s.grid}>
          {tiles.map((t, i) => (
            <figure className={`${s.tile} ${t.tall ? s.tall : ""}`} key={i}>
              <img src={t.img} alt={t.cap} loading="lazy" />
              <figcaption className={s.cap}>{t.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
