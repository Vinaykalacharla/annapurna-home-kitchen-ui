import { FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Building2,
  PackageCheck,
  Palette,
  Send,
  CheckCircle2,
  ArrowRight,
  BadgePercent,
  Sparkles,
  ChevronDown,
  Globe2,
  Gift,
  Layers3,
  PhoneCall,
  Mail,
  Leaf,
  Truck,
  MapPinned,
  Play,
  Pause,
} from "lucide-react";
import { toast } from "sonner";
import picklesImg from "@/assets/category-pickles.png";
import odiyaluImg from "@/assets/category-odiyalu.png";
import podiluImg from "@/assets/category-podilu.jpg";
import specialImg from "@/assets/category-special.jpg";
import aboutStory from "@/assets/about-story.jpg";
import kandiPodiVideo from "@/assets/product-kandi-podi.mp4";

const giftingFeatures = [
  {
    icon: Building2,
    title: "For Teams and Clients",
    text: "Employee rewards, onboarding gifts, festive dispatches, and premium client hampers.",
  },
  {
    icon: Palette,
    title: "Branding and Personalization",
    text: "Custom sleeves, inserts, logo stickers, message cards, and region-specific storytelling.",
  },
  {
    icon: PackageCheck,
    title: "Multi-Address Shipping",
    text: "Upload one sheet and we handle segmented packing, labels, and dispatch tracking.",
  },
  {
    icon: BadgePercent,
    title: "Volume Pricing",
    text: "Transparent tiers with dedicated account support for recurring monthly gifting plans.",
  },
];

const regionalThemes = [
  { name: "Tamil Nadu", note: "Classic sweets and snack traditions", image: specialImg },
  { name: "Kerala", note: "Balanced sweet-savory gifting curation", image: aboutStory },
  { name: "Andhra and Telangana", note: "Bold pickles and podi-driven boxes", image: picklesImg },
  { name: "Karnataka", note: "Everyday premium gifting assortments", image: odiyaluImg },
];

const giftCollections = [
  { title: "Traditional Sweets and Snacks", desc: "Festival and celebration-friendly assortments.", image: specialImg },
  { title: "Raw and Wild Honey Options", desc: "Wellness-oriented gifting picks.", image: podiluImg },
  { title: "Minimal Curated Gift Boxes", desc: "Lightweight and elegant for broad teams.", image: aboutStory },
  { title: "Premium Roasted and Flavor Packs", desc: "Tea-time and office snack formats.", image: odiyaluImg },
];

const packagingOptions = [
  { title: "Eco Felt Bag - Tall Triangle", image: specialImg },
  { title: "Branded Rigid Gift Box", image: aboutStory },
  { title: "Eco Felt Bag - Dual Handle Cube", image: podiluImg },
  { title: "Eco Felt Bag - Snack Tote", image: odiyaluImg },
];

const trustTicker = [
  { icon: Globe2, label: "Worldwide Delivery" },
  { icon: MapPinned, label: "Single and Multi-Location Delivery" },
  { icon: Gift, label: "Premium Gifts from INR 400" },
  { icon: Leaf, label: "Eco-Friendly Packaging" },
  { icon: Truck, label: "Fresh Batch Dispatch in 24-48 Hours" },
];

const corporateValueCards = [
  {
    title: "Diverse Budget Selections",
    text: "Flexible budgets from INR 400 to INR 4000 for teams of every size.",
    image: specialImg,
  },
  {
    title: "Flexible Delivery Options",
    text: "Single-address or multi-city dispatch with recipient-wise tracking support.",
    image: picklesImg,
  },
  {
    title: "Personalized Branding",
    text: "Logo sleeves, insert cards, and regional storytelling for stronger recall.",
    image: podiluImg,
  },
];

const clientNames = [
  "GlobalMart",
  "NexaWorks",
  "Blue River",
  "MangoTech",
  "Lakshmi Foods",
  "Hive Labs",
  "Aster Retail",
  "Northstar HR",
  "SouthGrid",
  "PixelMint",
  "Aquila Systems",
  "Bloom Supply",
];

const processSteps = [
  "Share requirement, budget band, and recipient count.",
  "Approve product shortlist and packaging mockups.",
  "Finalize branding assets and delivery sheet.",
  "Dispatch with live tracking and post-delivery closure report.",
];

const internationalDispatchLanes = [
  { code: "US", route: "Hyderabad to New York", state: "Customs review", eta: "ETA 72h" },
  { code: "UK", route: "Chennai to London", state: "Air uplifted", eta: "ETA 48h" },
  { code: "UAE", route: "Bengaluru to Dubai", state: "Customs cleared", eta: "ETA 24h" },
  { code: "SG", route: "Mumbai to Singapore", state: "Final mile handoff", eta: "ETA 36h" },
];

const globalLanePills = ["US", "UK", "UAE", "SG", "CA", "AU", "DE", "FR"];

const testimonials = [
  "Loved how they curated premium packs within our budget and timeline.",
  "The custom message cards made the gifting feel personal and warm.",
  "From customization to delivery, execution was smooth end-to-end.",
  "Our teams appreciated the quality and tasteful packaging.",
  "They managed multi-city dispatches without any confusion.",
  "Will definitely work with them again for future campaigns.",
];

const faqs = [
  {
    q: "How do I place a corporate order?",
    a: "Share your requirement through the form or contact us by call/WhatsApp. Our team will send curated options with pricing and dispatch plan.",
  },
  {
    q: "Can you customize with company logo and message?",
    a: "Yes. We support branded sleeves, logo stickers, inserts, and custom message cards based on quantity and timeline.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Standard corporate orders usually start around 50 units. Branded or custom packaging orders may require higher MOQs.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders are packed in 24-48 hours after confirmation. Final delivery timeline depends on destination and dispatch mode.",
  },
  {
    q: "Do you support international gifting?",
    a: "Yes. We ship to major countries with destination-aware packaging and clearance guidance.",
  },
  {
    q: "What payment options are available?",
    a: "We support UPI, cards, and bank transfer. For larger orders, structured payment milestones can be discussed.",
  },
  {
    q: "Can I modify or cancel after placing order?",
    a: "Please contact us quickly. We will accommodate updates if the order has not entered final packing or dispatch stage.",
  },
];

const logoCloud = ["PixelGrid", "SouthGrid", "Lakshmi Foods", "Bloom HR", "MangoTech", "Gokul Retail", "NexaWorks", "GreenMint"];
const WHATSAPP_LINK = "https://wa.me/919876543210";
const PHONE_LINK = "tel:+919876543210";
const clientRail = [...clientNames, ...clientNames];

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
};

const staggerGrid: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const riseIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const CorporateGifting = () => {
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [brandCount, setBrandCount] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const counterSectionRef = useRef<HTMLElement | null>(null);
  const counterInView = useInView(counterSectionRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!counterInView) return;
    const target = 500;
    const step = 10;
    const timer = window.setInterval(() => {
      setBrandCount((prev) => {
        const next = prev + step;
        if (next >= target) {
          window.clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 28);

    return () => window.clearInterval(timer);
  }, [counterInView]);

  const toggleClientVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setIsVideoPlaying(true);
      return;
    }
    video.pause();
    setIsVideoPlaying(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSending(false);
    toast.success("Request submitted. Our gifting team will contact you shortly.");
    e.currentTarget.reset();
  };

  const scrollToForm = () => {
    const form = document.getElementById("gifting-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground">
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{ backgroundPosition: ["0% 30%", "100% 70%", "0% 30%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.14), transparent 32%)" }}
        />
        <motion.div
          className="absolute top-20 right-[14%] w-16 h-16 rounded-2xl border border-primary-foreground/35"
          animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-12 h-12 rounded-full bg-secondary/45 blur-[2px]"
          animate={{ y: [0, -14, 0], x: [0, 4, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-8 w-44 h-44 rounded-full border border-primary-foreground/35" />
          <div className="absolute -bottom-14 right-8 w-72 h-72 rounded-full border border-primary-foreground/25" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(330px,420px)]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm tracking-[0.2em] uppercase text-primary-foreground/80 mb-4"
              >
                Corporate and Bulk Gifting
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl"
              >
                Curated gifting programs for teams, clients, events, and festive campaigns
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="text-primary-foreground/80 mt-6 text-lg max-w-2xl"
              >
                International-first gifting with customs-ready documentation, destination-safe packaging, and reliable cross-border execution.
              </motion.p>

              <motion.div
                variants={staggerGrid}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-3xl"
              >
                {[
                  "MOQ from 50 units",
                  "Branding support",
                  "Customs-compliant lanes",
                  "International gifting",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={riseIn}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-2 text-xs sm:text-sm font-medium"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  type="button"
                  onClick={scrollToForm}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-secondary text-secondary-foreground px-7 py-3 rounded-xl font-semibold"
                >
                  Request Call Back
                </motion.button>
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-primary-foreground/40 px-7 py-3 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  WhatsApp Team
                </motion.a>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.18, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              <motion.div
                className="absolute -inset-6 rounded-[34px] bg-gradient-to-br from-secondary/35 via-primary-foreground/10 to-accent/20 blur-2xl"
                animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.03, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative rounded-[28px] border border-primary-foreground/25 bg-primary-foreground/[0.09] p-5 backdrop-blur-xl shadow-[0_26px_46px_-32px_rgba(0,0,0,0.55)]">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/80">International Control Tower</p>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/40 bg-emerald-300/20 px-2.5 py-1 text-[10px] font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Global Sync
                  </span>
                </div>

                <div className="mb-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  <div className="flex animate-marquee gap-2 whitespace-nowrap">
                    {[...globalLanePills, ...globalLanePills].map((code, idx) => (
                      <span
                        key={`${code}-${idx}`}
                        className="inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/12 px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em]"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  {internationalDispatchLanes.map((item, idx) => (
                    <motion.div
                      key={`${item.code}-${item.route}`}
                      animate={{ y: [0, -3, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2.8 + idx * 0.35, delay: idx * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      className="relative overflow-hidden rounded-xl border border-primary-foreground/20 bg-background/85 px-3 py-2.5 text-foreground"
                    >
                      <motion.div
                        className="pointer-events-none absolute inset-y-0 -left-14 w-10 bg-gradient-to-r from-transparent via-primary/35 to-transparent"
                        animate={{ x: [-40, 230] }}
                        transition={{ duration: 2.4 + idx * 0.25, delay: idx * 0.3, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-foreground/90">{item.route}</p>
                        <span className="text-[10px] text-muted-foreground">{item.eta}</span>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between gap-2 text-[11px]">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                          {item.code}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-primary">
                        <Truck className="w-3.5 h-3.5" />
                          <span>{item.state}</span>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    { value: "98%", label: "On-time" },
                    { value: "24h", label: "Pack SLA" },
                    { value: "30+", label: "Countries" },
                  ].map((metric, idx) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.08 }}
                      className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-2 py-2 text-center"
                    >
                      <p className="text-sm font-bold">{metric.value}</p>
                      <p className="text-[10px] text-primary-foreground/80">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-10 md:py-14"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-primary mb-4">Trusted by teams and growing businesses</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {logoCloud.map((name) => (
            <motion.div
              key={name}
              whileHover={{ y: -3, scale: 1.02 }}
              className="h-12 rounded-lg border border-border bg-card flex items-center justify-center text-xs font-semibold text-foreground/70"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="border-y border-border/70 bg-secondary/10 py-4 overflow-hidden">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap gap-3 sm:gap-5">
            {[...trustTicker, ...trustTicker, ...trustTicker].map((item, i) => (
              <motion.div
                key={`row-a-${item.label}-${i}`}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 sm:px-4 py-2 text-xs sm:text-sm"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-3 sm:gap-5 mt-3 opacity-80">
            {[...trustTicker, ...trustTicker, ...trustTicker].map((item, i) => (
              <motion.div
                key={`row-b-${item.label}-${i}`}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 sm:px-4 py-2 text-xs sm:text-sm"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={counterSectionRef} className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-secondary/20 to-background">
        <div className="absolute -left-16 -top-20 w-56 h-56 rounded-full bg-primary/15 blur-2xl" />
        <div className="absolute -right-14 -bottom-20 w-64 h-64 rounded-full bg-secondary/30 blur-2xl" />
        <div className="relative container mx-auto px-4 py-14 md:py-20 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-primary mb-3">Market Trust Snapshot</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Global Brands Choose Us for Thoughtful Gifting</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Enterprise teams, startup founders, and HR leaders trust us for quality-first curation and on-time execution.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-card border border-border px-8 py-6"
          >
            <span className="text-5xl md:text-6xl font-heading font-bold text-primary">{brandCount}+</span>
            <span className="text-left text-sm md:text-base text-foreground/85 max-w-[12rem]">Brands served across festive and recurring gifting campaigns</span>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-6 md:py-10"
      >
        <motion.div variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {giftingFeatures.map((item, i) => (
            <motion.article
              key={item.title}
              variants={riseIn}
              whileHover={{ y: -6, rotateX: 2 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h2 className="font-heading text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {corporateValueCards.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl border border-border overflow-hidden bg-card"
            >
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-secondary/15 border border-secondary/35 rounded-3xl p-7 md:p-10 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-primary">Campaign Ready</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2">Customize your gifting program in one call</h2>
            <p className="text-muted-foreground mt-2">From item curation to dispatch sheet setup, we manage everything end-to-end.</p>
          </div>
          <a href="#gifting-form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold w-fit">
            Customize Your Gift Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">Our Prestigious Clients from 30+ Countries</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <article className="relative rounded-2xl border border-border bg-card p-4 md:p-5">
            <div className="relative overflow-hidden rounded-xl">
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                poster={aboutStory}
                muted
                loop
                playsInline
              >
                <source src={kandiPodiVideo} type="video/mp4" />
              </video>
              <button
                type="button"
                onClick={toggleClientVideo}
                className="absolute top-3 right-3 w-11 h-11 rounded-full bg-black/65 text-white flex items-center justify-center"
                aria-label={isVideoPlaying ? "Pause showcase video" : "Play showcase video"}
              >
                {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Packaging previews and gifting storytelling clips help teams approve faster before bulk dispatch.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-4 md:p-5 overflow-hidden">
            <div className="grid grid-cols-2 gap-3">
              {[0, 1].map((col) => (
                <div key={col} className="relative h-[320px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
                  <motion.div
                    className="space-y-2"
                    animate={col === 0 ? { y: ["0%", "-50%"] } : { y: ["-50%", "0%"] }}
                    transition={{ duration: col === 0 ? 16 : 20, ease: "linear", repeat: Infinity }}
                  >
                    {clientRail.map((name, i) => (
                      <div key={`brand-${col}-${name}-${i}`} className="rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm font-semibold text-foreground/80">
                        {name}
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Teams across retail, tech, HR, and services use our festive and monthly gifting workflows.
            </p>
          </article>
        </div>
      </motion.section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Globe2 className="w-4 h-4" />
            <p className="text-xs uppercase tracking-[0.16em] font-semibold">Regional Gift Themes</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Curated by region, taste profile, and occasion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regionalThemes.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden border border-border bg-background"
              >
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.note}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 text-primary mb-3">
              <Gift className="w-4 h-4" />
              <p className="text-xs uppercase tracking-[0.16em] font-semibold">Gift Collection Options</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">What we can curate for your campaign</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {giftCollections.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="h-28 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold leading-tight">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-primary mb-3">
              <Layers3 className="w-4 h-4" />
              <p className="text-xs uppercase tracking-[0.16em] font-semibold">Packaging Styles</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Presentation options your recipients remember</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packagingOptions.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="h-28 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold leading-tight">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-primary mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Fast, clear, and accountable execution</h2>
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <div key={step} className="flex gap-4 items-start bg-background rounded-xl p-4 border border-border">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-foreground/85">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.form
            id="gifting-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.16em] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Corporate Inquiry Form
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-2">Request Bulk Proposal</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Share your requirement and we will respond with curated options, timelines, and pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Company name" className="px-4 py-3 rounded-xl border border-border bg-card" />
              <input required placeholder="Contact person" className="px-4 py-3 rounded-xl border border-border bg-card" />
              <input required type="email" placeholder="Work email" className="px-4 py-3 rounded-xl border border-border bg-card" />
              <input required placeholder="Phone number" className="px-4 py-3 rounded-xl border border-border bg-card" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input required placeholder="Approx units" className="px-4 py-3 rounded-xl border border-border bg-card" />
              <input required placeholder="Tentative budget" className="px-4 py-3 rounded-xl border border-border bg-card" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <select className="px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground" defaultValue="">
                <option value="" disabled>Dispatch preference</option>
                <option>Single location</option>
                <option>Multi location</option>
                <option>International</option>
              </select>
              <select className="px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground" defaultValue="">
                <option value="" disabled>Occasion type</option>
                <option>Festive gifting</option>
                <option>Employee welcome kits</option>
                <option>Client appreciation</option>
                <option>Event gifting</option>
              </select>
            </div>
            <textarea
              required
              rows={4}
              placeholder="Message, preferred products, delivery cities, branding notes"
              className="w-full mt-4 px-4 py-3 rounded-xl border border-border bg-card resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full mt-5 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {sending ? "Submitting..." : "Submit Request"}
              <Send className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs text-muted-foreground">
              <a href="mailto:hello@annapurnahomefoods.com" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> hello@annapurnahomefoods.com
              </a>
              <a href={PHONE_LINK} className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                <PhoneCall className="w-3.5 h-3.5" /> +91 98765 43210
              </a>
            </div>
          </motion.form>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex items-center gap-2 text-primary mb-3">
          <Sparkles className="w-4 h-4" />
          <p className="text-xs uppercase tracking-[0.16em] font-semibold">Testimonials</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Hear it from our corporate fam</h2>

        <div className="space-y-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-4">
            {[...testimonials, ...testimonials].map((line, i) => (
              <div key={`t1-${i}`} className="min-w-[320px] md:min-w-[440px] rounded-xl border border-border bg-card px-5 py-4">
                <p className="text-sm text-foreground/85">{line}</p>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-4">
            {[...testimonials, ...testimonials].map((line, i) => (
              <div key={`t2-${i}`} className="min-w-[320px] md:min-w-[440px] rounded-xl border border-border bg-card px-5 py-4">
                <p className="text-sm text-foreground/85">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Corporate Gifting FAQ</h2>
          <div className="max-w-4xl space-y-4">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <article key={item.q} className="rounded-2xl border border-border bg-background overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <h3 className="font-heading text-xl font-semibold">{item.q}</h3>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="bg-secondary/15 border border-secondary/30 rounded-3xl p-7 md:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">Need recurring monthly gifting?</h3>
            <p className="text-muted-foreground mt-2">
              We offer retained plans with fixed dispatch windows, managed inventory blocks, and priority support.
            </p>
          </div>
          <Link
            to="/partner-with-us"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold w-fit"
          >
            Explore Partnership
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {[
            "Dedicated account manager",
            "Address sheet and tracking support",
            "QC checklist before dispatch",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-center bg-card border border-border rounded-xl p-4">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed bottom-3 left-3 right-3 z-40 md:hidden"
      >
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-background/95 backdrop-blur shadow-lg p-2">
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary text-primary-foreground py-3 text-sm font-semibold"
          >
            <Send className="w-4 h-4" />
            Get Proposal
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-secondary text-secondary-foreground py-3 text-sm font-semibold"
          >
            <PhoneCall className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </motion.div>
    </main>
  );
};

export default CorporateGifting;

