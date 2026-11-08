import Image from "next/image";
import { brand, menu, type MenuItem } from "@/content/site";
import { whatsappUrl } from "@/lib/links";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { Btn, SectionTitle } from "./ui";

const fmt = (n: number) => `${n.toLocaleString("ru-RU")} ₸`;

function ProductCard({ item, category }: { item: MenuItem; category: string }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-3xl bg-char-2">
      {item.image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h4 className="font-display text-xl font-extrabold text-white">{item.name}</h4>
        {item.description && <p className="text-white/70">{item.description}</p>}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          {item.price ? <span className="font-display text-xl font-bold text-cheese">{fmt(item.price)}</span> : <span />}
          <Btn
            href={whatsappUrl(`TOK BURGER тапсырыс бергім келеді🙌\n${item.name}`)}
            className="!min-h-11 text-sm"
            data-track="product_click"
            data-track-label={`${category}: ${item.name}`}
          >
            Тапсырыс беру
          </Btn>
        </div>
      </div>
    </li>
  );
}

export function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-char py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle id="menu-title" className="max-w-[12ch]">
            Не жегіңіз келеді?
          </SectionTitle>
          <p className="max-w-md text-lg text-white/75">
            Толық мәзір мен бағалар {brand.instagram.menuHighlightNote}нде. Санатты таңдаңыз да, WhatsApp-та сұраңыз — бірден жауап береміз.
          </p>
        </div>

        <ul className="mt-14 divide-y divide-white/15 border-y border-white/15">
          {menu.map((c) => (
            <li key={c.id} className="reveal py-8 sm:py-10">
              <div className="grid items-center gap-5 md:grid-cols-[1fr_1.1fr_auto] md:gap-10">
                <h3 className="font-display text-[clamp(2rem,6vw,3.75rem)] font-black leading-none text-tok">{c.title}</h3>
                <p className="max-w-[46ch] text-white/80">{c.lead}</p>
                <Btn
                  href={whatsappUrl(c.ask)}
                  variant="ghost"
                  className="justify-self-start text-white md:justify-self-end"
                  data-track="product_click"
                  data-track-label={c.id}
                >
                  <WhatsAppIcon className="size-5" />
                  Бағасын сұрау
                </Btn>
              </div>
              {c.items.length > 0 && (
                <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {c.items.map((i) => (
                    <ProductCard key={i.name} item={i} category={c.id} />
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Btn href={brand.instagram.url} variant="tok" className="mt-10" data-track="instagram_click" data-track-label="menu_highlight">
          <InstagramIcon className="size-5" />
          Instagram-дағы мәзірді ашу
        </Btn>
      </div>
    </section>
  );
}
