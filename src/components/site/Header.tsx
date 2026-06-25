import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-editorial flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold text-primary">PSC</span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Data Analyst
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="/prashant-chauhan-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground transition hover:bg-accent"
          >
            Resume
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-primary"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-editorial flex flex-col gap-4 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
                activeProps={{ className: "text-accent" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="/prashant-chauhan-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}