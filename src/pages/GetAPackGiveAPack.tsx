import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake, Gift, ArrowRight, HandHeart } from "lucide-react";
import { impactTimeline } from "@/data/marketing";

const GetAPackGiveAPack = () => {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary/90 to-secondary text-secondary-foreground">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-44 h-44 rounded-full border border-secondary-foreground/40" />
          <div className="absolute bottom-8 right-8 w-64 h-64 rounded-full border border-secondary-foreground/30" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase text-xs tracking-[0.2em] mb-4 text-secondary-foreground/80"
          >
            Get a Pack, Give a Pack
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-3xl"
          >
            Every order contributes to shared meals and community impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 text-lg text-secondary-foreground/85 max-w-2xl"
          >
            We reserve a portion from selected campaigns to support partner NGOs and food-focused community initiatives.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-border bg-card p-7 md:p-8">
            <h2 className="text-3xl font-heading font-bold mb-4">How this program works</h2>
            <div className="space-y-4">
              {[
                "Campaign-tagged products contribute to the impact fund.",
                "Impact fund is mapped to verified non-profit partners.",
                "Support includes food packs, nutrition kits, or local meal drives.",
                "Periodic impact snapshots are published for transparency.",
              ].map((item, i) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-2">Impact with accountability</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              We partner with organizations that maintain clear beneficiary records and localized execution capacity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-xl p-4">
                <p className="text-2xl font-heading font-bold text-primary">12+</p>
                <p className="text-xs text-muted-foreground mt-1">Partner initiatives</p>
              </div>
              <div className="bg-background border border-border rounded-xl p-4">
                <p className="text-2xl font-heading font-bold text-primary">4 yrs</p>
                <p className="text-xs text-muted-foreground mt-1">Program continuity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Impact timeline</h2>
          <div className="space-y-5">
            {impactTimeline.map((item, i) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-background p-6 md:p-7"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary">{item.year}</p>
                  <Gift className="w-4 h-4 text-primary/80" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.details}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="rounded-3xl border border-border bg-background p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">Want to sponsor a focused campaign?</h3>
            <p className="text-muted-foreground mt-2">
              Corporates and communities can collaborate with us for event-led and festival-led impact campaigns.
            </p>
          </div>
          <Link
            to="/corporate-gifting"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold w-fit"
          >
            Start a Campaign
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-7 flex items-center gap-3 text-sm text-muted-foreground">
          <HandHeart className="w-4 h-4 text-primary" />
          Impact data can vary by season and campaign participation.
        </div>
      </section>
    </main>
  );
};

export default GetAPackGiveAPack;
