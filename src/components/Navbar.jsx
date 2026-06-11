import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import s from "./Navbar.module.css";
import { navLinks, site } from "@/lib/site-config";
import { useModals } from "./ModalProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { open: openModal } = useModals();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`${s.wrap} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.inner}>
        <Link to="/" className={s.brand} aria-label="Manson School of Business — Home">
          <span className={s.mark}>M</span>
          <span className={s.brandText}>
            <span className={s.brandName}>Manson School of Business</span>
            <span className={s.brandSub}>{site.tagline}</span>
          </span>
        </Link>

        <nav className={s.nav} aria-label="Primary">
          {navLinks.map((l) => {
            const hasDropdown =
              l.label === "About Us" || l.label === "Programs" || l.label === "Admissions" || l.label === "Campus Life";
            const dropdownItems =
              l.label === "About Us"
                ? [
                    { label: "About Us Overview", to: "/about-us" },
                    { label: "Message from Chairperson", to: "/about-us#chairperson" },
                    { label: "Faculty Profiles", to: "/faculty" },
                  ]
                : l.label === "Programs"
                  ? [
                      { label: "Overview", to: "/programs" },
                      { label: "BBA Course", to: "/programs#bba" },
                      { label: "B.Com Course", to: "/programs#bcom" },
                      { label: "MBA Course", to: "/programs#mba" },
                    ]
                  : l.label === "Admissions"
                    ? [
                        { label: "Process & Eligibility", to: "/admissions" },
                        { label: "Scholarships", to: "/admissions#scholarships" },
                        { label: "Important Dates", to: "/admissions#dates" },
                      ]
                    : l.label === "Campus Life"
                      ? [
                          { label: "Overview & Begumpet Campus", to: "/campus-life" },
                          { label: "Events Log", to: "/events" },
                          { label: "Student Testimonials", to: "/testimonials" },
                        ]
                      : [];

            if (hasDropdown) {
              return (
                <div key={l.to} className={s.navItemWithDropdown}>
                  <Link to={l.to} className={`${s.link} ${pathname === l.to ? s.active : ""}`}>
                    {l.label} <ChevronDown size={12} className={s.chevron} />
                  </Link>
                  <div className={s.dropdownMenu}>
                    {dropdownItems.map((item) => (
                      <Link key={item.label} to={item.to} className={s.dropdownItem}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.to}
                to={l.to}
                className={`${s.link} ${pathname === l.to ? s.active : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className={s.ctas}>
          <button className={s.ctaGhost} onClick={() => openModal("brochure")}>
            <FileText size={16} className={s.ctaIcon} />
            <span>Download Brochure</span>
          </button>
          <button className={s.ctaPrimary} onClick={() => openModal("enquire")}>
            Apply Now
          </button>
        </div>

        <button className={s.hamburger} aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className={s.mobilePanel} role="dialog" aria-modal="true">
          <button className={s.mobileClose} onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={s.mobileLink}>
              {l.label}
            </Link>
          ))}
          <div className={s.mobileCtas}>
            <button
              className={`${s.mobileCta} ${s.mobileCtaPrimary}`}
              onClick={() => {
                setOpen(false);
                openModal("enquire");
              }}
            >
              Apply Now
            </button>
            <button
              className={`${s.mobileCta} ${s.mobileCtaGhost}`}
              onClick={() => {
                setOpen(false);
                openModal("brochure");
              }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
