import { FormEvent, useState } from "react";
import { Handshake, Network, Factory, BriefcaseBusiness, Send } from "lucide-react";
import { toast } from "sonner";
import { partnerTracks } from "@/data/marketing";

const partnerIcons = [Factory, Network, BriefcaseBusiness];

const PartnerWithUs = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    setSending(false);
    toast.success("Partnership request received. We will connect with you shortly.");
    e.currentTarget.reset();
  };

  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <p className="uppercase text-xs tracking-[0.2em] text-primary mb-4">Partner With Us</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl">
          Build quality-led food programs with a dependable execution partner
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          We work with manufacturers, fulfillment networks, and business partners across gifting and retail channels.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {partnerTracks.map((track, i) => {
            const Icon = partnerIcons[i] ?? Handshake;
            return (
              <article key={track.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-heading font-semibold mb-2">{track.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <form onSubmit={handleSubmit} className="max-w-4xl bg-background border border-border rounded-3xl p-7 md:p-9 shadow-sm">
            <h2 className="text-3xl font-heading font-bold mb-2">Partnership application</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Tell us your capability, geography, and expected collaboration model.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Organization name" className="px-4 py-3 rounded-xl border border-border bg-card" />
              <input required placeholder="Contact person" className="px-4 py-3 rounded-xl border border-border bg-card" />
              <input required type="email" placeholder="Email address" className="px-4 py-3 rounded-xl border border-border bg-card" />
              <input required placeholder="Phone number" className="px-4 py-3 rounded-xl border border-border bg-card" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input required placeholder="City / Region" className="px-4 py-3 rounded-xl border border-border bg-card" />
              <select required className="px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground">
                <option value="">Select partnership type</option>
                <option value="manufacturing">Manufacturing partner</option>
                <option value="distribution">Distribution partner</option>
                <option value="corporate">Corporate gifting partner</option>
              </select>
            </div>
            <textarea
              required
              rows={5}
              placeholder="Tell us about capacity, certifications, channels, and proposed collaboration"
              className="w-full mt-4 px-4 py-3 rounded-xl border border-border bg-card resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="mt-5 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {sending ? "Submitting..." : "Submit Application"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PartnerWithUs;
