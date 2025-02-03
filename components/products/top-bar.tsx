import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/products/mobile-side-bar";
import { CommandIcon } from "lucide-react";

export function TopBar() {
  return (
    <header className="w-full border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm bg-gradient-to-r from-neutral-900/80 via-neutral-900/60 to-neutral-900/40">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        {/* Menú Mobile */}
        <div className="lg:hidden">
          <MobileSidebar />
        </div>

        {/* Nombre de la Empresa */}
        <Link
          href="/"
          className={cn(
            "text-xl font-bold tracking-tighter text-neutral-200 flex items-center gap-2",
            "transition-opacity hover:opacity-80"
          )}
        >
          <div className="p-1 flex items-center justify-center bg-blue-300  rounded-sm">
            <CommandIcon size={20} className="text-blue-500" />
          </div>
          DEE PARTAIN DEMO
        </Link>
      </div>
    </header>
  );
}
