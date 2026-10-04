// ============================================================
//  只改这个文件就行。标了 TODO 的是还需要你确认的。
// ============================================================
window.PROFILE = {
  // 部署后的落地页地址（二维码就编码这个）。上线 GitHub Pages 后改成你的地址。
  cardUrl: "https://liwen2000666.github.io/wenli-cv/",

  event: "ISMAR 2026 · Bari",

  name: "Wen Li",
  nameZh: "李汶",
  role: "PhD student",
  affiliation: "University of Bologna",
  bio: "I work where fashion meets virtual reality and human–computer interaction, using AI to help people understand, design and try on clothing.",
  interests: ["Fashion", "Virtual Reality", "Human-Computer Interaction"],
  photo: "files/avatar.jpg",

  email: "wen.li7@unibo.it",
  cv: "",  // 换好去掉住址/电话、补上博士的 CV 后，放进 files/cv.pdf 并改回 "files/cv.pdf"
  homepage: { label: "University page", url: "https://www.unibo.it/sitoweb/wen.li7/avvisi" },
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=tPsS_PQAAAAJ&hl=en" },
    { label: "ORCID",          url: "https://orcid.org/0009-0005-0916-3791" },
  ],

  education: [
    { school: "University of Bologna",  degree: "PhD, Year 2",                                  when: "Now" },
    { school: "Donghua University",     degree: "M.Eng. Fashion Design & Engineering",          when: "2022 – 2025" },
    { school: "Donghua University",     degree: "B.Eng. Fashion Design & Engineering",          when: "2018 – 2022" },
  ],
  honors: ["National Scholarship", "Shanghai Outstanding Graduate"],

  // 今年 ISMAR 的论文。没有的话设为 null。
  paper: {
    id: "paper",
    shortTitle: "Olfactory cues in MR",
    label: "At ISMAR this year",
    title: "Olfactory context cues for procedural skill transfer from digital twin-based mixed reality learning to real-world execution",
    summary: "People learn a procedural skill in a digital-twin mixed reality environment, then carry it out in the real world. We test whether the same scent in both settings acts as a memory anchor that helps the skill transfer.",
    authors: "Lai, Zhao, Li, Hajahmadi, Cascarano & Marfia",
    venue: "IEEE TVCG · ISMAR 2026",
    url: "https://alettazhao.github.io/work/#olfactory-cues-in-mr",
    linkText: "Watch the video →",
  },

  // 过往项目。第一个会作为展示页「My work」二维码的目标。
  projects: [
    {
      id: "wardrobe",
      label: "Past project",
      title: "Personal Virtual Wardrobe",
      summary: "An AI fashion assistant for managing your clothes and choosing outfits.",
      points: [
        "Upload photos of your clothes; multimodal recognition pulls out style, structure and colour and files them into a visual wardrobe.",
        "Structure-similarity matching turns what you own into personalised outfit suggestions.",
        "Virtual try-on composites the selected pieces onto a model photo, or onto your own.",
        "Describe what you need in plain language and the assistant learns your preferences over time.",
      ],
      tags: ["Python", "FastAPI", "MongoDB", "BERT", "Virtual try-on"],
      video: "files/wardrobe.mp4",
      poster: "files/wardrobe-poster.jpg",
    },
  ],

  research: [
    { title: "Peking Opera Dan costume classification with an improved ResNet-18", note: "Asian Social Science, 2025 · 95.41% accuracy on 18 categories" },
    { title: "Fashion coordination styles via Kansei engineering and semantic networks", note: "Ongoing" },
    { title: "Base patterns for plus-size women's tops using feed-forward neural networks", note: "Ongoing · 1.36% mean prediction error" },
  ],
};
