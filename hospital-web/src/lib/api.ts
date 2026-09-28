import { doctors, services } from "./data";
import type { Appointment, AppointmentInput, ContactMessage, Doctor, Service } from "@/types";

// All backend access lives here. Set NEXT_PUBLIC_API_URL (e.g. http://localhost:8000/api)
// to switch from mock data to the Django endpoints below. UI components never call fetch.
const API = process.env.NEXT_PUBLIC_API_URL;
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, { headers: { "Content-Type": "application/json" }, ...init });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}

export function getDoctors(): Promise<Doctor[]> { 
  return API ? request("/doctors/") : Promise.resolve(doctors); 
}
export function getServices(): Promise<Service[]> { 
  return API ? request("/services/") : Promise.resolve(services); 
}

export async function getService(slug: string) { return (await getServices()).find((s) => s.slug === slug); }

export async function createAppointment(data: AppointmentInput): Promise<Appointment> {
  if (API) return request("/appointments/", { method: "POST", body: JSON.stringify(data) });
  await wait(900);
  return { ...data, id: String(Date.now()), status: "pending", createdAt: new Date().toISOString() };
}

export async function sendContactMessage(data: ContactMessage): Promise<void> {
  if (API) { await request("/contact/", { method: "POST", body: JSON.stringify(data) }); return; }
  await wait(900);
}
