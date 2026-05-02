import { motion } from "framer-motion";
import { Sparkles, Heart, Scissors } from "lucide-react";

const features = [
  { icon: Scissors, label: "Técnica experta" },
  { icon: Heart, label: "Atención personalizada" },
  { icon: Sparkles, label: "Resultados visibles" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4"
          >
            Sobre Nosotros
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-8"
          >
            Tu <span className="text-gradient-gold italic">esencia</span>,{" "}
            nuestro arte
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6"
          >
            En Mistik Estilistas creemos que cada persona merece un look que
            refleje su esencia. Nos especializamos en color, balayage y cambios
            de imagen personalizados, combinando técnica, experiencia y escucha
            real.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed mb-12"
          >
            Liderado por un equipo de profesionales en constante
            formación, nuestro salón es un espacio donde la pasión por el
            cabello y la atención al detalle se fusionan para crear experiencias
            únicas
          </motion.p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
