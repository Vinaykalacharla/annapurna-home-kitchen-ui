import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, Heart, Shield, ArrowRight, Star, Truck, Clock, Award, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";
import picklesImg from "@/assets/category-pickles.jpg";
import odiyaluImg from "@/assets/category-odiyalu.jpg";
import podiluImg from "@/assets/category-podilu.jpg";
import specialImg from "@/assets/category-special.jpg";
import aboutStory from "@/assets/about-story.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categoryCards = [
  { name: "Pickles", slug: "pickles", image: picklesImg, desc: "Traditional sun-ripened pickles" },
  { name: "Odiyalu", slug: "odiyalu", image: odiyaluImg, desc: "Crispy sun-dried delicacies" },
  { name: "Podilu", slug: "podilu", image: podiluImg, desc: "Aromatic spice powders" },
  { name: "Special Home Foods", slug: "special", image: specialImg, desc: "Festive sweets & snacks" },
];

const whyChoose = [
  { icon: Heart, title: "Homemade with Love", desc: "Every product is handcrafted in small batches using time-honored family recipes." },
  { icon: Leaf, title: "No Preservatives", desc: "Pure, natural ingredients with zero artificial colors, flavors, or preservatives." },
  { icon: Shield, title: "Authentic Taste", desc: "Recipes passed down through generations, preserving the true South Indian flavors." },
];

const marqueeItems = [
  { icon: Truck, text: "Pan-India Delivery" },
  { icon: Leaf, text: "No-Preservative Vibes" },
  { icon: Clock, text: "Dispatch in 48 Hours, No Stress" },
  { icon: Award, text: "100% Homemade Energy" },
  { icon: Heart, text: "Fav by 10,000+ Families" },
  { icon: Shield, text: "Quality Check, No Cap" },
];

const testimonials = [
  { name: "Priya Reddy", location: "Hyderabad", rating: 5, text: "The Avakaya pickle tastes exactly like my grandmother used to make. Brings back so many memories! Absolutely love it." },
  { name: "Ramesh Kumar", location: "Bangalore", rating: 5, text: "Best quality podilu I've found online. The Kandi Podi with hot rice and ghee is heavenly. Will order again!" },
  { name: "Lakshmi Devi", location: "Chennai", rating: 5, text: "Ordered the Bellam Gavvalu for Sankranti. My whole family loved it. Authentic taste, perfect sweetness." },
  { name: "Suresh Babu", location: "Vijayawada", rating: 5, text: "The Chegodilu and Rice Sandige are our tea-time favorites now. Crispy, fresh, and truly homemade quality." },
  { name: "Anita Sharma", location: "Mumbai", rating: 5, text: "Living far from home, these pickles are a blessing. The Gongura pickle is outstanding — tangy and spicy perfection!" },
  { name: "Venkat Rao", location: "Delhi", rating: 5, text: "Ordered for my parents and they couldn't stop praising. The Nuvvula Podi is aromatic and flavorful. 10/10!" },
];

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

const pickleProducts = products.filter(p => p.category === "pickles");
const odiyaluProducts = products.filter(p => p.category === "odiyalu");
const podiluProducts = products.filter(p => p.category === "podilu");
const specialProducts = products.filter(p => p.category === "special");

const Index = () => {
  const [featuredReview, setFeaturedReview] = useState(0);
  const [pauseFeaturedReview, setPauseFeaturedReview] = useState(false);

  useEffect(() => {
    if (pauseFeaturedReview) return;
    const timer = window.setInterval(() => {
      setFeaturedReview((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [pauseFeaturedReview]);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease }}
        >
          <img src={heroBanner} alt="Traditional South Indian food spread" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-secondary font-medium tracking-widest uppercase text-sm mb-4"
            >
              Annapurna Home Foods
            </motion.p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Fresh Drop", "No Cap Homemade", "Snack Mood: ON"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.38 + i * 0.08 }}
                  className="px-3 py-1 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground text-xs font-semibold tracking-wide backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Cooking With Love
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-md"
            >
              Authentic South Indian homemade foods crafted with tradition, care, and full flavor energy. No shortcuts, only real taste.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products/pickles"
                className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products/special"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Marquee Banner */}
      <section className="bg-primary overflow-hidden py-3.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-2 mx-8 text-primary-foreground/90">
              <item.icon className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Our Collections</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Explore our range of authentic South Indian homemade products</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {categoryCards.map((cat, i) => (
            <motion.div key={cat.slug} variants={fadeUp} custom={i}>
              <Link
                to={`/products/${cat.slug}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-1">{cat.name}</h3>
                  <p className="text-primary-foreground/70 text-sm">{cat.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Best Sellers - Pickles */}
      <CategoryShowcase
        title="Heritage Pickles from Home"
        subtitle="Sun-ripened, hand-crafted pickles made the traditional way"
        products={pickleProducts}
        categorySlug="pickles"
      />

      {/* Best Sellers - Podilu */}
      <CategoryShowcase
        title="Authentic Spice Powders"
        subtitle="Roasted and ground fresh — the soul of every South Indian meal"
        products={podiluProducts}
        categorySlug="podilu"
        bgClass="bg-card"
      />

      {/* Best Sellers - Odiyalu */}
      <CategoryShowcase
        title="Crispy Sun-Dried Delicacies"
        subtitle="Traditional odiyalu — fry them golden for the perfect crunch"
        products={odiyaluProducts}
        categorySlug="odiyalu"
      />

      {/* Best Sellers - Special */}
      <CategoryShowcase
        title="Festive Sweets & Snacks"
        subtitle="Handmade treats that bring the warmth of home to every celebration"
        products={specialProducts}
        categorySlug="special"
        bgClass="bg-card"
      />

      {/* Why Choose Us */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-md mx-auto">What makes Annapurna Home Foods special</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[440px] mx-auto lg:mx-0"
          >
            <div className="aspect-[5/6] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
              <img src={aboutStory} alt="Our traditional kitchen" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-secondary text-secondary-foreground px-5 py-3 rounded-2xl shadow-lg hidden md:block">
              <p className="font-heading text-2xl font-bold">25+</p>
              <p className="text-xs font-medium">Years of Tradition</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
              From Our Kitchen to Your Table
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What started as a grandmother's passion for preserving traditional Andhra recipes has blossomed into Annapurna Home Foods — a brand dedicated to bringing the authentic flavors of South India to every household.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every pickle, every podi, every crispy odiyalu is made by hand using recipes passed down through generations. We use only the freshest ingredients, cold-pressed oils, and sun-drying techniques to ensure you taste the tradition in every bite.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary">24+</p>
                <p className="text-muted-foreground text-xs mt-1">Products</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary">10K+</p>
                <p className="text-muted-foreground text-xs mt-1">Happy Families</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground text-xs mt-1">Homemade</p>
              </div>
            </div>
            <Link
              to="/about"
              className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Read Our Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-card">
        <motion.div
          className="pointer-events-none absolute -top-20 -left-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold tracking-wide text-primary mb-4">
              <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
              Real Customer Energy
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">Loved by Families</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Voices from homes that now cook, snack, and celebrate with Annapurna flavors.</p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-7 lg:gap-8 items-start">
            <motion.article
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              onMouseEnter={() => setPauseFeaturedReview(true)}
              onMouseLeave={() => setPauseFeaturedReview(false)}
              className="relative min-w-0 rounded-3xl border border-primary/20 bg-background p-7 md:p-8 shadow-[0_16px_40px_-18px_rgba(15,65,45,0.35)] overflow-hidden"
            >
              <motion.div
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-secondary/30"
                animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full border border-primary/20"
                animate={{ y: [0, -7, 0], x: [0, 7, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Spotlight Review
                  </div>
                  <Quote className="w-9 h-9 text-primary/20" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${testimonials[featuredReview].name}-${featuredReview}`}
                    initial={{ opacity: 0, y: 22, scale: 0.97, rotateX: 8 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, y: -16, scale: 0.97 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: testimonials[featuredReview].rating }).map((_, si) => (
                        <Star key={`feature-star-${si}`} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                      "{testimonials[featuredReview].text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold">
                        {testimonials[featuredReview].name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonials[featuredReview].name}</p>
                        <p className="text-muted-foreground text-sm">{testimonials[featuredReview].location}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={`review-dot-${i}`}
                      type="button"
                      onClick={() => setFeaturedReview(i)}
                      className={`h-1.5 rounded-full transition-all ${featuredReview === i ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/50"}`}
                      aria-label={`Show review ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.article>

            <div className="space-y-4 min-w-0 overflow-hidden">
              <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex animate-marquee gap-4 whitespace-nowrap">
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <motion.article
                      key={`line-a-${t.name}-${i}`}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="min-w-[280px] rounded-2xl border border-border bg-background p-4 shadow-sm"
                    >
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <Star key={`line-a-star-${i}-${si}`} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-sm text-foreground/90 line-clamp-2">"{t.text}"</p>
                      <p className="text-xs text-muted-foreground mt-3 font-medium">{t.name}, {t.location}</p>
                    </motion.article>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex animate-marquee-reverse gap-4 whitespace-nowrap">
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <motion.article
                      key={`line-b-${t.name}-${i}`}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="min-w-[280px] rounded-2xl border border-border bg-background p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, si) => (
                            <Star key={`line-b-star-${i}-${si}`} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <Quote className="w-4 h-4 text-primary/25" />
                      </div>
                      <p className="text-sm text-foreground/90 line-clamp-2">"{t.text}"</p>
                      <p className="text-xs text-muted-foreground mt-3 font-medium">{t.name}, {t.location}</p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process / How It's Made */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">How It's Made</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Every step in our process is rooted in tradition and care</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            { step: "01", title: "Source", desc: "We hand-pick the freshest seasonal ingredients from trusted local farmers." },
            { step: "02", title: "Prepare", desc: "Traditional hand-pounding, stone-grinding, and slow-cooking methods." },
            { step: "03", title: "Sun-Dry & Cure", desc: "Natural sun-drying and aging processes for authentic flavor development." },
            { step: "04", title: "Pack & Ship", desc: "Carefully packed in food-grade containers and shipped fresh to your doorstep." },
          ].map((item) => (
            <motion.div key={item.step} variants={fadeUp} custom={parseInt(item.step)} className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-heading text-xl font-bold">{item.step}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Second Marquee */}
      <section className="bg-secondary/10 overflow-hidden py-3">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...Array(4)].flatMap((_, ri) =>
            ["🌶️ Avakaya", "🍋 Lemon Pickle", "🌿 Gongura", "🍅 Tomato Pickle", "🫓 Rice Sandige", "🥣 Kandi Podi", "🍯 Bellam Gavvalu", "🔥 Karapodi"].map((item, i) => (
              <span key={`${ri}-${i}`} className="mx-6 text-foreground/60 text-sm font-medium">{item}</span>
            ))
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-8 w-32 h-32 border border-primary-foreground/30 rounded-full" />
            <div className="absolute bottom-4 right-8 w-48 h-48 border border-primary-foreground/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary-foreground/10 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Taste the Tradition
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Order your favorite homemade foods today and experience the authentic flavors of South India, delivered to your doorstep.
            </p>
            <Link
              to="/products/pickles"
              className="bg-secondary text-secondary-foreground px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

/* Reusable Category Showcase Component - single-row auto slider */
const CategoryShowcase = ({
  title,
  subtitle,
  products: categoryProducts,
  categorySlug,
  bgClass = "bg-background",
}: {
  title: string;
  subtitle: string;
  products: typeof products;
  categorySlug: string;
  bgClass?: string;
}) => {
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);

  const totalItems = Math.max(1, categoryProducts.length);
  const visibleItems = Math.min(itemsPerView, Math.max(1, categoryProducts.length));
  const maxIndex = Math.max(0, categoryProducts.length - visibleItems);
  const showSliderControls = maxIndex > 0;

  useEffect(() => {
    const updateItemsPerView = () => setItemsPerView(getItemsPerView());
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // On touch-first devices, keep slider manual so users can inspect products.
    if (window.matchMedia("(hover: none)").matches) {
      setIsUserPaused(true);
    }
  }, []);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (!showSliderControls || isHoverPaused || isUserPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3600);
    return () => window.clearInterval(timer);
  }, [maxIndex, showSliderControls, isHoverPaused, isUserPaused]);

  const pauseForManualControl = () => setIsUserPaused(true);
  const goPrev = () => {
    pauseForManualControl();
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  const goNext = () => {
    pauseForManualControl();
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className={bgClass}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground max-w-md">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            {showSliderControls && (
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrev}
                  aria-label={`Previous ${title} products`}
                  className="w-9 h-9 rounded-full border border-border bg-background text-foreground hover:bg-muted transition-colors inline-flex items-center justify-center"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goNext}
                  aria-label={`Next ${title} products`}
                  className="w-9 h-9 rounded-full border border-border bg-background text-foreground hover:bg-muted transition-colors inline-flex items-center justify-center"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            <Link
              to={`/products/${categorySlug}`}
              className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHoverPaused(true)}
          onMouseLeave={() => setIsHoverPaused(false)}
          onTouchStart={pauseForManualControl}
          onWheel={pauseForManualControl}
        >
          <motion.div
            className="flex -mx-2 sm:-mx-3"
            animate={{ x: `-${(activeIndex * 100) / totalItems}%` }}
            transition={{ duration: 0.65, ease }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {categoryProducts.map((product, i) => (
              <motion.div
                key={product.id}
                variants={fadeUp}
                custom={i}
                style={{ flex: `0 0 ${100 / visibleItems}%` }}
                className="px-2 sm:px-3 flex-shrink-0"
              >
                <ProductCard product={product} compactMedia />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Index;

