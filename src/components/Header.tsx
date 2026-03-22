import { useState } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-plasfran.png";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Quem Somos", href: "#missao" },
  { label: "Serviços", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "Contatos", href: "#footer" },
  { label: "Vagas", href: "#footer" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="container flex items-center justify-between py-2 gap-4 flex-wrap">
          <span className="font-medium hidden sm:inline">Atendimento 24 horas</span>
          <div className="flex items-center gap-4 ml-auto text-xs sm:text-sm">
            <a href="tel:88999657559" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              (88) 9 9965-7559
            </a>
            <a href="tel:08000889222" className="hidden md:flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              0800 088 9222
            </a>
            <a
              href="https://wa.me/5588999657559"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="bg-card shadow-card">
        <div className="container flex items-center justify-between py-3">
          <a href="#hero">
            <img src={logo} alt="Grupo Plasfran" className="h-10 md:h-12" />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Área Cliente
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <ul className="container py-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-foreground/80 hover:text-primary font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm"
                >
                  Área Cliente
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
