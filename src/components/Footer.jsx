import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import s from "./Footer.module.css";
import { navLinks, site } from "@/lib/site-config";

export function Footer() {
  const cols = [navLinks.slice(0, 5), navLinks.slice(5)];
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.brand}>
            <div className={s.brandRow}>
              <span className={s.mark}>M</span>
              <span className={s.brandName}>
                Manson School
                <br />
                of Business
              </span>
            </div>
            <p className={s.tagline}>
              Hyderabad's 1st B-School — shaping ambitious students into industry leaders through
              mentorship, rigour and real-world business exposure.
            </p>
          </div>
          <div className={s.col}>
            <h4>Explore</h4>
            <ul>
              {cols[0].map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.col}>
            <h4>Institute</h4>
            <ul>
              {cols[1].map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.col}>
            <h4>Get in Touch</h4>
            <ul>
              <li className={s.contactItem}>
                <MapPin size={16} />
                <span>{site.address}</span>
              </li>
              <li className={s.contactItem}>
                <Phone size={16} />
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </li>
              <li className={s.contactItem}>
                <Mail size={16} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.bottom}>
          <span>© {new Date().getFullYear()} Manson School of Business. All rights reserved.</span>
          <div className={s.legal}>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
