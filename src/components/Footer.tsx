const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-xl tracking-wider text-foreground mb-2">MISTIK ESTILISTAS</p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mistik Estilistas. Alta peluquería en San Martín, Buenos Aires.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
