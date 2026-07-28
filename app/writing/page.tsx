import { WritingPortfolio } from "@/components/WritingPortfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { getWriting } from "@/lib/content";

export const metadata = {
  title: "内容作品 - 杜博涵"
};

export default function WritingPage() {
  const writing = getWriting();

  return (
    <main className="content-width pb-20 pt-12 md:pt-18">
      <SectionHeading
        description="按类型查看播客制作、法治报道、数据报道、品牌故事与城市商业报道。"
        title="内容作品"
      />
      <WritingPortfolio items={writing} />
    </main>
  );
}
