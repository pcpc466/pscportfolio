import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { projects, stats, certifications } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prashant Singh Chauhan | Data Analyst & BI Developer · Toronto" },
      { name: "description", content: "Data Analyst & BI Developer in Toronto. Power BI, SQL, Python, Tableau — turning data into decisions." },
      { property: "og:title", content: "Prashant Singh Chauhan | Data Analyst Toronto" },
      { property: "og:description", content: "From 1,200 daily transactions to $3M insights — portfolio of a Toronto-based data analyst." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="container-editorial pt-20 pb-24 md:pt-32 md:pb-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Prashant Singh Chauhan — Toronto, ON
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className="mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-primary sm:text-6xl md:text-7xl lg:text-[8.5rem]"
            style={{
              fontFamily: '"Fraunces", "Bodoni Moda", ui-serif, Georgia, serif',
              fontOpticalSizing: "auto",
              fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1',
            }}
          >
            From{" "}
            <span className="relative inline-block italic font-bold text-accent">
              <span
                aria-hidden
                className="absolute inset-x-[-0.15em] inset-y-[0.1em] -z-10 rounded-md"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--accent) 18%, transparent), color-mix(in oklab, var(--accent) 6%, transparent))",
                }}
              />
              1,200
            </span>{" "}
            daily transactions
            <br />
            to{" "}
            <span className="relative inline-block italic font-bold text-accent">
              <span
                aria-hidden
                className="absolute inset-x-[-0.15em] inset-y-[0.1em] -z-10 rounded-md"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--accent) 18%, transparent), color-mix(in oklab, var(--accent) 6%, transparent))",
                }}
              />
              $3M
            </span>{" "}
            insights.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <div
            className="relative mt-10 grid gap-8 rounded-2xl border border-border/60 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--accent) 8%, transparent), color-mix(in oklab, var(--primary) 5%, transparent))",
              backdropFilter: "blur(2px)",
            }}
          >
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">
              Data Analyst & BI Developer with 5+ years across hospitality, retail and financial
              environments — specializing in Power BI, SQL, Python and Tableau to turn raw
              operations data into decisions leadership can act on.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--primary) 70%, var(--accent)))",
                }}
              >
                View Projects →
              </Link>
              <a
                href="/prashant-chauhan-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/70 px-6 py-3 text-sm font-medium text-primary transition hover:border-accent hover:text-accent"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--accent) 6%, transparent), color-mix(in oklab, var(--primary) 4%, transparent))",
                }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-muted">
        <div className="container-editorial grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <p className="font-display text-4xl text-primary md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Selected Work
              </p>
              <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
                Two stories where data moved the needle.
              </h2>
            </div>
            <Link to="/projects" className="hidden text-sm text-accent hover:underline md:block">
              See all projects →
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <Link
                to="/projects"
                className="group block h-full overflow-hidden rounded-md border border-border bg-card transition hover:border-accent"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-accent">
                  <ProjectGlyph slug={p.slug} />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-primary group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{p.summary}</p>
                  <p className="mt-5 font-mono text-xs uppercase tracking-wider text-accent">
                    View case study →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mini about */}
      <section className="bg-secondary/40">
        <div className="container-editorial grid items-center gap-12 py-24 md:grid-cols-[1fr_2fr] md:py-32">
          <Reveal>
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full bg-gradient-to-br from-primary to-accent">
              <div className="absolute inset-0 flex items-center justify-center font-display text-6xl text-primary-foreground">
                PSC
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Background
            </p>
            <p className="mt-4 font-display text-3xl leading-snug text-primary md:text-4xl">
              A different kind of analyst — one who learned to read people before reading dashboards.
            </p>
            <p className="mt-6 max-w-2xl text-foreground/80">
              Five years in hospitality operations taught me that every number on a dashboard
              represents a real moment of service. That instinct now shapes how I model data, design
              KPIs, and translate analytics for the people who actually use them.
            </p>
            <Link to="/about" className="mt-6 inline-block text-sm text-accent hover:underline">
              Read my story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Certifications marquee */}
      <section className="overflow-hidden border-t border-border py-10">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 whitespace-nowrap font-display text-2xl text-primary/70 md:text-3xl">
          {[...certifications, ...certifications, { name: "Swiss Hotel Management School — Master's", date: "2020" }].map((c, i) => (
            <span key={i} className="flex items-center gap-16">
              <span>{c.name}</span>
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>
    </>
  );
}

function ProjectGlyph({ slug }: { slug: string }) {
  if (slug === "telecom-churn") {
    return (
      <svg viewBox="0 0 400 250" className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none">
        <polyline fill="none" stroke="white" strokeWidth="2"
          points="0,180 40,150 80,170 120,120 160,140 200,90 240,110 280,60 320,80 360,40 400,55" />
        {[180,150,170,120,140,90,110,60,80,40,55].map((y,i)=>(
          <circle key={i} cx={i*40} cy={y} r="3" fill="white" />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 250" className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none">
      {[40,70,55,90,110,75,130,95,150,120].map((h,i)=>(
        <rect key={i} x={20+i*36} y={220-h*1.3} width="22" height={h*1.3} fill="white" />
      ))}
    </svg>
  );
}
