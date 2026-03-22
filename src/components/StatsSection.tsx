import { motion } from "framer-motion";
import { Users, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "+3.500", label: "Clientes Ativos" },
  { icon: MapPin, value: "+5", label: "Pontos de Atendimento" },
  { icon: Clock, value: "24h", label: "Atendimento Disponível" },
];

const StatsSection = () => {
  return (
    <section id="numeros" className="py-20 md:py-28 bg-gradient-dark text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-5">O Grupo Plasfran...</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Compartilhamos com você nossos números, que são histórias de vidas transformadas e sonhos realizados. Na jornada do Grupo Plasfran, cada passo que damos é um impacto positivo na vida dos nossos associados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <Icon className="w-8 h-8" />
              </div>
              <p className="text-4xl md:text-5xl font-heading font-extrabold mb-2">{value}</p>
              <p className="text-primary-foreground/70 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
