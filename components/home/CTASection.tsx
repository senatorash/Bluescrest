"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight, LuPhone, LuMail } from "react-icons/lu";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-linear-to-br from-secondary via-card to-secondary rounded-3xl overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-2 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Content */}
              <div className="space-y-6">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm">
                  Get Started Today
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                  Ready to Discuss Your Legal Needs?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Schedule a free consultation with one of our experienced
                  attorneys. We'll listen to your situation and provide honest,
                  straightforward advice.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button className="dark:hover:bg-accent/80 inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold h-14 rounded-md px-10 text-base">
                    <Link className="flex items-center" href="/contact">
                      Book Consultation
                      <LuArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 lg:pl-12 lg:border-l lg:border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <LuPhone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Call Us
                    </p>
                    <p className="font-serif text-xl font-semibold text-foreground">
                      +234-(0)-708-831-2857
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <LuMail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Email Us
                    </p>
                    <p className="font-serif text-xl font-semibold text-foreground">
                      bluecrestattorneys@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTASection;
