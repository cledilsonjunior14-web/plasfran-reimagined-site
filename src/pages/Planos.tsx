import { motion } from "framer-motion";
import { MessageCircle, Users, MapPin, Clock, Shield, Heart, Stethoscope, Eye, Bone, BadgePercent, Check, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import jardimBanner from "@/assets/jardim-da-paz-banner.jpg";
import memorialCelebre from "@/assets/memorial-celebre.jpg";
import equipePlasfran from "@/assets/equipe-plasfran.jpg";
import pafLogo from "@/assets/paf-logo.png";

const stats = [
  { value: "+100.000", label: "Clientes Ativos", icon: Users },
  { value: "+1.000", label: "Unidades em todo o Brasil", icon: MapPin },
  { value: "+50", label: "Companheiros", icon: Heart },
  { value: "24", label: "Horas de Atendimento Disponível", icon: Clock },
];

const plans = [
  {
    name: "Plano Essencial",
    price: "32,42",
    highlight: false,
    description: "Proteção para você e sua família.",
    features: [
      "Assistência funerária completa",
      "Cobertura para titular",
      "Atendimento 24 horas",
      "Translado incluso",
    ],
  },
  {
    name: "Plano Família +",
    price: "81,05",
    highlight: true,
    description: "Tudo para você, sua família e 4 pessoas. Ideais para quem busca algo que vai além do convencional, com benefícios de patenômias.",
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

const testimonials = [
  { name: "Ana Ellen dos Santos", text: "Ótimo atendimento!", rating: 5 },
  { name: "José Gurgel Neto", text: "Um lugar com atendimento superior!!!!", rating: 5 },
  { name: "André Lima dos Santos Silva", text: "Excelente empresa e atendimento rápido, possui planos bem acessíveis. Estão de parabéns pelo trabalho", rating: 5 },
  { name: "Renan Lucas Pereira", text: "Uma das melhores empresas da região.", rating: 5 },
];

const Planos = () => {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Hero Banner */}
        <section className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
          <img
            src={jardimBanner}
            alt="Jardim da Paz - Planos Funerários Plasfran"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center text-primary-foreground px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-4">
              Planos Funerários
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              O Plano de Assistência Familiar Plasfran oferece cobertura especializada em todos os momentos da vida. Conheça abaixo tudo que podemos oferecer.
            </p>
          </motion.div>
        </section>

        {/* Plan Cards */}
        <section className="py-20 md:py-28 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative rounded-2xl overflow-hidden ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground shadow-elevated"
                      : "bg-card text-card-foreground shadow-card"
                  }`}
                >
                  {/* Header label */}
                  <div className={`px-8 pt-6 pb-4 ${plan.highlight ? "bg-primary" : "bg-secondary/10"}`}>
                    <span className={`text-xs font-bold uppercase tracking-wider ${plan.highlight ? "text-primary-foreground/70" : "text-secondary"}`}>
                      Conheça:
                    </span>
                  </div>

                  <div className="px-8 pb-8">
                    {plan.highlight && (
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" /> Mais Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-heading font-extrabold mb-1">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-sm">R$</span>
                      <span className="text-4xl font-heading font-extrabold">{plan.price}</span>
                    </div>
                    <p className={`text-sm mb-6 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-accent" : "text-secondary"}`} />
                          <span className={plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/5588999657559"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full justify-center items-center py-3 rounded-xl font-bold transition-transform hover:scale-105 text-sm ${
                        plan.highlight
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      Assine agora!
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-8"
            >
              <a href="#planos-detalhes" className="text-secondary hover:text-secondary/80 font-semibold text-sm underline underline-offset-4 transition-colors">
                Ver todos os planos
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <span className="text-3xl md:text-4xl font-heading font-extrabold text-secondary">
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PAF Section */}
        <section id="planos-detalhes" className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">PAF</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O Plano de Assistência Familiar (PAF) tem como principal compromisso oferecer assistência funerária completa, garantia de acolhimento, organização e respeito nos momentos mais delicados da vida, com cuidado, segurança e acessibilidade para toda a família.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Além disso, o PAF proporciona acesso rápido a consultas médicas, procedimentos odontológicos, exames laboratoriais, serviços de ótica e materiais ortopédicos para nossos sócios, promovendo qualidade em todas as fases da vida. Para complementar, oferecemos descontos exclusivos em empresas parceiras, ampliando ainda mais os benefícios e a tranquilidade de quem escolhe o PAF.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <img
                  src={pafLogo}
                  alt="PAF - Plano de Assistência Familiar"
                  className="max-w-[280px] md:max-w-[320px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Planos Detailed Text */}
        <section className="py-16 bg-muted">
          <div className="container max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">Planos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Plano de Assistência Familiar (PAF) oferece <strong className="text-foreground">assistência funerária completa, humanizada e disponível 24 horas</strong>, garantindo amparo imediato à família nos momentos mais delicados da vida.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cuidamos de cada detalhe com respeito, sensibilidade e organização, proporcionando cerimônias <strong className="text-foreground">impecáveis, dignas, acolhedoras e memoráveis</strong>, que honram a história, a vida e as memórias de quem partiu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Além disso, o PAF também disponibiliza benefícios em vida e atendimentos assistidos como Centro Clínico Plasfran, Óticas Plasfran em <strong className="text-foreground">empresas parceiras</strong>, integrando o cuidado com a família em todos os momentos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Memorial Célebre + Por que escolher */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-card"
              >
                <img
                  src={memorialCelebre}
                  alt="Memorial Célebre"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-6">
                  Por que escolher o Grupo Plasfran?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Porque somos uma empresa com 20 anos de história, construída com base na <strong className="text-foreground">excelência, respeito e confiança</strong> das pessoas. Oferecemos serviços completos e integrados de <strong className="text-foreground">assistência funerária 24h</strong>, e estão sempre com o compromisso de <strong className="text-foreground">humanizado, eficiente e alto padrão de qualidade</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  No Grupo Plasfran, você encontra <strong className="text-foreground">segurança, transparência</strong> e um comprometimento verdadeiro com o bem-estar de sua <strong className="text-foreground">família</strong>, em todas as fases da vida.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team / Equipe Banner */}
        <section className="relative">
          <img
            src={equipePlasfran}
            alt="Equipe Grupo Plasfran"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="container pb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground italic">
                Com a Plasfran a vida fica mais leve
              </h2>
              <p className="text-primary-foreground/80 mt-3 max-w-2xl mx-auto text-sm md:text-base">
                Somos especialistas em proteção, cuidado e respeito em cada detalhe. Oferecemos momentos mais leves, transformando dificuldades em soluções humanas e seguras.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 md:py-28 bg-muted">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">Depoimentos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Deixe seu depoimento sobre sua experiência no Grupo Plasfran e compartilhe as histórias e momentos especiais que viveu conosco. Seu relato é muito importante para fortalecer nossa família Plasfran!
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                  <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://wa.me/5588999657559"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Novo depoimento
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Planos;
