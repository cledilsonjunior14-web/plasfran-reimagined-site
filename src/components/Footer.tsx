import { Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-plasfran.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <img src={logo} alt="Grupo Plasfran" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Assistência familiar e funerária com excelência, respeito e acolhimento.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Início", "Quem Somos", "Serviços", "Planos", "Contatos", "Localizações"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Planos Funerários", "Assistência Médica", "Material Ortopédico", "Memorial Célebre"].map((s) => (
                <li key={s}><a href="#" className="hover:text-primary-foreground transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:88999657559">(88) 9 9965-7559</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:08000889222">0800 088 9222</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                Sobral, Ceará - Brasil
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-wrap items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 Grupo Plasfran. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Serviço</a>
          </div>
          <p>BOX³</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
