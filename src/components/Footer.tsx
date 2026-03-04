import { Youtube, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`py-12 bg-background/90 text-muted-foreground text-[9px] tracking-[0.2em] uppercase font-black text-center border-t border-foreground/5 ${className || ''}`}>
      <div className="container mx-auto px-6 flex flex-col items-center gap-4">
        <span className="text-foreground text-xs font-black uppercase tracking-[0.3em]">Mídias Sociais</span>
        <div className="flex items-center gap-6">
          <a
            href="https://youtube.com/@vinidigital.?si=N94AfSLjUr4UmbWv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-xs font-black uppercase tracking-widest"
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
          <a
            href="https://instagram.com/vinidigitaloficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-xs font-black uppercase tracking-widest"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100054642421502"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-xs font-black uppercase tracking-widest"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </a>
        </div>
        <p>© 2026 ViniDigital Tecnologia e Serviços. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
