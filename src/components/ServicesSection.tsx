import { motion } from "framer-motion";
import serviceBalayage from "@/assets/service-balayage.jpg";
import serviceCortes from "@/assets/service-cortes.jpg";
import serviceTratamientos from "@/assets/service-tratamientos.jpg";
import serviceLook from "@/assets/service-look.jpg";

const services = [
  {
    title: "Balayage & Color",
    description: "Especialistas en técnicas modernas de coloración que iluminan tu cabello de forma natural.",
    image: serviceBalayage,
  },
  {
    title: "Cortes Personalizados",
    description: "Diseñamos tu corte según tu estilo, rostro y personalidad.",
    image: serviceCortes,
  },
  {
    title: "Tratamientos Capilares",
    description: "Hidratación, antifrizz y reparación profunda para un cabello saludable.",
    image: serviceTratamientos,
  },
  {
    title: "Cambios de Look",
    description: "Transformaciones completas con asesoramiento profesional.",
    image: serviceLook,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4 text-center"
        >
          Nuestros Servicios
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-16 text-center"
        >
          Lo que <span className="text-gradient-gold italic">hacemos mejor</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
