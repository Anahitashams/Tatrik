export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-cream md:text-3xl">
              از ساخت قطعه‌های تازه باخبر شوید
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-7 text-cream/70">
              هر ماه یک ایمیل کوتاه، درباره‌ی محصولات جدید و باقیمانده‌های محدود کوره.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">
              ایمیل شما
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="ایمیل شما"
              className="w-full rounded-full border border-cream/20 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-cream/50"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-cream px-6 py-3 text-sm text-ink transition-colors hover:bg-clay-light"
            >
              عضویت
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
