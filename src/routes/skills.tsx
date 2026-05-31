import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { skillGroups, certifications, education } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Resume — Prashant Singh Chauhan | Data Analyst Toronto" },
      { name: "description", content: "Technical skills, certifications and downloadable resume for Prashant Singh Chauhan." },
      { property: "og:title", content: "Skills & Resume — Prashant Singh Chauhan" },
      { property: "og:description", content: "Power BI, SQL, Python, Tableau, DAX and more." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <section className="container-editorial pt-20 pb-12 md:pt-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Skills & Resume</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] text-primary sm:text-6xl md:text-7xl">
            The toolkit, <span className="italic text-accent bg-[#bc9d8f]">end to end.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/prashant-chauhan-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent"
            >
              Download Resume (PDF) ↓
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-secondary"
            >
              View LinkedIn Profile
            </a>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 60}>
              <div className="rounded-md border border-border bg-card p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{g.name}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-editorial grid gap-16 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Certifications</p>
            <h2 className="mt-4 font-display text-4xl text-primary">Credentials.</h2>
            <ul className="mt-8 space-y-5">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-6 border-b border-border pb-4">
                  <span className="text-primary">{c.name}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.date}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Education</p>
            <h2 className="mt-4 font-display text-4xl text-primary">Foundations.</h2>
            <ul className="mt-8 space-y-5">
              {education.map((e) => (
                <li key={e.school} className="border-b border-border pb-4">
                  <p className="text-primary">{e.school}</p>
                  <p className="text-sm text-foreground/70">{e.program}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {e.period} · {e.location}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}