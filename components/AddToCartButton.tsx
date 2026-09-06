"use client";

import { useState } from "react";

export default function AddToCartButton({ productName }: { productName: string }) {
  const [added, setAdded] = useState(false);

  function handleClick() {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-live="polite"
      className="rounded-full bg-ink px-7 py-3 text-sm text-cream transition-colors hover:bg-clay-dark"
    >
      {added ? `${productName} به سبد افزوده شد` : "افزودن به سبد خرید"}
    </button>
  );
}
