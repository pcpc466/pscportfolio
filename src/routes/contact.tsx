import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Reveal";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prashant Singh Chauhan | Data Analyst Toronto" },
      { name: "description", content: "Get in touch with Prashant Singh Chauhan — open to Data Analyst, BI Analyst and Power BI Developer roles in Canada." },
      { property: "og:title", content: "Contact — Prashant Singh Chauhan" },
      { property: "og:description", content: "Open to Data Analyst roles across Canada." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (form.website) return; // honeypot
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="container-editorial pt-20 pb-24 md:pt-32 md:pb-32">
      <div className="grid gap-16 md:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.05] text-primary md:text-7xl">
            Let's <span className="italic text-accent">talk data.</span>
          </h1>
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
            <ContactRow label="LinkedIn" value="linkedin.com/in/prashant" href={profile.linkedin} />
            <ContactRow label="GitHub" value="github.com/prashant" href={profile.github} />
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