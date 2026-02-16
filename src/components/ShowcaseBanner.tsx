import showcaseBanner from "@/assets/showcase-banner.jpg";

const ShowcaseBanner = () => {
  return (
    <section className="relative z-10 py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 reveal-left">
          <img
            src={showcaseBanner}
            alt="ViniDigital showcase"
            className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
            <span className="text-primary font-black text-[9px] tracking-[0.4em] uppercase block mb-2">
              Excelência & Compromisso
            </span>
            <h2 className="text-xl md:text-4xl font-black uppercase italic text-foreground">
              Tecnologia que <span className="text-primary">transforma.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseBanner;
