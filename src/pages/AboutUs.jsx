import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import s from "./Pages.module.css";

export function AboutUs() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Who We Are</span>
          <h1 className={s.pageTitle}>About Manson School of Business</h1>
        </header>

        {/* Overview section */}
        <section className={s.card} id="overview">
          <h2 className={s.sectionHeader}>Overview & History</h2>
          <div className={s.letterContent}>
            <p>
              Studying business administration at Manson School of Business (MSB) is made an enriching learning experience. We at MSB, aim to help our students develop an artistry to become tomorrow’s global leaders. We groom our scholars to be ready to think critically, enable them to adapt to changing business panorama and develop an expanded world view.
            </p>
            <p>
              Manson School of Business is committed to provide you with the knowledge you need to create and make full use of the opportunities you need to succeed. To enhance your skill set with the aim of making you a competent business professional. We strive continuously to ensure that you will receive a level of excellence in business education that will help you not just launch your career but be ready to take on challenges.
            </p>
          </div>
        </section>

        {/* Vision, Mission, Motto */}
        <section className={s.grid3} id="values">
          <div className={s.card}>
            <span className={s.badgeGold}>Our Philosophy</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>Vision</h3>
            <p className={s.listText}>
              Develop tomorrow’s innovative & empathetic global business leaders with care.
            </p>
          </div>
          <div className={s.card}>
            <span className={s.badgeGold}>Our Commitment</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>Mission</h3>
            <p className={s.listText}>
              To inspire brilliant minds. Nurture them as future leaders. Shape them as independent, socially responsible & woke thinkers that can leave a mark at local & global levels.
            </p>
          </div>
          <div className={s.card}>
            <span className={s.badgeGold}>Our Motivation</span>
            <h3 className={s.sectionHeader} style={{ fontSize: "20px", marginBottom: "16px" }}>Motto</h3>
            <p className={s.listText}>
              Dare to dream Big. Cherish the dreams you envision and take steps towards illustrious accomplishments. Convert dreams into realistic possibilities.
            </p>
          </div>
        </section>

        {/* Chairperson Dean Message */}
        <section className={s.letterhead} id="chairperson" style={{ marginBottom: "32px" }}>
          <span className={s.letterRole}>Dean & Chairperson</span>
          <h2 className={s.letterName}>Ms. Lavanya Kanduri</h2>
          <span className={s.letterSubname}>M.Com, M.B.A, FCMA, DGBM | Manson Center of Excellence</span>
          <div className={s.letterContent}>
            <p>Dear Aspiring Business Leaders,</p>
            <p>
              At Manson Center of Excellence, we strive towards shaping the capabilities of our students to evolve as future leaders who are extremely competent, innovative, flexible and empathetic in using knowledge, tools and concepts whilst drawing on their understanding of the real world and global awareness.
            </p>
            <p>
              The culture of being a professional & the ethos of continuous learning is what we endeavor to assimilate in our programs. Studying business administration at MSB is an enriching experience, designed to give you the confidence, critical thinking, and world view necessary to thrive.
            </p>
            <p>We welcome you to join us and embark on a path to illustrious accomplishments.</p>
          </div>
          <div className={s.letterSign}>
            <span className={s.signTitle}>Lavanya Kanduri</span>
            <span className={s.signDesc}>Dean & Chairperson, Manson Center of Excellence</span>
          </div>
        </section>

        {/* Vice Principal Message */}
        <section className={s.letterhead} id="vice-principal" style={{ marginBottom: "48px" }}>
          <span className={s.letterRole}>Vice-Principal</span>
          <h2 className={s.letterName}>Ms. S Gayatri</h2>
          <span className={s.letterSubname}>MSc, MCA, MPhil | Manson Center of Excellence</span>
          <div className={s.letterContent}>
            <p>Dear Students and Partners,</p>
            <p>
              Being Vice-Principal at Manson, I oversee the delivery of academics to the students as per the prescribed curricula. At Manson, we strive for excellence in education, in a conducive environment. Our faculty team brings great ability gained by vast experience.
            </p>
            <p>
              The team is made up of a combination of experienced academicians, researchers & industry trainers. We have an excellent team of faculty, administrators, counsellors & mentors to nurture and support our students. We impart training through creative teaching methodologies.
            </p>
          </div>
          <div className={s.letterSign}>
            <span className={s.signTitle}>S Gayatri</span>
            <span className={s.signDesc}>Vice-Principal, Manson Center of Excellence</span>
          </div>
        </section>

        {/* Why Manson list */}
        <section className={s.card} id="why-msb" style={{ marginBottom: "48px" }}>
          <h2 className={s.sectionHeader}>Why Manson School of Business?</h2>
          <p className={s.listText} style={{ marginBottom: "24px" }}>
            MSB prioritizes a supportive, engaging, and collaborative learning environment with strong professional mentorship:
          </p>
          <div className={s.list}>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>A strong, supportive mentor-mentee relationship.</span>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>Lively and energetic classroom interactions which form the ethos of MSB.</span>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>Faculty rich in academic and industry experience, bringing real-world convergence to the classroom.</span>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>A shared commitment to knowledge distribution, student welfare, and learning with joy.</span>
            </div>
            <div className={s.listItem}>
              <div className={s.listDot} />
              <span className={s.listText}>Dedicated mock interview practice, soft skills training, and direct career paths.</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
