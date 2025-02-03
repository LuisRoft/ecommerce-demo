import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideTractor, LucideTruck, LucideWrench } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col py-20 items-center justify-center min-h-[calc(100vh-4rem)] bg-neutral-900 px-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
          Parts and Accessories for Industrial Machinery
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Find the best components for your equipment, from tractor parts to
          lawn mower belts. Guaranteed quality and fast delivery.
        </p>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-md px-8 py-4 rounded-lg transition-colors"
          >
            <Link href="/tractor-parts">View Catalog</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border border-neutral-800 rounded-lg hover:bg-gray-800 transition-colors flex flex-col items-center">
            <div className="bg-blue-200 rounded-xl p-1 mb-2">
              <LucideTractor className="text-blue-400" size={35} />
            </div>
            <h3 className="text-blue-400 text-xl font-semibold">
              Tractor Parts
            </h3>
            <p className="text-sm text-gray-400">
              John Deere, Caterpillar, Case
            </p>
          </div>

          <div className="py-6 px-4 border border-neutral-800 rounded-lg flex flex-col items-center hover:bg-gray-800 transition-colors">
            <div className="bg-blue-200 rounded-xl p-1 mb-2">
              <LucideTruck className="text-blue-400" size={35} />
            </div>
            <h3 className="text-blue-400 text-xl font-semibold">Truck Parts</h3>
            <p className="text-sm text-gray-400">
              Original and alternative spare parts
            </p>
          </div>

          <div className="p-6 border border-neutral-800 rounded-lg flex flex-col items-center hover:bg-gray-800 transition-colors">
            <div className="bg-blue-200 rounded-xl p-1 mb-2">
              <LucideWrench className="text-blue-400" size={35} />
            </div>
            <h3 className="text-blue-400 text-xl font-semibold">Accessories</h3>
            <p className="text-sm text-gray-400">Tires, Belts, and more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
