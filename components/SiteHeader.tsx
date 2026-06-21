import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/writing/", label: "写作作品" },
  { href: "/projects/", label: "AI 项目" }
];

type EducationLogo = {
  name: string;
  image: string;
  alt: string;
};

export function SiteHeader({
  educationLogos,
  name,
  romanizedName
}: {
  educationLogos: EducationLogo[];
  name: string;
  romanizedName: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg">
      <div className="content-width flex min-h-20 items-center justify-between gap-6 pr-14 md:pr-56">
        <div className="flex min-w-0 items-center gap-3">
          <Link className="group min-w-0" href="/">
            <span className="block truncate text-base font-semibold leading-6">{name}</span>
            <span className="block truncate text-xs font-medium leading-5 text-muted group-hover:text-primary">
              {romanizedName}
            </span>
          </Link>
          <div aria-label="教育经历校徽" className="flex shrink-0 items-center gap-2">
            {educationLogos.map((logo) => (
              <span
                className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-bg"
                key={logo.name}
                title={logo.name}
              >
                <Image alt={logo.alt} height={24} src={logo.image} width={24} />
              </span>
            ))}
          </div>
        </div>
        <nav aria-label="主导航" className="hidden items-center gap-6 text-sm font-medium text-muted sm:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-primary" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
