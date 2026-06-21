import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

export function SectionHeading({ title, description, actionHref, actionLabel }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="copy-width">
        <h2 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
        {description ? <p className="mt-3 text-base leading-7 text-muted">{description}</p> : null}
      </div>
      {actionHref && actionLabel ? (
        <Link
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition hover:text-ink"
          href={actionHref}
        >
          {actionLabel}
          <ArrowRight aria-hidden size={17} />
        </Link>
      ) : null}
    </div>
  );
}
