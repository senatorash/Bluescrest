"use client";

import { LuCalendar, LuClock, LuCreditCard } from "react-icons/lu";
import { initializePayment } from "@/actions/paystack";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  consultationSchema,
  ConsultationFormData,
} from "@/lib/schemas/consultation.schema";

const BookingForm = () => {
  const [loadTime, setLoadTime] = useState<number>(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  const onSubmit = async (data: ConsultationFormData) => {
    const timeTaken = (Date.now() - loadTime) / 1000;

    if (data.organization || timeTaken < 3) {
      return new Promise((resolve) => setTimeout(resolve, 1500));
    }
    try {
      const sanitizedData = consultationSchema.parse(data);

      // Initialize Paystack on server
      const accessCode = await initializePayment(
        sanitizedData.email,
        50000,
        sanitizedData,
      );

      //    Load Paystack dynamically (Fixes SSR error)
      const PaystackPop = (await import("@paystack/inline-js")).default;
      const paystack = new PaystackPop();

      paystack.resumeTransaction(accessCode, {
        onSuccess: async (transaction: any) => {
          window.location.href = `/verify?reference=${transaction.reference}`;
        },
        onCancel: () => {},
      });
      reset();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };
  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
        Your Details
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            {/* name field */}
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Full Name *
            </label>
            <input
              {...register("name")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="text"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-xs pl-2 text-red-600 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            {/* email address field */}
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email Address *
            </label>
            <input
              {...register("email")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="email"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-xs pl-2 text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div
          className="absolute -left-2499.75 h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="organization">Organization Name</label>
          <input
            {...register("organization")}
            id="organization"
            placeholder="Personal or Company's Name"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            {/* phone number field */}
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Phone Number *
            </label>
            <input
              {...register("phone")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/[^0-9]/g, "");
              }}
              maxLength={15}
              placeholder="23470895678901"
            />
            {errors.phone && (
              <p className="text-xs pl-2 text-red-600 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            {/* case type field */}
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="caseType"
            >
              Type of Legal Matter
            </label>
            <select
              {...register("caseType")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select a practice area</option>
              <option value="corporate">Corporate Law</option>
              <option value="litigation">Civil Litigation</option>
              <option value="real-estate">Real Estate</option>
              <option value="family">Family Law</option>
              <option value="criminal">Criminal Defense</option>
              <option value="ip">Intellectual Property</option>
              <option value="other">Other</option>
            </select>
            {errors.caseType && (
              <p className="text-xs pl-2 text-red-600 mt-1">
                {errors.caseType.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            {/* preferred date field */}
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
              htmlFor="preferredDate"
            >
              <LuCalendar className="h-4 w-4" />
              Preferred Date
            </label>
            <input
              {...register("preferredDate")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="date"
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.preferredDate && (
              <p className="text-xs pl-2 text-red-600 mt-1">
                {errors.preferredDate.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            {/* preferred time field */}
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
              htmlFor="preferredTime"
            >
              <LuClock className="h-4 w-4" />
              Preferred Time
            </label>
            <select
              {...register("preferredTime")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select a time slot</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
            {errors.preferredTime && (
              <p className="text-xs pl-2 text-red-600 mt-1">
                {errors.preferredTime.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          {/* message field */}
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="description"
          >
            Brief Description of Your Legal Matter
          </label>
          <textarea
            {...register("message")}
            className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            // id="description"
            // name="description"
            placeholder="Please provide a brief overview of your legal situation..."
            rows={4}
          />
          {errors.message && (
            <p className="text-xs pl-2 text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="dark:hover:bg-accent/80 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold h-11 rounded-md px-8 w-full"
          >
            <LuCreditCard className="h-5 w-5 mr-2" />
            {isSubmitting ? "Processing..." : "Pay ₦50,000 & Book Consultation"}
          </button>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Secure payment powered by Paystack. Your information is protected.
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
