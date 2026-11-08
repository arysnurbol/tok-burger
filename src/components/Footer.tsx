import { branches, brand, nav, VERIFIED_AT } from "@/content/site";
import { formatPhone, orderUrl, telUrl, twoGisFirmUrl } from "@/lib/links";
import { InstagramIcon, Logo, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-[#170d07] pb-28 pt-16 text-white/75 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <Logo className="text-tok" />
          <p className="mt-4 max-w-[30ch]">{brand.slogan} Алматыдағы бургерхана.</p>
          <div className="mt-6 flex gap-3">
            <a href={brand.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-track="instagram_click" data-track-label="footer" className="grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-tok">
              <InstagramIcon className="size-5" />
            </a>
            <a href={orderUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-track-label="footer" className="grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-tok">
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Төменгі">
          <h2 className="font-bold text-white">Бөлімдер</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">{n.label}</a>
              </li>
            ))}
            <li>
              <a href={telUrl()} className="hover:text-white">{formatPhone(brand.order.phone)}</a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-bold text-white">Филиалдар</h2>
          <ul className="mt-4 space-y-2">
            {branches.map((b) => (
              <li key={b.id}>
                <a href={twoGisFirmUrl(b)} target="_blank" rel="noopener noreferrer" data-track="map_click" data-track-label={`footer_${b.name}`} className="hover:text-white">
                  {b.address}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-white/10 px-4 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between sm:px-6">
        <p>© 2026 {brand.name}</p>
        <p>Мекенжай, жұмыс уақыты мен рейтинг 2GIS дерегі бойынша, {VERIFIED_AT}</p>
      </div>
    </footer>
  );
}
