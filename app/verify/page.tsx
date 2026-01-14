"use client";

import { useState, useEffect, Suspense } from "react";
import {
  LuCircleCheck,
  LuCalendar,
  LuMail,
  LuArrowRight,
  LuPhone,
} from "react-icons/lu";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { verifyPayment } from "../actions/verify";
import { resendEmail } from "../actions/resendEmail";

const VerifyContent = () => {
  const [formData, setFormData] = useState<any>(null);
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  useEffect(() => {
    const runVerification = async () => {
      if (!reference) return;

      const verification = await verifyPayment(reference);
      setFormData(verification.data);

      const formData = {
        name: verification?.data?.metadata?.name,
        email: verification?.data?.customer?.email,
        phone: verification?.data?.metadata?.phone,
        caseType: verification?.data?.metadata?.caseType,
        message: verification?.data?.metadata?.message,
      };

      if (verification?.data?.status === "success") {
        await resendEmail(formData, reference);
      }
    };
    runVerification();
  }, [reference]);
  return (
    // <Layout>
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <LuCircleCheck className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-primary mb-3">
          Booking Confirmed!
        </h1>
        <p className="text-muted-foreground mb-8">
          Your consultation has been successfully booked. We'll be in touch
          shortly.
        </p>

        {/* Booking Details Card */}
        <div className="bg-card border rounded-lg p-6 mb-8 text-left">
          <h2 className="font-semibold text-lg mb-4 text-primary">
            Booking Details
          </h2>

          <div className="space-y-3">
            {/* {reference && ( */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary text-sm font-bold">#</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Reference Number
                </p>
                <p className="font-mono font-medium">{reference}</p>
              </div>
            </div>
            {/* )} */}

            {/* {name && ( */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <LuCalendar className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Booked By</p>
                <p className="font-medium">{formData?.metadata?.name}</p>
              </div>
            </div>
            {/* )} */}

            {/* {email && ( */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <LuMail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Confirmation Email Sent To
                </p>
                <p className="font-medium">{formData?.customer?.email}</p>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-accent/50 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold mb-3">What Happens Next?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <LuArrowRight className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>Our team will review your consultation request</span>
            </li>
            <li className="flex items-start gap-2">
              <LuArrowRight className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>You'll receive a call to schedule your appointment</span>
            </li>
            <li className="flex items-start gap-2">
              <LuArrowRight className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>Prepare any relevant documents for your consultation</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
          <LuPhone className="w-4 h-4" />
          <span>Questions? Call us at (234) 123-4567</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            <Link href="/">Return Home</Link>
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
            <Link href="/contact">Book Another Consultation</Link>
          </button>
        </div>
      </div>
    </div>
    // </Layout>
  );
};

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
