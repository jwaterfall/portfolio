import { NextPage } from "next";

import { SectionDivider } from "../components/Section";

import AboutSection from "./sections/about";
import SkillsSection from "./sections/skills";
import ProjectsSection from "./sections/projects";
import FooterSection from "./sections/footer";

const Page: NextPage = () => (
  <main className="container">
    <AboutSection />
    <SectionDivider />
    <SkillsSection />
    <SectionDivider />
    <ProjectsSection />
    <SectionDivider />
    <FooterSection />
  </main>
);

export default Page;
