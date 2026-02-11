import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck, Truck, PackageCheck } from "lucide-react";
import { reviewHighlights } from "@/data/marketing";

const CustomerReviews = () => {
  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase text-xs tracking-[0.2em] text-primary mb-4"
        >
          Customer Reviews
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl"
        >
          Trusted by families, teams, and gifting managers across India and overseas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="text-muted-foreground text-lg mt-6 max-w-2xl"
        >
          Real feedback around taste, freshness, packaging quality, and delivery consistency.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { label: "Average rating", value: "4.8 / 5", icon: Star },
            { label: "Verified deliveries", value: "25K+", icon: Truck },
            { label: "Repeat buyers", value: "63%", icon: PackageCheck },
          ].map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-3xl font-heading font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewHighlights.map((review, i) => (
              <motion.article
                key={`${review.name}-${review.title}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="bg-background rounded-2xl border border-border p-6 relative"
              >
                <Quote className="absolute top-5 right-5 w-7 h-7 text-primary/15" />
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <h2 className="font-heading text-xl font-semibold mb-2">{review.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{review.text}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                  <p className="text-xs text-primary mt-2">Ordered: {review.product}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">Quality promise on every dispatch</h3>
            <p className="text-primary-foreground/75 mt-2">
              Final packaging inspection and freshness checks happen before every shipment.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg text-sm">
            <BadgeCheck className="w-4 h-4" />
            Verified post-delivery feedback loop
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomerReviews;
