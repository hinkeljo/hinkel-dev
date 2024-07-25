import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectModal({ project }: { project: Project }) {
  return (
    <dialog id={`${project.id}_detail_modal`} className="modal">
      <div className="modal-box max-w-4xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{project.name}</h3>
        <p className="py-4">{project.description}</p>
        <div className="flex flex-col w-full gap-4">
          {project.images.map((image, index) => (
            <div key={index} className="w-full aspect-video relative group">
              <Image
                className="object-cover"
                fill={true}
                src={image.src}
                alt={image.alt}
              />
              {image.subtitle && (
                <div className="absolute bottom-0 left-0 w-full p-2 bg-primary text-primary-content opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.subtitle}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
