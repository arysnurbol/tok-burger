import { brand, type Branch } from "@/content/site";

export const whatsappUrl = (text: string = brand.order.message, phone: string = brand.order.whatsapp) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export const orderUrl = whatsappUrl();

export const telUrl = (phone: string = brand.order.phone) => `tel:${phone}`;

export const formatPhone = (phone: string) =>
  phone.replace(/^\+?7(\d{3})(\d{3})(\d{2})(\d{2})$/, "+7 $1 $2 $3 $4");

export const twoGisFirmUrl = (b: Branch) => `https://2gis.kz/almaty/firm/${b.id}`;

export const routeUrl = (b: Branch) =>
  `https://2gis.kz/almaty/directions/points/%7C${b.lon}%2C${b.lat}%3B${b.id}`;
