import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[680px]
        overflow-hidden
        bg-[#f5f1ea]
        lg:min-h-[760px]
      "
    >
      {/* تصویر Hero */}

      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="محصولات تاتریک"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            lg:object-[center]
          "
        />
      </div>

      {/* لایه روی تصویر */}

      <div className="hero-overlay absolute inset-0" />

      {/* محتوا */}

      <div
        className="
          container-main
          relative
          z-10
          flex
          min-h-[680px]
          items-center
          lg:min-h-[760px]
        "
      >
        <div
          className="
            max-w-[470px]
            pt-16
            text-right
          "
        >
          {/* عنوان کوچک */}

          <p
            className="
              mb-5
              text-[10px]
              font-medium
              tracking-[0.08em]
              text-[#c28784]
            "
          >
            دست‌ساز با عشق
          </p>

          {/* عنوان اصلی */}

          <h1
            className="
              text-[48px]
              font-light
              leading-[1.25]
              tracking-[-0.03em]
              text-[#526b79]
              sm:text-[58px]
              lg:text-[66px]
            "
          >
            جایی که خاک
            <br />
            به هنر تبدیل می‌شود.
          </h1>

          {/* توضیحات */}

          <p
            className="
              mt-6
              max-w-[390px]
              text-[13px]
              font-light
              leading-7
              text-[#68757b]
            "
          >
            هر قطعه با دست و با دقت ساخته می‌شود؛ برای لحظه‌های ساده و زیبای
            زندگی روزمره.
          </p>

          {/* دکمه */}

          <div className="mt-8">
            <a href="#shop" className="tatrik-button">
              مشاهده مجموعه
              <ArrowLeft size={15} strokeWidth={1.4} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
      >
        <span
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#788286]
          "
        >
          اسکرول کنید
        </span>

        <span
          className="
            h-8
            w-px
            bg-[#9ba3a5]
          "
        />
      </div>
    </section>
  );
}
