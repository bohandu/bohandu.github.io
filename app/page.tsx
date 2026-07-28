import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe2, Languages, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { getLatestProjects, getLatestWriting, getProfile } from "@/lib/content";

const highlightIcons = {
  全球品牌传播: Globe2,
  中英文内容生产: Languages,
  数据分析与可视化: BarChart3,
  "AI 内容工作流": Sparkles
};

export default function HomePage() {
  const profile = getProfile();
  const latestWriting = getLatestWriting();
  const latestProjects = getLatestProjects();

  return (
    <main>
      <section className="content-width grid gap-8 pb-10 pt-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-start md:pb-14 md:pt-10 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="copy-width">
          <p className="mb-4 text-sm font-semibold text-primary">{profile.romanizedName}</p>
          <h1 className="text-balance text-5xl font-semibold leading-tight md:text-6xl">
            {profile.name}
          </h1>
          {profile.headline ? (
            <p className="mt-5 text-2xl font-medium leading-snug text-primary md:text-3xl">
              {profile.headline}
            </p>
          ) : null}
          <div className="mt-5 space-y-3 text-base leading-8 text-muted md:text-lg">
            {profile.bio.map((paragraph) => (
              <p className="text-pretty" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white transition hover:bg-ink"
              href="/writing/"
            >
              查看内容作品
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

        <aside className="w-full max-w-[280px] justify-self-center sm:max-w-[300px] md:max-w-none md:justify-self-end">
          <Image
            alt="杜博涵个人照片"
            className="stable-card aspect-[3/4] w-full object-cover object-[50%_42%]"
            height={1200}
            priority
            src={profile.headshot}
            width={900}
          />
        </aside>
      </section>

      <section className="content-width border-y border-line py-8">
        <div className="grid gap-4 md:grid-cols-4">
          {profile.highlights.map((item) => {
            const Icon = highlightIcons[item.title as keyof typeof highlightIcons] ?? Sparkles;
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
            actionLabel="全部内容"
            description="播客、报道、数据与品牌叙事作品。"
            title="内容作品"
          />
          <div className="mt-7 space-y-4">
            {latestWriting.map((item) => (
              <WorkCard item={item} key={item.title} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            actionHref="/projects/"
            actionLabel="全部项目"
            description="AI 内容工作流、播客生产与研究工具化探索。"
            title="AI 项目"
          />
          <div className="mt-7 space-y-4">
            {latestProjects.map((item) => (
              <WorkCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
