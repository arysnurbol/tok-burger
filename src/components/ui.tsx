import type { ComponentProps, ReactNode } from "react";
import { WhatsAppIcon } from "./icons";
import { orderUrl } from "@/lib/links";

const variants = {
  // white on orange — primary in orange sections
  light: "bg-white text-ink hover:bg-bun",
  // orange on dark — primary in dark sections
  tok: "bg-tok text-white hover:bg-[#ff7420]",
  ghost: "border-2 border-current hover:bg-white/10",
} as const;

type BtnProps = ComponentProps<"a"> & { variant?: keyof typeof variants; children: ReactNode };

export function Btn({ variant = "tok", className = "", children, ...rest }: BtnProps) {
  const external = rest.href?.startsWith("http");
  return (
    <a
      {...rest}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-bold transition-[transform,background-color] duration-150 active:scale-[0.97] ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function OrderBtn({ label, variant = "tok", className = "", text = "Тапсырыс беру" }: { label: string; variant?: keyof typeof variants; className?: string; text?: string }) {
  return (
    <Btn href={orderUrl} variant={variant} className={className} data-track="order_button_click" data-track-label={label}>
      <WhatsAppIcon className="size-5" />
      {text}
    </Btn>
  );
}

export function SectionTitle({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`font-display text-[clamp(2rem,5.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-balance ${className}`}>
      {children}
    </h2>
  );
}
