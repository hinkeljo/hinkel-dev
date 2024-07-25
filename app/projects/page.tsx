import ProjectCard from "@/components/projectcard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hinkel.dev - Projects",
  description: "Page description",
};

export default function Projects() {
  return (
    <div className="w-full">
      <h1 className="text-4xl pb-4">Projects</h1>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
