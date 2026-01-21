"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";
import Image from "next/image";

const values = [
  "Unwavering commitment to client success",
  "Personalized legal strategies",
  "Transparent communication",
  "Proven track record of results",
];
const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/ba12.png"
                width={50}
                height={100}
                alt="Legal team meeting"
                className="object-cover w-full h-full hidden dark:block"
              />

              <Image
                src="/bc11.png"
                alt="Legal team meeting"
                width={50}
                height={100}
                className="object-cover w-full h-full block dark:hidden"
              />
            </div>

            {/* Accent Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg"
            >
              <span className="font-serif text-4xl font-bold block">15+</span>
              <span className="text-sm opacity-90">Years of Excellence</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm">
              About Our Firm
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              A Legacy of Legal Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bluecrest Attorneys is a Nigerian law firm providing strategic
              legal services across corporate and commercial law, litigation and
              dispute resolution, property and real estate, tax advisory, and
              fintech and financial services regulation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The firm is committed to delivering clear, practical, and
              commercially sound legal solutions that align with Nigerian law
              and regulatory requirements.
            </p>

            {/* Values List */}
            <ul className="space-y-3 pt-2">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <LuCircleCheck className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{value}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="dark:hover:bg-accent/80 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold h-11 rounded-md px-8">
                <Link href="/about" className="flex items-center">
                  Learn More About Us
                  <LuArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
