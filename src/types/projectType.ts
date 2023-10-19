import projects from "../data/projects.json";

export type Project = {
  title: string;
  route: string;
  phrase: string;
  thumbnail: string;
  image: string;
  gallery?: {
    url: string;
    size?: string;
  }[];
  description: string;
  articles?: {
    quote: string;
    title: string;
    author: string;
    link: string;
  }[];
  links?: {
    name: string;
    link: string;
  }[];
  tags: {
    name: string;
  }[];
};

export const getProjects = (): Project[] => projects;
