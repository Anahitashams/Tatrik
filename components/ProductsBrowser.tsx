"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { categories, products, type Category } from "@/lib/products";

type FilterValue = Category["slug"] | "all";

const categorySlugs = categories.map((c) => c.slug) as string[];

export default function ProductsBrowser() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const initial: FilterValue =
    requested && categorySlugs.includes(requested) ? (requested as FilterValue) : "all";

  const [active, setActive] = useState<FilterValue>(initial);

  const visible =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-6">
        <button
          type="button"
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={`rounded-full px-4 py-2 text-sm transition-colors ${
            active === "all"
              ? "bg-ink text-cream"
              : "bg-ink/5 text-ink-soft hover:bg-ink/10"
          }`}
        >
          همه
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActive(category.slug)}
            aria-pressed={active === category.slug}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              active === category.slug
                ? "bg-ink text-cream"
                : "bg-ink/5 text-ink-soft hover:bg-ink/10"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-soft">{visible.length} محصول</p>

      <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
