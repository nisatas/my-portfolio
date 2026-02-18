import { Router } from "express";

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const chatRouter = Router();

chatRouter.post("/", async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "Chat API not configured" });
  }
  const { message, lang = "tr", history = [] } = req.body ?? {};
  if (!message?.trim()) {
    return res.status(400).json({ error: "message is required" });
  }

  try {
    const contents = [
      ...(Array.isArray(history) ? history : []).slice(-6).flatMap((m: { role?: string; text?: string }) => {
        if (!m?.text) return [];
        return [{ role: m.role === "user" ? "user" : "model", parts: [{ text: m.text }] }];
      }),
      { role: "user", parts: [{ text: message.trim() }] },
    ];

    const systemInstruction = getSystemPrompt(lang === "en" ? "en" : "tr");
    const body = {
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 200 },
    };

    const r = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      console.error("Gemini error", r.status, err);
      return res.status(502).json({ error: "Chat service error" });
    }
    const data = await r.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";
    res.json({ text });
  } catch (e) {
    console.error("Chat error", e);
    res.status(500).json({ error: "Server error" });
  }
});

function getSystemPrompt(lang: "tr" | "en"): string {
  const base = {
    name: "Nisa Ataş",
    role: "Full Stack Developer Trainee | Student",
    email: "nisatas544@gmail.com",
    github: "github.com/nisatas",
    linkedin: "linkedin.com/in/nisaatas",
    education: [
      "İstanbul Üniversitesi - Bilgisayar Programcılığı (2025-2027)",
      "İstanbul Üniversitesi - Cerrahpaşa - Bilgisayar ve Öğretim Teknolojileri Öğretmenliği (2022-2026)",
    ],
    experience: [
      "Workintech - Full Stack Developer Trainee (Temmuz 2025 - Günümüz)",
      "AUZEM - YETAM XR - Öğrenci Asistanı (Kasım 2024 - Günümüz)",
      "Robotik Bilim - Robotik Kodlama Öğretmeni (Mart 2025 - Eylül 2025)",
      "Şişli Öğretmenevi - Eğitmen (Aralık 2024)",
    ],
    skills: {
      frontend: ["JavaScript", "React.js", "Hooks", "Redux", "HTML", "CSS", "TailwindCSS"],
      backend: ["Java", "Spring Boot", "SQL", "Git", "ASP.NET", "C#"],
      other: ["Algorithms", "Debugging", "Deployment", "Problem Solving", "API Integration", "Figma", "Teamwork"],
    },
    certificates: ["INSIDER – AI WEEKEND (29-30 Kasım)"],
    languages: ["İngilizce B1", "Almanca B1"],
  };

  if (lang === "tr") {
    return `Sen Nisa Ataş'ın kişisel asistanısın. Nisa hakkında şu bilgilere sahipsin:
**Kişisel:** ${base.name}, ${base.role}, ${base.email}, ${base.github}, ${base.linkedin}
**Eğitim:** ${base.education.join("; ")}
**Deneyim:** ${base.experience.join("; ")}
**Yetenekler:** Front-End: ${base.skills.frontend.join(", ")}; Back-End: ${base.skills.backend.join(", ")}; Diğer: ${base.skills.other.join(", ")}
**Sertifikalar:** ${base.certificates.join(", ")}
**Diller:** ${base.languages.join(", ")}
Kullanıcılara Nisa hakkında kısa (2-3 cümle) ve yardımcı cevap ver. Sadece Nisa hakkında bilgi ver.`;
  }
  return `You are Nisa Ataş's personal assistant. You have this info:
**Personal:** ${base.name}, ${base.role}, ${base.email}, ${base.github}, ${base.linkedin}
**Education:** ${base.education.join("; ")}
**Experience:** ${base.experience.join("; ")}
**Skills:** Front-End: ${base.skills.frontend.join(", ")}; Back-End: ${base.skills.backend.join(", ")}; Other: ${base.skills.other.join(", ")}
**Certificates:** ${base.certificates.join(", ")}
**Languages:** ${base.languages.join(", ")}
Answer briefly (2-3 sentences) and only about Nisa.`;
}
