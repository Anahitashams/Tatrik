"use client";

import { useState } from "react";
import Link from "next/link";
import ProductVisual from "./ProductVisual";
import { products, formatPrice } from "@/lib/products";

type CartLine = {
  slug: string;
  quantity: number;
};

const initialCart: CartLine[] = [
  { slug: "mug-abgineh", quantity: 2 },
  { slug: "bowl-set-sabz", quantity: 1 },
  { slug: "candle-doghlo", quantity: 1 },
];

const SHIPPING_COST = 90000;

export default function CartView() {
  const [cart, setCart] = useState<CartLine[]>(initialCart);

  function updateQuantity(slug: string, delta: number) {
    setCart((current) =>
      current
        .map((line) =>
          line.slug === slug
            ? { ...line, quantity: Math.max(1, line.quantity + delta) }
            : line
        )
        .filter((line) => line.quantity > 0)
    );
  }

  function removeLine(slug: string) {
    setCart((current) => current.filter((line) => line.slug !== slug));
  }

  const lines = cart
    .map((line) => {
      const product = products.find((p) => p.slug === line.slug);
      return product ? { product, quantity: line.quantity } : null;
    })
    .filter((line): line is { product: (typeof products)[number]; quantity: number } => line !== null);

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const shipping = lines.length > 0 ? SHIPPING_COST : 0;
  const total = subtotal + shipping;

  if (lines.length === 0) {
    return (
      <div className="rounded-soft border border-ink/10 bg-paper px-8 py-16 text-center">
        <p className="text-ink-soft">سبد خرید شما خالی است.</p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-full bg-ink px-7 py-3 text-sm text-cream transition-colors hover:bg-clay-dark"
        >
          مشاهده محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {lines.map(({ product, quantity }) => (
          <li key={product.slug} className="flex gap-4 py-6">
            <ProductVisual icon={product.icon} tone={product.tone} className="h-24 w-24 shrink-0 rounded-soft" />

            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link href={`/products/${product.slug}`} className="text-ink hover:text-clay-dark">
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-ink-soft">{product.detail}</p>
                </div>
                <p className="shrink-0 text-sm text-clay-dark">{formatPrice(product.price)}</p>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-3 rounded-full border border-ink/15 px-3 py-1.5">
                  <button
                    type="button"
                    aria-label="کم کردن تعداد"
                    onClick={() => updateQuantity(product.slug, -1)}
                    className="text-ink-soft hover:text-ink"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm text-ink">{quantity}</span>
                  <button
                    type="button"
                    aria-label="زیاد کردن تعداد"
                    onClick={() => updateQuantity(product.slug, 1)}
                    className="text-ink-soft hover:text-ink"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeLine(product.slug)}
                  className="text-sm text-ink-soft hover:text-clay-dark"
                >
                  حذف
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-soft border border-ink/10 bg-paper p-6">
        <h2 className="text-ink">خلاصه سفارش</h2>

        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-ink-soft">جمع کالاها</dt>
            <dd className="text-ink">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink-soft">هزینه ارسال</dt>
            <dd className="text-ink">{formatPrice(shipping)}</dd>
          </div>
        </dl>

        <div className="mt-5 flex justify-between border-t border-ink/10 pt-5 text-ink">
          <span>مجموع</span>
          <span>{formatPrice(total)}</span>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-full bg-ink px-7 py-3 text-sm text-cream transition-colors hover:bg-clay-dark"
        >
          ادامه فرایند خرید
        </button>
      </aside>
    </div>
  );
}
