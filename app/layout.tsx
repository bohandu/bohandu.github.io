import type { Metadata } from "next";
import "@fontsource/noto-sans-sc/400.css";
import "@fontsource/noto-sans-sc/500.css";
import "@fontsource/noto-sans-sc/600.css";
import "@fontsource/noto-sans-sc/700.css";
import "./globals.css";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteHeader } from "@/components/SiteHeader";
import { getProfile } from "@/lib/content";

export const metadata: Metadata = {
  title: "杜博涵 - 个人作品集",
  description: "杜博涵的中文个人作品集，展示写作、播客、传播研究和 AI 项目实践。",
  metadataBase: new URL("https://bohandu.github.io")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const profile = getProfile();

  return (
    <html lang="zh-CN">
      <body>
        <div className="page-shell">
          <SiteHeader
            educationLogos={profile.educationLogos}
            name={profile.name}
            romanizedName={profile.romanizedName}
          />
          <FloatingActions profile={profile} />
          {children}
        </div>
      </body>
    </html>
  );
}
