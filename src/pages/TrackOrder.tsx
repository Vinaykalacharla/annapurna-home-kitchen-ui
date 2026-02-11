import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  PackageOpen,
  CircleCheck,
  Truck,
  CircleDot,
  Sparkles,
  Clock3,
  ShieldCheck,
  MapPin,
  Route,
} from "lucide-react";

type TimelineState = "done" | "active" | "pending";

const mockTimeline: Array<{
  label: string;
  time: string;
  state: TimelineState;
  icon: typeof CircleCheck;
  detail: string;
}> = [
  {
    label: "Order confirmed",
    time: "09:15 AM, Feb 9",
    state: "done",
    icon: CircleCheck,
    detail: "Payment verified and order validated.",
  },
  {
    label: "Packed and quality checked",
    time: "02:40 PM, Feb 9",
    state: "done",
    icon: CircleCheck,
    detail: "Sealed with export-safe packaging.",
  },
  {
    label: "Shipped from fulfillment center",
    time: "10:05 AM, Feb 10",
    state: "done",
    icon: Truck,
    detail: "Dispatched to international air lane.",
  },
  {
    label: "In international transit",
    time: "Expected by Feb 13",
    state: "active",
    icon: CircleDot,
    detail: "Current checkpoint: Dubai Sort Hub.",
  },
  {
    label: "Out for final delivery",
    time: "Pending handoff",
    state: "pending",
    icon: CircleDot,
    detail: "Will update once local partner accepts.",
  },
];

const globalRoute = ["Hyderabad", "Mumbai Air Cargo", "Dubai Sort Hub", "Destination City"];

const statusStats = [
  { icon: Clock3, label: "Average dispatch", value: "24-48h" },
  { icon: ShieldCheck, label: "QC checkpoint", value: "100%" },
  { icon: MapPin, label: "Live lane updates", value: "Enabled" },
];

const TrackOrder = () => {
  const [showResult, setShowResult] = useState(false);
  const [activeLane, setActiveLane] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLane((prev) => (prev + 1) % globalRoute.length);
    }, 1700);

    return () => window.clearInterval(timer);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <main className="pb-16 md:pb-24">
      <section className="relative overflow-hidden border-b border-border/70 bg-gradient-to-b from-primary/10 via-background to-background">
        <motion.div
          className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase text-xs tracking-[0.2em] text-primary mb-4 inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Track Order
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl"
          >
            Real-time shipment tracking with premium visibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-muted-foreground text-lg mt-6 max-w-2xl"
          >
            Enter your order details to view live checkpoints, transit lane progress, and delivery readiness.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] gap-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-border bg-card p-7 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.35)]"
          >
            <h2 className="text-2xl font-heading font-semibold mb-5">Find your order</h2>
            <div className="space-y-4">
              <input
                required
                placeholder="Order ID (example: AHF-129845)"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background transition-all focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(15,75,54,0.12)] outline-none"
              />
              <input
                required
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background transition-all focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(15,75,54,0.12)] outline-none"
              />
              <input
                placeholder="Tracking code (optional)"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background transition-all focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(15,75,54,0.12)] outline-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              className="w-full mt-5 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
            >
              <Search className="w-4 h-4" />
              Track Now
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <h2 className="text-2xl font-heading font-semibold mb-5">Tracking health</h2>
            <div className="space-y-3">
              {statusStats.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + idx * 0.06 }}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-border bg-background px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/12 text-primary flex items-center justify-center">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-semibold mt-0.5">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-5">
              If status is unchanged for over 24 hours, contact support and share your order ID.
            </p>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {showResult && (
            <motion.section
              key="tracking-result"
              initial={{ opacity: 0, y: 26, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-8 rounded-2xl border border-border bg-background p-7 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <PackageOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold">Order AHF-129845</h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mt-1">Live shipment timeline</p>
                  </div>
                </div>
                <motion.span
                  animate={{ boxShadow: ["0 0 0 0 rgba(52,211,153,0.55)", "0 0 0 10px rgba(52,211,153,0)", "0 0 0 0 rgba(52,211,153,0)"] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Tracking Active
                </motion.span>
              </div>

              <div className="rounded-2xl border border-border bg-card px-4 py-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary inline-flex items-center gap-1.5">
                    <Route className="w-3.5 h-3.5" />
                    Live International Lane
                  </p>
                  <p className="text-xs text-muted-foreground">Updated every few seconds</p>
                </div>
                <div className="relative">
                  <div className="absolute left-0 right-0 top-3 h-[2px] bg-border" />
                  <motion.div
                    className="absolute top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md"
                    animate={{ left: ["0%", "33%", "66%", "100%"] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Truck className="w-3.5 h-3.5" />
                  </motion.div>
                  <div className="grid grid-cols-4 gap-2 relative z-10">
                    {globalRoute.map((point, idx) => (
                      <div key={point} className="pt-8 text-center">
                        <motion.div
                          animate={activeLane === idx ? { scale: [1, 1.22, 1] } : { scale: 1 }}
                          transition={{ duration: 0.8 }}
                          className={`mx-auto w-3.5 h-3.5 rounded-full border-2 ${
                            activeLane >= idx ? "bg-primary border-primary" : "bg-card border-muted-foreground/40"
                          }`}
                        />
                        <p className="text-[11px] text-muted-foreground mt-2">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {mockTimeline.map((item, idx) => {
                  const done = item.state === "done";
                  const active = item.state === "active";
                  return (
                    <motion.article
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + idx * 0.07 }}
                      className={`relative rounded-xl border px-4 py-4 ${
                        active
                          ? "border-primary/50 bg-primary/5"
                          : done
                            ? "border-border bg-card"
                            : "border-border/80 bg-card/60"
                      }`}
                    >
                      {idx < mockTimeline.length - 1 && (
                        <div className="absolute left-[31px] -bottom-4 h-4 w-[2px] bg-border" />
                      )}
                      <div className="flex items-start gap-3">
                        <div
                          className={`relative w-8 h-8 rounded-full flex items-center justify-center ${
                            done
                              ? "bg-primary text-primary-foreground"
                              : active
                                ? "bg-secondary text-secondary-foreground"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          {active && (
                            <motion.span
                              className="absolute inset-0 rounded-full border border-secondary"
                              animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                              transition={{ duration: 1.7, repeat: Infinity }}
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                          <p className="text-xs text-foreground/70 mt-1.5">{item.detail}</p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default TrackOrder;
