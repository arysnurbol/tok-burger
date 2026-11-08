"use client";

import { useEffect, useRef } from "react";
import { brand, instagramPosts } from "@/content/site";
import { InstagramIcon } from "./icons";
import { Btn, SectionTitle } from "./ui";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/**
 * Official @tokburger_official posts via Instagram's own embed.
 * embed.js (~heavy) loads only when the section approaches the viewport.
 */
export function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        if (window.instgrm) return window.instgrm.Embeds.process();
        const s = document.createElement("script");
        s.src = "https://www.instagram.com/embed.js";
        s.async = true;
        document.body.appendChild(s);
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="experience" aria-labelledby="exp-title" className="bg-char py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle id="exp-title" className="max-w-[14ch]">
            Ас үйден тікелей
          </SectionTitle>
          <p className="max-w-md text-lg text-white/75">Бургерлер қалай жиналатынын, жаңа өнімдер мен филиалдағы атмосфераны біздің Instagram-нан көріңіз.</p>
        </div>

        <ul className="-mx-4 mt-12 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {instagramPosts.map((code) => {
            const url = `https://www.instagram.com/p/${code}/`;
            return (
              <li key={code} className="min-h-[420px] w-[82%] shrink-0 snap-center overflow-hidden rounded-3xl bg-white md:w-auto">
                <blockquote className="instagram-media !m-0 !min-w-0 !max-w-none !border-0 !shadow-none" data-instgrm-permalink={url} data-instgrm-version="14">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="instagram_click"
                    data-track-label={`post_${code}`}
                    className="grid min-h-[420px] place-items-center gap-3 bg-char-2 p-8 text-center font-semibold text-white"
                  >
                    <span className="grid place-items-center gap-3">
                      <InstagramIcon className="size-10 text-tok" />
                      Жазбаны Instagram-да көру
                    </span>
                  </a>
                </blockquote>
              </li>
            );
          })}
        </ul>

        <Btn href={brand.instagram.url} className="mt-10" data-track="instagram_click" data-track-label="experience">
          <InstagramIcon className="size-5" />
          @{brand.instagram.handle} — {brand.instagram.followers} оқырман
        </Btn>
      </div>
    </section>
  );
}
