/**
 * ТОҚ BURGER — single source of truth for all business data on the site.
 *
 * Every value below was verified on 2026-11-08 from:
 *   - Instagram: https://www.instagram.com/tokburger_official/ (bio, link in bio)
 *   - 2GIS: https://2gis.kz/almaty/branches/70000001112616941 (branches, hours, phones, ratings, reviews)
 *
 * NOT VERIFIED (left empty on purpose — do not invent):
 *   - menu items, prices, ingredients  → fill `menu[].items`
 *   - promotions / combo offers         → fill `offers`
 *   - official food photography          → add files to /public/images and set `image`
 * Empty lists hide their UI automatically, so the page never shows placeholder text.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tokburger.kz").replace(/\/$/, "");
export const VERIFIED_AT = "2026-11-08";

export const brand = {
  name: "ТОҚ BURGER",
  latinName: "TOK burger",
  slogan: "Дәммен қуаттан!", // Instagram bio
  city: "Алматы",
  instagram: {
    handle: "tokburger_official",
    url: "https://www.instagram.com/tokburger_official/",
    followers: "76.7K",
    menuHighlightNote: "Instagram профиліндегі «Меню» бөлімі",
  },
  twoGisUrl: "https://2gis.kz/almaty/branches/70000001112616941",
  /** Official ordering channel: Instagram bio link share.kz/wa3oq → this WhatsApp number + text. */
  order: {
    whatsapp: "77083659941",
    message: "TOK BURGER тапсырыс бергім келеді🙌",
    phone: "+77083659941",
    phoneDisplay: "+7 708 365 99 41",
  },
  /** Optional: path in /public to an official hero photo, e.g. "/images/hero-burger.jpg". */
  heroImage: null as string | null,
  /** Assortment tags shown on 2GIS search cards. */
  assortment: ["Бургерлер", "Картоп фри", "Наггетстер"],
} as const;

export type Branch = {
  id: string; // 2GIS firm id
  name: string;
  address: string;
  district: string;
  note?: string;
  kind: "restaurant" | "delivery";
  /** Opening hours in Almaty time; close < open means it closes after midnight. */
  hours: { open: string; close: string } | "24/7";
  hoursLabel: string;
  phone?: string;
  whatsapp?: string;
  lat: number;
  lon: number;
  rating?: { value: number; count: number };
};

export const branches: Branch[] = [
  {
    id: "70000001112616942",
    name: "Самал-3",
    address: "Самал-3 ш/а, 4д",
    district: "Медеу ауданы",
    kind: "restaurant",
    hours: { open: "07:00", close: "05:00" },
    hoursLabel: "Күн сайын 07:00–05:00",
    phone: "+77083659941",
    whatsapp: "77083659941",
    lat: 43.228069,
    lon: 76.960213,
    rating: { value: 4.8, count: 4244 },
  },
  {
    id: "70000001114696696",
    name: "Радостовец",
    address: "Радостовец көшесі, 293/5",
    district: "Бостандық ауданы",
    note: "1-қабат",
    kind: "restaurant",
    hours: { open: "08:00", close: "05:00" },
    hoursLabel: "Күн сайын 08:00–05:00",
    phone: "+77083659932",
    whatsapp: "77083659932",
    lat: 43.206991,
    lon: 76.896668,
    rating: { value: 4.7, count: 2254 },
  },
  {
    id: "70000001118884671",
    name: "Төле би",
    address: "Төле би көшесі, 233/2",
    district: "Алмалы ауданы, Тастақ-3",
    kind: "restaurant",
    hours: { open: "07:00", close: "05:00" },
    hoursLabel: "Күн сайын 07:00–05:00",
    whatsapp: "77005492805",
    lat: 43.250623,
    lon: 76.879649,
    rating: { value: 4.5, count: 49 },
  },
  {
    id: "70000001119068908",
    name: "Aport Mall",
    address: "Ташкент тас жолы, 17к, Aport Mall",
    district: "Қарасай ауданы",
    kind: "restaurant",
    hours: { open: "07:00", close: "05:00" },
    hoursLabel: "Күн сайын 07:00–05:00",
    lat: 43.234022,
    lon: 76.777343,
    rating: { value: 4.3, count: 17 },
  },
  {
    id: "70000001116113689",
    name: "Жароков (жеткізу)",
    address: "Жароков көшесі, 289а",
    district: "Бостандық ауданы",
    note: "2-қабат, 2-кабинет, тек жеткізу",
    kind: "delivery",
    hours: "24/7",
    hoursLabel: "Тәулік бойы",
    whatsapp: "77085184941",
    lat: 43.211785,
    lon: 76.902073,
    rating: { value: 4.7, count: 101 },
  },
];

/** Verbatim excerpts of public 2GIS reviews. 2GIS does not expose per-review stars/dates in text, so none are shown. */
export const reviews = [
  {
    author: "Zhanna Amanova",
    branch: "Радостовец",
    text: "Очень вкусные и сочные бургеры, свежие ингредиенты и быстрое обслуживание. Обязательно приду ещё!",
    url: "https://2gis.kz/almaty/firm/70000001114696696/tab/reviews",
  },
  {
    author: "Zukhra Manirova",
    branch: "Жеткізу",
    text: "Очень понравилась доставка! Бургер сочный, булочка мягкая, ингредиенты свежие. Курьер вежливый…",
    url: "https://2gis.kz/almaty/firm/70000001116113689/tab/reviews",
  },
  {
    author: "Dancho Bay",
    branch: "Самал-3",
    text: "Ток бургер топ!!! Нурсулу, девушка на кассе очень вежливо обслуживает клиентов👌🏻",
    url: "https://2gis.kz/almaty/firm/70000001112616942/tab/reviews",
  },
  {
    author: "Ramazan Daurenuly",
    branch: "Самал-3",
    text: "Очень вежливые сотрудники Нурсулу и Аружан мастера своего дела 👍",
    url: "https://2gis.kz/almaty/firm/70000001112616942/tab/reviews",
  },
];

export type MenuItem = {
  name: string;
  description?: string; // only verified ingredients
  price?: number; // tenge, only verified prices
  image?: string; // path in /public, official photo only
};

export type MenuCategory = {
  id: string;
  title: string;
  lead: string;
  ask: string; // prefilled WhatsApp question
  items: MenuItem[];
};

/**
 * Categories: only those confirmed by 2GIS assortment tags.
 * To add chicken burgers, combos or drinks — append a category here once verified.
 * Example item: { name: "…", description: "…", price: 2990, image: "/images/menu/…jpg" }
 */
export const menu: MenuCategory[] = [
  {
    id: "burgers",
    title: "Бургерлер",
    lead: "Басты өніміміз. Шырынды котлет пен жұмсақ тоқашты қонақтар 2GIS пікірлерінде жиі атайды.",
    ask: "Сәлеметсіз бе! Бургерлер мәзірі мен бағаларын жібересіз бе?",
    items: [],
  },
  {
    id: "fries",
    title: "Картоп фри",
    lead: "Бургерге жұп. Порция мен бағасын WhatsApp-та бірден айтамыз.",
    ask: "Сәлеметсіз бе! Картоп фри бағасы қанша?",
    items: [],
  },
  {
    id: "nuggets",
    title: "Наггетстер",
    lead: "Тез тіске басатын тағам — компанияға да, жолға да ыңғайлы.",
    ask: "Сәлеметсіз бе! Наггетстер бар ма, бағасы қанша?",
    items: [],
  },
];

/** Verified promotions only. Empty → the offers section is not rendered. */
export const offers: {
  title: string;
  text: string;
  validUntil?: string;
  image?: string;
  ask: string;
}[] = [];

/** Official posts by @tokburger_official, embedded via Instagram's own embed. */
export const instagramPosts = ["DfR4OL6NMOJ", "De1XbywNvwX", "Deoz2fQtEHR"];

export const nav = [
  { href: "#menu", label: "Мәзір" },
  { href: "#why", label: "Неге ТОҚ" },
  { href: "#reviews", label: "Пікірлер" },
  { href: "#branches", label: "Филиалдар" },
];
