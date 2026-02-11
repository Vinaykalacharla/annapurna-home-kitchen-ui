import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Leaf, HandPlatter, ShieldCheck } from "lucide-react";
import aboutStory from "@/assets/about-story.jpg";

const storyMilestones = [
  {
    year: "1999",
    title: "Recipe roots",
    detail:
      "Family recipes from Andhra kitchens became the foundation of our product standards and flavor profile.",
  },
  {
    year: "2014",
    title: "Small-batch model",
    detail:
      "We formalized batch sizes, ingredient sourcing checks, and controlled production logs for consistency.",
  },
  {
    year: "2021",
    title: "Direct-to-customer launch",
    detail:
      "Our online storefront opened with curated pickles, podilu, and festive snack assortments.",
  },
  {
    year: "2026",
    title: "Scale with quality",
    detail:
      "Pan-India and global gifting programs expanded while preserving handcrafted process standards.",
  },
];

const values = [
  {
    icon: HandPlatter,
    title: "Craft over shortcuts",
    text: "We prioritize slow, careful production over high-volume compromises.",
  },
  {
    icon: Leaf,
    title: "Ingredient clarity",
    text: "No vague labels. We focus on transparent ingredient lists and practical shelf-life guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability first",
    text: "Packaging, dispatch discipline, and support quality are treated as core product features.",
  },
  {
    icon: HeartHandshake,
    title: "Community impact",
    text: "A part of growth is redirected to purposeful food-led community initiatives.",
  },
];

const OurStory = () => {
  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase text-xs tracking-[0.2em] text-primary mb-4"
        >
          Our Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl"
        >
          Built from family kitchens, refined for modern gifting and dependable delivery
        </motion.h1>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg"
          >
            <img src={aboutStory} alt="Traditional preparation at Annapurna kitchen" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">From memory to method</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Annapurna started with one goal: preserve regionally authentic flavors while delivering them in a format that
              feels premium, dependable, and gift-worthy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every new product goes through recipe calibration, shelf-life testing, and packaging simulation before launch.
              That process helps us keep taste integrity while scaling to more families and more cities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today our catalog serves everyday meals, festive moments, and thoughtful gifting programs in India and abroad.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {storyMilestones.map((mile, i) => (
              <motion.article
                key={mile.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <p className="text-xs tracking-[0.15em] uppercase text-primary mb-2">{mile.year}</p>
                <h3 className="font-heading text-2xl font-semibold mb-2">{mile.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mile.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">What we stand for</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">Want to collaborate with us?</h3>
            <p className="text-primary-foreground/75 mt-2">Let us build meaningful food-led campaigns and gifting experiences together.</p>
          </div>
          <Link
            to="/partner-with-us"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold w-fit"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
