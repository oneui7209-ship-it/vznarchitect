import { Link } from "@tanstack/react-router";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Accessible breadcrumb navigation component.
 * Renders a semantic <nav> with an ordered list matching the gold/luxury design system.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 sm:px-8 pt-4 pb-0">
      <ol className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {idx > 0 && (
                <span className="text-gold/40" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="text-gold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
