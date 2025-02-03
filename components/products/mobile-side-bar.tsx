"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { categories } from "@/lib/constants";
import Link from "next/link";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="text-neutral-300 hover:bg-neutral-800"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-64 border-neutral-800 bg-neutral-900 text-white"
      >
        <nav className="space-y-6 ">
          <SheetHeader>
            <SheetTitle className="text-blue-400 text-left font-mono text-sm font-semibold px-4">
              CATEGORÍAS
            </SheetTitle>
          </SheetHeader>

          <div className="space-y-4 px-4">
            {categories.map((category) => (
              <div key={category.slug} className="space-y-2">
                <Link
                  href={`/${category.slug}`}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-neutral-300 hover:text-blue-400"
                >
                  {category.name}
                </Link>

                <div className="ml-4 space-y-1">
                  {category.brands?.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/${category.slug}/${brand.slug}`}
                      onClick={() => setOpen(false)}
                      className="block text-sm text-neutral-400 hover:text-neutral-200"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
