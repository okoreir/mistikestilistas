import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5491158081110";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola, soy ${formData.name}. Tel: ${formData.phone}. ${formData.message}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4 text-center"
        >
          Contacto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-16 text-center"
        >
          Encontranos <span className="text-gradient-gold italic">acá</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-body font-medium text-foreground">Dirección</p>
                <p className="text-muted-foreground">Matheu 3996, San Martín, Buenos Aires</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-body font-medium text-foreground">Horarios</p>
                <p className="text-muted-foreground">Martes a Sábado: 9:00 – 19:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-body font-medium text-foreground">WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold-light transition-colors">
                  +54 11 5808-1110
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-body font-medium text-foreground">Instagram</p>
                <a href="https://www.instagram.com/mistik.estilistas/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold-light transition-colors">
                  @mistik.estilistas
                </a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0!2d-58.54!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMatheu+3996%2C+San+Mart%C3%ADn!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación de Mistik Estilistas"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Nombre</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Teléfono</label>
              <input
                type="tel"
                required
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Tu teléfono"
              />
            </div>

            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Mensaje</label>
              <textarea
                required
                maxLength={500}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-4 rounded-lg hover:shadow-gold transition-all duration-300 hover:scale-[1.02]"
            >
              Enviar por WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
