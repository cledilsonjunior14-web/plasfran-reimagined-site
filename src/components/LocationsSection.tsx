import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  "Sobral", "Teperuaba", "Varjota", "Santana do Acaraú", "Ubaúna", "Acaraú",
  "Cariré", "Cruz", "Forquilha", "Groaíras", "Meruoca", "Rafael Arruda",
  "Centro Clínico Plasfran", "Óticas Plasfran - Sobral", "Funerária Plasfran - Sobral", "Memorial Célebre",
];

const LocationsSection = () => {
  return (
    <section id="localizacoes" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-5">
            Encontre a unidade mais próxima de você
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-2 bg-card rounded-xl px-4 py-3 shadow-card hover:shadow-elevated transition-shadow"
            >
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{loc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
