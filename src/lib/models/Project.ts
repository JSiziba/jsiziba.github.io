import type { Skill } from "$lib/models/Skill";
import type { ProjectRating } from "$lib/models/ProjectRating";

export interface Project {
  title: string;
  picture: string;
  description: string;
  link: string;
  skills: Skill[];
  rating: ProjectRating;
}