import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-nero.png.asset.json";
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
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

      <header className="relative z-10 px-6 md:px-12 lg:px-20 py-8 md:py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img
            src={logoAsset.url}
            alt="Nero Consulting"
            className="h-9 md:h-11 w-auto"
          />
          <div className="hidden md:flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            <span>São Paulo · Brasil</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-primary font-medium">
                Strategy · Transformation · Execution
              </span>
            </div>

            <h1 className="font-serif text-[2.5rem] leading-[1.05] md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight text-foreground">
              Evoluindo para
              <br />
              entregar <span className="italic text-primary">ainda mais</span>
              <br />
              valor.
            </h1>

            <div className="mt-10 md:mt-12 max-w-2xl space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Estamos preparando uma nova experiência digital para refletir a
                evolução da Nero Consulting.
              </p>
              <p>
                Enquanto isso, seguimos disponíveis para conversas estratégicas,
                projetos e oportunidades de colaboração.
              </p>
            </div>

            <div className="mt-12 md:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/5511971846376"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm font-medium tracking-wide hover:bg-primary/90 transition-all"
              >
                Falar pelo WhatsApp
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/neroconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-7 py-4 text-sm font-medium tracking-wide hover:border-primary hover:text-primary transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.5H5.67v7.84h2.67zM7 9.32a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.02v-4.3c0-2.48-1.33-3.63-3.1-3.63-1.43 0-2.07.79-2.43 1.34V10.5h-2.67c.04.75 0 7.84 0 7.84h2.67v-4.38c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.35.73 1.35 1.81v4.19h2.73z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-12">
            <div className="space-y-10">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Áreas de atuação
                </div>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-baseline gap-3">
                    <span className="text-primary text-xs">01</span>
                    <span className="text-sm md:text-base">Estratégia corporativa</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-primary text-xs">02</span>
                    <span className="text-sm md:text-base">Transformação organizacional</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-primary text-xs">03</span>
                    <span className="text-sm md:text-base">Governança</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-primary text-xs">04</span>
                    <span className="text-sm md:text-base">Execução e performance</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Contato direto
                </div>
                <a
                  href="https://wa.me/5511971846376"
                  className="block text-foreground hover:text-primary transition-colors text-base"
                >
                  +55 11 97184-6376
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="relative z-10 px-6 md:px-12 lg:px-20 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="tracking-wide">
            © {new Date().getFullYear()} Nero Consulting. Delivering Value.
          </div>
          <div className="tracking-[0.2em] uppercase text-[10px]">
            Nova experiência digital · em breve
          </div>
        </div>
      </footer>
    </div>
  );
}
