import { LuScale, LuCircleCheck } from "react-icons/lu";
import Layout from "../components/layout/Layout";
import BookingForm from "./BookingForm";

const ConsultationPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-linear-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <LuScale className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Professional Legal Consultation
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Book a Consultation
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Schedule a one-on-one consultation with one of our experienced
                attorneys. Get personalized legal advice tailored to your
                specific situation.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Consultation Fee
                  </h2>
                  <p className="text-muted-foreground">
                    45-minute session with a senior attorney
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-primary">₦50,000</div>
                  <p className="text-sm text-muted-foreground">
                    One-time payment
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <LuCircleCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    45-minute session
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <LuCircleCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Senior attorney
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <LuCircleCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Personalized advice
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <LuCircleCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Case assessment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <LuCircleCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Strategy discussion
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <LuCircleCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Follow-up summary
                  </span>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConsultationPage;
