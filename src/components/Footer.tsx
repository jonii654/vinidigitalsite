interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`py-12 bg-background/80 text-muted-foreground text-[9px] tracking-[0.2em] uppercase font-black text-center border-t border-foreground/5 backdrop-blur-md ${className || ''}`}>
      <div className="container mx-auto px-6 text-center">
        <p>© 2026 ViniDigital Tecnologia e Serviços. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;