import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  /** Parallax strength in px (max translate). Default 60. */
  strength?: number;
};

/**
 * Subtle scroll-driven parallax + initial fade/zoom-in for hero imagery.
 * Respects prefers-reduced-motion.
 */
export function ParallaxImage({
  src,
  alt,
  width,
  height,
  className,
  strength = 60,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // Fade-in on mount
    const t = window.setTimeout(() => setVisible(true), 50);
    if (reduced) return () => window.clearTimeout(t);

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 (above) → 0 (centered) → 1 (below)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      const y = -clamped * strength;
      img.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.08)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div
      ref={wrapRef}
      className={
        "relative overflow-hidden " + (className ?? "")
      }
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        className="h-auto w-full object-cover will-change-transform"
        style={{
          transform: "translate3d(0,0,0) scale(1.08)",
          opacity: visible ? 1 : 0,
          transition:
            "opacity 900ms ease-out, transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      {/* Soft vignette to blend with cream background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, color-mix(in oklab, var(--background) 35%, transparent) 100%)",
        }}
      />
    </div>
  );
}