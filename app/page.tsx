import { NextPage } from "next";
import { use } from "react";
import { createClient } from "contentful";

import { Technology } from "../types";
import Image from "next/image";

export const getTechnologies = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries<Technology>({
    content_type: "technology",
  });

  const technologies: Technology[] = response.items.map((item) => ({
    ...item.fields,
    id: item.sys.id,
  }));

  return technologies;
};

const Page: NextPage = () => {
  const technologies = use(getTechnologies());

  return (
    <section className="container px-4 mx-auto mt-16">
      <h3 className="text-lg font-medium text-primary font-code capitalize aos-init aos-animate">
        my skills
      </h3>
      <h2 className="text-2xl font-bold mt-1">
        Here are some of the technologies I've worked with
      </h2>
      <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-12 mt-8">
        {technologies.map((technology) => (
          <div key={technology.id} className="bg-foreground rounded overflow-hidden">
            <img
              className="h-28 mx-auto p-6"
              src={`https:${technology.image.fields.file.url}`}
              alt={technology.name}
            />
            <div className="bg-darken-0.4 px-4 py-2 w-full">
              <h5 className="text-center font-code text-l">
                {technology.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
