import { motion } from "framer-motion";
import { MessageCircle, Shield, Heart, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider">
                Proteção e cuidado para sua família
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Estão prontos para proporcionar o cuidado e a segurança que seus colaboradores merecem?
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl font-medium">
              Com o PAF Plasfran, a vida se torna muito mais leve
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/5588999657559"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-elevated"
            >
              <MessageCircle className="w-5 h-5" />
              Fale com nosso Especialista
            </a>
          </motion.div>

          {/* Feature icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-14"
          >
            {[
              { icon: Users, label: "Plano Familiar" },
              { icon: Heart, label: "Assistência 24h" },
              { icon: Shield, label: "Cobertura Completa" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
