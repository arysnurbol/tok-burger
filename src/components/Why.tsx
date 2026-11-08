import { branches, brand } from "@/content/site";
import { SectionTitle } from "./ui";

const top = branches.find((b) => b.id === "70000001112616942");
const restaurants = branches.filter((b) => b.kind === "restaurant");

const facts = [
  top?.rating && {
    big: String(top.rating.value),
    title: "2GIS-те жоғары баға",
    text: `${top.name} филиалын ${top.rating.count.toLocaleString("ru-RU")} адам бағалады. Пікірлерде жиі айтылатыны — шырынды бургер мен сыпайы қызмет.`,
  },
  {
    big: "05:00",
    title: "Түнде де ашықпыз",
    text: "Филиалдар күн сайын таңғы 05:00-ге дейін жұмыс істейді, Жароковтағы жеткізу нүктесі — тәулік бойы.",
  },
  {
    big: String(branches.length),
    title: "Қаланың әр аймағында",
    text: `${restaurants.map((b) => b.name).join(", ")} және жеткізу нүктесі. Ең жақынын төменнен табыңыз.`,
  },
  {
    big: brand.instagram.followers,
    title: "Instagram-дағы қауым",
    text: "Жаңа өнімдер мен жаңалықтарды бірінші болып @tokburger_official парақшасында көресіз.",
  },
].filter(Boolean) as { big: string; title: string; text: string }[];

export function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="bg-bun py-20 text-ink sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle id="why-title">Неге ТОҚ?</SectionTitle>
          <p className="mt-6 max-w-[38ch] text-lg text-ink/75">
            Ұран емес, сандар. Бұл деректердің бәрі 2GIS пен Instagram-дағы ашық ақпараттан алынды.
          </p>
        </div>
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {facts.map((f) => (
            <li key={f.title} className="reveal border-t-4 border-ink pt-5">
              <p className="font-display text-[clamp(3rem,7vw,4.75rem)] font-black leading-none tracking-tight text-tok" aria-hidden="true">
                {f.big}
              </p>
              <h3 className="mt-4 text-xl font-extrabold">{f.title}</h3>
              <p className="mt-2 max-w-[40ch] text-ink/75">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
