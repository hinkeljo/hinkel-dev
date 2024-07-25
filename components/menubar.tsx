import NavLink from "./navlink";

export default function MenuBar() {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-between p-4 sticky top-0 z-50 bg-base-100 bg-opacity-75 backdrop-blur-lg md:flex-row md:p-8">
      <h1 className="text-4xl font-bold">hinkel.dev</h1>
      <nav className="join">
        <NavLink target="/" label="Home" />
        <NavLink target="/projects" label="Projects" />
        <NavLink target="/blog" label="Blog" />
      </nav>
      <div className="flex flex-row gap-4">
        <a
          href="mailto:jonathan@hinkel.dev"
          target="_blank"
          className="text-primary hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/hinkeljo"
          target="_blank"
          className="text-primary hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://de.linkedin.com/in/jonathan-hinkel-43a640215"
          target="_blank"
          className="text-primary hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
