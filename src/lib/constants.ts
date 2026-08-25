export const SITE = {
  name: "Dr. Ayush Thakur",
  title: "Audiologist & Speech-Language Pathologist",
  specialty: "Neuro Speech & Dysphagia / Swallowing Therapist",
  positioning:
    "Specialized Speech, Communication & Swallowing Rehabilitation for Adults",
  serviceArea: "Chandigarh • Mohali • Tricity",
  phone: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  email: "[EMAIL ADDRESS]",
  url: "https://www.drayushthakur.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services/dysphagia", label: "Dysphagia" },
  { href: "/services/neuro-speech", label: "Neuro Speech" },
  { href: "/services/voice", label: "Voice" },
  { href: "/for-doctors", label: "For Doctors" },
  { href: "/contact", label: "Contact" },
] as const;

export const APPOINTMENT_SERVICES = [
  "Dysphagia & Swallowing",
  "Neuro Speech",
  "Aphasia / Dysarthria",
  "Voice Rehabilitation",
  "Cognitive-Communication",
  "General Consultation",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who can benefit from speech and swallowing therapy?",
    answer:
      "Adults experiencing difficulty with speech, language, voice, cognitive-communication, or swallowing — including those recovering from stroke, neurological illness, or progressive conditions — may benefit from specialist assessment and rehabilitation.",
  },
  {
    question: "Do you work with adults after stroke?",
    answer:
      "Yes. Post-stroke communication and swallowing difficulties are a core focus of this practice, with individualized goals aimed at safer swallowing and more functional everyday communication.",
  },
  {
    question: "What happens during a swallowing assessment?",
    answer:
      "A swallowing assessment typically includes a detailed history, clinical observation of eating and drinking, and evaluation of oral and pharyngeal function. Findings guide recommendations for safety, diet texture, and therapy.",
  },
  {
    question: "When should someone see a speech-language pathologist?",
    answer:
      "Seek assessment if there is coughing or choking with meals, food feeling stuck, unclear speech, word-finding difficulty, voice changes lasting more than two weeks, or communication challenges after neurological change.",
  },
  {
    question:
      "Do you provide therapy for Parkinson's-related speech difficulties?",
    answer:
      "Yes. Therapy can address reduced volume, clarity, and communication participation associated with Parkinson's and related neurological conditions, tailored to functional daily needs.",
  },
  {
    question: "Can caregivers participate in therapy?",
    answer:
      "Caregivers are often welcome to participate. When appropriate, sessions include education, strategies for mealtime support, and ways to reinforce communication goals at home.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Use the Book Appointment page to share your details and concern. You can also reach out by phone or WhatsApp once contact numbers are confirmed. Requests are reviewed before scheduling is finalized.",
  },
] as const;

export const DYSPHAGIA_SIGNS = [
  "Coughing or choking while eating/drinking",
  "Food or liquid feeling stuck",
  "Difficulty chewing",
  "Repeated throat clearing",
  "Wet or gurgly voice after swallowing",
  "Difficulty managing saliva",
  "Prolonged mealtimes",
  "Swallowing difficulties after stroke or neurological illness",
] as const;

export const REFERRAL_INDICATIONS = [
  "Post-stroke dysphagia",
  "Neurological speech disorders",
  "Aphasia",
  "Dysarthria",
  "Cognitive-communication difficulties",
  "Voice disorders",
  "Swallowing safety concerns",
  "Ongoing rehabilitation needs",
] as const;

export const VOICE_CONDITIONS = [
  "Vocal Nodules",
  "Vocal Polyps",
  "Vocal Fold Cysts",
  "Muscle Tension Dysphonia",
  "Vocal Fold Paresis / Paralysis",
  "Functional Dysphonia",
  "Presbyphonia",
] as const;

export const NEURO_FOCUS = [
  { label: "Aphasia", featured: true },
  { label: "Dysarthria", featured: true },
  { label: "Cognitive-Communication", featured: false },
  { label: "Speech Intelligibility", featured: false },
  { label: "Functional Communication", featured: false },
  { label: "Word Retrieval", featured: false },
  { label: "Conversation-Based Rehabilitation", featured: false },
] as const;
