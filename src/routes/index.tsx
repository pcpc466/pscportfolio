import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  projects,
  stats,
  certifications,
  experience,
  education,
  skillGroups,
  profile,
} from "@/lib/portfolio-data";
import { useMemo, useState, type FormEvent } from "react";

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

const FILTERS = ["All", "Power BI", "SQL", "Python", "Tableau", "ML"] as const;

function Index() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<string | null>(projects[0]?.slug ?? null);
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (form.website) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section id="home" className="container-editorial scroll-mt-20 pt-20 pb-24 md:pt-32 md:pb-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Prashant Singh Chauhan — Toronto, ON
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-primary sm:text-6xl md:text-8xl">
            From <span className="italic text-accent">1,200</span> daily transactions
            <br /> to <span className="italic text-accent">$3M</span> insights.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
              Data Analyst & BI Developer with 5+ years across hospitality, retail and financial
              environments — specializing in Power BI, SQL, Python and Tableau to turn raw
              operations data into decisions leadership can act on.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent"
              >
                View Projects →
              </a>
              <a
                href="/prashant-chauhan-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-secondary"
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

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-secondary/40">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
            <h2 className="mt-4 max-w-5xl font-display text-4xl leading-[1.05] text-primary md:text-6xl">
              From Hospitality to Data — <span className="italic text-accent">a different kind of analyst.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
              I didn't take the straight line into analytics. Five years inside hospitality
              operations — managing premium beverage P&Ls at Four Seasons, then building reporting
              for a Tim Hortons franchise group — taught me that every metric is somebody's
              decision. That instinct is what I bring to BI today.
            </p>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Career Timeline</p>
            </Reveal>
            <div className="mt-10 space-y-12 border-l border-border pl-8 md:pl-12">
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
          </div>

          <div className="mt-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Education</p>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
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
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container-editorial scroll-mt-20 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Projects</p>
          <h2 className="mt-4 max-w-5xl font-display text-4xl text-primary md:text-6xl">
            Case studies, <span className="italic text-accent">not screenshots.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-foreground/75">
            Each project includes the business problem, data and tools, methodology and quantified
            outcome — so you can evaluate how I think, not just what I shipped.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-2 border-y border-border py-4">
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
        <div className="mt-10 space-y-6">
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
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 bg-muted">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Skills & Resume</p>
            <h2 className="mt-4 max-w-5xl font-display text-4xl text-primary md:text-6xl">
              The toolkit, <span className="italic text-accent">end to end.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/prashant-chauhan-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent"
              >
                Download Resume (PDF) ↓
              </a>
              <a
                href="https://www.linkedin.com/in/prashantca/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-secondary"
              >
                View LinkedIn Profile
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
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

          <div className="mt-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Certifications</p>
            </Reveal>
            <ul className="mt-6 space-y-4">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-6 border-b border-border pb-4">
                  <span className="text-primary">{c.name}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-editorial scroll-mt-20 pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-primary md:text-6xl">
              Let's <span className="italic text-accent">talk data.</span>
            </h2>
            <p className="mt-8 flex items-center gap-3 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono uppercase tracking-wider text-primary">
                Open to Data Analyst roles across Canada
              </span>
            </p>
            <div className="mt-12 space-y-5 text-foreground/85">
              <ContactRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow label="Phone" value={profile.phone} href={`tel:+14376650895`} />
              <ContactRow label="LinkedIn" value="linkedin.com/in/prashantca" href={profile.linkedin} />
              <ContactRow label="GitHub" value="github.com/pcpc466" href={profile.github} />
              <ContactRow label="Location" value={profile.location} />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={onSubmit} className="rounded-md border border-border bg-card p-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Send a message</p>
              <div className="mt-6 space-y-5">
                <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field type="email" label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-foreground outline-none transition focus:border-accent"
                    placeholder="Tell me about the role or project…"
                  />
                </div>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className="hidden"
                  aria-hidden
                />
                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent"
                >
                  {sent ? "Opening your mail client…" : "Send message →"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
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

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="group flex items-baseline justify-between gap-6 border-b border-border pb-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <span className="text-right text-primary group-hover:text-accent">{value}</span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border-b border-border bg-transparent py-2 text-foreground outline-none transition focus:border-accent"
      />
    </div>
  );
}
