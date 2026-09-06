import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CartView from "@/components/CartView";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "سبد خرید | خاک",
};

export default function CartPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
        <h1 className="font-display text-3xl text-ink md:text-4xl">سبد خرید</h1>
        <div className="mt-10">
          <CartView />
        </div>
      </section>
      <Footer />
    </main>
  );
}
