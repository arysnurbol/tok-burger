import { Clock, MapPin, Navigation, Phone, Star } from "lucide-react";
import { branches } from "@/content/site";
import { formatPhone, routeUrl, telUrl, twoGisFirmUrl, whatsappUrl } from "@/lib/links";
import { WhatsAppIcon } from "./icons";
import { OpenNow } from "./OpenNow";
import { SectionTitle } from "./ui";

const chip =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-semibold transition-colors hover:border-tok hover:bg-tok";

export function Branches() {
  return (
    <section id="branches" aria-labelledby="branches-title" className="bg-char py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle id="branches-title" className="max-w-[16ch]">
          Алматыдағы филиалдар
        </SectionTitle>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <li key={b.id} className="flex flex-col gap-5 rounded-[2rem] bg-char-2 p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-extrabold">{b.name}</h3>
                {b.rating && (
                  <span className="flex shrink-0 items-center gap-1 text-sm font-bold">
                    <Star className="size-4 fill-cheese text-cheese" aria-hidden="true" />
                    {b.rating.value}
                    <span className="sr-only">2GIS рейтингі, {b.rating.count} баға</span>
                  </span>
                )}
              </div>

              <address className="flex gap-3 not-italic text-white/85">
                <MapPin className="mt-0.5 size-5 shrink-0 text-tok" aria-hidden="true" />
                <span>
                  {b.address}
                  <span className="block text-sm text-white/55">
                    {b.district}
                    {b.note && `, ${b.note}`}
                  </span>
                </span>
              </address>

              <p className="flex gap-3 text-white/85">
                <Clock className="mt-0.5 size-5 shrink-0 text-tok" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  {b.hoursLabel}
                  <OpenNow hours={b.hours} className="text-sm text-white/70" />
                </span>
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                <a href={routeUrl(b)} target="_blank" rel="noopener noreferrer" className={chip} data-track="map_click" data-track-label={`route_${b.name}`}>
                  <Navigation className="size-4" aria-hidden="true" />
                  Маршрут
                </a>
                <a href={twoGisFirmUrl(b)} target="_blank" rel="noopener noreferrer" className={chip} data-track="map_click" data-track-label={`2gis_${b.name}`}>
                  2GIS
                </a>
                {b.whatsapp && (
                  <a href={whatsappUrl(undefined, b.whatsapp)} target="_blank" rel="noopener noreferrer" className={chip} data-track-label={`branch_${b.name}`}>
                    <WhatsAppIcon className="size-4" />
                    WhatsApp
                  </a>
                )}
                {b.phone && (
                  <a href={telUrl(b.phone)} className={chip} data-track-label={`branch_${b.name}`} aria-label={`Қоңырау шалу: ${formatPhone(b.phone)}`}>
                    <Phone className="size-4" aria-hidden="true" />
                    {formatPhone(b.phone)}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
