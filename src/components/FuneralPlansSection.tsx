import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FuneralPlansSection = () => {
  return (
    <section id="planos-funerarios" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">PAF Plasfran</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-3 mb-5">
            Planos Funerários
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            O Plano de Assistência Familiar Plasfran oferece cobertura especializada em todos os momentos da vida. Conheça abaixo tudo que podemos oferecer com excelência.
          </p>
          <a
            href="https://wa.me/5588999657559"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            Fale com nosso Especialista
          </a>
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          {["Celebre", "Jardim da Paz", "Imortal Plasfran", "Plasfran", "Óticas Plasfran"].map((name) => (
            <div
              key={name}
              className="bg-muted px-6 py-3 rounded-lg text-muted-foreground font-semibold text-sm"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FuneralPlansSection;
