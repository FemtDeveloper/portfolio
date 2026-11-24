import {
  siCss,
  siDjango,
  siExpo,
  siFigma,
  siGit,
  siGreensock,
  siHtml5,
  siJavascript,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSass,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

export type SkillCategory = "frontend" | "backend" | "mobile";

export interface Skill {
  name: string;
  /** Path SVG (viewBox 0 0 24 24). */
  path: string;
  /** Color de marca sin "#". */
  hex: string;
  category: SkillCategory;
}

// Icono propio para IA (no es una marca).
const AI_PATH =
  "M12 0l2.4 7.2L21.6 9.6 14.4 12l-2.4 7.2L9.6 12 2.4 9.6l7.2-2.4L12 0zm7.2 15.6l1.2 3.6 3.6 1.2-3.6 1.2-1.2 3.6-1.2-3.6-3.6-1.2 3.6-1.2 1.2-3.6z";

const s = (
  icon: { title: string; path: string; hex: string },
  category: SkillCategory,
  name = icon.title
): Skill => ({ name, path: icon.path, hex: icon.hex, category });

export const SKILLS: Skill[] = [
  s(siReact, "frontend"),
  s(siNextdotjs, "frontend", "Next.js"),
  s(siTypescript, "frontend"),
  s(siJavascript, "frontend"),
  s(siTailwindcss, "frontend", "Tailwind CSS"),
  s(siGreensock, "frontend", "GSAP"),
  s(siHtml5, "frontend", "HTML"),
  s(siCss, "frontend", "CSS"),
  s(siSass, "frontend"),
  s(siNodedotjs, "backend", "Node.js"),
  s(siNestjs, "backend", "NestJS"),
  s(siPostgresql, "backend", "PostgreSQL"),
  s(siSupabase, "backend"),
  s(siPython, "backend"),
  s(siDjango, "backend"),
  s(siReact, "mobile", "React Native"),
  s(siExpo, "mobile"),
  s(siFigma, "mobile"),
  { name: "Generative AI", path: AI_PATH, hex: "A78BFA", category: "mobile" },
  s(siVercel, "backend"),
  s(siGit, "backend"),
];
