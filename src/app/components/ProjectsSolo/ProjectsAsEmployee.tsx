import Project from "./Project";
import { PROJECTS_AS_EMPLOYEE } from "./projects";

const ProjectsAsEmployee = () => {
  return (
    <section
      id="employee"
      className="outer-container w-full max-w-wrapper flex flex-col px-4 lg:px-0 gap-6 md:gap-10"
    >
      <h2 className="h2 md:d2 text-center text-primary dark:text-white">
        Proyectos en los que he participado
      </h2>
      <div className="slider flex flex-col md:flex-row justify-start lg:px-15 gap-10">
        {PROJECTS_AS_EMPLOYEE.map((project) => (
          <Project mainProps={project} isInSlider key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsAsEmployee;
