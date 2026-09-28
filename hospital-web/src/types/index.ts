export interface Service { id: string; slug: string; name: string; description: string; icon: string; details: string[]; }
export interface Doctor { id: string; name: string; specialty: string; qualifications: string; yearsOfExperience: number; bio: string; photoUrl?: string; }
export interface AppointmentInput { fullName: string; email: string; phone: string; date: string; time: string; serviceId: string; doctorId: string; reason: string; message: string; }
export interface Appointment extends AppointmentInput { id: string; status: "pending" | "confirmed" | "cancelled"; createdAt: string; }
export interface ContactMessage { name: string; email: string; phone: string; subject: string; message: string; }
export interface Testimonial { id: string; name: string; context: string; text: string; }
export interface Stat { label: string; value: string; }
