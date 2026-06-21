import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/writing/", label: "写作作品" },
  { href: "/projects/", label: "AI 项目" }
];

export function SiteHeader({ name, romanizedName }: { name: string; romanizedName: string }) {
  return (
    <header className="content-width flex min-h-20 items-center justify-between gap-6 pr-14 md:pr-56">
      <Link className="group" href="/">
        <span className="block text-base font-semibold leading-6">{name}</span>
        <span className="block text-xs font-medium leading-5 text-muted group-hover:text-primary">{romanizedName}</span>
      </Link>
      <nav aria-label="主导航" className="hidden items-center gap-6 text-sm font-medium text-muted sm:flex">
        {navItems.map((item) => (
          <Link className="transition hover:text-primary" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
