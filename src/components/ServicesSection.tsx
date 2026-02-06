import { Button } from "@/components/ui/button";
import cftvWork from "@/assets/cftv-work.jpg";

const ServicesSection = () => {
  const services = [
    {
      tag: "Vigilância Inteligente",
      title: "Cftv profissional",
      features: [
        "Monitoramento em tempo real via smartphone com câmeras 4K de alta definição.",
        "Gravação inteligente em nuvem para garantir a segurança das suas imagens 24h.",
        "Projetos personalizados para residências e empresas com suporte técnico imediato.",
      ],
      cta: "SOLICITAR ORÇAMENTO",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20fala%20sobre%20Cftv%20e%20Orçamentos!",
      variant: "primary" as const,
      reverse: false,
      image: cftvWork,
      imageAlt: "Instalação profissional de CFTV",
    },
    {
      tag: "Infraestrutura",
      title: "Elétrica profissional",
      features: [
        "Execução de projetos elétricos seguindo rigorosamente as normas técnicas de segurança.",
        "Montagem de quadros de força e balanceamento de carga para evitar desperdício de energia.",
        "Iluminação técnica e manutenção corretiva para eliminar riscos de curto-circuito.",
      ],
      cta: "REVISÃO TÉCNICA",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20falar%20sobre%20Elétrica%20é%20Orçamentos!",
      variant: "outline" as const,
      reverse: true,
      image: null,
      imageAlt: "",
    },
    {
      tag: "Futuro & Luxo",
      title: "Smart home Alexa",
      features: [
        "Controle total de iluminação, som e ar-condicionado por comandos de voz personalizados.",
        "Criação de rotinas inteligentes que adaptam sua casa ao seu estilo de vida automaticamente.",
        "Integração total entre dispositivos para máximo conforto, segurança e economia de tempo.",
      ],
      cta: "CRIAR PROJETO",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20falar%20sobre%20instalação%20de%20alexa%20e%20orçamentos!",
      variant: "secondary" as const,
      reverse: false,
      image: null,
      imageAlt: "",
    },
    {
      tag: "Energia Limpa",
      title: "Sistema Solar",
      features: [
        "Instalação de painéis solares fotovoltaicos para redução de até 95% na conta de energia.",
        "Projetos personalizados com análise de consumo e dimensionamento ideal para sua residência ou empresa.",
        "Manutenção preventiva e monitoramento remoto da geração de energia em tempo real.",
      ],
      cta: "SIMULAR ECONOMIA",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20falar%20sobre%20Sistema%20Solar%20e%20Orçamentos!",
      variant: "primary" as const,
      reverse: true,
      image: null,
      imageAlt: "",
    },
    {
      tag: "Tecnologia Aérea",
      title: "Trabalhos com Drones",
      features: [
        "Inspeção predial com imagens aéreas de alta resolução para laudos técnicos e manutenção preventiva.",
        "Fotos e vídeos profissionais aéreos para eventos, imóveis, construções e marketing.",
        "Mapeamento, monitoramento de obras e serviços especializados com drones de última geração.",
      ],
      cta: "SOLICITAR VOO",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20falar%20sobre%20Trabalhos%20com%20Drones%20e%20Orçamentos!",
      variant: "outline" as const,
      reverse: false,
      image: null,
      imageAlt: "",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background/60 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="mb-20 reveal text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-foreground">
            Nosso <span className="text-primary">Serviço.</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center reveal group ${
                service.reverse ? "md:[&>*:first-child]:order-last" : ""
              }`}
            >
              <div className="h-[350px] relative rounded-2xl overflow-hidden border border-primary/20 bg-navy">
                {service.image ? (
                  <>
                    <img 
                      src={service.image} 
                      alt={service.imageAlt} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-navy flex items-center justify-center">
                    <span className="text-4xl font-black text-foreground/10 italic uppercase">
                      {service.title.split(' ')[0]}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <span className="text-primary font-black text-[9px] tracking-[0.4em] uppercase block">
                  {service.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic text-foreground">
                  {service.title}
                </h3>
                <div className="text-muted-foreground text-sm leading-relaxed font-light space-y-2">
                  {service.features.map((feature, i) => (
                    <p key={i}>. {feature}</p>
                  ))}
                </div>
                <a href={service.ctaLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`px-8 py-3 rounded-xl font-black text-xs shadow-lg mt-4 ${
                      service.variant === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : service.variant === "outline"
                        ? "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    {service.cta}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
