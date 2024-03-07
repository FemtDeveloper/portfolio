import { SOLO_PROJECTS } from "./projects";
import Project from "./Project";

const ProjectsSolo = () => {
  return (
    <section
      id="solo_projects"
      className="w-full h-full max-w-wrapper px-4 lg:px-0 flex flex-col"
    >
      <div className="inner flex flex-col  gap-20 md:gap-32">
        {SOLO_PROJECTS.map((project) => (
          <Project mainProps={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSolo;
