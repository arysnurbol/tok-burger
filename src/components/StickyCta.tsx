import { Phone } from "lucide-react";
import { brand } from "@/content/site";
import { telUrl } from "@/lib/links";
import { OrderBtn } from "./ui";

/** Mobile-only bottom bar so ordering is always one tap away. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-white/10 bg-char/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <OrderBtn label="sticky_mobile" className="flex-1" />
      <a
        href={telUrl()}
        aria-label={`Қоңырау шалу: ${brand.order.phoneDisplay}`}
        data-track-label="sticky_mobile"
        className="grid size-12 place-items-center rounded-full border-2 border-white/30 text-white"
      >
        <Phone className="size-5" aria-hidden="true" />
      </a>
    </div>
  );
}
