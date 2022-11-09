import { NextPage } from "next";

import { SectionDivider } from "../components/Section";

import BannerSection from "../components/sections/banner";
import AboutSection from "../components/sections/about";
import SkillsSection from "../components/sections/skills";
import ProjectsSection from "../components/sections/projects";
import FooterSection from "../components/sections/footer";

const Page: NextPage = () => (
  <main className="container">
    <BannerSection />
    <SectionDivider />
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
