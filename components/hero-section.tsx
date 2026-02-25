import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-[85vh] flex items-center justify-center text-center px-6 pt-16 relative z-10"
    >
      <div className="max-w-3xl reveal">
        <span className="inline-block tag-2026 text-primary px-4 py-1 rounded-r-full text-[9px] font-black tracking-[0.4em] mb-6 uppercase">
          ViniDigital Elite 2026
        </span>

        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-[0.9] tracking-tighter uppercase italic text-foreground text-balance">
          VINIDIGITAL <br /> SEGURANCA &{" "}
          <span className="text-primary">TECNOLOGIA</span> <br /> PRA VOCE.
        </h1>

        <p className="text-sm md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-light leading-relaxed">
          Consolidando excelencia em CFTV, Eletrica e Automacao. A seguranca que
          o seu patrimonio exige, com a inovacao de 2026.
        </p>

        <div className="flex justify-center">
          <a href="#servicos">
            <Button
              size="lg"
              className="glow-pulse bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-3.5 rounded-xl font-black text-sm shadow-xl"
            >
              VER SERVICOS
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
