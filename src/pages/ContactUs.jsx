import { useEffect, useState } from "react";
import s from "./Pages.module.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { site } from "../lib/site-config";
import { toast } from "sonner";
import { submitLead } from "../lib/submit-lead.functions";

export function ContactUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "BBA",
    state: "Telangana",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        state: formData.state,
        note: formData.message,
        source: "Contact Us Page"
      });
      toast.success("Callback request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "BBA",
        state: "Telangana",
        message: ""
      });
    } catch (err) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const states = [
    "Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Maharashtra", "Delhi"
  ];

  return (
    <main className={s.page}>
      <div className={s.container}>
        {/* Header */}
        <header className={s.pageHeader}>
          <span className={s.pageSubtitle}>Get in Touch</span>
          <h1 className={s.pageTitle}>Contact Us</h1>
        </header>

        <section className={s.grid2} style={{ marginBottom: "48px" }}>
          {/* Contact Details */}
          <div className={s.card} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <h2 className={s.sectionHeader} style={{ marginBottom: "20px" }}>Begumpet Campus</h2>
              <p className={s.listText} style={{ marginBottom: "20px" }}>
                Reach out to our admissions coordinators or visit our office in Hyderabad for career counselling, infrastructure tours, and provisional seat booking.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f0ec", color: "#0b3d2e", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#747470", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }}>Campus Address</span>
                  <span style={{ fontSize: "14.5px", fontWeight: "600", color: "#0c1612" }}>
                    {site.address}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fdf6e2", color: "#c9a227", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#747470", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }}>Admissions Hotlines</span>
                  <a href="tel:8074512062" style={{ fontSize: "14.5px", fontWeight: "700", color: "#0b3d2e", display: "block" }}>+91 80745 12062</a>
                  <a href="tel:7075589946" style={{ fontSize: "14.5px", fontWeight: "700", color: "#0b3d2e", display: "block" }}>+91 70755 89946</a>
                  <a href="tel:6301133645" style={{ fontSize: "14.5px", fontWeight: "700", color: "#0b3d2e", display: "block" }}>+91 63011 33645</a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e6f0ec", color: "#0b3d2e", display: "grid", placeItems: "center", flexShrink: "0" }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#747470", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }}>Email Addresses</span>
                  <a href={`mailto:${site.email}`} style={{ fontSize: "14.5px", fontWeight: "700", color: "#0b3d2e", display: "block" }}>{site.email}</a>
                  <a href={`mailto:${site.placementsEmail}`} style={{ fontSize: "14.5px", fontWeight: "700", color: "#0b3d2e", display: "block" }}>{site.placementsEmail}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className={s.card}>
            <h2 className={s.sectionHeader} style={{ marginBottom: "20px" }}>Request a Call Back</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#545450", marginBottom: "6px" }}>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(12, 22, 18, 0.1)", borderRadius: "8px", background: "#faf8f4", fontSize: "14px" }} 
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#545450", marginBottom: "6px" }}>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(12, 22, 18, 0.1)", borderRadius: "8px", background: "#faf8f4", fontSize: "14px" }} 
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#545450", marginBottom: "6px" }}>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(12, 22, 18, 0.1)", borderRadius: "8px", background: "#faf8f4", fontSize: "14px" }} 
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#545450", marginBottom: "6px" }}>Select Course</label>
                  <select 
                    name="course" 
                    value={formData.course} 
                    onChange={handleChange} 
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(12, 22, 18, 0.1)", borderRadius: "8px", background: "#faf8f4", fontSize: "14px" }}
                  >
                    <option value="BBA">BBA</option>
                    <option value="BCom">B.Com</option>
                    <option value="MBA">MBA</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#545450", marginBottom: "6px" }}>Select State</label>
                  <select 
                    name="state" 
                    value={formData.state} 
                    onChange={handleChange} 
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(12, 22, 18, 0.1)", borderRadius: "8px", background: "#faf8f4", fontSize: "14px" }}
                  >
                    {states.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#545450", marginBottom: "6px" }}>Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="3" 
                  style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(12, 22, 18, 0.1)", borderRadius: "8px", background: "#faf8f4", fontSize: "14px", resize: "vertical" }}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                className={s.ctaPrimary} 
                style={{ width: "100%", justifyContent: "center", gap: "8px", marginTop: "8px" }}
              >
                {loading ? "Submitting..." : "Send Enquiry"} <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
