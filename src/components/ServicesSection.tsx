import { Button } from "@/components/ui/button";
import ServiceCarousel from "@/components/ServiceCarousel";
import cftvWork from "@/assets/cftv-work.jpg";
import cftvWork2 from "@/assets/cftv-work-2.jpg";
import cftvWork5 from "@/assets/cftv-work-5.jpg";
import cftvWork6 from "@/assets/cftv-work-6.jpg";
import cftvWork7 from "@/assets/cftv-work-7.jpg";
import eletricaWork from "@/assets/eletrica-work.jpg";
import eletricaWork2 from "@/assets/eletrica-work-2.jpg";
import eletricaWork3 from "@/assets/eletrica-work-3.jpg";
import eletricaWork4 from "@/assets/eletrica-work-4.jpg";
import alexaWork1 from "@/assets/alexa-work-1.jpg";
import alexaWork2 from "@/assets/alexa-work-2.jpg";
import alexaWork3 from "@/assets/alexa-work-3.jpg";
import alexaWork4 from "@/assets/alexa-work-4.jpg";
import alexaWork5 from "@/assets/alexa-work-5.jpg";
import solarWork1 from "@/assets/solar-work-1.jpg";
import solarWork2 from "@/assets/solar-work-2.jpg";
import solarWork3 from "@/assets/solar-work-3.jpg";
import droneWork1 from "@/assets/drone-work-1.jpg";
import droneWork2 from "@/assets/drone-work-2.jpg";
import droneWork3 from "@/assets/drone-work-3.jpg";

type MediaItem = { type: "image" | "video"; src: string; alt: string };

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
      images: [
        { type: "image" as const, src: cftvWork, alt: "Instalação profissional de CFTV" },
        { type: "image" as const, src: cftvWork2, alt: "Câmera Intelbras com grade" },
        { type: "image" as const, src: cftvWork5, alt: "Câmera CFTV externa" },
        { type: "image" as const, src: cftvWork6, alt: "Câmera CFTV Intelbras" },
        { type: "image" as const, src: cftvWork7, alt: "Câmera CFTV instalada" },
        { type: "video" as const, src: "/videos/cftv-video-2.mp4", alt: "Vídeo de trabalho CFTV" },
        { type: "video" as const, src: "/videos/cftv-new-1.mp4", alt: "Vídeo CFTV novo 1" },
        { type: "video" as const, src: "/videos/cftv-new-2.mp4", alt: "Vídeo CFTV novo 2" },
      ],
    },
    {
      tag: "Infraestrutura",
      title: "Serviço Elétrica",
      features: [
        "Execução de projetos elétricos seguindo rigorosamente as normas técnicas de segurança.",
        "Montagem de quadros de força e balanceamento de carga para evitar desperdício de energia.",
        "Iluminação técnica e manutenção corretiva para eliminar riscos de curto-circuito.",
      ],
      cta: "SOLICITAR ORÇAMENTO",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20falar%20sobre%20Elétrica%20é%20Orçamentos!",
      variant: "outline" as const,
      reverse: true,
      images: [
        { type: "image" as const, src: eletricaWork, alt: "Trabalho de elétrica profissional" },
        { type: "image" as const, src: eletricaWork2, alt: "Eletricista com multímetro" },
        { type: "image" as const, src: eletricaWork3, alt: "Montagem de quadro elétrico" },
        { type: "image" as const, src: eletricaWork4, alt: "Técnico eletricista com ferramentas" },
      ],
    },
    {
      tag: "Futuro & Luxo",
      title: "Smart home Alexa",
      features: [
        "Controle total de iluminação, som e ar-condicionado por comandos de voz personalizados.",
        "Criação de rotinas inteligentes que adaptam sua casa ao seu estilo de vida automaticamente.",
        "Integração total entre dispositivos para máximo conforto, segurança e economia de tempo.",
      ],
      cta: "SOLICITAR ORÇAMENTO",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20falar%20sobre%20instalação%20de%20alexa%20e%20orçamentos!",
      variant: "secondary" as const,
      reverse: false,
      images: [
        { type: "image" as const, src: alexaWork1, alt: "Smart Home com Alexa Echo Dot" },
        { type: "image" as const, src: alexaWork2, alt: "Instalação Smart Home Alexa" },
        { type: "image" as const, src: alexaWork3, alt: "Smart Speaker Intelbras IZY" },
        { type: "image" as const, src: alexaWork4, alt: "Smart Speaker IZY Home" },
        { type: "image" as const, src: alexaWork5, alt: "Echo Dot com cartão ViniDigital" },
      ],
    },
    {
      tag: "Energia Limpa",
      title: "Sistema Solar",
      features: [
        "Instalação de painéis solares fotovoltaicos para redução de até 95% na conta de energia.",
        "Projetos personalizados com análise de consumo e dimensionamento ideal para sua residência ou empresa.",
        "Manutenção preventiva e monitoramento remoto da geração de energia em tempo real.",
      ],
      cta: "SOLICITAR ORÇAMENTO",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20falar%20sobre%20Sistema%20Solar%20e%20Orçamentos!",
      variant: "primary" as const,
      reverse: true,
      images: [
        { type: "image" as const, src: solarWork1, alt: "Instalação de painéis solares" },
        { type: "image" as const, src: solarWork2, alt: "Sistema solar fotovoltaico" },
        { type: "image" as const, src: solarWork3, alt: "Painel solar instalado" },
      ],
    },
    {
      tag: "Tecnologia Aérea",
      title: "Trabalhos com Drones",
      features: [
        "Inspeção predial com imagens aéreas de alta resolução para laudos técnicos e manutenção preventiva.",
        "Fotos e vídeos profissionais aéreos para eventos, imóveis, construções e marketing.",
      ],
      cta: "SOLICITAR ORÇAMENTO",
      ctaLink: "https://wa.me/5581988845760?text=Olá%20ViniDigital%2Cquero%20falar%20sobre%20Trabalhos%20com%20Drones%20e%20Orçamentos!",
      variant: "outline" as const,
      reverse: false,
      images: [
        { type: "image" as const, src: droneWork1, alt: "Trabalho com drone" },
        { type: "image" as const, src: droneWork2, alt: "Inspeção aérea com drone" },
        { type: "image" as const, src: droneWork3, alt: "Drone profissional na maleta" },
        { type: "video" as const, src: "/videos/drone-video.mp4", alt: "Vídeo de trabalho com drone" },
      ],
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-background/60 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-20 reveal text-center">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter italic text-foreground">
            Nosso <span className="text-primary">Serviço.</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${
                service.reverse ? "md:[&>*:first-child]:order-last" : ""
              }`}
            >
              <div className={`rounded-2xl overflow-hidden border-2 border-primary bg-navy/60 ${
                service.reverse ? "reveal-right" : "reveal-left"
              }`}>
                {service.images.length > 1 ? (
                  <ServiceCarousel items={service.images} />
                ) : service.images.length === 1 ? (
                  <>
                    {service.images[0].type === "image" ? (
                      <img
                        src={service.images[0].src}
                        alt={service.images[0].alt}
                        className="w-full h-auto"
                      />
                    ) : (
                      <video
                        src={service.images[0].src}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-auto will-change-transform"
                      />
                    )}
                  </>
                ) : null}
              </div>

              <div className={`space-y-3 md:space-y-4 ${
                service.reverse ? "reveal-left stagger-1" : "reveal-right stagger-1"
              }`}>
                <span className="text-primary font-black text-[9px] tracking-[0.4em] uppercase block">
                  {service.tag}
                </span>
                <h3 className="text-xl md:text-3xl font-black uppercase italic text-foreground">
                  {service.title}
                </h3>
                <div className="text-muted-foreground text-xs md:text-sm leading-relaxed font-light space-y-2">
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
};

export default ServicesSection;