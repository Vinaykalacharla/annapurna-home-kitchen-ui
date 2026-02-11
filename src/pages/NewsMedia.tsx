import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Newspaper, Megaphone } from "lucide-react";
import { pressMentions } from "@/data/marketing";

const NewsMedia = () => {
  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <p className="uppercase text-xs tracking-[0.2em] text-primary mb-4">News and Media</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl">
          Coverage, interviews, and stories about our growth and product quality systems
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          A snapshot of public mentions and editorial features around Annapurna Home Foods.
        </p>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pressMentions.map((item, i) => (
              <motion.article
                key={item.headline}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-background p-6 md:p-7"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary">{item.outlet}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
                <h2 className="font-heading text-2xl font-semibold leading-tight">{item.headline}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.blurb}</p>
                <a
                  href={item.url}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-5 hover:gap-3 transition-all"
                >
                  Read feature
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-border bg-card p-6 md:p-7">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Megaphone className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-2">Press inquiries</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              For interviews, founder notes, and brand information requests, contact our media desk.
            </p>
            <a href="mailto:media@annapurnahomefoods.com" className="text-primary font-semibold text-sm">
              media@annapurnahomefoods.com
            </a>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 md:p-7">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Newspaper className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-2">Brand kit and assets</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Need logos, product photos, or fact sheets for coverage and campaigns? Reach out here.
            </p>
            <Link to="/contact" className="text-primary font-semibold text-sm">
              Contact media support
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
};

export default NewsMedia;
