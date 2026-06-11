import { ArrowRight, CalendarCheck, Download, Phone } from "lucide-react";
import s from "./AdmissionsCTA.module.css";
import { useModals } from "../ModalProvider";
import { site } from "@/lib/site-config";

export function AdmissionsCTA() {
  const { open } = useModals();
  return (
    <section className={s.section} id="admissions">
      <div className={s.inner}>
        <span className={s.eyebrow}>Admissions 2026 · Now Open</span>
        <h2 className={s.heading}>
          Begin your <em>leadership journey</em> today.
        </h2>
        <p className={s.sub}>
          Limited seats across BBA, MBA and B.Com. Speak to our admissions team, book a campus visit
          or apply directly — your career deserves the head start.
        </p>
        <div className={s.ctas}>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={() => open("enquire")}>
            Apply Now <ArrowRight size={18} />
          </button>
          <button className={`${s.btn} ${s.btnGhost}`} onClick={() => open("enquire")}>
            <CalendarCheck size={18} /> Schedule Campus Visit
          </button>
          <button className={`${s.btn} ${s.btnGhost}`} onClick={() => open("brochure")}>
            <Download size={18} /> Download Brochure
          </button>
          <a className={`${s.btn} ${s.btnGhost}`} href={`tel:${site.phoneTel}`}>
            <Phone size={18} /> Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
