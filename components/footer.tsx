import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <p>
          Jonathan Hinkel
          <br />© 2024
        </p>
      </aside>
      <nav>
        <p className="text-lg">Additional links</p>
        <div className="grid grid-flow-col gap-4">
          <a
            href="mailto:jonathan@hinkel.dev"
            target="_blank"
            aria-label="Write me an email"
          >
            <Icon icon="mdi:email-outline" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/hinkeljo"
            target="_blank"
            aria-label="My GitHub page"
          >
            <Icon icon="mdi:github" className="w-8 h-8" />
          </a>
          <a
            href="https://de.linkedin.com/in/jonathan-hinkel-43a640215"
            target="_blank"
            aria-label="My LinkedIn page"
          >
            <Icon icon="mdi:linkedin" className="w-8 h-8" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
