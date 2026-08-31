"use client";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";

import { useState } from "react";

const navigation = [
  {
    title: "خانه",
    href: "#home",
  },
  {
    title: "فروشگاه",
    href: "#shop",
  },
  {
    title: "درباره ما",
    href: "#about",
  },
  {
    title: "فرآیند ساخت",
    href: "#process",
  },
  {
    title: "تماس با ما",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-main">
        <div className="flex h-22.5 items-center justify-between">
          {/* لوگو */}

          <a href="#home" className="group flex flex-col items-center">
            <span
              className="
                font-serif
                text-[31px]
                font-semibold
                leading-none
                tracking-[-0.04em]
                text-[#526b79]
              "
            >
              Tatrik
            </span>

            <span
              className="
                mt-1
                text-[7px]
                font-medium
                tracking-[0.25em]
                text-[#7b8589]
              "
            >
              TATRIK
            </span>
          </a>

          {/* منوی دسکتاپ */}

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="
                  text-[11px]
                  font-medium
                  text-[#657279]
                  transition-colors
                  duration-200
                  hover:text-[#c98785]
                "
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* آیکون‌ها */}

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="جستجو"
              className="
                hidden
                rounded-full
                p-2
                text-[#64737a]
                transition
                hover:bg-white/50
                md:block
              "
            >
              <Search size={18} strokeWidth={1.2} />
            </button>

            <button
              type="button"
              aria-label="حساب کاربری"
              className="
                rounded-full
                p-2
                text-[#64737a]
                transition
                hover:bg-white/50
              "
            >
              <User size={18} strokeWidth={1.2} />
            </button>

            <button
              type="button"
              aria-label="سبد خرید"
              className="
                rounded-full
                p-2
                text-[#64737a]
                transition
                hover:bg-white/50
              "
            >
              <ShoppingBag size={18} strokeWidth={1.2} />
            </button>

            <button
              type="button"
              aria-label="باز کردن منو"
              onClick={() => setMenuOpen(true)}
              className="
                rounded-full
                p-2
                text-[#64737a]
                md:hidden
              "
            >
              <Menu size={21} strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل */}

      {menuOpen && (
        <div className="fixed inset-0 z-100 bg-[#f5f1ea]">
          <div className="container-main">
            <div className="flex h-22.5 items-center justify-between">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-[30px] font-semibold text-[#526b79]">
                  تاتریک
                </span>

                <span className="text-[7px] tracking-[0.25em] text-[#7b8589]">
                  TATRIK
                </span>
              </a>

              <button
                type="button"
                aria-label="بستن منو"
                onClick={() => setMenuOpen(false)}
                className="p-2 text-[#526b79]"
              >
                <X size={25} strokeWidth={1.2} />
              </button>
            </div>

            <nav className="mt-20 flex flex-col items-start gap-7">
              {navigation.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    text-3xl
                    font-light
                    text-[#526b79]
                    transition-colors
                    hover:text-[#c98785]
                  "
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
