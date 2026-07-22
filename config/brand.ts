import type { BrandConfig } from "@/types/brand";

/**
 * SINGLE SOURCE OF TRUTH.
 * Edit ONLY this file and public/images/ to rebrand.
 */
export const BRAND: BrandConfig = {
  businessName: "Thoppil DOMINIC Jewellers",
  tagline: "Your Trusted Jewellery Store in Changanassery",
  description:
    "Thoppil DOMINIC Jewellers is Changanassery's trusted destination for gold, diamond and silver jewellery. Serving Changanassery and surrounding areas with timeless craftsmanship for every celebration — from weddings and festivals to everyday elegance.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ. നിങ്ങളുടെ ഓരോ സാധാരണ ദിവസത്തെയും മനോഹരമാക്കാൻ ഇവ മതിയാകും.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്. അതിസൂക്ഷ്മമായി, തികഞ്ഞ പൂർണ്ണതയോടെ രൂപപ്പെടുത്തിയെടുത്തവ. നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് സ്വർണ്ണത്തിൽ ജീവൻ വയ്ക്കുമ്പോൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "ചങ്ങനാശ്ശേരിയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിൻ്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ. തലമുറകളായി നിങ്ങൾ നൽകുന്ന വിശ്വാസത്തിന് സ്വർണ്ണത്തേക്കാൾ തിളക്കമുണ്ട്.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "/images/store1.webp",
    "/images/store2.webp",
    "/images/store3.webp",
    "/images/store4.webp"
  ],

  address: "Market Rd, Changanassery, Kerala 686101",
  city: "Changanassery",
  state: "Kerala",
  pincode: "686101",

  phone: "+919745774790",
  whatsapp: "919745774790",
  email: "",

  mapsLink:
    "https://share.google/xO9CQEIkkAhh4K0Rn",

  openingHours: "Mon–Sat: 9:30 AM – 8:00 PM · Sunday: 10:00 AM – 7:00 PM",

  instagram: "https://www.instagram.com/thoppil_dominic_jewellers",
  facebook: "",

  seo: {
    title: "Thoppil DOMINIC Jewellers | Gold & Diamond Jewellery in Changanassery",
    description:
      "Thoppil DOMINIC Jewellers — Changanassery's premier jewellery store. Exquisite gold, diamond and silver collections for every occasion. Visit us in Changanassery, Kerala.",
    keywords: [
      "Thoppil DOMINIC Jewellers",
      "jewellery Changanassery",
      "gold jewellery Changanassery",
      "diamond jewellery Changanassery",
      "silver jewellery Changanassery",
      "jewellery store Changanassery",
      "gold shop Changanassery",
      "jewellery Kerala",
    ],
    canonical: "https://thoppil-dominic-jewellers-changanassery.vercel.app",
    ogImage: "/images/store1.webp",
  },

  faq: [],

  whatsappMessage:
    "Hello Thoppil DOMINIC Jewellers, I'd like to know more about your jewellery collections.",
};
