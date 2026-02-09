import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  citations: number;
  abstract?: string;
  pdfUrl?: string;
  scholarUrl?: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  publications: string[];
  status: "active" | "completed";
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  institution: string;
  researchInterests: string[];
  scholarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  imageUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "conference" | "publication" | "announcement" | "event";
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  institution: string;
  message: string;
}

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  institution: z.string().min(2, "Institution must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
