import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    highlight: false,
    features: [
      "Assistência funerária completa",
      "Cobertura para titular",
      "Atendimento 24 horas",
      "Translado incluso",
    ],
  },
  {
    name: "Família +",
    highlight: true,
    features: [
      "Tudo do plano Essencial",
      "Cobertura familiar completa",
      "Consultas médicas",
      "Serviços odontológicos",
      "Exames laboratoriais",
      "Descontos em parceiros",
    ],
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-5">Planos</h2>
          <p className="text-muted-foreground leading-relaxed">
            O Plano de Assistência Familiar (PAF) garante assistência funerária completa, com alto padrão de qualidade, respeito e acolhimento nos momentos mais delicados.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Além disso, o PAF oferece benefícios em vida, como acesso facilitado a consultas médicas, serviços odontológicos, exames laboratoriais, ótica, materiais ortopédicos e descontos exclusivos em empresas parceiras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card text-card-foreground shadow-card"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 right-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-heading font-bold mb-6">{plan.name}</h3>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-secondary" : "text-secondary"}`} />
                    <span className={plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5588999657559"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full justify-center items-center py-3 rounded-xl font-bold transition-transform hover:scale-105 ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Contratar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
