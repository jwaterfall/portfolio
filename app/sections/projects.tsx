import { NextPage } from "next";
import { use } from "react";
import { createClient } from "contentful";

import Animate from "../../components/Animate";
import Section from "../../components/Section";
import Button from "../../components/Button";

import { Project } from "../../types";

export const getProjects = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries<any>({
    content_type: "project",
  });

  const projects: Project[] = response.items.map((item) => ({
    ...item.fields,
    technologies: item.fields.technologies.map((technology: any) => ({
      ...technology.fields,
      id: technology.sys.id,
    })),
    id: item.sys.id,
  }));

  return projects;
};

const ProjectsSection: NextPage = () => (
  <Section id="projects" heading="my projects" subHeading="Here are some of the projects that I've worked on">
    <div className="grid grid-cols-1 gap-4 lg:gap-16 mt-8 ">
      {use(getProjects()).map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <Animate variant="zoom" key={project.id}>
            <div
              className={`flex flex-wrap items-center flex-col rounded-md bg-foreground lg:bg-transparent ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <img
                className="aspect-video lg:w-7/12 w-full rounded-md border border-foreground shadow-xl hover:lg:scale-105 transition-transform cursor-pointer"
                src={`https:${project.images[0].fields.file.url}`}
                alt={project.images[0].fields.title}
              />
              <div className={`lg:w-5/12 w-full relative p-8 rounded-md lg:bg-foreground z-50 ${isEven ? "lg:-mr-8" : "lg:-ml-8"}`}>
                <h3 className="font-semibold text-2xl text-white">{project.title}</h3>
                <p className="text-textSecondary mt-4">{project.description}</p>
                <h6 className="font-code text-secondary text-sm mt-4">{project.technologies.map((technology) => technology.name).join(", ")}</h6>
                {(project.link || project.githubLink) && (
                  <div className="mt-6 flex gap-4">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button>View Project</Button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Button>Github</Button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Animate>
        );
      })}
    </div>
  </Section>
);

export default ProjectsSection;
