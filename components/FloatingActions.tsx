"use client";

import { useState } from "react";
import { ExternalLink, FileDown, Menu, X } from "lucide-react";
import type { Profile } from "@/lib/content";

export function FloatingActions({ profile }: { profile: Profile }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 top-4 z-40">
      <div className="hidden gap-2 md:flex">
        <a
          className="inline-flex min-h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white shadow-crisp transition hover:bg-ink"
          href={profile.resumeUrl}
          rel="noreferrer"
          target="_blank"
        >
          <FileDown aria-hidden size={17} />
          简历
        </a>
        <a
          className="inline-flex min-h-10 items-center gap-2 rounded-md border border-line bg-bg px-4 text-sm font-semibold text-ink shadow-crisp transition hover:border-primary hover:text-primary"
          href={profile.linkedinUrl}
          rel="noreferrer"
          target="_blank"
        >
          <ExternalLink aria-hidden size={17} />
          LinkedIn
        </a>
      </div>

      <div className="md:hidden">
        <button
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-bg text-ink shadow-crisp"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
        {open ? (
          <div className="mt-2 w-44 rounded-md border border-line bg-bg p-2 shadow-crisp">
            <a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-surface" href="/">
              首页
            </a>
            <a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-surface" href="/writing/">
              写作作品
            </a>
            <a className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-surface" href="/projects/">
              AI 项目
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-surface"
              href={profile.resumeUrl}
              rel="noreferrer"
              target="_blank"
            >
              <FileDown aria-hidden size={16} />
              简历
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-surface"
              href={profile.linkedinUrl}
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink aria-hidden size={16} />
              LinkedIn
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
