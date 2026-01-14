"use client";

import { useEffect, useState } from "react";
import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";
import useFormValidator from "@/hooks/useFormValidator";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { values, errors, handleChange, validate, resetForm } =
    useFormValidator();

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-card p-8 rounded-2xl border border-border">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Send Us a Message
        </h2>
        <p className="text-muted-foreground mb-6">
          Fill out the form below and we'll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Full Name *
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={values.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Email *
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                type="email"
                value={values.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange("email", e.target.value)
                }
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Phone
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={values.phone}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/\D/g, "");
                  handleChange("phone", onlyNums);
                }}
                placeholder="23478095678901"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Subject *
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                value={values.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                placeholder="How can we help?"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              Message *
            </label>
            <textarea
              className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              rows={5}
              value={values.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Please describe your legal matter..."
            />
          </div>

          <button
            type="submit"
            className="dark:hover:bg-accent/80 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold"
          >
            {isLoading ? "Sending..." : "Send Message"}
            <LuSend className="ml-2 h-4 w-4" />
          </button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy. This does
            not create an attorney-client relationship.
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
