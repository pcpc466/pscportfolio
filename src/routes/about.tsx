import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { experience, education } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prashant Singh Chauhan | Data Analyst Toronto" },
      { name: "description", content: "From hospitality operations to data analytics — the story behind Prashant Singh Chauhan's analytical practice." },
      { property: "og:title", content: "About — Prashant Singh Chauhan" },
      { property: "og:description", content: "Career timeline, education and the pivot from hospitality to data." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-editorial pt-20 pb-16 md:pt-32 md:pb-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] text-primary sm:text-6xl md:text-7xl">
            From Hospitality to Data — <span className="italic text-accent">a different kind of analyst.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground/80">
            I didn't take the straight line into analytics. Five years inside hospitality
            operations — managing premium beverage P&Ls at Four Seasons, then building reporting
            for a Tim Hortons franchise group — taught me that every metric is somebody's
            decision. That instinct is what I bring to BI today.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary/40">
        <div className="container-editorial grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">The Story</p>
            <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
              Service taught me to listen. Data taught me to prove.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-foreground/80">
              <p>
                I trained at Swiss Hotel Management School and joined Four Seasons in Colorado,
                where reporting on premium beverage performance pushed me deeper into spreadsheets,
                variance analysis, and the daily math of running a service business.
              </p>
              <p>
                At Tim Hortons in Ontario, I became the in-house operations analyst for a
                multi-location franchise — 1,200+ transactions a day across stores — and built the
                reporting infrastructure leadership relied on. Forecasting cut food waste by 12%.
              </p>
              <p>
                General Assembly's data analytics bootcamp formalized what I'd been doing in
                practice. Today I work fluently in Power BI, SQL, Python and Tableau — and I'm
                ready to bring that mix to a Canadian BI team.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Career Timeline</p>
          <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">Where I've worked.</h2>
        </Reveal>
        <div className="mt-16 space-y-12 border-l border-border pl-8 md:pl-12">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 80}>
              <div className="relative">
                <span className="absolute -left-[42px] top-2 h-3 w-3 rounded-full bg-accent md:-left-[50px]" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {e.period} · {e.location}
                </p>
                <h3 className="mt-2 font-display text-2xl text-primary md:text-3xl">
                  {e.role} · <span className="text-foreground/60">{e.company}</span>
                </h3>
                <ul className="mt-4 space-y-2 text-foreground/80">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3"><span className="text-accent">—</span><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-editorial py-20 md:py-28">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Education</p>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">Where I learned.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {education.map((ed, i) => (
              <Reveal key={ed.school} delay={i * 80}>
                <div className="h-full rounded-md border border-border bg-card p-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">{ed.period}</p>
                  <h3 className="mt-4 font-display text-xl text-primary">{ed.school}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{ed.program}</p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{ed.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}