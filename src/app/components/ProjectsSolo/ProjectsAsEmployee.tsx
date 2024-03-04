import Project from "./Project";
import { PROJECTS_AS_EMPLOYEE } from "./projects";

const ProjectsAsEmployee = () => {
  return (
    <section className="outer-container w-full h-full relative">
      <div className="slider-overflow-container w-full overflow-x-auto">
        <div className="slider flex w-[200vw] md:w-[150vw] justify-start px-4 lg:px-0 gap-10">
          {PROJECTS_AS_EMPLOYEE.map((project) => (
            <div className="inner flex justify-center w-full" key={project.id}>
              <Project mainProps={project} isInSlider maxWidth="90%" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsAsEmployee;
