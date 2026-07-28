import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  Gauge,
  Languages,
  Mic,
  RefreshCcw,
  Scissors,
  Share2,
  Sparkles
} from "lucide-react";

const featureItems = [
  {
    title: "单期节目与资料管理",
    description: "支持多期节目同时推进，并集中管理报道、公司资料、网页链接、Transcript、音频和成果版本。",
    icon: Database
  },
  {
    title: "对谈提纲生成",
    description: "根据栏目调用不同 Prompt，以指定报道为主要依据，并通过联网搜索补充或核实外部信息。",
    icon: Sparkles
  },
  {
    title: "中英 Transcript 转换",
    description: "分别生成英文制作稿、QA Notes 和发音对照表，识别采用中文拼音的人名及公司名。",
    icon: Languages
  },
  {
    title: "声音制作与剪辑辅助",
    description: "衔接外部声音复刻流程，通过本地语音识别生成临时时间码，并根据实际音频推荐转场位置。",
    icon: Scissors
  },
  {
    title: "本地响度检测",
    description: "按 -14 LUFS 检查最终音频，定位可能过大或过小的持续区段，降低短转场音效造成的误报。",
    icon: Gauge
  },
  {
    title: "社媒推广建议",
    description: "根据最终音频和 SRT 推荐 40-60 秒候选片段，必要时提供保持逻辑连续性的轻度拼接方案。",
    icon: Share2
  }
];

const principleItems = [
  {
    title: "本地优先",
    description: "资料和音频保存在本机，并结合本地语音识别与音频测量组件。",
    icon: Database
  },
  {
    title: "人工审核",
    description: "AI 生成初稿、建议和风险提示，最终内容与剪辑仍由编辑决定。",
    icon: Mic
  },
  {
    title: "可持续更新",
    description: "Prompt、成果和节目资料保留版本，后续可以继续添加栏目和功能。",
    icon: RefreshCcw
  }
];

const screenshots = [
  {
    src: "/projects/podcast-workbench-overview.webp",
    alt: "播客 AI 生产工作台总览界面截图",
    caption: "工作台总览：按栏目和单期节目组织资料、成果与生产状态。"
  },
  {
    src: "/projects/podcast-workbench-sources.webp",
    alt: "播客 AI 生产工作台资料库界面截图",
    caption: "单期节目资料库：集中处理资料上传、提纲依据选择和阶段导航。"
  }
];

export const metadata = {
  title: "播客 AI 生产工作台 - 杜博涵"
};

export default function PodcastAiWorkbenchPage() {
  return (
    <main className="content-width pb-20 pt-8 md:pt-12">
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-primary"
        href="/projects/"
      >
        <ArrowLeft aria-hidden size={17} />
        返回 AI 项目
      </Link>

      <section className="grid gap-8 border-b border-line pb-10 pt-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] md:items-center md:pb-14">
        <div className="copy-width">
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            播客 AI 生产工作台
          </h1>
          <p className="mt-5 text-xl font-medium leading-8 text-primary md:text-2xl">
            一个面向双语商业播客生产的本地 AI 工作台。
          </p>
          <p className="mt-5 text-base leading-8 text-muted md:text-lg">
            工作台将资料管理、对谈提纲、中英转译、发音校对、剪辑建议、响度检测和社媒推广建议整合到同一平台中，
            并保留编辑审核、版本管理和人工判断环节。
          </p>
        </div>

        <Image
          alt="播客 AI 生产工作台总览界面截图"
          className="stable-card aspect-[16/10] w-full bg-surface object-cover object-left-top"
          height={817}
          priority
          src="/projects/podcast-workbench-overview.webp"
          width={1600}
        />
      </section>

      <section className="grid gap-8 border-b border-line py-12 md:grid-cols-[280px_minmax(0,1fr)]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight">项目简介</h2>
        </div>
        <div className="copy-width space-y-4 text-base leading-8 text-muted md:text-lg">
          <p>
            这是我根据实际双语播客生产流程设计的本地工作台，服务于 Caixin Global 英文播客的多系列节目。
          </p>
          <p>
            它将原本分散在 Prompt、文件夹和不同软件中的工作整合到单期节目流程中。用户上传资料并选择任务后，系统会自动调用对应栏目的 Prompt、资料和成果版本，同时保留编辑审核与修改环节。
          </p>
        </div>
      </section>

      <section className="border-b border-line py-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">主要功能</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              功能围绕真实播客生产环节组织，重点处理资料、文本、声音和发布前判断。
            </p>
          </div>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="stable-card p-5" key={item.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <Icon aria-hidden size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-7">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-b border-line py-12">
        <h2 className="text-3xl font-semibold leading-tight">设计原则</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {principleItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="stable-card p-5" key={item.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <Icon aria-hidden size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-7">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">项目截图</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              截图仅展示已打码的界面结构，用于说明工作流和产品形态。
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-ink"
            href="/projects/"
          >
            查看全部 AI 项目
            <ArrowUpRight aria-hidden size={17} />
          </Link>
        </div>
        <div className="mt-7 grid gap-6">
          {screenshots.map((screenshot) => (
            <figure className="m-0" key={screenshot.src}>
              <Image
                alt={screenshot.alt}
                className="stable-card w-full object-cover object-left-top"
                height={817}
                src={screenshot.src}
                width={1600}
              />
              <figcaption className="mt-3 text-sm leading-6 text-muted">{screenshot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
