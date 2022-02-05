import { createClient } from 'contentful';
import { FC } from 'react';

import Layout from '../components/Layout';
import AboutSection from '../components/sections/AboutSection';
import BannerSection from '../components/sections/BannerSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectSection from '../components/sections/ProjectSection';
import { Experience, Project } from '../types';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const experiencesResponse = await client.getEntries<Experience>({
    content_type: 'experience',
  });
  const projectsResponse = await client.getEntries<Project>({
    content_type: 'project',
  });

  return {
    props: {
      experiences: experiencesResponse.items.map((item) => ({
        ...item.fields,
        id: item.sys.id,
      })),
      projects: projectsResponse.items.map((item) => ({
        ...item.fields,
        id: item.sys.id,
      })),
      test: 'test',
    },
    revalidate: 10,
  };
};

interface Props {
  experiences: Experience[];
  projects: Project[];
}

const IndexPage: FC<Props> = ({ experiences, projects }) => {
  return (
    <Layout>
      <BannerSection />
      <AboutSection />
      <ExperienceSection experiences={experiences} />
      <ProjectSection projects={projects} />
    </Layout>
  );
};

export default IndexPage;
