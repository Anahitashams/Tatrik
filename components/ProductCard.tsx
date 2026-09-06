import Link from "next/link";
import ProductVisual from "./ProductVisual";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group flex flex-col">
      <ProductVisual
        icon={product.icon}
        tone={product.tone}
        className="aspect-square rounded-soft transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <div>
          <h3 className="text-ink">{product.name}</h3>
          <p className="mt-1 text-sm text-ink-soft">{product.detail}</p>
        </div>
        <p className="shrink-0 text-sm text-clay-dark">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
