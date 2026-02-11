import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Clock3, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    setSending(false);
    toast.success("Message sent. Our support team will contact you shortly.");
    e.currentTarget.reset();
  };

  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <p className="uppercase text-xs tracking-[0.2em] text-primary mb-4">Contact Us</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl">
          Reach us for order help, gifting support, and partnership queries
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          Support team is available Monday to Saturday for order updates, product guidance, and dispatch assistance.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-7 md:p-8">
            <h2 className="text-2xl font-heading font-semibold mb-5">Send a message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="px-4 py-3 rounded-xl border border-border bg-background" />
              <input required type="email" placeholder="Email address" className="px-4 py-3 rounded-xl border border-border bg-background" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input required placeholder="Phone number" className="px-4 py-3 rounded-xl border border-border bg-background" />
              <select className="px-4 py-3 rounded-xl border border-border bg-background text-muted-foreground">
                <option value="">Select query type</option>
                <option value="order">Order support</option>
                <option value="gifting">Bulk gifting</option>
                <option value="global">Global shipping</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <textarea
              required
              rows={5}
              placeholder="Tell us how we can help"
              className="w-full mt-4 px-4 py-3 rounded-xl border border-border bg-background resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="mt-5 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {sending ? "Sending..." : "Submit Message"}
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="space-y-5">
            <article className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">Email support</h3>
                <p className="text-sm text-muted-foreground mt-1">hello@annapurnahomefoods.com</p>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">Call us</h3>
                <p className="text-sm text-muted-foreground mt-1">+91 98765 43210</p>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">Office</h3>
                <p className="text-sm text-muted-foreground mt-1">Vijayawada, Andhra Pradesh, India</p>
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Clock3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">Support hours</h3>
                <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9:30 AM to 7:30 PM IST</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
