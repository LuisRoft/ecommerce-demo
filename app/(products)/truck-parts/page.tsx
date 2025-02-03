import { ProductGrid } from "@/components/products/product-grid";
import { getProductsByCategory } from "@/lib/data/products";
import { SearchFilters } from "@/components/products/search-filters";

export default async function TruckPartsPage({
  searchParams,
}: {
  searchParams: Promise<{
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    search?: string;
  }>;
}) {
  const { brand, maxPrice, minPrice, search } = await searchParams;
  const filters = {
    brand: brand,
    minPrice: Number(minPrice) || undefined,
    maxPrice: Number(maxPrice) || undefined,
    search: search,
  };

  const products = getProductsByCategory("truck-parts", filters);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Truck Parts</h1>

        <SearchFilters />
      </div>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-neutral-400 text-center py-12">
          No products found with these filters
        </div>
      )}
    </div>
  );
}
