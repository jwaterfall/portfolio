import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';

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
  description: Document;
  technologies: string[];
  link?: string;
  githubLink?: string;
  thumbnail: Asset;
}
