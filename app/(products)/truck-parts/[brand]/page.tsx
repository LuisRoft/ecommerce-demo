import { ProductGrid } from "@/components/products/product-grid";
import { getProductsByBrand } from "@/lib/data/products";
import { notFound } from "next/navigation";
import { categories } from "@/lib/constants";
import { BrandFilter } from "@/components/products/brand-filter";

export async function generateStaticParams() {
  const category = categories.find((c) => c.slug === "tractor-parts");
  return (
    category?.brands.map((brand) => ({
      brand: brand.slug,
    })) || []
  );
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const products = getProductsByBrand("truck-parts", brand);
  const brandName = categories
    .find((c) => c.slug === "truck-parts")
    ?.brands.find((b) => b.slug === brand)?.name;

  if (!products.length) notFound();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{brandName}</h1>
        <BrandFilter />
        <p className="text-neutral-400 mt-2">
          Mostrando {products.length} productos
        </p>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
