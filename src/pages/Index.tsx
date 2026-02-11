import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, Heart, Shield, ArrowRight, Star, Truck, Clock, Award, Quote } from "lucide-react";
import { motion } from "framer-motion";
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
  { icon: Leaf, text: "No Preservatives" },
  { icon: Clock, text: "Dispatch Within 48 Hours" },
  { icon: Award, text: "100% Homemade" },
  { icon: Heart, text: "Loved by 10,000+ Families" },
  { icon: Shield, text: "Quality Guaranteed" },
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
              Authentic South Indian homemade foods crafted with tradition, care, and the finest natural ingredients.
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
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
              <img src={aboutStory} alt="Our traditional kitchen" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl shadow-lg hidden md:block">
              <p className="font-heading text-3xl font-bold">25+</p>
              <p className="text-sm font-medium">Years of Tradition</p>
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
      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Loved by Families</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Real reviews from our happy customers across India</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

/* Reusable Category Showcase Component — single-row horizontal scroll */
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
  const [dragConstraint, setDragConstraint] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateConstraint = () => {
      if (containerRef.current && scrollRef.current) {
        const scrollW = scrollRef.current.scrollWidth;
        const containerW = containerRef.current.offsetWidth;
        setDragConstraint(Math.min(0, -(scrollW - containerW)));
      }
    };
    updateConstraint();
    window.addEventListener("resize", updateConstraint);
    return () => window.removeEventListener("resize", updateConstraint);
  }, [categoryProducts]);

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
          <Link
            to={`/products/${categorySlug}`}
            className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm shrink-0"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            ref={scrollRef}
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: dragConstraint, right: 0 }}
            dragElastic={0.1}
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
                className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] flex-shrink-0"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Index;
