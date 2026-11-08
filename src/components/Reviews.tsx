import { Star } from "lucide-react";
import { branches, brand, reviews } from "@/content/site";
import { Btn, SectionTitle } from "./ui";

const rated = branches.filter((b) => b.rating).sort((a, b) => b.rating!.count - a.rating!.count);

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-bun py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionTitle id="reviews-title">Қонақтар не дейді</SectionTitle>
          <ul className="flex flex-wrap gap-3" aria-label="Филиалдардың 2GIS рейтингі">
            {rated.slice(0, 3).map((b) => (
              <li key={b.id} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold">
                <Star className="size-4 fill-tok text-tok" aria-hidden="true" />
                <span>
                  {b.rating!.value} <span className="font-normal text-ink/60">{b.name}, {b.rating!.count.toLocaleString("ru-RU")} баға</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <li key={r.author} className={`reveal rounded-[2rem] p-7 sm:p-9 ${i % 3 === 0 ? "bg-tok text-white" : "bg-white"}`}>
              <figure className="flex h-full flex-col gap-6">
                <blockquote lang="ru" className="text-xl font-semibold leading-snug sm:text-2xl">
                  «{r.text}»
                </blockquote>
                <figcaption className={`mt-auto text-sm ${i % 3 === 0 ? "text-white/85" : "text-ink/60"}`}>
                  <span className="font-bold">{r.author}</span>, {r.branch} филиалы,{" "}
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    2GIS пікірі
                  </a>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <Btn href={brand.twoGisUrl} variant="ghost" className="mt-10 text-ink" data-track="map_click" data-track-label="reviews_all">
          Барлық пікірлер 2GIS-те
        </Btn>
      </div>
    </section>
  );
}
