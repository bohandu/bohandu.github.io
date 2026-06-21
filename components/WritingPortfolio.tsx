"use client";

import { useMemo, useState } from "react";
import { WorkCard } from "@/components/WorkCard";
import type { WorkSummary } from "@/lib/content";

const categories = ["全部", "新闻报道", "评论", "播客"];

export function WritingPortfolio({ items }: { items: WorkSummary[] }) {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredItems = useMemo(() => {
    if (activeCategory === "全部") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <section className="mt-8">
      <div aria-label="作品分类" className="flex flex-wrap gap-2" role="group">
        {categories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              className={
                active
                  ? "min-h-10 rounded-md bg-primary px-4 text-sm font-semibold text-white"
                  : "min-h-10 rounded-md border border-line bg-bg px-4 text-sm font-semibold text-muted transition hover:border-primary hover:text-primary"
              }
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {filteredItems.map((item) => (
          <WorkCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
