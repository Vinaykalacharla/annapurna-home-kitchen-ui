import { motion } from "framer-motion";
import aboutImg from "@/assets/about-story.jpg";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.15 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

const About = () => (
  <main>
    {/* Hero */}
    <section className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Story
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-lg mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A journey rooted in tradition, love, and the authentic flavors of South India.
        </motion.p>
      </div>
    </section>

    {/* Story */}
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="rounded-2xl overflow-hidden shadow-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <img src={aboutImg} alt="Traditional cooking" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-6">
            From Our Kitchen to Yours
          </motion.h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            {[
              "Annapurna Home Foods was born from a simple belief — that the best food is made at home, with love and patience. Our founder grew up in a traditional Andhra household where every meal was a celebration of flavors.",
              "The pickles were sun-dried on the terrace, the podis were hand-ground on stone, and the odiyalu were shaped by caring hands. These weren't just recipes — they were rituals passed down through generations.",
              "Today, we bring those same traditions to your kitchen. Every jar of pickle, every packet of podi is made using the same age-old methods, the same premium ingredients, and the same unwavering commitment to quality.",
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp} custom={i + 1}>{text}</motion.p>
            ))}
            <motion.p variants={fadeUp} custom={4} className="font-medium text-foreground">
              No shortcuts. No preservatives. Just pure, authentic, homemade goodness.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.h2
          className="text-3xl font-heading font-bold text-foreground text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          What We Stand For
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            { emoji: "🌾", title: "Natural Ingredients", desc: "We source the freshest produce and finest spices directly from local farmers." },
            { emoji: "👩‍🍳", title: "Handcrafted Quality", desc: "Every product is made in small batches, ensuring consistent taste and quality." },
            { emoji: "🏡", title: "Family Tradition", desc: "Recipes that have been perfected over generations, preserving authentic South Indian heritage." },
          ].map((v) => (
            <motion.div key={v.title} variants={scaleIn} className="bg-background rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl mb-4">{v.emoji}</div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </main>
);

export default About;
