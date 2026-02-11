import { FormEvent, useState } from "react";
import { Search, PackageOpen, CircleCheck, Truck, CircleDot } from "lucide-react";

const mockTimeline = [
  { label: "Order confirmed", time: "09:15 AM, Feb 9", done: true, icon: CircleCheck },
  { label: "Packed and quality checked", time: "02:40 PM, Feb 9", done: true, icon: CircleCheck },
  { label: "Shipped from fulfillment center", time: "10:05 AM, Feb 10", done: true, icon: Truck },
  { label: "In transit", time: "Expected by Feb 13", done: false, icon: CircleDot },
];

const TrackOrder = () => {
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <main>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <p className="uppercase text-xs tracking-[0.2em] text-primary mb-4">Track Order</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl">
          Track shipment progress with your order details
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          Enter your order ID and phone number used during checkout to view live status updates.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-2xl font-heading font-semibold mb-5">Find your order</h2>
            <div className="space-y-4">
              <input required placeholder="Order ID (example: AHF-129845)" className="w-full px-4 py-3 rounded-xl border border-border bg-background" />
              <input required placeholder="Phone number" className="w-full px-4 py-3 rounded-xl border border-border bg-background" />
              <input placeholder="Tracking code (optional)" className="w-full px-4 py-3 rounded-xl border border-border bg-background" />
            </div>
            <button
              type="submit"
              className="w-full mt-5 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Search className="w-4 h-4" />
              Track Now
            </button>
          </form>

          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-2xl font-heading font-semibold mb-5">Need help?</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Orders are usually dispatch-ready in 24 to 48 hours after payment confirmation.</p>
              <p>Tracking links are shared via SMS and email as soon as your package leaves our facility.</p>
              <p>If status is unchanged for over 24 hours, contact support and share your order ID.</p>
            </div>
          </div>
        </div>

        {showResult && (
          <div className="mt-8 rounded-2xl border border-border bg-background p-7">
            <div className="flex items-center gap-3 mb-5">
              <PackageOpen className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-heading font-semibold">Order AHF-129845</h3>
            </div>
            <div className="space-y-4">
              {mockTimeline.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default TrackOrder;
