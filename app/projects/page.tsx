import Image from "next/image";
import Link from "next/link";
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
        description="以 AI 内容工作流为核心，展示播客生产、研究整理、文本分析和可视化方向的持续实验。"
        title="AI 项目"
      />
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const isExternal = project.link.startsWith("http");
          const linkClass = "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-ink";

          return (
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
                {isExternal ? (
                  <a className={linkClass} href={project.link} rel="noreferrer" target="_blank">
                    查看项目
                    <ArrowUpRight aria-hidden size={17} />
                  </a>
                ) : (
                  <Link className={linkClass} href={project.link}>
                    查看项目
                    <ArrowUpRight aria-hidden size={17} />
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
