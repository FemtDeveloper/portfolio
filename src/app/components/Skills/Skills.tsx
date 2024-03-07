"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { SKILLS, Skill } from "./content";
import { VerticalDivider, VerticalDividerUp } from "@/Icons";
import { useEffect, useRef } from "react";
import { useOnMove, useOnLeave } from "@/hooks";

const Skills = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  const iconRef = useRef<HTMLDivElement | null>(null);
  console.log({ iconRef });

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center gap-12 md:my-16"
    >
      <VerticalDivider color={isDark ? "white" : "#000"} />
      <div className="flex flex-wrap max-w-[200px] md:max-w-max justify-center gap-6 md:gap-5">
        {SKILLS.map((skill, i) => (
          <IndividualSkillContainer skill={skill} key={i} index={i} />
        ))}
      </div>
      <VerticalDividerUp color={isDark ? "white" : "#000"} />
    </section>
  );
};

export default Skills;

interface IndividualSkProps {
  skill: Skill;
  index: number;
}

const IndividualSkillContainer = ({ skill, index }: IndividualSkProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onMove = useOnMove(containerRef, `#skill-icon-${index}`, 2);
  const onLeave = useOnLeave(`#skill-icon-${index}`);

  useEffect(() => {
    const iconElement = containerRef?.current;
    if (!iconElement) return;

    iconElement.addEventListener("mousemove", onMove);
    iconElement.addEventListener("mousemove", onLeave);

    return () => {
      iconElement.removeEventListener("mousemove", onMove);
      iconElement.removeEventListener("mousemove", onLeave);
    };
  }, [onMove, onLeave]);
  return (
    <div className="icon-container  md:p-10" ref={containerRef}>
      <div id={`skill-icon-${index}`} key={skill.bgColor}>
        {skill.icon}
      </div>
    </div>
  );
};
