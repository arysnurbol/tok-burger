import Image from "next/image";
import { offers } from "@/content/site";
import { whatsappUrl } from "@/lib/links";
import { WhatsAppIcon } from "./icons";
import { Btn, SectionTitle } from "./ui";

/** Renders only when verified offers exist in content/site.ts. */
export function Offers() {
  if (offers.length === 0) return null;
  return (
    <section id="offers" aria-labelledby="offers-title" className="bg-tok py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle id="offers-title">Арнайы ұсыныстар</SectionTitle>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {offers.map((o) => (
            <li key={o.title} className="reveal flex flex-col overflow-hidden rounded-[2rem] bg-char">
              {o.image && (
                <div className="relative aspect-[16/10]">
                  <Image src={o.image} alt={o.title} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-7">
                <h3 className="font-display text-2xl font-extrabold">{o.title}</h3>
                <p className="text-white/80">{o.text}</p>
                {o.validUntil && <p className="text-sm font-bold text-cheese">{o.validUntil} дейін</p>}
                <Btn href={whatsappUrl(o.ask)} className="mt-auto self-start" data-track="order_button_click" data-track-label={`offer: ${o.title}`}>
                  <WhatsAppIcon className="size-5" />
                  Ұсынысты алу
                </Btn>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
