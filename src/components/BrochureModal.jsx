import { useState } from "react";
import { Check, Download } from "lucide-react";
import { Modal, modalStyles as s } from "./Modal";
import { courses, site } from "@/lib/site-config";
import { submitLead } from "@/lib/submit-lead.functions";

export function BrochureModal({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    const payload = {
      type: "brochure",
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      course: String(data.get("course") || "").trim(),
      message: "",
    };
    if (!payload.name || !payload.email || !payload.phone || !payload.course) {
      setError("Please complete all fields.");
      return;
    }
    setLoading(true);
    try {
      await submitLead({ data: payload });
      setDone(true);
      // trigger brochure download
      const a = document.createElement("a");
      a.href = site.brochureUrl;
      a.download = "MSB-Prospectus-2026.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal onClose={onClose}>
      {done ? (
        <div className={s.success}>
          <div className={s.successIcon}>
            <Check size={28} />
          </div>
          <h3 className={s.title}>Brochure on its way</h3>
          <p className={s.subtitle}>
            Your download has started. Our admissions team will reach out shortly.
          </p>
          <button className={s.submit} onClick={onClose}>
            Close
          </button>
        </div>
      ) : (
        <>
          <span className={s.eyebrow}>Download · Prospectus 2026</span>
          <h3 className={s.title}>Get the MSB Brochure</h3>
          <p className={s.subtitle}>
            Programs, fees, placements and admissions — all in one document.
          </p>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.field}>
              <label className={s.label} htmlFor="b-name">
                Full Name
              </label>
              <input className={s.input} id="b-name" name="name" required maxLength={80} />
            </div>
            <div className={s.field}>
              <label className={s.label} htmlFor="b-email">
                Email
              </label>
              <input
                className={s.input}
                id="b-email"
                name="email"
                type="email"
                required
                maxLength={120}
              />
            </div>
            <div className={s.field}>
              <label className={s.label} htmlFor="b-phone">
                Phone
              </label>
              <input
                className={s.input}
                id="b-phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
              />
            </div>
            <div className={s.field}>
              <label className={s.label} htmlFor="b-course">
                Course Interested In
              </label>
              <select className={s.select} id="b-course" name="course" required defaultValue="">
                <option value="" disabled>
                  Select a course
                </option>
                {courses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            {error && <div className={s.error}>{error}</div>}
            <button className={s.submit} type="submit" disabled={loading}>
              <Download
                size={16}
                style={{ display: "inline", marginRight: 8, verticalAlign: "-3px" }}
              />
              {loading ? "Sending…" : "Download Brochure"}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
