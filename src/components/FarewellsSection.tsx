import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const farewells = [
  { name: "Maria do Rosário", birth: "12/05/1945", death: "15/08/2025" },
  { name: "Ester", birth: "03/11/1960", death: "10/07/2025" },
  { name: "Claudio", birth: "22/01/1950", death: "05/06/2025" },
  { name: "João", birth: "18/09/1938", death: "20/05/2025" },
  { name: "Ricardo Pereira", birth: "07/03/1955", death: "02/04/2025" },
];

const FarewellsSection = () => {
  return (
    <section id="despedidas" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-5">Despedidas Recentes</h2>
          <p className="text-muted-foreground leading-relaxed">
            Onde as memórias ganham vida e o amor se perpetua. Este é um espaço para celebrar as jornadas vividas, compartilhar saudades e encontrar conforto na união de corações que guardam quem partiu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {farewells.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Flame className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{person.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                ★ {person.birth} — ✟ {person.death}
              </p>
              <button className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
                <Flame className="w-4 h-4" />
                Acender Vela
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="text-primary font-semibold hover:underline">
            Ver todas as despedidas →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FarewellsSection;
