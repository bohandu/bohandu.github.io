import { ArrowUpRight } from "lucide-react";
import type { WorkSummary } from "@/lib/content";

export function WorkCard({ item }: { item: WorkSummary }) {
  return (
    <article className="stable-card p-5 transition hover:border-primary">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{item.category}</span>
        <span>{item.source}</span>
        <span aria-hidden>丨</span>
        <time dateTime={item.date}>{item.dateLabel}</time>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-snug">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
      <a
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-ink"
        href={item.link}
        rel="noreferrer"
        target="_blank"
      >
        打开链接
        <ArrowUpRight aria-hidden size={17} />
      </a>
    </article>
  );
}
