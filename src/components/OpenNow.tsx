"use client";

import { useSyncExternalStore } from "react";
import type { Branch } from "@/content/site";
import { almatyMinutesNow, isOpen } from "@/lib/hours";

const subscribe = (cb: () => void) => {
  const t = setInterval(cb, 60_000);
  return () => clearInterval(t);
};

/** Live "open now" status in Almaty time. Renders nothing on the server to avoid hydration mismatch. */
export function OpenNow({ hours, className = "" }: { hours: Branch["hours"] | Branch["hours"][]; className?: string }) {
  const minutes = useSyncExternalStore(subscribe, almatyMinutesNow, () => null);
  if (minutes === null) return null;
  const list = Array.isArray(hours) ? hours : [hours];
  const open = list.some((h) => isOpen(h, minutes));
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`size-2.5 rounded-full ${open ? "bg-[#3ddc84]" : "bg-white/50"}`} aria-hidden="true" />
      {open ? "Қазір ашық" : "Қазір жабық"}
    </span>
  );
}
