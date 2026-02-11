import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, Globe2, ShieldCheck, Package, ArrowRight, Clock3, FileCheck2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { globalDestinations } from "@/data/marketing";

const shippingSteps = [
  {
    icon: Package,
    title: "Choose products",
    text: "Pick from gift-ready products and add delivery details for your recipient.",
  },
  {
    icon: FileCheck2,
    title: "Compliance checks",
    text: "We verify packaging and declarations for destination-specific shipping requirements.",
  },
  {
    icon: Plane,
    title: "International dispatch",
    text: "Orders are routed through trusted shipping partners with milestone tracking updates.",
  },
  {
    icon: Clock3,
    title: "Delivered with support",
    text: "Our support team stays available until your package reaches the final destination.",
  },
];

const destinationFlagCodes: Record<string, string> = {
  "United States": "us",
  "Canada": "ca",
  "United Kingdom": "gb",
  "Australia": "au",
  "Singapore": "sg",
  "UAE": "ae",
  "Germany": "de",
  "France": "fr",
  "Japan": "jp",
  "Malaysia": "my",
  "Netherlands": "nl",
  "New Zealand": "nz",
};

const GlobalShipping = () => {
  const featured = products.slice(0, 8);
  const destinationsWithFlags = globalDestinations.map((country) => ({
    country,
    code: destinationFlagCodes[country] ?? "in",
  }));
  const tickerCountries = [...destinationsWithFlags, ...destinationsWithFlags, ...destinationsWithFlags];
  const heroEtas = ["3-5 days", "4-6 days", "5-8 days", "4-7 days", "3-6 days", "5-9 days"];
  const heroLanes = destinationsWithFlags.slice(0, 6).map((item, idx) => ({
    ...item,
    eta: heroEtas[idx % heroEtas.length],
  }));
  const countryChipThemes = [
    "border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50",
    "border-cyan-200 bg-gradient-to-r from-cyan-50 to-sky-50",
    "border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50",
    "border-rose-200 bg-gradient-to-r from-rose-50 to-orange-50",
    "border-violet-200 bg-gradient-to-r from-violet-50 to-fuchsia-50",
    "border-lime-200 bg-gradient-to-r from-lime-50 to-green-50",
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent to-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full border border-primary-foreground/50" />
          <div className="absolute bottom-6 right-6 w-52 h-52 rounded-full border border-primary-foreground/35" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-10 lg:items-center">
            <div className="min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase text-xs tracking-[0.2em] mb-4 text-primary-foreground/80"
              >
                Send Gifts Abroad
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-3xl"
              >
                Deliver handcrafted Indian flavors to loved ones worldwide
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="text-primary-foreground/80 mt-6 text-lg max-w-2xl"
              >
                Premium packaging, destination-aware compliance, and transparent tracking for stress-free international gifting.
              </motion.p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/products" className="bg-secondary text-secondary-foreground px-7 py-3 rounded-xl font-semibold">
                  Shop Gift Boxes
                </Link>
                <Link
                  to="/faqs"
                  className="px-7 py-3 rounded-xl border border-primary-foreground/40 font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  Shipping FAQs
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="hidden lg:block"
            >
              <div className="relative mx-auto max-w-[500px]">
                {heroLanes.slice(0, 3).map((item, i) => (
                  <motion.div
                    key={`hero-chip-${item.country}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -6, 0] }}
                    transition={{ delay: 0.28 + i * 0.08, duration: 4.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute z-20 rounded-full border border-primary-foreground/25 bg-primary-foreground/12 backdrop-blur px-3 py-1.5 text-xs ${
                      i === 0 ? "-top-4 -left-6" : i === 1 ? "top-12 -right-8" : "bottom-8 -left-10"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${item.code}.png`}
                        alt={`${item.country} flag`}
                        loading="lazy"
                        className="w-4 h-3 rounded-[2px] object-cover border border-primary-foreground/30"
                      />
                      <span>{item.country}</span>
                    </div>
                  </motion.div>
                ))}

                <div className="relative rounded-3xl border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between mb-4">
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/90">
                      <Globe2 className="w-3.5 h-3.5" />
                      Live Global Lanes
                    </p>
                    <span className="text-[11px] rounded-full border border-primary-foreground/30 px-2 py-1 text-primary-foreground/80">
                      {heroLanes.length} Active
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {heroLanes.map((item, i) => (
                      <motion.div
                        key={item.country}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.06 }}
                        className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/6 px-3 py-2.5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={`https://flagcdn.com/w80/${item.code}.png`}
                            alt={`${item.country} flag`}
                            loading="lazy"
                            className="w-8 h-6 rounded-sm object-cover border border-primary-foreground/30"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold truncate">{item.country}</p>
                            <p className="text-[11px] text-primary-foreground/70">Priority route</p>
                          </div>
                        </div>
                        <span className="text-[11px] text-primary-foreground/75">{item.eta}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/6 px-3 py-2">
                      <p className="text-[11px] text-primary-foreground/70">Docs</p>
                      <p className="text-sm font-semibold">Customs-ready</p>
                    </div>
                    <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/6 px-3 py-2">
                      <p className="text-[11px] text-primary-foreground/70">Tracking</p>
                      <p className="text-sm font-semibold">Milestone live</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-16 -left-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 10.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="uppercase text-xs tracking-[0.18em] text-primary mb-3">Available Destinations</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Countries we currently ship to</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <Globe2 className="w-4 h-4" />
            Coverage expanding every quarter
          </div>
        </div>

          <div className="space-y-3 mb-8">
            <div className="flex animate-marquee whitespace-nowrap gap-3">
              {tickerCountries.map((item, i) => (
                <div
                  key={`dest-a-${item.country}-${i}`}
                  className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${countryChipThemes[i % countryChipThemes.length]}`}
                >
                  <img
                    src={`https://flagcdn.com/w40/${item.code}.png`}
                    alt={`${item.country} flag`}
                    loading="lazy"
                    className="w-5 h-4 rounded-[2px] object-cover border border-border/70"
                  />
                  <span className="whitespace-nowrap text-xs sm:text-sm font-semibold">{item.country}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-3 opacity-85">
              {tickerCountries.map((item, i) => (
                <div
                  key={`dest-b-${item.country}-${i}`}
                  className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${countryChipThemes[(i + 2) % countryChipThemes.length]}`}
                >
                  <img
                    src={`https://flagcdn.com/w40/${item.code}.png`}
                    alt={`${item.country} flag`}
                    loading="lazy"
                    className="w-5 h-4 rounded-[2px] object-cover border border-border/70"
                  />
                  <span className="whitespace-nowrap text-xs sm:text-sm font-semibold">{item.country}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <p className="uppercase text-xs tracking-[0.18em] text-primary mb-3">Shipping Flow</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">How global delivery works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {shippingSteps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </motion.article>
            ))}
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6 mt-8 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground/85 leading-relaxed">
              Customs duties and import taxes are destination-specific and can be collected by local authorities or shipping partners.
              Please review our policy page before placing international orders.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="uppercase text-xs tracking-[0.18em] text-primary mb-3">Best for Global Delivery</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Long shelf-life favorites</h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View all products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} compactMedia />
          ))}
        </div>
      </section>
    </main>
  );
};

export default GlobalShipping;
