import Image from "next/image";
import Link from "next/link";
import type { Profile } from "@/lib/content";

export function SiteHeader({
  educationLogos,
  name,
  navigationItems,
  romanizedName
}: {
  educationLogos: Profile["educationLogos"];
  name: string;
  navigationItems: Profile["navigation"];
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
          <div aria-label="教育经历校徽" className="flex shrink-0 items-center gap-3">
            {educationLogos.map((logo) => (
              <span
                className="flex h-9 max-w-[96px] shrink-0 items-center justify-center sm:max-w-[148px] md:h-10 md:max-w-[176px]"
                key={logo.name}
                title={logo.name}
              >
                <Image
                  alt={logo.alt}
                  className="h-7 w-auto max-w-full object-contain md:h-8"
                  height={32}
                  src={logo.image}
                  width={152}
                />
              </span>
            ))}
          </div>
        </div>
        <nav aria-label="主导航" className="hidden items-center gap-7 text-base font-semibold text-ink sm:flex">
          {navigationItems.map((item) => (
            <Link className="transition hover:text-primary" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
