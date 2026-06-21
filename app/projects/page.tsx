import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "AI 项目 - 杜博涵"
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="content-width pb-20 pt-12 md:pt-18">
      <SectionHeading
        description="当前重点先放 AI 播客和个人论文，后续可以继续加入数据新闻、研究工具或产品原型。示例数据位于 data/projects.json。"
        title="AI 与研究项目"
      />
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article className="stable-card overflow-hidden transition hover:border-primary" key={project.title}>
            <Image
              alt={project.thumbnailAlt}
              className="aspect-[16/9] w-full object-cover"
              height={360}
              priority={index === 0}
              src={project.thumbnail}
              width={640}
            />
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-ink">
                  {project.status}
                </span>
                {project.tags.map((tag) => (
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-snug">{project.title}</h2>
              <p className="mt-3 text-base leading-7 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-ink"
                href={project.link}
                rel="noreferrer"
                target="_blank"
              >
                查看项目
                <ArrowUpRight aria-hidden size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
