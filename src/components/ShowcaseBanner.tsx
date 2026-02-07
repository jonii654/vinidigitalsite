import showcaseBanner from "@/assets/showcase-banner.jpg";

const ShowcaseBanner = () => {
  return (
    <section className="relative z-10 py-8">
      <div className="container mx-auto px-6">
        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${showcaseBanner})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-primary font-black text-[9px] tracking-[0.4em] uppercase block mb-2">
              Excelência & Compromisso
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase italic text-foreground">
              Tecnologia que <span className="text-primary">transforma.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseBanner;
