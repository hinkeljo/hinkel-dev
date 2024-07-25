export type Project = {
  id: string;
  name: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  tags: {
    name: string;
    icon?: string;
  }[];
  links: {
    github?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    id: "lingoflash",
    name: "LingoFlash",
    description: "An AI powered flashcard app for learning languages",
    images: [
      {
        src: "/images/lingoflash.app_.png",
        alt: "A screenshot of the LingoFlash homepage",
      },
    ],
    tags: [
      {
        name: "Svelte",
        icon: "ri:svelte-line",
      },
      {
        name: "LLMs",
      },
      {
        name: "Pocketbase",
      },
      {
        name: "Typescript",
      },
      {
        name: "Vercel",
      },
      {
        name: "Hetzner",
      },
      {
        name: "HDM",
      },
    ],
    links: {
      github: "https://github.com/hinkeljo/lingoflash",
      live: "https://lingoflash.app/",
    },
  },
  {
    id: "intellislide",
    name: "IntelliSlide",
    description: "An AI powered powerpoint slide generator",
    images: [
      {
        src: "/images/lingoflash.app_.png",
        alt: "A screenshot of the IntelliSlide homepage",
      },
    ],
    tags: [
      {
        name: "Svelte",
      },
      {
        name: "LLMs",
      },
      {
        name: "Pocketbase",
      },
      {
        name: "Typescript",
      },
      {
        name: "Python",
      },
      {
        name: "RAG",
      },
      {
        name: "HDM",
      },
    ],
    links: {
      github: "https://github.com/hinkeljo/intellislide",
      live: "https://lingoflash.app/",
    },
  },
];
