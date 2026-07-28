import { ArrowUpRight } from "lucide-react";
import type { WorkSummary } from "@/lib/content";

export function WorkCard({ hideMeta = false, item }: { hideMeta?: boolean; item: WorkSummary }) {
  const hasListenLinks = item.links && item.links.length > 0;
  const hasPrimaryLink = Boolean(item.link);

  return (
    <article className="stable-card p-5 transition hover:border-primary">
      {hideMeta ? null : (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
          <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{item.category}</span>
          <span>{item.source}</span>
          <time dateTime={item.date}>{item.dateLabel}</time>
        </div>
      )}
      <h3 className={hideMeta ? "text-xl font-semibold leading-snug" : "mt-4 text-xl font-semibold leading-snug"}>
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
      {hasListenLinks ? (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold">
          <span className="text-ink">在</span>
          {item.links?.map((link, index) => (
            <span className="inline-flex items-center gap-2" key={link.url}>
              {index > 0 ? <span className="text-muted">/</span> : null}
              <a className="inline-flex items-center gap-1 text-primary transition hover:text-ink" href={link.url} rel="noreferrer" target="_blank">
                {link.label}
                <ArrowUpRight aria-hidden size={15} />
              </a>
            </span>
          ))}
          <span className="text-ink">收听</span>
        </div>
      ) : hasPrimaryLink ? (
        <a
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-ink"
          href={item.link}
          rel="noreferrer"
          target="_blank"
        >
          {item.linkLabel}
          <ArrowUpRight aria-hidden size={17} />
        </a>
      ) : null}
    </article>
  );
}
