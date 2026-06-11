import { z } from "zod";

const LeadSchema = z.object({
  type: z.enum(["brochure", "enquiry"]),
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(6).max(20),
  course: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
});

export async function submitLead({ data }) {
  // Validate schema
  LeadSchema.parse(data);

  const sheetId = import.meta.env.VITE_MSB_SHEET_ID;
  const lovableKey = import.meta.env.VITE_LOVABLE_API_KEY;
  const sheetsKey = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;

  const row = [
    new Date().toISOString(),
    data.type,
    data.name,
    data.email,
    data.phone,
    data.course ?? "",
    data.message ?? "",
  ];

  // If Google Sheets connector + sheet id are configured, append the row.
  if (sheetId && lovableKey && sheetsKey) {
    try {
      const url = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${sheetId}/values/Leads!A:G:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": sheetsKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [row] }),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error("[submitLead] sheets append failed", res.status, body);
      }
    } catch (e) {
      console.error("[submitLead] sheets error", e);
    }
  } else {
    // Backend not yet wired — log so the lead is not silently dropped.
    console.log("[submitLead] (no sheet configured)", row);
  }

  return { ok: true };
}
