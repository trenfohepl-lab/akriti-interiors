/* ==========================================================
   AKRITI INTERIORS — site config & content (single source of truth)
   Edit this file to change contact info, images, projects.
   Later this can be replaced by API calls (see /README.md).
   ========================================================== */
window.AKRITI = {
  brand: "Akriti Interiors",
  // Verified from the owner's WhatsApp Business profile screenshot
  phoneDisplay: "+91 98744 38805",
  phoneTel: "+919874438805",
  whatsapp: "919874438805", // country code + number, no "+"
  email: "akritiinteriors2012@gmail.com",
  address: "Adarsha Pally, Dharampur, Chinsurah, Hooghly, West Bengal 712101",
  hours: "9:00 AM – 6:00 PM", // Thursday shown on profile; confirm other days with owner
  mapsLink: "https://maps.app.goo.gl/83eeLiSnegLdP5hf8",
  mapsEmbed: "https://www.google.com/maps?q=Akriti+Interiors,+Adarsha+pally,+Dharampur,+Chinsurah,+West+Bengal+712101&output=embed",
  waMessage: "Hello Akriti Interiors, I am interested in your interior design services. I would like to discuss my project.",
  // Future backend hook: set to a URL (Formspree, Google Apps Script, own API) to also POST enquiries.
  enquiryEndpoint: "",
  img: (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w || 1200}&q=70`
};

/* Royalty-free sample photos (Unsplash). SAMPLE ONLY — replace with real Akriti project photos. */
window.AKRITI.photos = {
  hero:     "photo-1600210492486-724fe5c67fb0",
  about:    "photo-1618221195710-dd6b41faaea6",
  living1:  "photo-1616486338812-3dadae4b4ace",
  living2:  "photo-1493663284031-b7e3aefcae8e",
  living3:  "photo-1586023492125-27b2c045efd7",
  bed1:     "photo-1540518614846-7eded433c457",
  bed2:     "photo-1505693416388-ac5ce068fe85",
  kitchen1: "photo-1556911220-bff31c812dba",
  kitchen2: "photo-1556909114-f6e7ad7d3136",
  office1:  "photo-1497366216548-37526070297c",
  office2:  "photo-1524758631624-e2822e304c36",
  comm1:    "photo-1600585154340-be6161a56a0c",
  home1:    "photo-1600607687939-ce8a6c25118c",
  reno1:    "photo-1484101403633-562f891dc89a"
};

window.AKRITI.services = [
  { id: "residential", title: "Residential Interior Design", img: "home1", desc: "Complete home interiors planned around the way your family lives." },
  { id: "living", title: "Living Room Interiors", img: "living1", desc: "Warm, layered living spaces with considered lighting and finishes." },
  { id: "bedroom", title: "Bedroom Interior Design", img: "bed1", desc: "Calm, comfortable bedrooms with smart storage and soft lighting." },
  { id: "kitchen", title: "Modular Kitchen Design", img: "kitchen1", desc: "Efficient, beautiful kitchens built for everyday use." },
  { id: "office", title: "Office Interior Design", img: "office1", desc: "Productive workspaces that reflect your brand." },
  { id: "commercial", title: "Commercial Interiors", img: "comm1", desc: "Shops, showrooms and studios designed to welcome customers." },
  { id: "renovation", title: "Renovation & Remodeling", img: "reno1", desc: "Fresh life for existing spaces, planned to minimise disruption." },
  { id: "furniture", title: "Custom Furniture Design", img: "living3", desc: "Made-to-measure furniture that fits your space and style." }
];

/* cat: living | bedroom | kitchen | office | commercial */
window.AKRITI.projects = [
  { id: "p1", cat: "living", title: "Warm Modern Living Room", loc: "Sample concept", img: "living1", tall: true,
    desc: "A sample living room concept with layered neutrals, warm lighting and a feature wall." },
  { id: "p2", cat: "bedroom", title: "Serene Master Bedroom", loc: "Sample concept", img: "bed1",
    desc: "A sample bedroom concept with a padded headboard, ambient lighting and concealed storage." },
  { id: "p3", cat: "kitchen", title: "Contemporary Modular Kitchen", loc: "Sample concept", img: "kitchen1", tall: true,
    desc: "A sample modular kitchen concept with clean lines and full-height storage." },
  { id: "p4", cat: "office", title: "Executive Office Suite", loc: "Sample concept", img: "office1",
    desc: "A sample office concept balancing focus areas and collaboration zones." },
  { id: "p5", cat: "living", title: "Classic Lounge with Warm Wood", loc: "Sample concept", img: "living2",
    desc: "A sample lounge concept mixing timber panelling with soft furnishings." },
  { id: "p6", cat: "commercial", title: "Boutique Showroom Concept", loc: "Sample concept", img: "comm1", tall: true,
    desc: "A sample commercial concept designed to guide customers naturally through the space." },
  { id: "p7", cat: "bedroom", title: "Light & Airy Guest Room", loc: "Sample concept", img: "bed2",
    desc: "A sample guest room concept with a light palette and simple, comfortable furniture." },
  { id: "p8", cat: "kitchen", title: "Island Kitchen & Dining", loc: "Sample concept", img: "kitchen2",
    desc: "A sample open kitchen concept with an island that doubles as a breakfast counter." },
  { id: "p9", cat: "living", title: "Statement Lounge Corner", loc: "Sample concept", img: "living3",
    desc: "A sample living concept built around one bold seating group and accent lighting." },
  { id: "p10", cat: "office", title: "Studio Workspace", loc: "Sample concept", img: "office2",
    desc: "A sample studio workspace concept with natural light and flexible desks." }
];

window.AKRITI.testimonials = [
  { name: "Sample Client A", place: "Sample feedback — not a real review", text: "The team listened carefully and turned our ideas into a home that feels like us." },
  { name: "Sample Client B", place: "Sample feedback — not a real review", text: "Clear communication at every step, from the first consultation to the final handover." },
  { name: "Sample Client C", place: "Sample feedback — not a real review", text: "Our kitchen is now the most-loved room in the house. Thoughtful planning made all the difference." }
];

window.AKRITI.process = [
  ["Initial Consultation", "We meet to understand your needs, lifestyle, budget and timeline."],
  ["Space Planning", "Layouts are studied so every room works smoothly and comfortably."],
  ["Design Concept", "Mood, colours, materials and 3D ideas are shared for your feedback."],
  ["Material Selection", "Together we choose finishes, fittings, lighting and furniture."],
  ["Project Execution", "Work is carried out with regular updates and attention to quality."],
  ["Final Handover", "A final walkthrough ensures everything is exactly as agreed."]
];
