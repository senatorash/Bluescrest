"use client";

import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import { LuMapPin, LuPhone, LuMail, LuClock, LuSend } from "react-icons/lu";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-b from-secondary to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to discuss your legal needs? Reach out to schedule a free
              consultation with one of our experienced attorneys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Office Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <LuMapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Address
                      </h4>
                      <p className="text-muted-foreground">
                        Suite 207, Ikeja Plaza, Mobolaji Bank
                        <br />
                        Anthony Way, Ikeja, Lagos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <LuPhone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Phone
                      </h4>
                      <p className="text-muted-foreground">
                        +234-(0)-708-831-2857
                      </p>
                      <p className="text-sm text-muted-foreground">
                        24/7 for emergencies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <LuMail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Email
                      </h4>
                      <p className="text-muted-foreground">
                        bluecrestattorneys@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <LuClock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Office Hours
                      </h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Saturday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-xl overflow-hidden bg-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.98731568459473!3d40.74881797932882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
