import { motion } from "framer-motion";
import { Stethoscope, Smile, FlaskConical, Glasses, Accessibility, Tag, Shield, MessageCircle } from "lucide-react";

const benefits = [
  { icon: Stethoscope, label: "Consultas Médicas" },
  { icon: Smile, label: "Odontologia" },
  { icon: FlaskConical, label: "Exames Laboratoriais" },
  { icon: Glasses, label: "Ótica" },
  { icon: Accessibility, label: "Materiais Ortopédicos" },
  { icon: Tag, label: "Descontos Exclusivos" },
  { icon: Shield, label: "Assistência Funerária Completa" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-gradient-dark text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-5">
            Aproveite benefícios exclusivos que somente a Plasfran oferece!
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            O Plano de Assistência Familiar (PAF) oferece cobertura especializada em todos os momentos da vida, proporcionando acesso rápido a consultas médicas, procedimentos odontológicos, exames laboratoriais, serviços de ótica, materiais ortopédicos para nossos sócios.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-3 bg-primary-foreground/5 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <span className="text-sm font-semibold">{label}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5588999657559"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            Fale com nosso Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
