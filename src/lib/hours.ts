import type { Branch } from "@/content/site";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** Current minutes since midnight in Almaty. Call on the client only. */
export function almatyMinutesNow(): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Almaty",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  return get("hour") * 60 + get("minute");
}

export function isOpen(hours: Branch["hours"], now: number): boolean {
  if (hours === "24/7") return true;
  const open = toMinutes(hours.open);
  const close = toMinutes(hours.close);
  return close > open ? now >= open && now < close : now >= open || now < close;
}
