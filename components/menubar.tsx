import NavLink from "./navlink";

export default function MenuBar() {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-between border-b-4 p-4 sticky top-0 z-50 bg-base-100 md:flex-row md:p-8">
      <h1 className="text-4xl font-bold">hinkel.dev</h1>
      <nav className="flex flex-row gap-2">
        <NavLink target="/" label="Home" />
        <NavLink target="/projects" label="Projects" />
        <NavLink target="/blog" label="Blog" />
      </nav>
      <div className="flex flex-row gap-2">
        <a href="mailto:jonathan@hinkel.dev" target="_blank">
          Email
        </a>
        <a href="https://github.com/hinkeljo" target="_blank">
          GitHub
        </a>
        <a
          href="https://de.linkedin.com/in/jonathan-hinkel-43a640215"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
