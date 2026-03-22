import { motion } from "framer-motion";
import { Briefcase, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vagaMarketing from "@/assets/vaga-marketing.png";

const jobs = [
  {
    id: 1,
    title: "Estagiário Marketing",
    location: "Unidade Sobral",
    image: vagaMarketing,
    requirements: [
      "Cursando Marketing, Publicidade e Propaganda ou áreas afins (a partir do 2º período)",
      "Conhecimento em Pacote Adobe",
      "Horário: segunda a sexta",
      "Boa comunicação oral e escrita",
      "Disponibilidade de horário (manhã e tarde)",
    ],
    compensation: "Bolsa estágio + auxílio transporte",
    email: "rhplasfran@gmail.com",
  },
];

const Vagas = () => {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Hero */}
        <section className="bg-gradient-hero py-20 md:py-28 text-primary-foreground">
          <div className="container text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Briefcase className="w-12 h-12 mx-auto mb-6 text-accent" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-6">
                Faça parte do Grupo Plasfran
              </h1>
              <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed">
                Buscamos pessoas comprometidas, empáticas e que desejam fazer a diferença na vida de outras famílias. No Grupo Plasfran, cada profissional tem um papel essencial no cuidado, respeito e na entrega de um serviço humanizado. Confira nossas oportunidades e venha construir um futuro com propósito ao nosso lado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Job listings */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground text-center mb-14">
              Vagas Disponíveis
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow flex flex-col"
                >
                  <img
                    src={job.image}
                    alt={`Vaga: ${job.title}`}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4 text-secondary" />
                      {job.location}
                    </div>

                    <div className="mb-4">
                      <p className="font-semibold text-sm text-foreground mb-2">Pré-requisitos:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-sm text-foreground mb-1">Remuneração:</p>
                      <p className="text-sm text-muted-foreground">{job.compensation}</p>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={`mailto:${job.email}?subject=Candidatura - ${job.title}`}
                        className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                      >
                        <Send className="w-4 h-4" />
                        Candidatar-se
                      </a>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Envie seu currículo para <span className="font-semibold">{job.email}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {jobs.length === 0 && (
              <div className="text-center py-16">
                <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-muted-foreground text-lg">Nenhuma vaga disponível no momento.</p>
                <p className="text-muted-foreground text-sm mt-2">Volte em breve para conferir novas oportunidades!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Vagas;
