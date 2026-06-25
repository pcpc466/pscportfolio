export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-editorial grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-primary">Prashant Singh Chauhan</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Data Analyst & BI Developer<br />Toronto, Ontario · Canada
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#skills" className="hover:text-accent">Skills</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:Prashantch.94@gmail.com" className="hover:text-accent">Prashantch.94@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/prashantca/" target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a></li>
            <li><a href="https://github.com/pcpc466" target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a></li>
            <li><a href="tel:+14376650895" className="hover:text-accent">+1 (437) 665-0895</a></li>
          </ul>
        </div>

      </div>
      <div className="border-t border-border">
        <div className="container-editorial flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Prashant Singh Chauhan. All rights reserved.</p>
          <p>Designed & built in Toronto.</p>
        </div>
      </div>
    </footer>
  );
}