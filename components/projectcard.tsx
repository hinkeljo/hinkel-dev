"use client";

import Image from "next/image";
import ProjectBadge from "./projectbadge";
import { Project } from "@/data/projects";
import ProjectModal from "./projectmodal";

export default function ProjectCard({ project }: { project: Project }) {
  function openModal() {
    const modal = document.getElementById(
      `${project.id}_detail_modal`,
    ) as HTMLDialogElement;
    modal.showModal();
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-96">
      {project.images.length >= 1 && (
        <figure className="relative w-full aspect-video transition-transform duration-300 ease-in-out">
          <Image
            className="object-cover"
            fill={true}
            src={project.images[0].src}
            alt={project.images[0].alt}
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <div className="card-actions justify-end flex-col">
          {project.tags.length >= 1 && (
            <div className="flex flex-row flex-wrap gap-2">
              {project.tags.map((tag) => (
                <ProjectBadge key={tag.name} label={tag.name} icon={tag.icon} />
              ))}
            </div>
          )}
          <div className="flex flex-row w-full justify-end gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="btn btn-sm btn-outline md:btn-md"
              >
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                className="btn btn-sm btn-outline md:btn-md"
              >
                Link
              </a>
            )}
            <button
              className="btn btn-sm btn-outline md:btn-md"
              onClick={openModal}
            >
              Details
            </button>
            <ProjectModal project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}
