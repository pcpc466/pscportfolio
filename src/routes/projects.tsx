import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Prashant Singh Chauhan | Data Analyst Toronto" },
      { name: "description", content: "Case studies in Power BI, SQL, Python and ML — telecom churn, financial dashboards and more." },
      { property: "og:title", content: "Projects — Prashant Singh Chauhan" },
      { property: "og:description", content: "Power BI · SQL · Python · ML case studies." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const FILTERS = ["All", "Power BI", "SQL", "Python", "Tableau", "ML"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<string | null>(projects[0]?.slug ?? null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <>
      <section className="container-editorial pt-20 pb-12 md:pt-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Projects</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] text-primary sm:text-6xl md:text-7xl">
            Case studies, <span className="italic text-accent">not screenshots.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">
            Each project includes the business problem, data and tools, methodology and quantified
            outcome — so you can evaluate how I think, not just what I shipped.
          </p>
        </Reveal>
      </section>

      <section className="container-editorial">
        <div className="flex flex-wrap gap-2 border-y border-border py-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/70 hover:border-accent hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container-editorial space-y-6 py-12 md:py-16">
        {filtered.map((p, i) => {
          const isOpen = open === p.slug;
          return (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="overflow-hidden rounded-md border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : p.slug)}
                  className="flex w-full items-start justify-between gap-6 p-6 text-left md:p-10"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-primary md:text-3xl">{p.title}</h3>
                    <p className="mt-3 max-w-3xl text-foreground/75">{p.summary}</p>
                    <p className="mt-4 font-mono text-xs uppercase tracking-wider text-accent">{p.metric}</p>
                  </div>
                  <span className={`mt-2 text-3xl text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="grid gap-8 border-t border-border bg-muted/50 p-6 md:grid-cols-2 md:p-10">
                    <Detail label="Problem" body={p.problem} />
                    <Detail label="Data & Tools" body={p.dataAndTools} />
                    <Detail label="Methodology" body={p.methodology} />
                    <Detail label="Outcome / Impact" body={p.outcome} />
                  </div>
                )}
              </article>
            </Reveal>
          );
        })}
        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">No projects match that filter yet.</p>
        )}
      </section>
    </>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</p>
      <p className="mt-3 leading-relaxed text-foreground/85">{body}</p>
    </div>
  );
}