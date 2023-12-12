import type { Skill } from "$lib/models/Skill";

export interface JobPost {
  title: string;
  duration: string;
  description: string;
  companyName: string;
  companyWebsite: string;
  skills: Skill[];
}