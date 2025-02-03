import { Product } from "@/types/product";
import Image from "next/image";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative border border-neutral-800 rounded-lg p-6 hover:border-blue-400 transition-colors"
        >
          <div className="aspect-square w-full bg-neutral-800 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-4 space-y-1">
            <h3 className="font-medium text-neutral-200">{product.name}</h3>
            <p className="text-sm text-neutral-400 line-clamp-2">
              {product.description}
            </p>
            <p className="text-blue-400 font-mono mt-2">
              ${product.price.toFixed(2)} USD
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
