export type Project = {
  id: string;
  name: string;
  description: string;
  images: {
    src: string;
    alt: string;
    subtitle?: string;
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
    id: "resumaker",
    name: "Typst Resume Maker",
    description: "A graphical interface for creating a resume with Typst.",
    images: [
      {
        src: "/images/resumaker_1.png",
        alt: "A screenshot of the Resumaker homepage",
      },
    ],
    tags: [
      {
        name: "Svelte 5",
        icon: "ri:svelte-line",
      },
      {
        name: "Typescript",
        icon: "mdi:language-typescript",
      },
      {
        name: "Typst",
      },
    ],
    links: {
      live: "https://lingoflash.app/",
    },
  },
  {
    id: "intellislide",
    name: "IntelliSlide",
    description:
      "An AI powered, automatic powerpoint slide generator. Part of my masters degree at Stuttgart Media University and a cooperation with Bosch Digital.",
    images: [
      {
        src: "/images/techlab_1.png",
        alt: "A screenshot of the IntelliSlide homepage.",
        subtitle: "The IntelliSlide homepage.",
      },
      {
        src: "/images/techlab_4.png",
        alt: "A screenshot of the IntelliSlide presentation management.",
        subtitle:
          "The IntelliSlide presentation management allows for easy access to all presentations and management of custom templates.",
      },
      {
        src: "/images/techlab_5.png",
        alt: "A screenshot of the IntelliSlide presentation creation settings.",
        subtitle:
          "The IntelliSlide presentation creation settings allow for customization of the generated slides.",
      },
      {
        src: "/images/techlab_2.png",
        alt: "A screenshot of the IntelliSlide data dashboard.",
        subtitle:
          "The IntelliSlide data dashboard allows for easy access and management of all custom data and assets.",
      },
      {
        src: "/images/techlab_3.png",
        alt: "A screenshot of IntelliSlides graphical vector database visualization.",
        subtitle: "A graphical vector database visualization.",
      },
    ],
    tags: [
      {
        name: "AI",
        icon: "ri:gemini-fill",
      },
      {
        name: "Svelte",
        icon: "ri:svelte-line",
      },
      {
        name: "Pocketbase",
        icon: "simple-icons:pocketbase",
      },
      {
        name: "Typescript",
        icon: "mdi:language-typescript",
      },
      {
        name: "Python",
        icon: "mdi:language-python",
      },
      {
        name: "HDM",
      },
    ],
    links: {},
  },
  {
    id: "lingoflash",
    name: "LingoFlash",
    description: "An AI powered flashcard app for learning languages",
    images: [
      {
        src: "/images/lingoflash_1.png",
        alt: "A screenshot of the LingoFlash homepage",
        subtitle: "The homepage of the LingoFlash app.",
      },
      {
        src: "/images/lingoflash_2.png",
        alt: "A screenshot of the LingoFlash dashboard",
        subtitle:
          "The dashboard provides an overview of due cards and offers the possibility to generate new flashcards with the help of generative AI.",
      },
      {
        src: "/images/lingoflash_3.png",
        alt: "A screenshot of the LingoFlash learning page",
        subtitle:
          "Users can learn their generated flashcards with the SM-2 spaced repetition algorithm.",
      },
    ],
    tags: [
      {
        name: "AI",
        icon: "ri:gemini-fill",
      },
      {
        name: "Svelte",
        icon: "ri:svelte-line",
      },
      {
        name: "Pocketbase",
        icon: "simple-icons:pocketbase",
      },
      {
        name: "Typescript",
        icon: "mdi:language-typescript",
      },
      {
        name: "HDM",
      },
    ],
    links: {
      live: "https://lingoflash.app/",
    },
  },
  {
    id: "fehtimeline",
    name: "FEH Timeline",
    description:
      "An interactive and filterable timeline for events in the Fire Emblem Heroes game that adjusts to the users timezone. Unfortunately not updated with content anymore.",
    images: [
      {
        src: "/images/feh_timeline_1.png",
        alt: "A screenshot of the FEH timeline",
        subtitle:
          "The overview of the FEH event timeline, automatically adjusted to the users timezone.",
      },
      {
        src: "/images/feh_timeline_2.png",
        alt: "A screenshot of the FEH timeline filter options",
        subtitle:
          "Filter options allow for easy filtering of the events based on their type.",
      },
    ],
    tags: [
      {
        name: "Svelte",
        icon: "ri:svelte-line",
      },
      {
        name: "Pocketbase",
        icon: "simple-icons:pocketbase",
      },
    ],
    links: {
      live: "https://hinkeljo.github.io/feh-timeline/",
    },
  },
  {
    id: "hinkel-dev",
    name: "hinkel.dev",
    description: "The website you are on right now. Inception.",
    images: [
      {
        src: "/images/hinkel_dev_1.png",
        alt: "A screenshot of the project overview",
      },
    ],
    tags: [
      {
        name: "NextJS",
        icon: "ri:nextjs-line",
      },
      {
        name: "Vercel",
        icon: "ion:logo-vercel",
      },
    ],
    links: {
      live: "https://hhinkel.dev",
      github: "https://github.com/hinkeljo/hinkel-dev",
    },
  },
];
