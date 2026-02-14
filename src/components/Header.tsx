import { Button } from "@/components/ui/button";
import vdLogo from "@/assets/vd-logo-new.jpg";

const Header = () => {
  const navLinks = [
    { href: "#inicio", label: "Home" },
    { href: "#apresentacao", label: "Quem somos" },
    { href: "#trabalhos", label: "Trabalhos" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
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

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-foreground p-2" onClick={() => {
          const menu = document.getElementById('mobile-menu');
          menu?.classList.toggle('hidden');
        }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <a
          href="https://wa.me/5581988845760?text=Vim%20do%20seu%20site%20e%20quero%20contratar%20seus%20serviços!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-[10px] font-black uppercase tracking-tighter">
            Orçamento
          </Button>
        </a>
      </div>
      
      {/* Mobile Menu */}
      <nav id="mobile-menu" className="hidden lg:hidden bg-navy/95 backdrop-blur-lg border-t border-foreground/5">
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase"
              onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5581988845760?text=Vim%20do%20seu%20site%20e%20quero%20contratar%20seus%20serviços!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-black uppercase w-full">
              Orçamento
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;