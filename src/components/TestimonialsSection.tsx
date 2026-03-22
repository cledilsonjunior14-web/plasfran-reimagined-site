import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MessageSquarePlus } from "lucide-react";

const testimonials = [
  { name: "ANA ELLEN DOS SANTOS", text: "Ótimo atendimento!" },
  { name: "JOSÉ GURGEL NETO", text: "Um lugar com atendimento superior!" },
  { name: "ANDRÉ LIMA DOS SANTOS SILVA", text: "Excelente empresa e atendimento rápido, possui planos bem acessíveis. Estão de parabéns pelo trabalho." },
  { name: "RENAN LUCAS PEREIRA", text: "Uma das melhores empresas da região." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-5">Depoimentos</h2>
          <p className="text-muted-foreground leading-relaxed">
            Deixe aqui seu depoimento sobre sua experiência no Grupo Plasfran e compartilhe as histórias e momentos especiais que viveu conosco.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-card text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-lg md:text-xl italic mb-6">"{testimonials[current].text}"</p>
              <p className="text-primary font-heading font-bold">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Próximo">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MessageSquarePlus className="w-5 h-5" />
            Novo depoimento
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
