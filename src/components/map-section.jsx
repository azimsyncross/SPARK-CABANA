import { motion } from "framer-motion";
import SectionHeader from "./section-header";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Our Location"
          title="Visit Our Office"
          description="Visit us in person or get directions to our location in Seattle."
        />
        <motion.div
          className="mt-12 h-[450px] w-full rounded-lg overflow-hidden border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.5952678287786!2d-81.19898892572293!3d28.249961701352923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd8ce2b0ceece7%3A0xf4eabd2bdaadf2ca!2s1915%20Pine%20Grove%20Rd%2C%20St%20Cloud%2C%20FL%2034771%2C%20USA!5e0!3m2!1sen!2sbd!4v1754879690694!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert-[90%] contrast-125"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
