import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideTractor, LucideTruck, LucideWrench } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-neutral-900 px-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
          Partes y Repuestos para Maquinaria Industrial
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Encuentra los mejores componentes para tus equipos, desde piezas de
          tractor hasta correas para cortadoras de césped. Calidad garantizada y
          entrega rápida.
        </p>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-md px-8 py-4 rounded-lg transition-colors"
          >
            <Link href="/tractor-parts">Ver Catálogo</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border border-neutral-800 rounded-lg hover:bg-gray-800 transition-colors flex flex-col items-center">
            <div className="bg-blue-200 rounded-xl p-1 mb-2">
              <LucideTractor className="text-blue-400" size={35} />
            </div>
            <h3 className="text-blue-400 text-xl font-semibold">
              Partes de Tractor
            </h3>
            <p className="text-sm text-gray-400">
              John Deere, Caterpillar, Case
            </p>
          </div>

          <div className="py-6 px-4 border border-neutral-800 rounded-lg flex flex-col items-center  hover:bg-gray-800 transition-colors">
            <div className="bg-blue-200 rounded-xl p-1 mb-2 ">
              <LucideTruck className="text-blue-400" size={35} />
            </div>
            <h3 className="text-blue-400 text-xl font-semibold">
              Partes de Camiones
            </h3>
            <p className="text-sm text-gray-400">
              Repuestos originales y alternativos
            </p>
          </div>

          <div className="p-6 border border-neutral-800 rounded-lg flex flex-col items-center  hover:bg-gray-800 transition-colors">
            <div className="bg-blue-200 rounded-xl p-1 mb-2">
              <LucideWrench className="text-blue-400" size={35} />
            </div>
            <h3 className="text-blue-400 text-xl font-semibold">Accesorios</h3>
            <p className="text-sm text-gray-400">Neumáticos, Correas y más</p>
          </div>
        </div>
      </div>
    </div>
  );
}
