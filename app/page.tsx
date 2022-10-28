import { NextPage } from "next";

import { SectionDivider } from "../components/Section";

import SkillsSection from "./sections/skills";
import ProjectsSection from "./sections/projects";

const Page: NextPage = () => (
  <main className="container px-4 mx-auto ">
    <SkillsSection />
    <SectionDivider />
    <ProjectsSection />
  </main>
);

export default Page;
