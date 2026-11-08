import Image from "next/image";
import { Star } from "lucide-react";
import { branches, brand } from "@/content/site";
import { BoltBun } from "./icons";
import { OpenNow } from "./OpenNow";
import { Btn, OrderBtn } from "./ui";

const top = branches.find((b) => b.rating && b.rating.count > 1000 && b.rating.value >= 4.8);

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-tok text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 md:min-h-[min(calc(100svh-4rem),56rem)] md:grid-cols-[1.15fr_1fr] md:py-16">
        <div>
          <h1 id="hero-title" className="hero-enter">
            <span className="block text-base font-bold sm:text-lg">ТОҚ BURGER — Алматыдағы бургерхана</span>
            <span className="font-display mt-3 block text-[clamp(3.2rem,11vw,8.5rem)] font-black leading-[0.86] tracking-[-0.03em]">
              Дәммен
              <br />
              қуаттан!
            </span>
          </h1>

          <p className="hero-enter-late mt-6 max-w-[34ch] text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
            Шырынды бургер, картоп фри және наггетс. Бес филиал, күн сайын таңғы 05:00-ге дейін. Тапсырысты WhatsApp-қа бір хабарламамен жіберіңіз.
          </p>

          <div className="hero-enter-late mt-8 flex flex-col gap-3 sm:flex-row">
            <OrderBtn label="hero" variant="light" className="text-lg sm:px-8" />
            <Btn href="#menu" variant="ghost" className="text-lg">
              Мәзірді көру
            </Btn>
          </div>

          <dl className="hero-enter-late mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
            {top?.rating && (
              <div className="flex items-center gap-2">
                <dt className="sr-only">2GIS рейтингі</dt>
                <Star className="size-4 fill-white" aria-hidden="true" />
                <dd>
                  {top.rating.value} 2GIS-те · {top.rating.count.toLocaleString("ru-RU")} баға ({top.name})
                </dd>
              </div>
            )}
            <div>
              <dt className="sr-only">Жұмыс уақыты</dt>
              <dd>
                <OpenNow hours={branches.map((b) => b.hours)} />
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          {brand.heroImage ? (
            <Image
              src={brand.heroImage}
              alt="ТОҚ BURGER бургері"
              width={900}
              height={900}
              priority
              sizes="(min-width: 768px) 45vw, 90vw"
              className="hero-mark aspect-square w-full rounded-[2.5rem] object-cover"
            />
          ) : (
            <BoltBun className="hero-mark w-full text-white drop-shadow-[0_24px_0_rgb(0_0_0/0.12)]" />
          )}
        </div>
      </div>
    </section>
  );
}
