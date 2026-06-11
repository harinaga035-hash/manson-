import {
  ArrowRight,
  Download,
  Award,
  TrendingUp,
  Users,
  Building2,
  ShieldCheck,
  Star,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import s from "./Hero.module.css";
import heroImg from "@/assets/hero-campus.jpg";
import { useModals } from "../ModalProvider";
import { useCounter } from "@/hooks/useCounter";

function Stat({ value, suffix, prefix, label, icon: Icon, immediate = false }) {
  const { ref, value: n } = useCounter(value, 1800, immediate);
  return (
    <div className={s.statCard}>
      <div className={s.statIcon}>
        <Icon size={20} />
      </div>
      <div className={s.statText}>
        <span className={s.statVal}>
          {prefix}
          <span ref={ref}>{n}</span>
          {suffix}
        </span>
        <span className={s.statLbl}>{label}</span>
      </div>
    </div>
  );
}

export function Hero() {
  const { open } = useModals();

  return (
    <section className={s.hero} id="root">
      <div className={s.inner}>
        {/* Left Side: Premium Editorial Content */}
        <div className={s.contentSide}>
          {/* Top Badge: Hyderabad's 1st B-School • Admissions Open 2026 */}
          <div className={s.badge}>
            <div className={s.badgeStarIcon}>
              <Star size={12} fill="currentColor" />
            </div>
            <span className={s.badgeText}>
              HYDERABAD'S 1ST B-SCHOOL <span className={s.badgeDot}>•</span> ADMISSIONS OPEN 2026
            </span>
          </div>

          <h1 className={s.title}>
            Transforming
            <br />
            Ambitious Students into
            <br />
            <span className={s.serifItalic}>Industry Leaders.</span>
          </h1>

          <p className={s.sub}>
            A mentorship-driven business school where academic excellence meets real-world corporate
            exposure. BBA • MBA • B.Com — built for the leaders of tomorrow.
          </p>

          <div className={s.ctas}>
            <button className={s.ctaPrimary} onClick={() => open("enquire")}>
              Apply Now 2026 <ArrowRight size={18} className={s.arrowIcon} />
            </button>
            <button className={s.ctaGhost} onClick={() => open("brochure")}>
              <Download size={18} /> Download Prospectus
            </button>
          </div>
        </div>

        {/* Right Side: Campus Image placeholder in grid */}
        <div className={s.rightPlaceholder} />
      </div>

      {/* Flagship Campus Visual (Full bleed to the right edge) */}
      <div className={s.visualSide}>
        <img
          src={heroImg}
          alt="Manson School of Business Flagship Campus"
          className={s.campusImg}
        />
        <div className={s.imageOverlay} />
      </div>

      {/* Floating Statistics Card */}
      <div className={s.stats}>
        <div className={s.statsInner}>
          <Stat value={98} suffix="%" label="Placement Rate" icon={UserCheck} immediate={true} />
          <div className={s.statsDivider} />
          <Stat
            value={12.5}
            prefix="₹"
            suffix=" LPA"
            label="Highest Package"
            icon={GraduationCap}
            immediate={true}
          />
          <div className={s.statsDivider} />
          <Stat value={6.2} prefix="₹" suffix=" LPA" label="Average Package" icon={ShieldCheck} immediate={true} />
          <div className={s.statsDivider} />
          <Stat value={150} suffix="+" label="Top Recruiters" icon={Building2} immediate={true} />
          <div className={s.statsDivider} />
          <Stat value={5000} suffix="+" label="Alumni Network" icon={Users} immediate={true} />
        </div>
      </div>

      {/* Trust Bar Below Hero */}
      <div className={s.trustBar}>
        <div className={s.trustInner}>
          <div className={s.trustItem}>
            <span className={s.trustLabel}>Recognized by</span>
            <svg
              className={s.trustLogo}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="1 1"
              />
              <path d="M12 6c.5 1.5 1.5 2 2 3s.5 2-.5 3-2.5 1-2.5-1 1-3.5 1-5z" />
              <path d="M8 12c1.5-.5 2.5 0 3 1s0 2.5-1 3-2-1.5-2-3c0-.5 0-1 0-1z" />
              <path d="M16 12c-1.5-.5-2.5 0-3 1s0 2.5 1 3 2-1.5 2-3c0-.5 0-1 0-1z" />
              <path d="M10 17h4v1.5h-4z" />
            </svg>
            <span className={s.trustBold}>AICTE</span>
          </div>
          <div className={s.trustDividerLine} />
          <div className={s.trustItem}>
            <span className={s.trustLabel}>Affiliated to</span>
            <svg
              className={s.trustLogo}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                d="M12 2C6.5 2 4 4.5 4 10c0 5.5 3 9 8 12 5-3 8-6.5 8-12 0-5.5-2.5-8-8-8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M9 16v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4h1v-4c0-2.8-2.2-5-5-5s-5 2.2-5 5v4h1z" />
              <path d="M11 11h2v4h-2z" />
              <circle cx="12" cy="6" r="1" />
            </svg>
            <span className={s.trustBold}>Osmania University</span>
          </div>
          <div className={s.trustDividerLine} />
          <div className={s.trustItem}>
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="currentColor"
              className={s.laurelLogo}
            >
              <path d="M12 6.5l.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.3 1.8-.3z" />
              <path d="M8 8c-.8 1-1.3 2.5-1 4.5.3 1.8 1.2 3.2 2.5 4l-.5.8c-1.5-1-2.5-2.6-2.8-4.8-.4-2.4.2-4.2 1.3-5.5l.5.7z" />
              <path d="M6 10c-.5.5-.8 1.2-.8 2 0 1 .4 1.8 1 2.4l-.6.6C4.8 14.2 4.2 13.2 4.2 12c0-1.2.5-2.2 1.2-3l.6.6z" />
              <path d="M16 8c.8 1 1.3 2.5 1 4.5-.3 1.8-1.2 3.2-2.5 4l.5.8c1.5-1 2.5-2.6 2.8-4.8.4-2.4-.2-4.2-1.3-5.5l-.5.7z" />
              <path d="M18 10c.5.5.8 1.2.8 2 0 1-.4 1.8-1 2.4l.6.6c.8-1 1.4-2 1.4-3.2 0-1.2-.5-2.2-1.2-3l-.6.6z" />
            </svg>
            <div className={s.rankingTextContainer}>
              <span className={s.rankingSmall}>Ranked Among</span>
              <span className={s.rankingLarge}>Top B-Schools</span>
              <span className={s.rankingSmall}>in Telangana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
