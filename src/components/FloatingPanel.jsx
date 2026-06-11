import { FileText, Phone, MessageSquare } from "lucide-react";
import s from "./FloatingPanel.module.css";
import { site } from "@/lib/site-config";
import { useModals } from "./ModalProvider";

const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.774 9.774 0 0 0-6.979-2.879c-5.443 0-9.87 4.373-9.875 9.804-.002 1.761.474 3.483 1.378 5.017L1.97 21.537l4.677-1.706c-.001.001 0 0 0 0zm11.353-7.53c-.305-.152-1.808-.893-2.087-.994-.28-.102-.483-.153-.686.152-.203.305-.787.99-.965 1.193-.177.203-.355.228-.66.076-.304-.152-1.285-.473-2.448-1.51-.904-.807-1.513-1.804-1.69-2.108-.177-.304-.019-.469.133-.62.137-.136.305-.355.457-.533.152-.177.203-.304.305-.508.102-.203.05-.38-.025-.533-.076-.152-.686-1.653-.94-2.262-.247-.595-.5-.514-.685-.523-.177-.008-.38-.01-.582-.01-.203 0-.533.076-.813.38-.28.305-1.066 1.042-1.066 2.542 0 1.5 1.092 2.946 1.244 3.15.152.203 2.15 3.284 5.207 4.605.727.314 1.294.502 1.737.643.73.232 1.396.199 1.922.12.585-.087 1.808-.738 2.062-1.452.254-.715.254-1.328.177-1.452-.075-.124-.28-.203-.585-.355z" />
  </svg>
);

export function FloatingPanel() {
  const { open } = useModals();
  return (
    <aside className={s.panel} aria-label="Quick actions">
      <div className={s.card}>
        <button className={s.btn} onClick={() => open("brochure")} aria-label="Download Brochure">
          <div className={s.iconBrochure}>
            <FileText size={20} />
          </div>
          <span className={s.label}>
            Download
            <br />
            Brochure
          </span>
        </button>
        <a className={s.btn} href={`tel:${site.phoneTel}`} aria-label={`Call ${site.phoneDisplay}`}>
          <div className={s.iconPhone}>
            <Phone size={20} />
          </div>
          <span className={s.label}>Call Now</span>
        </a>
        <button className={s.btn} onClick={() => open("enquire")} aria-label="Enquire Now">
          <div className={s.iconEnquire}>
            <MessageSquare size={20} />
          </div>
          <span className={s.label}>Enquire Now</span>
        </button>
        <a
          className={s.btn}
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <div className={s.iconWhatsapp}>
            <WhatsAppIcon />
          </div>
          <span className={s.label}>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
