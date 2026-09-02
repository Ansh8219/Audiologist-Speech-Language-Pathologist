export const SITE = {
  name: "Dr. Ayush Thakur",
  title: "Audiologist & Speech-Language Pathologist",
  specialty: "Neuro Speech, Dysphagia & Head & Neck Rehabilitation",
  positioning:
    "Specialized Speech, Swallowing, Voice & Hearing Care",
  focus:
    "Specialized neuro and head & neck rehabilitation",
  serviceArea: "Chandigarh • Mohali • Tricity",
  phone: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  email: "[EMAIL ADDRESS]",
  url: "https://www.drayushthakur.com",
  rciLicensed: true,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services/dysphagia", label: "Dysphagia" },
  { href: "/services/neuro-speech", label: "Neuro Speech" },
  { href: "/services/voice", label: "Voice" },
  { href: "/services/audiology", label: "Hearing" },
  { href: "/for-doctors", label: "For Doctors" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services/audiology", label: "Hearing & Audiology" },
  { href: "/services/dysphagia", label: "Dysphagia" },
  { href: "/services/neuro-speech", label: "Speech & Language" },
  { href: "/services/voice", label: "Voice" },
] as const;

export const FOOTER_CONNECT_LINKS = [
  { href: "/for-doctors", label: "For Doctors" },
  { href: "/book-appointment", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
] as const;

export const HOME_SERVICES = [
  {
    href: "/services/audiology",
    title: "Hearing Check-up & Audiology",
    description:
      "Comprehensive hearing assessment and audiological evaluation.",
    featured: false,
  },
  {
    href: "/services/dysphagia",
    title: "Dysphagia / Swallowing Therapy",
    description:
      "Assessment and rehabilitation for swallowing difficulties, including neurological dysphagia.",
    featured: true,
  },
  {
    href: "/services/neuro-speech",
    title: "Speech & Language Therapy",
    description:
      "Assessment and rehabilitation for speech, language and communication difficulties.",
    featured: false,
  },
  {
    href: "/services/voice",
    title: "Voice Therapy",
    description:
      "Assessment and therapy for voice disorders and vocal difficulties.",
    featured: false,
  },
] as const;

export const AUDIOLOGY_SERVICES = [
  "Pure Tone Audiometry",
  "Speech Audiometry",
  "Tympanometry",
  "Hearing evaluation",
  "Hearing aid counselling / fitting",
] as const;

export const APPOINTMENT_SERVICES = [
  "Hearing Check-up & Audiology",
  "Dysphagia & Swallowing",
  "Speech & Language Therapy",
  "Neuro Speech",
  "Voice Rehabilitation",
  "Aphasia / Dysarthria",
  "Cognitive-Communication",
  "General Consultation",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who can benefit from speech and swallowing therapy?",
    answer:
      "Adults experiencing difficulty with hearing, speech, language, voice, cognitive-communication, or swallowing — including those recovering from stroke, neurological illness, or head & neck conditions — may benefit from specialist assessment and rehabilitation.",
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
      "Seek assessment if there is coughing or choking with meals, food feeling stuck, unclear speech, word-finding difficulty, voice changes lasting more than two weeks, hearing concerns, or communication challenges after neurological change.",
  },
  {
    question:
      "Do you provide therapy for Parkinson's-related speech difficulties?",
    answer:
      "Yes. Therapy can address reduced volume, clarity, swallowing safety, and communication participation associated with Parkinson's and related neurological conditions, tailored to functional daily needs.",
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

export const DYSPHAGIA_CONDITIONS = [
  "Stroke",
  "Parkinson's Disease",
  "TBI",
  "Dementia",
  "Head & Neck Conditions",
  "Neurological Disorders",
] as const;

export const REFERRAL_INDICATIONS = [
  "Post-stroke dysphagia",
  "Parkinson's-related swallowing/speech difficulties",
  "Aphasia",
  "Dysarthria",
  "Neurogenic communication disorders",
  "Voice disorders",
  "Suspected aspiration/swallowing difficulty",
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
