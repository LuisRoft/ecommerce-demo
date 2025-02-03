"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen p-6 pt-8 border-r border-neutral-800 hidden lg:block">
      <nav className="space-y-4">
        <h2 className="text-blue-400 font-mono text-sm font-semibold">
          CATEGORIES
        </h2>

        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.slug} className="space-y-1">
              <CategoryLink href={`/${category.slug}`} title={category.name} />

              {category.brands?.map((brand) => (
                <BrandLink
                  key={brand.slug}
                  href={`/${category.slug}/${brand.slug}`}
                  title={brand.name}
                  className="ml-4"
                />
              ))}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}

function CategoryLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "block text-sm font-medium transition-colors",
        isActive ? "text-blue-400" : "text-neutral-300 hover:text-blue-400"
      )}
    >
      {title}
    </Link>
  );
}
function BrandLink({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "block text-sm transition-colors",
        isActive
          ? "text-neutral-200"
          : "text-neutral-400 hover:text-neutral-200",
        className
      )}
    >
      {title}
    </Link>
  );
}
