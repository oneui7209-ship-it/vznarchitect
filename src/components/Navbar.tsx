import { useEffect, useRef, useState } from "react";
import { Mail, Menu, X, Phone } from "lucide-react";
import logo from "@/assets/vzn-logo.png";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stripeHeight, setStripeHeight] = useState(0);
  const stripeRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (stripeRef.current) {
      setStripeHeight(stripeRef.current.offsetHeight);
    }
    const onResize = () => {
      if (stripeRef.current) {
        setStripeHeight(stripeRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top info bar — hides on scroll */}
      <div
        ref={stripeRef}
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ease-out ${
          scrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-background via-background/95 to-background border-b border-gold/20">
          <div className="absolute inset-0 bg-gold/[0.03]" />
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <a
              href="mailto:veersingh11919@gmail.com"
              className="flex items-center gap-1.5 transition-colors duration-300 hover:text-gold group"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                <Mail size={10} className="text-gold" />
              </span>
              <span className="hidden sm:inline">veersingh11919@gmail.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <span className="h-3 w-px bg-gold/30" />
            <a
              href="tel:+918950078109"
              className="flex items-center gap-1.5 transition-colors duration-300 hover:text-gold group"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                <Phone size={10} className="text-gold" />
              </span>
              +91 8950078109
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-background/85 backdrop-blur-xl border-b border-gold/15 py-1.5 lg:py-3"
            : `top-0 lg:top-0 py-3 lg:py-5`
        }`}
        style={!scrolled ? { top: `${stripeHeight}px` } : undefined}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-8">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="VZN Architect"
              className="h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-12 sm:h-11 sm:w-11"
            />
            <div className="flex items-baseline gap-1.5 leading-none">
              <div className="font-display text-[16px] tracking-[0.2em] text-gold sm:text-[18px]">
                VZN
              </div>
              <div className="hidden min-[400px]:inline text-[10px] uppercase tracking-[0.3em] text-white/90 sm:text-[11px]">
                Architect
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                activeOptions={{ exact: l.href === "/" }}
                className="relative text-[13px] uppercase tracking-[0.18em] text-muted-foreground hover:text-gold transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                activeProps={{ className: "text-gold after:w-full!" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-consultation-popup"));
            }}
            className="hidden lg:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:gold-glow cursor-pointer"
          >
            Consultation
          </button>

          {/* Right actions container on mobile to fill blank space and balance UI */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation-popup"));
              }}
              className="border border-gold/60 px-2 py-1 text-[9px] min-[375px]:text-[10px] uppercase tracking-[0.12em] text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:gold-glow cursor-pointer whitespace-nowrap"
            >
              Consultation
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="text-gold p-1.5 cursor-pointer"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-px bg-gold-gradient transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <nav className="relative flex h-full flex-col items-center justify-center gap-6 px-6">
          {links.map((l, i) => (
            <Link
              key={l.href}
              to={l.href}
              activeOptions={{ exact: l.href === "/" }}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-foreground hover:text-gold transition-colors duration-300 py-2 w-full text-center"
              activeProps={{ className: "text-gold font-semibold" }}
              style={{
                transform: open ? "translateY(0)" : "translateY(20px)",
                opacity: open ? 1 : 0,
                transition: `all 0.5s ${i * 0.05}s`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new CustomEvent("open-consultation-popup"));
            }}
            className="mt-6 border border-gold px-8 py-3 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300 cursor-pointer"
          >
            Get Consultation
          </button>
        </nav>
      </div>
    </>
  );
}
