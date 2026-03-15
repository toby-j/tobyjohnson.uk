import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Toby Johnson",
  EMAIL: "hello.abstract027@passinbox.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Projects, notes, and articles from my work as a Software Engineer.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles and guides.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/toby-j",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/toby-johnson-26b517175/",
  },
];
