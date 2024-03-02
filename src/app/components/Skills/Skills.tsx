"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { SKILLS } from "./content";
import { VerticalDivider, VerticalDividerUp } from "@/Icons";

const Skills = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  return (
    <section className="flex flex-col justify-center items-center gap-12 md:my-16">
      <VerticalDivider color={isDark ? "white" : "#000"} />
      <div className="flex flex-wrap max-w-[200px] md:max-w-max justify-center gap-6 md:gap-14">
        {SKILLS.map((skill) => skill.icon)}
      </div>
      <VerticalDividerUp color={isDark ? "white" : "#000"} />
    </section>
  );
};

export default Skills;
