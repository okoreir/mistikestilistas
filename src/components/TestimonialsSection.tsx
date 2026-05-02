import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Siempre salgo más que satisfecho, la atención es increíble. Walter y su equipo son unos genios del color.",
    name: "Lucía M.",
  },
  {
    text: "Me hice un cambio de look completo y superó mis expectativas. No puedo dejar de mirarme al espejo.",
    name: "Carolina P.",
  },
  {
    text: "Llevo a mi mamá y la tratan con muchísimo cariño. Un lugar de confianza total.",
    name: "Martín G.",
  },
  {
    text: "El mejor balayage que me hicieron en la vida. Profesionales de verdad, se nota la diferencia.",
    name: "Valentina R.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4 text-center"
        >
          Testimonios
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-center"
        >
          Lo que dicen <span className="text-gradient-gold italic">nuestros clientes</span>
        </motion.h2>

        <div className="flex justify-center gap-1 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-muted-foreground font-body text-sm">4.8 / 5</span>
        </div>

        <div className="max-w-3xl mx-auto text-center relative min-h-[180px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: current === i ? 1 : 0,
                y: current === i ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center justify-center ${
                current === i ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <p className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="font-body text-primary tracking-wider uppercase text-sm">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === i ? "bg-primary w-8" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
