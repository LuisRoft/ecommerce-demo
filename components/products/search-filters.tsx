"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams(searchParams.toString());

    // Actualizar parámetros
    formData.forEach((value, key) => {
      if (value) params.set(key, value.toString());
      else params.delete(key);
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-4 mt-4">
      <Input
        name="search"
        placeholder="Search products..."
        defaultValue={searchParams.get("search") || ""}
        className="bg-neutral-800 border-neutral-700 text-neutral-200"
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          name="minPrice"
          placeholder="Minimum price"
          defaultValue={searchParams.get("minPrice") || ""}
          className="bg-neutral-800 border-neutral-700 text-neutral-200"
        />

        <Input
          type="number"
          name="maxPrice"
          placeholder="Maximum price"
          defaultValue={searchParams.get("maxPrice") || ""}
          className="bg-neutral-800 border-neutral-700 text-neutral-200"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push(pathname)}
          className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-300 bg-neutral-900"
        >
          Clear Filters
        </Button>
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
          Apply Filters
        </Button>
      </div>
    </form>
  );
}
