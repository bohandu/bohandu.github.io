import { WritingPortfolio } from "@/components/WritingPortfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { getWriting } from "@/lib/content";

export const metadata = {
  title: "写作作品 - 杜博涵"
};

export default function WritingPage() {
  const writing = getWriting();

  return (
    <main className="content-width pb-20 pt-12 md:pt-18">
      <SectionHeading
        description="用分类筛选快速查看新闻报道、评论和播客相关作品。示例数据位于 data/writing.json。"
        title="写作作品"
      />
      <WritingPortfolio items={writing} />
    </main>
  );
}
