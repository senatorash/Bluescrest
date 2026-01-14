"use client";

import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import { values } from "./aboutData";

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-linear-to-b from-secondary to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              A Legacy Built on Trust
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, Bluecrest Attorneys has been a pillar of legal
              excellence, representing clients across a broad spectrum of legal
              matters with unwavering dedication and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80"
                alt="Law office"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bluecrest Attorneys was founded in 2010 by a group of
                outstanding esquires with a clear vision: to create a law firm
                that combines exceptional legal talent with genuine care for
                clients. What began as a small practice has grown into one of
                the region's most respected firms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, our team of over 30 attorneys continues to uphold the
                founding principles of integrity, excellence, and client-focused
                service. We've successfully handled thousands of cases across
                corporate law, litigation, real estate, family law, and estate
                planning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to the community extends beyond the courtroom. We
                actively participate in pro bono work and support various
                charitable initiatives that make a difference in people's lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make and every case we
              handle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
