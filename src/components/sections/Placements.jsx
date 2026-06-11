import {
  ArrowRight,
  Briefcase,
  Download,
  GraduationCap,
  Globe,
  Phone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import s from "./Placements.module.css";
import { useCounter } from "@/hooks/useCounter";
import { useModals } from "../ModalProvider";
import { site } from "@/lib/site-config";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const recruiters = [
  { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  {
    name: "TCS",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
  },
  {
    name: "Deloitte",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_logo.svg",
  },
  {
    name: "PwC",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg",
  },
  { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  {
    name: "HCL",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/72/HCL_Technologies_logo.svg",
  },
  {
    name: "Cisco",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  },
  { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "KPMG", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/KPMG_logo.svg" },
  {
    name: "Wipro",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  },
];

const highlights = [
  {
    icon: Briefcase,
    title: "Corporate Partnerships",
    body: "Sustained relationships with 150+ recruiters across consulting, finance, tech and analytics.",
  },
  {
    icon: GraduationCap,
    title: "Structured Internships",
    body: "Every student completes at least one industry-mentored internship before placement season.",
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    body: "Year-round leadership labs, simulations and capstone projects judged by industry CXOs.",
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    body: "1:1 mentor pairing with working professionals — from week one to placement offer.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    body: "International business case competitions and visiting faculty from partner universities.",
  },
  {
    icon: Sparkles,
    title: "Career Services",
    body: "Resume, GD, PI and aptitude training — designed and delivered by a dedicated placements team.",
  },
];

const timeline = [
  "Career Preparation",
  "Aptitude Training",
  "Soft Skills",
  "Mock Interviews",
  "Corporate Interaction",
  "Placement Drive",
  "Final Placement",
];

const stories = [
  {
    img: student1,
    name: "Ananya Reddy",
    role: "Business Analyst, Deloitte",
    pkg: "12.4 LPA",
    quote:
      "MSB's mentorship and live projects gave me the edge to crack three consulting offers in my final semester.",
  },
  {
    img: student2,
    name: "Rohan Iyer",
    role: "Associate, Accenture Strategy",
    pkg: "10.8 LPA",
    quote:
      "From the aptitude labs to mock interviews, every session was sharply aligned with real recruiter expectations.",
  },
  {
    img: student3,
    name: "Sneha Kapoor",
    role: "Product Analyst, Amazon",
    pkg: "14.2 LPA",
    quote:
      "The faculty pushed me beyond textbooks — into case studies, internships and competitions that actually mattered.",
  },
];

function Stat({ value, suffix, prefix, label }) {
  const { ref, value: n } = useCounter(value);
  return (
    <div className={`${s.statCard} msb-reveal`}>
      <div className={s.statVal}>
        {prefix}
        <span ref={ref}>{n}</span>
        {suffix}
      </div>
      <span className={s.statLbl}>{label}</span>
    </div>
  );
}

export function Placements() {
  const { open } = useModals();
  // duplicate logos for seamless marquee
  const logos = [...recruiters, ...recruiters];

  return (
    <section className={s.section} id="placements">
      <div className={s.inner}>
        <header className={s.head}>
          <span className={s.eyebrow}>Placement Excellence</span>
          <h2 className={s.heading}>
            Your career, <em>begins here.</em>
          </h2>
          <p className={s.lede}>
            Placement at MSB isn't a season — it's a four-semester discipline. Sharpened aptitude,
            polished communication, real corporate exposure, and a team that doesn't rest until you
            have an offer that fits your ambition.
          </p>
        </header>

        <div className={s.statsGrid}>
          <Stat value={98} suffix="%" label="Placement Assistance" />
          <Stat value={14} suffix=" LPA" label="Highest Package" />
          <Stat value={6} suffix=" LPA" label="Average Package" />
          <Stat value={150} suffix="+" label="Recruiting Partners" />
          <Stat value={5000} suffix="+" label="Alumni Network" />
        </div>

        <div className={s.recruiters}>
          <div className={s.recruitersHead}>
            <h3>Top Recruiters</h3>
            <span>A snapshot of where MSB graduates build their careers</span>
          </div>
          <div className={s.logos}>
            <div className={s.logosTrack}>
              {logos.map((r, i) => (
                <img
                  key={`${r.name}-${i}`}
                  className={s.logo}
                  src={r.url}
                  alt={r.name}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        <div className={s.highlights}>
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div className={`${s.hCard} msb-reveal`} key={h.title}>
                <div className={s.hIcon}>
                  <Icon size={20} />
                </div>
                <h4>{h.title}</h4>
                <p>{h.body}</p>
              </div>
            );
          })}
        </div>

        <div className={s.timelineWrap}>
          <div className={s.timelineHead}>
            <h3>The MSB Placement Journey</h3>
            <p>A seven-stage pipeline that turns ambition into outcomes.</p>
          </div>
          <div className={s.timeline}>
            {timeline.map((t, i) => (
              <div className={s.tNode} key={t}>
                <span className={s.tDot}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.tLbl}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={s.storiesHead}>
          <h3>Student Success Stories</h3>
        </div>
        <div className={s.stories}>
          {stories.map((p) => (
            <article className={`${s.story} msb-reveal`} key={p.name}>
              <div className={s.storyTop}>
                <img
                  className={s.storyImg}
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={60}
                  height={60}
                />
                <div>
                  <div className={s.storyName}>{p.name}</div>
                  <div className={s.storyRole}>{p.role}</div>
                  <span className={s.storyPkg}>{p.pkg}</span>
                </div>
              </div>
              <p className={s.storyQuote}>"{p.quote}"</p>
            </article>
          ))}
        </div>

        <div className={s.cta}>
          <h3>Your Career Starts Here</h3>
          <p>Talk to the MSB placements team or get the full report — your call.</p>
          <div className={s.ctaBtns}>
            <button className={`${s.ctaBtn} ${s.ctaPrimary}`} onClick={() => open("brochure")}>
              <Download size={16} /> Placement Brochure
            </button>
            <a className={`${s.ctaBtn} ${s.ctaGhost}`} href={`tel:${site.phoneTel}`}>
              <Phone size={16} /> Talk to the Team
            </a>
            <button className={`${s.ctaBtn} ${s.ctaGhost}`} onClick={() => open("enquire")}>
              View Placement Report <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
