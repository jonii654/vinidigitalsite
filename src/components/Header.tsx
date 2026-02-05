import { Button } from "@/components/ui/button";
import vdLogo from "@/assets/vd-logo.jpg";

const Header = () => {
  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#apresentacao", label: "Vinícius" },
    { href: "#trabalhos", label: "Trabalhos" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contacto" },
  ];

  return (
    <header className="fixed w-full z-50 bg-navy/80 backdrop-blur-lg border-b border-foreground/5">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="h-8 md:h-10 flex items-center">
          <img src={vdLogo} alt="ViniDigital Logo" className="h-full w-auto object-contain rounded" />
        </div>
        
        <nav className="hidden lg:flex space-x-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5581988845760?text=Vim%20do%20seu%20site%20e%20quero%20contratar%20seus%20serviços!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-[10px] font-black uppercase tracking-tighter">
            Orçamento
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;