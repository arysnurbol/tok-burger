import { Phone } from "lucide-react";
import { brand } from "@/content/site";
import { telUrl } from "@/lib/links";
import { BoltBun, InstagramIcon } from "./icons";
import { Btn, OrderBtn } from "./ui";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-tok py-20 text-white sm:py-28">
      <BoltBun className="pointer-events-none absolute -right-24 -bottom-16 w-[34rem] max-w-none text-white/10" cut="transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="cta-title" className="font-display max-w-[13ch] text-[clamp(2.6rem,8vw,6rem)] font-black leading-[0.9] tracking-tight">
          Қарын ашты ма? Жазыңыз.
        </h2>
        <p className="mt-6 max-w-[40ch] text-lg text-white/90 sm:text-xl">
          WhatsApp-қа «тапсырыс бергім келеді» деп жіберіңіз — қалғанын өзіміз сұраймыз.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <OrderBtn label="final" variant="light" className="text-lg sm:px-8" text="WhatsApp-та тапсырыс беру" />
          <Btn href={telUrl()} variant="ghost" className="text-lg">
            <Phone className="size-5" aria-hidden="true" />
            {brand.order.phoneDisplay}
          </Btn>
          <Btn href={brand.instagram.url} variant="ghost" className="text-lg" data-track="instagram_click" data-track-label="final">
            <InstagramIcon className="size-5" />
            Instagram
          </Btn>
        </div>
      </div>
    </section>
  );
}
