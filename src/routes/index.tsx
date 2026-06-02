import { createFileRoute } from "@tanstack/react-router";
import iconAsset from "@/assets/icone-nero.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nero Consulting — Delivering Value" },
      {
        name: "description",
        content:
          "Consultoria boutique em estratégia, transformação, governança e execução. Evoluindo para entregar ainda mais valor.",
      },
      { property: "og:title", content: "Nero Consulting — Delivering Value" },
      {
        property: "og:description",
        content:
          "Consultoria boutique em estratégia, transformação e execução. Evoluindo para entregar ainda mais valor.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "icon", href: iconAsset.url }],
  }),
  component: Index,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.967-.269-.099-.467-.149-.662.149-.197.297-.766.967-.938 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.389-1.476-.883-.789-1.48-1.762-1.653-2.059-.173-.298-.018-.458.13-.607.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.662-1.594-.907-2.182-.237-.569-.478-.49-.662-.499-.173-.008-.371-.01-.57-.01-.198 0-.521.075-.795.372-.272.298-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.486.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.759-.721 2.007-1.413.249-.693.249-1.284.174-1.414-.075-.129-.272-.198-.57-.347m-5.421 7.403h-.004a9.868 9.868 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.864 9.864 0 01-1.51-5.26 9.864 9.864 0 0110.15-9.56c2.62.005 5.08 1.027 6.926 2.88a9.84 9.84 0 012.874 6.924c-.005 5.43-4.418 9.835-9.838 9.84m8.406-18.24A11.838 11.838 0 0012.1 0C5.448.005.005 5.446 0 12.1c.005 2.13.562 4.21 1.616 6.04l-1.716 6.27 6.4-1.68a11.9 11.9 0 005.68 1.45h.005c6.555 0 11.9-5.34 11.905-11.898a11.8 11.8 0 00-3.484-8.406z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.003]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Soft orange glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 -right-40 h-[600px] w-[600px] rounded-full blur-[140px] opacity-[0.08]"
        style={{ background: "var(--primary)" }}
      />

      <header className="relative z-10 px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-4 md:pb-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={iconAsset.url} alt="" className="h-11 md:h-12 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl md:text-2xl tracking-tight">
                <span className="text-foreground">nero</span>
                <span className="text-primary">consulting</span>
              </span>
              <span className="mt-1.5 text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                Delivering Value
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            <span>São Paulo · Brasil</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-primary font-medium">
              STRATEGY • TRANSFORMATION • EXECUTION
            </span>
          </div>

          <h1 className="font-serif text-[2.5rem] leading-[1.05] md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight text-foreground">
            Evoluindo para
            <br />
            entregar <span className="italic text-primary">ainda mais</span>
            <br />
            valor.
          </h1>

          <div className="mt-16 md:mt-24 max-w-xl space-y-6 text-[15px] md:text-[17px] leading-[1.75] text-muted-foreground">
            <p>
              Estamos evoluindo nossa presença digital para refletir com mais
              precisão quem somos, como trabalhamos e o valor que entregamos
              aos nossos clientes.
            </p>
            <p>
              Enquanto isso, seguimos disponíveis para conversas estratégicas,
              projetos e oportunidades de colaboração.
            </p>
          </div>

          <div className="mt-14 md:mt-20">
            <a
              href="https://wa.me/5511971846376"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-card text-foreground border border-border/60 px-8 py-4 text-sm font-medium tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </main>

      <footer className="relative z-10 px-6 md:px-12 lg:px-20 py-10 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="tracking-wide">
            © {new Date().getFullYear()} Nero Consulting. Delivering Value.
          </div>
          <div className="tracking-[0.2em] uppercase text-[10px]">
            Nero Consulting — Strategy • Transformation • Execution
          </div>
        </div>
      </footer>
    </div>
  );
}
