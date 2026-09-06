"use client";

import { useState } from "react";
import { Menu, Search, ShoppingBag, User, X, ArrowLeft } from "lucide-react";

const navItems = [
  { title: "خانه", href: "#home" },
  { title: "فروشگاه", href: "#products" },
  { title: "درباره ما", href: "#about" },
  { title: "فرآیند ساخت", href: "#process" },
  { title: "تماس با ما", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-0 md:px-8 md:pt-5">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between rounded-[24px] border border-white/40 bg-[#F2ECE1]/75 px-4 shadow-[0_10px_40px_rgba(82,96,106,0.08)] backdrop-blur-xl md:px-6">
          {/* LOGO */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#52606A]/15 bg-[#F2ECE1]/70 transition-transform duration-300 group-hover:rotate-6">
              <span className="h-3 w-3 rounded-full bg-[#BD7E56]" />
              <span className="absolute h-7 w-7 rounded-full border border-[#BD7E56]/30" />
            </div>

            <div className="leading-none">
              <span className="block font-display text-xl font-bold tracking-wide text-[#52606A]">
                Tatrik
              </span>

              <span className="mt-1 block text-[9px] tracking-[0.28em] text-[#BD7E56]">
                CERAMIC STUDIO
              </span>
            </div>
          </a>

          {/* MENU */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className="group relative rounded-full px-4 py-2.5 text-[13px] text-[#52606A]/80 transition-all duration-300 hover:bg-white/50 hover:text-[#52606A]"
              >
                {item.title}

                <span
                  className={`absolute bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#BD7E56] transition-all duration-300 ${
                    index === 0 ? "w-4" : "w-0 group-hover:w-4"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <button
              aria-label="جستجو"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-[#52606A] transition-all duration-300 hover:bg-white/60 hover:text-[#BD7E56] sm:flex"
            >
              <Search size={18} strokeWidth={1.7} />
            </button>

            <button
              aria-label="حساب کاربری"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-[#52606A] transition-all duration-300 hover:bg-white/60 hover:text-[#BD7E56] sm:flex"
            >
              <User size={18} strokeWidth={1.7} />
            </button>

            <button
              aria-label="سبد خرید"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#52606A] text-[#F2ECE1] transition-all duration-300 hover:scale-105 hover:bg-[#BD7E56]"
            >
              <ShoppingBag size={17} strokeWidth={1.8} />

              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#BD7E56] px-1 text-[8px] text-white">
                0
              </span>
            </button>

            {/* MOBILE */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="باز کردن منو"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#52606A]/15 text-[#52606A] transition-all hover:bg-white/60 lg:hidden"
            >
              <Menu size={20} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F2ECE1]">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A7B7C3]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#BD7E56]/10 blur-3xl" />

          {/* TOP */}
          <div className="flex items-center justify-between px-6 py-6">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl font-bold text-[#52606A]"
            >
              Tatrik
            </a>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="بستن منو"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#52606A]/15"
            >
              <X size={20} />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <nav className="mt-12 px-8">
            {navItems.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between border-b border-[#52606A]/10 py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#BD7E56]">0{index + 1}</span>

                  <span className="font-display text-2xl text-[#52606A]">
                    {item.title}
                  </span>
                </div>

                <ArrowLeft
                  size={20}
                  className="text-[#52606A]/40 transition-transform duration-300 group-hover:-translate-x-2"
                />
              </a>
            ))}
          </nav>

          {/* BOTTOM */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-xs text-[#52606A]/50">
            <span>HANDMADE CERAMICS</span>
            <span>© TATRIK</span>
          </div>
        </div>
      )}
    </>
  );
}
