import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5491158081110?text=Hola%2C%20quiero%20reservar%20un%20turno";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-gold blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light mb-6"
        >
          ¿Lista para tu{" "}
          <span className="text-gradient-gold italic">cambio de look</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Reservá tu turno y viví la experiencia Mistik. Estamos para ayudarte a encontrar el look que te representa.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-gold px-10 py-5 rounded-full text-primary-foreground font-body font-bold text-lg hover:shadow-gold transition-all duration-300 hover:scale-105"
        >
          Reservar turno ahora
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
