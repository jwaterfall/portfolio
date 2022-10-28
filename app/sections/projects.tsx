import { NextPage } from "next";
import { use } from "react";
import { createClient } from "contentful";

import { Project } from "../../types";
import Animate from "../../components/Animate";
import Section from "../../components/Section";
import Button from "../../components/Button";

export const getProjects = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries<Project>({
    content_type: "project",
  });

  const projects: Project[] = response.items.map((item) => ({
    ...item.fields,
    id: item.sys.id,
  }));

  return projects;
};

const ProjectsSection: NextPage = () => (
  <Section id="projects" heading="my projects" subHeading="Here are some of the projects that I've worked on">
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-12 mt-8">
      {use(getProjects()).map((project) => (
        <Animate variant="zoom" key={project.id}>
          <div className="bg-foreground rounded overflow-hidden">
            <img className="w-full aspect-video" src={`https:${project.images[0].fields.file.url}`} alt={project.images[0].fields.title} />
            <div className="p-8">
              <h5 className="font-semibold text-2xl text-white">{project.title}</h5>
              <p className="text-textSecondary mt-4">{project.description}</p>
              <div className="mt-6 flex gap-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button>Live Demo</Button>
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button>Github</Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Animate>
      ))}
    </div>
  </Section>
);

export default ProjectsSection;
