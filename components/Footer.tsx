import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "فروشگاه",
    left: "34.5%",
    links: [
      { label: "ماگ", href: "/products?category=mug" },
      { label: "کاسه", href: "/products?category=bowl" },
      { label: "بشقاب", href: "/products?category=plate" },
      { label: "گلدان", href: "/products?category=vase" },
      { label: "شمعدان", href: "/products?category=candle" },
    ],
  },
  {
    title: "کارگاه",
    left: "52%",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "داستان ساخت", href: "/about#story" },
      { label: "همکاری با ما", href: "/#newsletter" },
    ],
  },
  {
    title: "پشتیبانی",
    left: "68%",
    links: [
      { label: "ارسال و تحویل", href: "#" },
      { label: "بازگشت کالا", href: "#" },
      { label: "سوالات متداول", href: "#" },
    ],
  },
];

function Bullet() {
  return <span className="mr-2 inline-block h-[0.4em] w-[0.4em] shrink-0 rotate-45 bg-clay-dark/80 align-middle" />;
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-ink" dir="ltr">
      {/* background photo — keeps its 3:2 ratio at every width so the overlay % positions stay aligned */}
      <div className="relative aspect-[3/2] w-full">
        <Image
          src="/images/footer-bg.jpg"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />

        {/* brand block */}
        <div className="absolute" style={{ left: "12.5%", top: "26%", width: "24%" }}>
          <p className="font-display text-[clamp(1.1rem,4vw,2.25rem)] leading-none text-clay-dark">خاک</p>
          <span className="mt-[0.6em] block h-px w-[45%] bg-clay-dark/50" />
          <p
            dir="rtl"
            className="mt-[0.9em] text-right text-[clamp(0.55rem,1.35vw,0.9rem)] leading-[1.9] text-ink"
          >
            کارگاه کوچک سفالگری در دل شهر؛
            <br />
            هر ظرف با دست، برای میز شما.
          </p>

          <div className="mt-[1.1em] flex items-center gap-[0.6em]">
            
              href="#"
              aria-label="اینستاگرام"
              className="flex items-center justify-center rounded-full bg-sand/70 text-clay-dark transition-transform hover:scale-105"
              style={{ width: "2.6em", height: "2.6em" }}
            >
              <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            
              href="#"
              aria-label="تلگرام"
              className="flex items-center justify-center rounded-full bg-dust-light/80 text-dust-dark transition-transform hover:scale-105"
              style={{ width: "2.6em", height: "2.6em" }}
            >
              <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 4L3 11.5l6 2.2m12-9.7l-3.3 15.6-8.7-6.5m12-9.1L9 13.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            
              href="#"
              aria-label="خاک در شبکه‌های اجتماعی"
              className="flex items-center justify-center rounded-full bg-sage/40 text-ink transition-transform hover:scale-105"
              style={{ width: "2.6em", height: "2.6em" }}
            >
              <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21c0-6-4-8-4-13a4 4 0 0 1 8 0c0 5-4 7-4 13Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* nav columns */}
        {columns.map((col) => (
          <div key={col.title} className="absolute" style={{ left: col.left, top: "26%", width: "16%" }}>
            <h4 dir="rtl" className="text-right text-[clamp(0.6rem,1.5vw,1rem)] text-dust-dark">
              {col.title}
            </h4>
            <span className="mt-[0.5em] block h-px w-[35%] bg-dust-dark/40" />
            <ul className="mt-[0.9em] space-y-[0.85em]">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    dir="rtl"
                    className="flex items-center justify-end text-[clamp(0.5rem,1.25vw,0.85rem)] text-ink transition-colors hover:text-clay-dark"
                  >
                    {link.label}
                    <Bullet />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom bar overlay */}
      <div className="absolute inset-x-0 bottom-0" style={{ height: "22%" }}>
        <div className="flex h-full items-center justify-between px-[6%]">
          <div dir="rtl" className="flex items-center gap-[0.6em]">
            <span
              className="flex items-center justify-center rounded-full border border-clay-dark/60 text-clay-dark"
              style={{ width: "2em", height: "2em" }}
            >
              <svg viewBox="0 0 24 24" className="h-[0.55em] w-[0.55em]" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M9 4h6l1.2 3.2Q18 10 16 13q-1.6 2.4 0 5v2H8v-2q1.6-2.6 0-5Q6 10 7.8 7.2Z" />
              </svg>
            </span>
            <span className="text-[clamp(0.5rem,1.15vw,0.8rem)] text-ink">
              © ۱۴۰۴ خاک. تمامی حقوق محفوظ است.
            </span>
          </div>

          <div dir="rtl" className="flex items-center gap-[0.6em]">
            <a href="#" className="flex items-center gap-[0.4em] text-[clamp(0.5rem,1.15vw,0.8rem)] text-ink hover:text-clay-dark">
              <svg viewBox="0 0 24 24" className="h-[0.9em] w-[0.9em]" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              اینستاگرام
            </a>
            <span className="text-ink/50">•</span>
            <a href="#" className="flex items-center gap-[0.4em] text-[clamp(0.5rem,1.15vw,0.8rem)] text-ink hover:text-clay-dark">
              <svg viewBox="0 0 24 24" className="h-[0.9em] w-[0.9em]" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 4L3 11.5l6 2.2m12-9.7l-3.3 15.6-8.7-6.5m12-9.1L9 13.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              تلگرام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}