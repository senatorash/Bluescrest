"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight, LuAward, LuClock, LuUsers } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-background" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjgsMjggMCAxLDEgNTYsMGEyOCwyOCAwIDAsMSAtNTYsMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-accent font-medium tracking-wide uppercase text-sm"
              >
                Excellence in Legal Practice
              </motion.span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-foreground">
                Trusted Legal
                <span className="block text-primary">Counsel</span>
                <span className="block">for Your Future</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              With decades of combined experience, we provide strategic legal
              solutions tailored to protect your interests and achieve your
              goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="dark:hover:bg-transparent  dark:hover:border-2  border-accent dark:hover:text-accent inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold h-14 rounded-md px-10 text-base">
                <Link href="/consultation" className="flex items-center">
                  Schedule Consultation
                  <LuArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold h-14 rounded-md px-10 text-base">
                <Link href="/practice-areas">Our Practice Areas</Link>
              </button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <LuAward className="h-5 w-5" />
                  <span className="font-serif text-2xl font-semibold text-foreground">
                    25+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <LuUsers className="h-5 w-5" />
                  <span className="font-serif text-2xl font-semibold text-foreground">
                    2,500+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Cases Won</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <LuClock className="h-5 w-5" />
                  <span className="font-serif text-2xl font-semibold text-foreground">
                    24/7
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                alt="Law office interior"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-8 bottom-12 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs"
            >
              <p className="text-sm italic text-muted-foreground">
                "Bluecrest Attorneys provided exceptional representation. Their
                dedication to our case was unmatched."
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-serif font-semibold text-primary">
                  AI
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Alex Ikechukwu
                  </p>
                  <p className="text-xs text-muted-foreground">
                    CEO, Mitro-Gas
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
