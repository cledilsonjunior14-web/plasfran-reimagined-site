import { motion } from "framer-motion";
import { Phone, Globe, Sparkles, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo-plasfran.png";

const links = [
  {
    label: "Fale conosco no 0800",
    sub: "Atendimento 24 horas",
    href: "tel:08000889222",
    external: true,
    icon: Phone,
    style: "bg-primary text-primary-foreground hover:opacity-95",
  },
  {
    label: "Acesse nosso site",
    sub: "plasfran.com.br",
    href: "https://plasfran.com.br",
    external: true,
    icon: Globe,
    style: "bg-card text-foreground border border-border hover:border-primary/40",
  },
  {
    label: "Conheça nosso plano agora",
    sub: "Plano de Assistência Familiar",
    href: "/planos",
    external: false,
    icon: Sparkles,
    style: "bg-secondary text-secondary-foreground hover:opacity-95",
  },
];

const LinkBio = () => {
  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col items-center px-6 py-12 relative overflow-hidden">
      {/* decorative glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="w-full max-w-sm relative z-10">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="w-24 h-24 rounded-full bg-card p-1.5 shadow-elevated mb-4">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Grupo Plasfran" className="w-16 object-contain" />
            </div>
          </div>
          <h1 className="text-2xl font-heading font-extrabold text-primary-foreground">
            Grupo Plasfran
          </h1>
          <p className="text-primary-foreground/70 text-sm mt-2 leading-relaxed">
            Assistência familiar e funerária com excelência, respeito e acolhimento.
          </p>
          <p className="text-primary-foreground/50 text-xs mt-3 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Sobral, Ceará - Brasil
          </p>
        </motion.div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external && link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 shadow-elevated transition-all hover:scale-[1.02] active:scale-[0.99] ${link.style}`}
            >
              <span
                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  link.href.startsWith("http")
                    ? "bg-secondary/15 text-secondary"
                    : "bg-primary-foreground/10 text-primary-foreground"
                }`}
              >
                <link.icon className="w-5 h-5" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-heading font-bold text-sm sm:text-base leading-tight">
                  {link.label}
                </span>
                <span className="block text-xs opacity-70 mt-0.5 truncate">{link.sub}</span>
              </span>
            </motion.a>
          ))}
        </div>

        {/* WhatsApp extra */}
        <motion.a
          href="https://wa.me/5588999657559"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-primary-foreground/20 text-primary-foreground/80 px-5 py-3.5 text-sm font-medium hover:bg-primary-foreground/5 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Chamar no WhatsApp
        </motion.a>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-primary-foreground/40 text-xs mt-12"
        >
          © 2026 Grupo Plasfran. Todos os direitos reservados.
        </motion.p>
      </div>
    </div>
  );
};

export default LinkBio;
