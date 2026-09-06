import ProductVisual from "./ProductVisual";

const categories = [
  { label: "ماگ", icon: "mug", tone: "dust" },
  { label: "کاسه", icon: "bowl", tone: "sage" },
  { label: "بشقاب", icon: "plate", tone: "sand" },
  { label: "گلدان", icon: "vase", tone: "clay" },
  { label: "شمعدان", icon: "candle", tone: "dust" },
] as const;

export default function CategoryStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <div className="flex gap-6 overflow-x-auto pb-2 md:justify-between md:gap-4 md:overflow-visible">
        {categories.map((category) => (
          <a
            key={category.label}
            href="#products"
            className="group flex flex-shrink-0 flex-col items-center gap-3 text-center"
          >
            <ProductVisual
              icon={category.icon}
              tone={category.tone}
              className="h-24 w-24 rounded-full ring-1 ring-ink/10 transition-transform group-hover:scale-105"
            />
            <span className="text-sm text-ink-soft group-hover:text-ink">
              {category.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
