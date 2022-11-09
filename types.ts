import { Asset } from "contentful";

export interface Experience {
  id: string;
  title: string;
  timeframe: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  link?: string;
  githubLink?: string;
  technologies: Technology[];
  images: Asset[];
}

export interface Technology {
  id: string;
  name: string;
  image: Asset;
}
