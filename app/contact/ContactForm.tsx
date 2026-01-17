"use client";

import { useEffect, useState } from "react";
import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";
import { ContactFormData, contactSchema } from "@/lib/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactEmail } from "@/actions/resendEmail";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await contactEmail(data);
      reset();
    } catch (error) {}
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Full Name *
              </label>
              {/* name input */}
              <input
                {...register("name")}
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-xs pl-2 text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Email *
              </label>
              {/* email input */}
              <input
                {...register("email")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                type="email"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-xs pl-2 text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Phone
              </label>
              {/* phone input */}
              <input
                {...register("phone")}
                onInput={(e) => {
                  const input = e.target as HTMLInputElement;
                  input.value = input.value.replace(/[^0-9]/g, "");
                }}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="23478095678901"
              />
              {errors.phone && (
                <p className="text-xs pl-2 text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Subject *
              </label>
              {/* subject input */}
              <input
                {...register("subject")}
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="How can we help?"
              />
              {errors.subject && (
                <p className="text-xs pl-2 text-red-600">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              Message *
            </label>
            {/* message input */}
            <textarea
              {...register("message")}
              className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              rows={5}
              placeholder="Please describe your legal matter..."
            />
            {errors.message && (
              <p className="text-xs pl-2 text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="dark:hover:bg-accent/80 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
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
