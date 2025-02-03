// lib/data.ts
import { Product } from "@/types/product";
import { categories } from "../constants";

export type ProductFilters = {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
};

// Datos de ejemplo para products
export const products: Product[] = [
  {
    id: 1,
    name: "Piston and Liner Kit",
    category: "Tractor Parts",
    brand: "John Deere",
    price: 45.99,
    description: "226-1541 B03 - Side 1 shelf 1a tractor parts line 7",
    image: "/assets/images/products/tractor-parts/JDE/piston-and-liner-kit.png",
    slug: "piston-and-liner-kit-john-deere",
  },
  {
    id: 2,
    name: "HEX NUT 3/4 UNF",
    category: "Tractor Parts",
    brand: "John Deere",
    price: 32.5,
    description: "PART: 1340/07012 - Side 1 shelf 1a tractor parts line 60",
    image: "/assets/images/products/tractor-parts/JDE/hex-nut.webp",
    slug: "hex-nut-3-4-unf-john-deere",
  },
  {
    id: 3,
    name: "GASKET",
    category: "Tractor Parts",
    brand: "Caterpillar",
    price: 28.75,
    description: "Side 1 shelf 2a tractor parts line 312",
    image: "/assets/images/products/tractor-parts/CAT/gasket.webp",
    slug: "gasket-caterpillar",
  },
  {
    id: 4,
    name: "WASHER",
    category: "Tractor Parts",
    brand: "Caterpillar",
    price: 28.75,
    description: "Side 1 shelf 2a tractor parts line 331",
    image: "/assets/images/products/tractor-parts/CAT/washer.webp",
    slug: "washer-caterpillar",
  },
  {
    id: 5,
    name: "Adapter Height",
    category: "Tractor Parts",
    brand: "JCB",
    price: 15.99,
    description:
      "DAPTOR G3/4A X 1-1/16 SA - Side 1 shelf 1a tractor parts line 20",
    image: "/assets/images/products/tractor-parts/JCB/adapter-height.webp",
    slug: "adapter-height-jcb",
  },
  {
    id: 6,
    name: "Bottom Gasket Set",
    category: "Tractor Parts",
    brand: "JCB",
    price: 15.99,
    description: "1 KIT - Side 1 shelf 1a tractor parts line 23",
    image: "/assets/images/products/tractor-parts/JCB/bottom-gasket-set.webp",
    slug: "bottom-gasket-set-jcb",
  },
  {
    id: 7,
    name: "Tapered Roller Bearings",
    category: "Tractor Parts",
    brand: "TIMKEN",
    price: 15.99,
    description: "Side 1 shelf 1b tractor parts line 85",
    image:
      "/assets/images/products/tractor-parts/TIMKEN/tapered-roller-bearings.webp",
    slug: "tapered-roller-bearings-timken",
  },
  {
    id: 8,
    name: "Seal",
    category: "Tractor Parts",
    brand: "TIMKEN",
    price: 15.99,
    description: "Side 1 shelf 1b tractor parts line 149",
    image: "/assets/images/products/tractor-parts/TIMKEN/seal.webp",
    slug: "seal-timken",
  },
  {
    id: 9,
    name: "Oil Seal",
    category: "Tractor Parts",
    brand: "SKF",
    price: 14.99,
    description: "HMS4 R - Side 1 shelf 1b tractor parts lines 82 and 91",
    image: "/assets/images/products/tractor-parts/SKF/oil-seal.webp",
    slug: "oil-seal-skf",
  },
  {
    id: 10,
    name: "Radial Ball Bearing",
    category: "Tractor Parts",
    brand: "SKF",
    price: 14.99,
    description: "BF1D - Side 1 shelf 1b tractor parts lines 82 and 91",
    image: "/assets/images/products/tractor-parts/SKF/radial-ball-bearing.webp",
    slug: "radial-ball-bearing-skf",
  },
  {
    id: 11,
    name: "Gasket",
    category: "Tractor Parts",
    brand: "CASE",
    price: 22.5,
    description: "Side 1 shelf 1b tractor parts line 170",
    image: "/assets/images/products/tractor-parts/CASE/gasket.webp",
    slug: "gasket-case",
  },
  {
    id: 12,
    name: "Bolts",
    category: "Tractor Parts",
    brand: "CASE",
    price: 22.5,
    description: "Side 1 shelf 1b tractor parts line 212",
    image: "/assets/images/products/tractor-parts/CASE/bolts.webp",
    slug: "bolts-case",
  },
  {
    id: 13,
    name: "Plate",
    category: "Tractor Parts",
    brand: "LONG",
    price: 12.99,
    description: "Side 1 shelf 2a tractor parts line 274",
    image: "/assets/images/products/tractor-parts/LONG/plate.webp",
    slug: "plate-long",
  },
  {
    id: 14,
    name: "Washers",
    category: "Tractor Parts",
    brand: "LONG",
    price: 12.99,
    description: '1/2" - Side 1 shelf 1c tractor parts line 821',
    image: "/assets/images/products/tractor-parts/LONG/washers.webp",
    slug: "washers-long",
  },
  {
    id: 15,
    name: "Assy",
    category: "Tractor Parts",
    brand: "MITSUBISHI",
    price: 30.0,
    description: "Side 1 shelf 2c tractor parts line 836",
    image: "/assets/images/products/tractor-parts/MITSUBISHI/assy.webp",
    slug: "assy-mitsubishi",
  },
  {
    id: 16,
    name: "Draft Control Rod",
    category: "Tractor Parts",
    brand: "MITSUBISHI",
    price: 30.0,
    description: "Side 1 shelf 2c tractor parts line 923",
    image:
      "/assets/images/products/tractor-parts/MITSUBISHI/draft-control-rod.webp",
    slug: "draft-control-rod-mitsubishi",
  },
  {
    id: 17,
    name: "Spacer",
    category: "Truck Parts",
    brand: "DANA",
    price: 30.0,
    description: "Side 1 shelf 2c truck parts line 948",
    image: "/assets/images/products/truck-parts/DANA/spacer.webp",
    slug: "spacer-dana",
  },
  {
    id: 18,
    name: "Bearing",
    category: "Truck Parts",
    brand: "DANA",
    price: 30.0,
    description: "Side 1 shelf 2c truck parts line 982",
    image: "/assets/images/products/truck-parts/DANA/bearing.webp",
    slug: "bearing-dana",
  },
];

// Función para obtener products por categoría
export function getProductsByCategory(
  categorySlug: string,
  filters: ProductFilters = {}
): Product[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];

  let filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.name.toLowerCase()
  );

  // Aplicar filtros
  if (filters.brand) {
    filteredProducts = filteredProducts.filter(
      (p) => p.brand?.toLowerCase() === filters.brand?.toLowerCase()
    );
  }

  if (filters.minPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= (filters.minPrice || 0)
    );
  }

  if (filters.maxPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price <= (filters.maxPrice || Infinity)
    );
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );
  }

  return filteredProducts;
}

// Función opcional para obtener products por categoría y marca
export function getProductsByBrand(
  categorySlug: string,
  brandSlug: string
): Product[] {
  return getProductsByCategory(categorySlug).filter(
    (product) => product.brand?.toLowerCase() === brandSlug.replace("-", " ")
  );
}
