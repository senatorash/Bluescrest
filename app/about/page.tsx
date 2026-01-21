"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { values } from "./aboutData";
import Image from "next/image";

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-linear-to-b from-secondary to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Bluecrest Attorneys
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Nigerian law firm providing strategic legal services across
              corporate and commercial law, litigation and dispute resolution,
              property and real estate, tax advisory, and fintech and financial
              services regulation. We are committed to delivering clear,
              practical, and commercially sound legal solutions that align with
              Nigerian law and regulatory requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80 */}
              <Image
                width={600}
                height={400}
                src="/about1.jpg"
                alt="Law office"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Our Commitment
              </h2>
              <p className="flex flex-col text-muted-foreground leading-relaxed">
                <span className="text-accent underline text-sm font-bold font-serif">
                  Corporate and Commercial Law
                </span>
                In our corporate and commercial practice, we advise companies on
                incorporation, corporate governance, restructuring, mergers and
                acquisitions, and regulatory compliance, with particular focus
                on engagements with the Corporate Affairs Commission (CAC) and
                sector-specific regulators. We support both local and
                foreign-owned businesses in navigating Nigeria’s evolving
                corporate landscape.
              </p>
              <p className="flex flex-col text-muted-foreground leading-relaxed">
                <span className="text-accent underline text-sm font-bold font-serif">
                  Litigation and Dispute Resolution
                </span>
                Our litigation and dispute resolution practice offers robust
                representation before courts and tribunals across Nigeria, as
                well as strategic support in arbitration and other alternative
                dispute resolution mechanisms. We act for individuals,
                companies, and institutions in commercial, regulatory, and
                tax-related disputes, always with a focus on efficiency and
                results.
              </p>
              <p className="flex flex-col text-muted-foreground leading-relaxed">
                <span className="text-accent underline text-sm font-bold font-serif">
                  Real Estate
                </span>
                Through our property and real estate practice, we provide
                comprehensive legal support on land acquisition, title
                verification, perfection of interests, leases, and property
                development transactions. We guide clients through regulatory
                processes involving land registries and relevant state
                authorities, ensuring compliance and protection of property
                rights.
              </p>
              <p className="flex flex-col text-muted-foreground leading-relaxed">
                <span className="text-accent underline text-sm font-bold font-serif">
                  Tax Law
                </span>
                In the area of tax law, BlueCrest Attorneys advises on tax
                planning, compliance, and dispute resolution involving the
                Nigerian Revenue Service (NRS) and relevant State Internal
                Revenue Services. Our approach helps clients manage tax
                exposure, meet statutory obligations, and effectively respond to
                audits and assessments.
              </p>
              <p className="flex flex-col text-muted-foreground leading-relaxed">
                <span className="text-accent underline text-sm font-bold font-serif">
                  Fintech and Financial Services
                </span>
                Our fintech and financial services practice supports banks,
                fintech companies, payment service providers, and other
                financial institutions on licensing, regulatory compliance, and
                operational structuring under the oversight of the Central Bank
                of Nigeria (CBN), Securities and Exchange Commission (SEC), and
                the Federal Competition and Consumer Protection Commission
                (FCCPC). We also advise on data protection, consumer protection,
                and emerging regulatory frameworks affecting digital finance in
                Nigeria.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                At BlueCrest Attorneys, we combine strong legal expertise with
                deep understanding of Nigeria’s regulatory environment. Our
                clients rely on us for responsive service, sound judgment, and
                legal strategies that protect value and support long-term
                success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make and every case we
              handle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
