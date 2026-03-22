import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import teamImage from "@/assets/team-plasfran.png";

const MissionSection = () => {
  return (
    <section id="missao" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={teamImage} alt="Equipe Plasfran" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Heart className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
            Nosso papel é zelar por você e por todos que ama
          </h2>
          <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed">
            Ajudar famílias por meio de uma estrutura enxuta, eficiente e de qualidade, oferecendo serviços de saúde e assistência funerária em um único lugar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
