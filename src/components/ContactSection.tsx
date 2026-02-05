import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import vdLogo from "@/assets/vd-logo.jpg";
import viniciusPhoto from "@/assets/vinicius-photo.jpg";

interface ContactSectionProps {
  onPortalClick?: () => void;
}

const ContactSection = ({ onPortalClick }: ContactSectionProps) => {
  return (
    <section id="contato" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-navy/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-foreground/5 relative">
          <div className="grid md:grid-cols-2 text-left">
            <div className="p-10 md:p-14 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tighter uppercase italic leading-[0.9]">
                VAMOS <br />AVANÇAR <br /><span className="text-primary">HOJE?</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-bold text-muted-foreground italic">
                    Abreu e Lima - PE
                  </span>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-black italic text-xl text-foreground">
                    (81) 98884-5760
                  </span>
                </div>
              </div>

              <Button 
                onClick={onPortalClick}
                className="shine-effect w-full py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl bg-gradient-to-r from-primary to-orange-600 text-primary-foreground border border-foreground/20 hover:opacity-90 cursor-pointer"
              >
                SOLICITAR ORÇAMENTO
              </Button>
            </div>
            
            <div className="relative min-h-[350px] overflow-hidden">
              <img 
                src={viniciusPhoto} 
                alt="Vinícius" 
                className="absolute inset-0 w-full h-full object-cover object-center scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
            </div>
          </div>
        </div>

        {/* Logo de Fechamento */}
        <div className="mt-20 reveal flex flex-col items-center">
          <img src={vdLogo} alt="ViniDigital Emblem" className="h-32 w-32 md:h-48 md:w-48 object-contain rounded-full border-2 border-primary/50 rotate-90 shadow-2xl" />
          <p className="text-primary/30 text-[9px] font-black tracking-[0.4em] uppercase italic mt-4">
            Segue em frente até dar certo
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;