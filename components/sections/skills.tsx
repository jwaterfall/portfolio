import { FC, use } from "react";
import Image from "next/image";
import { AssetDetails, createClient } from "contentful";

import Animate from "../Animate";
import Section from "../Section";

import { Technology } from "../../types";

export const getTechnologies = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries<any>({
    content_type: "technology",
  });

  const technologies: Technology[] = response.items.map((item) => ({
    ...item.fields,
    id: item.sys.id,
  })) as Technology[];

  return technologies;
};

const SkillsSection: FC = () => (
  <Section
    id="skills"
    heading="my skills"
    subHeading="Here are some of the technologies that I've worked with"
  >
    <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-12 mt-8">
      {use(getTechnologies()).map((technology) => (
        <Animate variant="zoom" key={technology.id}>
          <div className="bg-foreground rounded overflow-hidden hover:scale-105 transition-transform">
            <Image
              width={(technology.image.fields.file!.details! as AssetDetails).image!.width}
              height={(technology.image.fields.file!.details! as AssetDetails).image!.height}
              className="h-28 mx-auto p-6 object-contain"
              src={`https:${technology.image.fields.file!.url}`}
              alt={technology.name}
            />
            <div className="bg-darken-0.2 px-4 py-2 w-full">
              <h5 className="text-center font-code text-l">
                {technology.name}
              </h5>
            </div>
          </div>
        </Animate>
      ))}
    </div>
  </Section>
);

export default SkillsSection;
