import { AlertTriangle, ShieldCheck, FileWarning, Globe2 } from "lucide-react";

const DutiesClearance = () => {
  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <p className="uppercase text-xs tracking-[0.2em] text-primary mb-4">Duties and Clearance</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl">
          International duties, import tax, and customs guidance
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          Clear expectations for global delivery so recipients are not surprised at the destination.
        </p>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-border bg-background p-7">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-heading font-semibold mb-3">Destination rules vary</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Import thresholds, duties, and local restrictions are defined by each country. Rules can change without prior
              notice, so final assessment always belongs to destination customs authorities.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-background p-7">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <FileWarning className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-heading font-semibold mb-3">Who pays duties?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In most destinations, import duties and local taxes are paid by the recipient. Some shipping methods may offer
              prepaid duties options; availability depends on destination and package type.
            </p>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="rounded-3xl border border-border bg-background p-7 md:p-10">
          <h2 className="text-3xl font-heading font-bold mb-5">Before placing an international order</h2>
          <div className="space-y-4">
            {[
              "Confirm the recipient can accept food imports at destination.",
              "Share correct contact details to avoid customs hold delays.",
              "Check shelf-life and dispatch timelines for destination transit.",
              "Use gift notes that avoid restricted terms in declarations.",
            ].map((item, i) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex gap-3">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
              <p className="text-sm text-foreground/85">
                We provide best-effort guidance, but customs decisions are outside seller and courier control.
              </p>
            </div>
            <div className="rounded-xl border border-secondary/30 bg-secondary/10 p-4 flex gap-3">
              <AlertTriangle className="w-5 h-5 text-foreground mt-0.5" />
              <p className="text-sm text-foreground/85">
                Orders returned due to destination restrictions may incur non-refundable logistics charges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DutiesClearance;
