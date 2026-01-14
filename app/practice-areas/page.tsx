"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { areas } from "./areasData";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const practiceAreas = () => {
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
              Our Expertise
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Practice Areas
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our attorneys bring deep expertise across a wide range of legal
              disciplines, providing comprehensive solutions tailored to your
              unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-12">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 p-8 bg-card border border-border rounded-2xl hover:border-accent/30 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center">
                      <area.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      {area.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                  <button className="p-3 px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                    <Link href="/contact" className="flex items-center">
                      Get Legal Help
                      <LuArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </button>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                    Services Include
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {area.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default practiceAreas;
