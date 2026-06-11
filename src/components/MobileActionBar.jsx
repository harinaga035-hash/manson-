import { Download, MessageCircle, Phone, GraduationCap } from "lucide-react";
import s from "./MobileActionBar.module.css";
import { site } from "@/lib/site-config";
import { useModals } from "./ModalProvider";

const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function MobileActionBar() {
  const { open } = useModals();
  return (
    <nav className={s.bar} aria-label="Quick actions">
      <a className={s.item} href={`tel:${site.phoneTel}`}>
        <Phone size={18} />
        <span>Call</span>
      </a>
      <a className={s.item} href={waHref} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
      <button className={s.item} onClick={() => open("brochure")}>
        <Download size={18} />
        <span>Brochure</span>
      </button>
      <button className={`${s.item} ${s.apply}`} onClick={() => open("enquire")}>
        <GraduationCap size={18} />
        <span>Apply</span>
      </button>
    </nav>
  );
}
