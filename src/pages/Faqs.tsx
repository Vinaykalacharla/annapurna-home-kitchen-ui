import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/marketing";

const Faqs = () => {
  const [open, setOpen] = useState(0);

  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <p className="uppercase text-xs tracking-[0.2em] text-primary mb-4">Frequently Asked Questions</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl">
          Everything you need to know before placing an order
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          Shipping, gifts, cancellations, tracking, and support details in one place.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-4xl space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <article key={item.question} className="rounded-2xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <h2 className="font-heading text-xl font-semibold">{item.question}</h2>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Faqs;
