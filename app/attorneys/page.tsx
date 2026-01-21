"use client";

import { motion } from "framer-motion";
import { LuLinkedin, LuMail } from "react-icons/lu";
import Layout from "../../components/layout/Layout";
import { attorneys } from "./attorneysData";
const Attorneys = () => {
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
              Our Team
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Meet Our Attorneys
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team combines decades of experience with fresh perspectives,
              delivering innovative legal solutions for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full aspect-3/4 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <a
                        href={attorney.linkedIn}
                        className="p-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full hover:bg-accent transition-colors"
                      >
                        <LuLinkedin className="h-4 w-4 text-primary-foreground" />
                      </a>
                      <a
                        href={`mailto:${attorney.mail}`}
                        className="p-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full hover:bg-accent transition-colors"
                      >
                        <LuMail className="h-4 w-4 text-primary-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {attorney.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {attorney.specialty}
                  </p>
                  <p className="text-accent font-medium text-sm">
                    {attorney.title}
                  </p>
                  <p className="text-muted-foreground text-sm pt-2">
                    {attorney.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Attorneys;
