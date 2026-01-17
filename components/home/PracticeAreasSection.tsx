"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowBigRight } from "react-icons/lu";
import { practiceAreas } from "./homeData";

const PracticeAreasSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Our Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Practice Areas
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full range of legal services to meet the diverse needs of
            our clients, backed by decades of experience and a commitment to
            excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          //   variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              //   variants={itemVariants}
              className="group relative p-8 bg-card border border-border rounded-xl hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <area.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {area.description}
              </p>
              <Link
                href="/practice-areas"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Learn More
                <LuArrowBigRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
