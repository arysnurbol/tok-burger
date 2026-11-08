"use client";

import { useEffect } from "react";
import { track, type TrackEvent } from "@/lib/analytics";

/**
 * One delegated listener instead of per-button handlers.
 * Any element with data-track="event_name" (and optional data-track-label) is tracked.
 * WhatsApp and phone links also emit whatsapp_click / phone_click automatically.
 */
export function AnalyticsListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track], a[href]");
      if (!el) return;
      const label = el.dataset.trackLabel;
      const event = el.dataset.track as TrackEvent | undefined;
      if (event) track(event, { label });

      const href = el.getAttribute("href") ?? "";
      if (event !== "whatsapp_click" && href.startsWith("https://wa.me/")) track("whatsapp_click", { label });
      if (event !== "phone_click" && href.startsWith("tel:")) track("phone_click", { label });
    };
    document.addEventListener("click", onClick);

    const menu = document.getElementById("menu");
    const io =
      menu &&
      new IntersectionObserver(
        (entries) => {
          if (entries.some((x) => x.isIntersecting)) {
            track("menu_view");
            io?.disconnect();
          }
        },
        { threshold: 0.3 },
      );
    if (menu && io) io.observe(menu);

    return () => {
      document.removeEventListener("click", onClick);
      io?.disconnect();
    };
  }, []);

  return null;
}
