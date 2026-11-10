import Link from "next/link";
import { appConfig } from "@/app.config";

const highlights = [
  {
    emoji: "➕",
    title: "Entradas e saídas",
    description: "Registre cada valor que entra ou sai em segundos.",
  },
  {
    emoji: "🏷️",
    title: "Tags",
    description: "Separe seus gastos por categoria do seu jeito.",
  },
  {
    emoji: "📊",
    title: "Gráficos",
    description: "Veja para onde vai seu dinheiro em um painel visual.",
  },
];

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-20 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">
        {appConfig.description} Controle suas finanças sem planilhas: anote o
        que entra e o que sai, organize por tags e acompanhe tudo em gráficos.
      </p>
      <div className="grid w-full gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-1 rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
          >
            <span className="text-2xl" aria-hidden>
              {item.emoji}
            </span>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-black/60">{item.description}</p>
          </div>
        ))}
      </div>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Quero acesso antecipado →
      </Link>
    </section>
  );
}
