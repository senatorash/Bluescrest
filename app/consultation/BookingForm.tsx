"use client";

import { useState } from "react";
import useBookingFormValidator from "@/hooks/useBookingFormValidator";
import { initializePayment } from "../actions/paystack";
import { LuCalendar, LuClock, LuCreditCard } from "react-icons/lu";

const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { values, errors, handleChange, validate, resetForm } =
    useBookingFormValidator();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const isValid = validate();
      console.log("Form Valid:", isValid);
      if (!isValid) {
        setIsLoading(false);
        return;
      }

      // Initialize Paystack on server
      const accessCode = await initializePayment(values.email, 50000, values);

      //    Load Paystack dynamically (Fixes SSR error)
      const PaystackPop = (await import("@paystack/inline-js")).default;
      const paystack = new PaystackPop();

      paystack.resumeTransaction(accessCode, {
        onSuccess: async (transaction: any) => {
          window.location.href = `/verify?reference=${transaction.reference}`;
        },
        onCancel: () => setIsLoading(false),
      });
      resetForm();
    } catch (error) {
      console.error("Payment Error:", error);
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
        Your Details
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Full Name *
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="text"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email Address *
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Phone Number *
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={15}
              value={values.phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                handleChange("phone", onlyNums);
              }}
              placeholder="23470895678901"
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="caseType"
            >
              Type of Legal Matter
            </label>
            <select
              value={values.caseType}
              onChange={(e) => handleChange("caseType", e.target.value)}
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
              <p className="text-xs text-red-600 mt-1">{errors.caseType}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
              htmlFor="preferredDate"
            >
              <LuCalendar className="h-4 w-4" />
              Preferred Date
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="date"
              value={values.preferredDate}
              onChange={(e) => handleChange("preferredDate", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.preferredDate && (
              <p className="text-xs text-red-600 mt-1">
                {errors.preferredDate}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
              htmlFor="preferredTime"
            >
              <LuClock className="h-4 w-4" />
              Preferred Time
            </label>
            <select
              value={values.preferredTime}
              onChange={(e) => handleChange("preferredTime", e.target.value)}
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
              <p className="text-xs text-red-600 mt-1">
                {errors.preferredTime}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="description"
          >
            Brief Description of Your Legal Matter
          </label>
          <textarea
            className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="description"
            name="description"
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Please provide a brief overview of your legal situation..."
            rows={4}
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1">{errors.message}</p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="dark:hover:bg-accent/80 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold h-11 rounded-md px-8 w-full"
          >
            <LuCreditCard className="h-5 w-5 mr-2" />
            {isLoading ? "Processing..." : "Pay ₦50,000 & Book Consultation"}
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
