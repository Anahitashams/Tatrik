"use client";

import { ArrowUp } from "lucide-react";

const footerLinks = [
  { title: "خانه", href: "/" },
  { title: "فروشگاه", href: "/shop" },
  { title: "درباره ما", href: "/about" },
  { title: "فرآیند ساخت", href: "/process" },
  { title: "تماس با ما", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#526b79] text-[#f5f1ea]">
      <div className="container-main py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-4xl font-semibold tracking-[-0.04em]">
                Tatrik
              </span>

              <span className="mt-1 text-[8px] tracking-[0.35em] opacity-70">
                TATRIK
              </span>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-8 text-white/70">
              طراحی شده برای کسانی که زیبایی را در جزئیات می‌بینند.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 text-sm font-medium">دسترسی سریع</h3>

            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="w-fit text-sm text-white/65 transition hover:text-[#d9a09d]"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-sm font-medium">با ما همراه باشید</h3>

            <p className="mb-5 text-sm leading-7 text-white/65">
              برای دیدن جدیدترین محصولات و پشت صحنه ساخت با ما همراه شوید.
            </p>

            <a
              href="#"
              className="flex w-fit items-center gap-3 text-sm text-white/80 transition hover:text-[#d9a09d]"
            >
              {/* Instagram SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />

                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row">
          <span>© 2026 Tatrik. All rights reserved.</span>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 transition hover:text-white"
          >
            بازگشت به بالا
            <ArrowUp size={14} strokeWidth={1.2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
