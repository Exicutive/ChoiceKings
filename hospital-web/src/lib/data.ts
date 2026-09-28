import { BadgeCheck, Building2, Clock, HeartHandshake } from "lucide-react";
import type { Doctor, Service, Stat, Testimonial } from "@/types";

// ALL CONTENT BELOW IS PLACEHOLDER / DEMO. Replace with the hospital's real details
// (or serve services/doctors from the API — see lib/api.ts).
export const siteConfig = {
  name: "Choice of Kings Specialist Hospital",
  tagline: "Quality Healthcare You Can Trust",
  description: "Accessible, professional and patient-focused healthcare for you and your family.",
  address: "Monsurat Olayinka, Lekki Scheme 2, off Ogombo Road, Ajah, Lagos",
  phone: "+234 902 704 5106",
  emergencyPhone: "+234 800 000 0911",
  email: "enquiry@choiceofkingsspecialist.com",
  whatsapp: "2348034277691",
  hours: [
    { days: "Monday to Friday", time: "Open 24 hours" },
    { days: "Saturday", time: "Open 24 hours" },
    { days: "Sunday", time: "Open 24 hours" },
  ],
  socials: [{ label: "Facebook", href: "#" }, { label: "Instagram", href: "#" }, { label: "X", href: "#" }],
};

export const navLinks = [
  { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" }, { href: "/appointments", label: "Appointments" }, { href: "/contact", label: "Contact" },
];

export const services: Service[] = [
  { id: "1", slug: "general-consultation", name: "General Consultation", icon: "Stethoscope", description: "Routine check-ups and first-line care for you and your family.", details: ["Physical examination and diagnosis", "Referral to specialists where needed", "Follow-up care planning"] },
  { id: "2", slug: "laboratory-services", name: "Laboratory Services", icon: "FlaskConical", description: "Accurate laboratory tests to support prompt diagnosis.", details: ["Blood and urine tests", "Clear, timely results", "Sample collection by trained staff"] },
  { id: "3", slug: "diagnostic-services", name: "Diagnostic Services", icon: "ScanLine", description: "Imaging and checks that help your doctor act with confidence.", details: ["X-ray and ultrasound", "ECG", "Reports reviewed by your doctor"] },
  { id: "4", slug: "maternity-child-care", name: "Maternity & Child Care", icon: "Baby", description: "Caring support for mothers and children, from antenatal visits to paediatric care.", details: ["Antenatal and postnatal care", "Child health checks and immunisation", "Family planning advice"] },
  { id: "5", slug: "pharmacy", name: "Pharmacy", icon: "Pill", description: "On-site pharmacy for prescribed medicines and clear guidance on their use.", details: ["Prescription dispensing", "Medication advice", "Pick up after your visit"] },
  { id: "6", slug: "specialist-care", name: "Specialist Care", icon: "HeartPulse", description: "Consultations with specialists for ongoing and complex conditions.", details: ["Internal medicine", "Surgery", "Long-term condition management"] },
  { id: "7", slug: "health-screening", name: "Health Screening", icon: "ClipboardCheck", description: "Preventive check-ups that help you catch problems early.", details: ["Annual wellness packages", "Blood pressure and sugar checks", "Personalised health advice"] },
  { id: "8", slug: "emergency-care", name: "Emergency Care", icon: "Siren", description: "Prompt attention for urgent medical needs, every day of the week.", details: ["Triage and stabilisation", "Emergency line for guidance", "Referral and admission support"] },
];

export const doctors: Doctor[] = [
  { id: "d1", name: "Dr. Adaeze Okafor", specialty: "Obstetrics & Gynaecology", qualifications: "MBBS, FWACS", yearsOfExperience: 14, bio: "Supports women through pregnancy, delivery and recovery." },
  { id: "d2", name: "Dr. Tunde Bello", specialty: "General Practice", qualifications: "MBBS, MPH", yearsOfExperience: 9, bio: "Family medicine with a focus on prevention and clear explanations." },
  { id: "d3", name: "Dr. Ngozi Eze", specialty: "Paediatrics", qualifications: "MBBS, FMCPaed", yearsOfExperience: 11, bio: "Cares for babies, children and teenagers with a gentle approach." },
  { id: "d4", name: "Dr. Ibrahim Musa", specialty: "Internal Medicine", qualifications: "MBBS, FWACP", yearsOfExperience: 16, bio: "Manages long-term conditions such as hypertension and diabetes." },
  { id: "d5", name: "Dr. Funke Adeyemi", specialty: "General Practice", qualifications: "MBBS", yearsOfExperience: 6, bio: "Everyday care for adults and children, with time to listen." },
  { id: "d6", name: "Dr. Chinedu Obi", specialty: "Surgery", qualifications: "MBBS, FWACS", yearsOfExperience: 13, bio: "General surgery with patient safety and recovery at the centre." },
];

export const stats: Stat[] = [
  { value: "50+", label: "Medical professionals" }, { value: "12", label: "Departments" },
  { value: "10,000+", label: "Patients served" }, { value: "15+", label: "Years of service" },
];

export const benefits = [
  { icon: BadgeCheck, title: "Experienced professionals", text: "Doctors, nurses and technicians committed to your wellbeing." },
  { icon: Building2, title: "Modern facilities", text: "Clean, comfortable spaces equipped for accurate diagnosis and safe treatment." },
  { icon: HeartHandshake, title: "Patient-focused care", text: "We listen first, explain clearly and treat every patient with dignity." },
  { icon: Clock, title: "Convenient access", text: "Simple appointment booking, clear opening hours and an emergency line." },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Mrs. B. A.", context: "maternity patient", text: "The staff explained every step of my antenatal care. I always knew what to expect." },
  { id: "t2", name: "Mr. C. O.", context: "outpatient", text: "Booking was easy and I was seen on time. The doctor took time to answer my questions." },
  { id: "t3", name: "Mrs. F. M.", context: "parent", text: "My son was nervous, but the paediatric team made him comfortable straight away." },
];

export const about = {
  intro: "[Placeholder] A hospital committed to accessible, professional and patient-focused healthcare for the community it serves.",
  mission: "To deliver safe, compassionate and affordable care that treats every patient with dignity.",
  vision: "To be the hospital families across our community trust first for their health needs.",
  values: [
    { title: "Compassion", text: "We care for people, not just conditions." },
    { title: "Integrity", text: "We are honest with patients and with each other." },
    { title: "Excellence", text: "We keep learning and hold ourselves to high clinical standards." },
    { title: "Respect", text: "Every patient is heard, whatever their background." },
  ],
  history: [
    { label: "Our beginning", text: "[Placeholder] Describe how and why the hospital was founded." },
    { label: "Growing with our community", text: "[Placeholder] Describe new departments, buildings and milestones." },
    { label: "Today", text: "[Placeholder] Describe the hospital's services and team today." },
  ],
  facilities: ["Outpatient consultation rooms", "Laboratory and diagnostics", "Maternity and child care unit", "On-site pharmacy", "Emergency reception", "Comfortable waiting areas"],
};
