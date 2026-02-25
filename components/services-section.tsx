"use client";

import ServiceCarousel from "@/components/service-carousel";

type MediaItem = { type: "image" | "video"; src: string; alt: string };

export default function ServicesSection() {
  const services = [
    {
      tag: "Vigilancia Inteligente",
      title: "Cftv profissional",
      features: [
        "Monitoramento em tempo real via smartphone com cameras 4K de alta definicao.",
        "Gravacao inteligente em nuvem para garantir a seguranca das suas imagens 24h.",
        "Projetos personalizados para residencias e empresas com suporte tecnico imediato.",
      ],
      reverse: false,
      images: [
        { type: "image" as const, src: "/images/cftv-work.jpg", alt: "Instalacao profissional de CFTV" },
        { type: "image" as const, src: "/images/cftv-work-2.jpg", alt: "Camera Intelbras com grade" },
        { type: "image" as const, src: "/images/cftv-work-5.jpg", alt: "Camera CFTV externa" },
        { type: "image" as const, src: "/images/cftv-work-6.jpg", alt: "Camera CFTV Intelbras" },
        { type: "image" as const, src: "/images/cftv-work-7.jpg", alt: "Camera CFTV instalada" },
        { type: "video" as const, src: "/videos/cftv-video-2.mp4", alt: "Video de trabalho CFTV" },
        { type: "video" as const, src: "/videos/cftv-new-1.mp4", alt: "Video CFTV novo 1" },
        { type: "video" as const, src: "/videos/cftv-new-2.mp4", alt: "Video CFTV novo 2" },
      ],
    },
    {
      tag: "Infraestrutura",
      title: "Servico Eletrica",
      features: [
        "Execucao de projetos eletricos seguindo rigorosamente as normas tecnicas de seguranca.",
        "Montagem de quadros de forca e balanceamento de carga para evitar desperdicio de energia.",
        "Iluminacao tecnica e manutencao corretiva para eliminar riscos de curto-circuito.",
      ],
      reverse: true,
      images: [
        { type: "image" as const, src: "/images/eletrica-work.jpg", alt: "Trabalho de eletrica profissional" },
        { type: "image" as const, src: "/images/eletrica-work-2.jpg", alt: "Eletricista com multimetro" },
        { type: "image" as const, src: "/images/eletrica-work-3.jpg", alt: "Montagem de quadro eletrico" },
        { type: "image" as const, src: "/images/eletrica-work-4.jpg", alt: "Tecnico eletricista com ferramentas" },
      ],
    },
    {
      tag: "Futuro & Luxo",
      title: "Smart home Alexa",
      features: [
        "Controle total de iluminacao, som e ar-condicionado por comandos de voz personalizados.",
        "Criacao de rotinas inteligentes que adaptam sua casa ao seu estilo de vida automaticamente.",
        "Integracao total entre dispositivos para maximo conforto, seguranca e economia de tempo.",
      ],
      reverse: false,
      images: [
        { type: "image" as const, src: "/images/alexa-work-1.jpg", alt: "Smart Home com Alexa Echo Dot" },
        { type: "image" as const, src: "/images/alexa-work-2.jpg", alt: "Instalacao Smart Home Alexa" },
        { type: "image" as const, src: "/images/alexa-work-3.jpg", alt: "Smart Speaker Intelbras IZY" },
        { type: "image" as const, src: "/images/alexa-work-4.jpg", alt: "Smart Speaker IZY Home" },
        { type: "image" as const, src: "/images/alexa-work-5.jpg", alt: "Echo Dot com cartao ViniDigital" },
      ],
    },
    {
      tag: "Energia Limpa",
      title: "Sistema Solar",
      features: [
        "Instalacao de paineis solares fotovoltaicos para reducao de ate 95% na conta de energia.",
        "Projetos personalizados com analise de consumo e dimensionamento ideal para sua residencia ou empresa.",
        "Manutencao preventiva e monitoramento remoto da geracao de energia em tempo real.",
      ],
      reverse: true,
      images: [
        { type: "image" as const, src: "/images/solar-work-1.jpg", alt: "Instalacao de paineis solares" },
        { type: "image" as const, src: "/images/solar-work-2.jpg", alt: "Sistema solar fotovoltaico" },
        { type: "image" as const, src: "/images/solar-work-3.jpg", alt: "Painel solar instalado" },
      ],
    },
    {
      tag: "Tecnologia Aerea",
      title: "Trabalhos com Drones",
      features: [
        "Inspecao predial com imagens aereas de alta resolucao para laudos tecnicos e manutencao preventiva.",
        "Fotos e videos profissionais aereos para eventos, imoveis, construcoes e marketing.",
      ],
      reverse: false,
      images: [
        { type: "image" as const, src: "/images/drone-work-1.jpg", alt: "Trabalho com drone" },
        { type: "image" as const, src: "/images/drone-work-2.jpg", alt: "Inspecao aerea com drone" },
        { type: "image" as const, src: "/images/drone-work-3.jpg", alt: "Drone profissional na maleta" },
        { type: "video" as const, src: "/videos/drone-video.mp4", alt: "Video de trabalho com drone" },
      ],
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-background/60 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-20 reveal text-center">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter italic text-foreground">
            Nosso <span className="text-primary">Servico.</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-20 md:gap-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${
                service.reverse ? "md:[&>*:first-child]:order-last" : ""
              }`}
            >
              <div
                className={`h-[280px] md:h-[380px] relative rounded-2xl overflow-hidden border border-primary/20 bg-navy ${
                  service.reverse ? "reveal-right" : "reveal-left"
                }`}
              >
                {service.images.length > 1 ? (
                  <ServiceCarousel items={service.images} />
                ) : service.images.length === 1 ? (
                  <>
                    {service.images[0].type === "image" ? (
                      <img
                        src={service.images[0].src}
                        alt={service.images[0].alt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        controls
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-navy flex items-center justify-center">
                    <span className="text-4xl font-black text-foreground/10 italic uppercase">
                      {service.title.split(" ")[0]}
                    </span>
                  </div>
                )}
              </div>

              <div
                className={`flex flex-col gap-3 md:gap-4 ${
                  service.reverse
                    ? "reveal-left stagger-1"
                    : "reveal-right stagger-1"
                }`}
              >
                <span className="text-primary font-black text-[9px] tracking-[0.4em] uppercase block">
                  {service.tag}
                </span>
                <h3 className="text-xl md:text-3xl font-black uppercase italic text-foreground">
                  {service.title}
                </h3>
                <div className="text-muted-foreground text-xs md:text-sm leading-relaxed font-light flex flex-col gap-2">
                  {service.features.map((feature, i) => (
                    <p key={i}>. {feature}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
