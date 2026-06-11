import { useState } from "react";
import { Check, Send } from "lucide-react";
import { Modal, modalStyles as s } from "./Modal";
import { courses } from "@/lib/site-config";
import { submitLead } from "@/lib/submit-lead.functions";

export function EnquireModal({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const d = new FormData(e.currentTarget);
    const payload = {
      type: "enquiry",
      name: String(d.get("name") || "").trim(),
      email: String(d.get("email") || "").trim(),
      phone: String(d.get("phone") || "").trim(),
      course: String(d.get("course") || "").trim(),
      message: String(d.get("message") || "").trim(),
    };
    if (!payload.name || !payload.email || !payload.phone) {
      setError("Please complete all required fields.");
      return;
    }
    setLoading(true);
    try {
      await submitLead({ data: payload });
      setDone(true);
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
          <h3 className={s.title}>Thank you</h3>
          <p className={s.subtitle}>Our admissions team will reach out within one business day.</p>
          <button className={s.submit} onClick={onClose}>
            Close
          </button>
        </div>
      ) : (
        <>
          <span className={s.eyebrow}>Admissions · 2026</span>
          <h3 className={s.title}>Enquire Now</h3>
          <p className={s.subtitle}>
            Tell us a little about yourself — we will take it from there.
          </p>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.field}>
              <label className={s.label} htmlFor="e-name">
                Full Name
              </label>
              <input className={s.input} id="e-name" name="name" required maxLength={80} />
            </div>
            <div className={s.field}>
              <label className={s.label} htmlFor="e-email">
                Email
              </label>
              <input
                className={s.input}
                id="e-email"
                name="email"
                type="email"
                required
                maxLength={120}
              />
            </div>
            <div className={s.field}>
              <label className={s.label} htmlFor="e-phone">
                Phone
              </label>
              <input
                className={s.input}
                id="e-phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
              />
            </div>
            <div className={s.field}>
              <label className={s.label} htmlFor="e-course">
                Course Interested In
              </label>
              <select className={s.select} id="e-course" name="course" defaultValue="">
                <option value="">— Optional —</option>
                {courses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className={s.field}>
              <label className={s.label} htmlFor="e-msg">
                Message
              </label>
              <textarea
                className={s.textarea}
                id="e-msg"
                name="message"
                maxLength={1000}
                placeholder="What would you like to know?"
              />
            </div>
            {error && <div className={s.error}>{error}</div>}
            <button className={s.submit} type="submit" disabled={loading}>
              <Send
                size={16}
                style={{ display: "inline", marginRight: 8, verticalAlign: "-3px" }}
              />
              {loading ? "Sending…" : "Send Enquiry"}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
