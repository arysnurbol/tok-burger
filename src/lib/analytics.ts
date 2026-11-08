/**
 * Conversion events. Sent to GA4 (gtag) when NEXT_PUBLIC_GA_ID is set,
 * and always pushed to window.dataLayer so Google Tag Manager can pick them up.
 */
export type TrackEvent =
  | "order_button_click"
  | "menu_view"
  | "product_click"
  | "whatsapp_click"
  | "phone_click"
  | "instagram_click"
  | "map_click";

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: TrackEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
  if (process.env.NODE_ENV !== "production") console.debug("[track]", event, params);
}
