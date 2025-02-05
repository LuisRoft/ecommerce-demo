"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/constants";
import Link from "next/link";

export function BrandFilter() {
  const pathname = usePathname();
  const currentCategory = categories.find((c) => pathname.includes(c.slug));

  return (
    <div className="lg:hidden mb-6">
      <h3 className="text-sm text-neutral-400 mb-2">Filter by brand:</h3>
      <div className="flex flex-wrap gap-2">
        {currentCategory?.brands.map((brand) => (
          <Button
            key={brand.slug}
            variant="outline"
            size="sm"
            className="text-neutral-300 border-neutral-800 bg-neutral-700 hover:border-blue-400"
            asChild
          >
            <Link href={`/${currentCategory.slug}/${brand.slug}`}>
              {brand.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
