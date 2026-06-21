import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, FileText, Mic2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { getFeaturedProjects, getFeaturedWriting, getProfile } from "@/lib/content";

const highlightIcons = [BookOpenText, Mic2, Sparkles, FileText];

export default function HomePage() {
  const profile = getProfile();
  const featuredWriting = getFeaturedWriting();
  const featuredProjects = getFeaturedProjects();

  return (
    <main>
      <section className="content-width grid gap-10 pb-16 pt-12 md:grid-cols-[minmax(0,1fr)_340px] md:items-end md:pb-24 md:pt-20">
        <div className="copy-width">
          <p className="mb-5 text-sm font-semibold text-primary">{profile.romanizedName}</p>
          <h1 className="text-balance text-5xl font-semibold leading-tight md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-medium leading-snug text-primary md:text-3xl">
            {profile.headline}
          </p>
          <div className="mt-6 space-y-3 text-lg leading-8 text-muted">
            {profile.bio.map((paragraph) => (
              <p className="text-pretty" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white transition hover:bg-ink"
              href="/writing/"
            >
              查看写作作品
              <ArrowRight aria-hidden size={18} />
            </Link>
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line bg-bg px-5 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
              href="/projects/"
            >
              查看 AI 项目
              <Sparkles aria-hidden size={18} />
            </Link>
          </div>
        </div>

        <aside className="stable-card overflow-hidden bg-surface">
          <Image
            alt="杜博涵头像占位图"
            className="h-auto w-full"
            height={420}
            priority
            src={profile.headshot}
            width={340}
          />
          <div className="border-t border-line p-5">
            <p className="text-sm leading-6 text-muted">
              头像区域可替换为正式职业照。将图片放入 public 文件夹后，在 data/profile.json 中修改 headshot 字段即可。
            </p>
          </div>
        </aside>
      </section>

      <section className="content-width border-y border-line py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {profile.highlights.map((item, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];
            return (
              <div className="flex gap-3" key={item.title}>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <Icon aria-hidden size={18} />
                </div>
                <div>
                  <h2 className="font-semibold leading-6">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="content-width grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <SectionHeading
            actionHref="/writing/"
            actionLabel="全部写作"
            description="先用示例作品搭出信息结构，后续可以逐条替换为真实链接。"
            title="写作作品"
          />
          <div className="mt-7 space-y-4">
            {featuredWriting.map((item) => (
              <WorkCard item={item} key={item.title} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            actionHref="/projects/"
            actionLabel="全部项目"
            description="展示 AI 播客、个人论文和后续实验项目，便于投递不同方向时调整重点。"
            title="AI 与研究项目"
          />
          <div className="mt-7 space-y-4">
            {featuredProjects.map((item) => (
              <WorkCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
