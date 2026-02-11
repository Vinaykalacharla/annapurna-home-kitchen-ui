import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Truck,
  Gift,
  Sparkles,
  TicketPercent,
  CircleCheck,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const cartCardThemes = [
  "border-emerald-200/70 bg-gradient-to-r from-emerald-50/40 to-background",
  "border-cyan-200/70 bg-gradient-to-r from-cyan-50/40 to-background",
  "border-amber-200/70 bg-gradient-to-r from-amber-50/45 to-background",
  "border-rose-200/70 bg-gradient-to-r from-rose-50/40 to-background",
];

const formatInr = (value: number) => `Rs ${new Intl.NumberFormat("en-IN").format(value)}`;

const Cart = () => {
  const { items, addToCart, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [coupon, setCoupon] = useState("");

  const shippingFee = totalPrice >= 500 ? 0 : 79;
  const freeShippingGap = Math.max(0, 500 - totalPrice);
  const grandTotal = totalPrice + shippingFee;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const recommendations = products
    .filter((product) => !items.some((item) => item.product.id === product.id))
    .slice(0, 3);

  const handleApplyCoupon = () => {
    if (!coupon.trim()) {
      toast.error("Enter a coupon code first.");
      return;
    }
    toast.info("Coupon module will be enabled with checkout integration.");
  };

  const handleCheckout = () => {
    toast.info("Checkout flow is being connected. Contact support to place your order now.");
  };

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-14 md:py-20">
        <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 md:py-20 text-center">
          <motion.div
            className="pointer-events-none absolute -top-16 -left-12 w-56 h-56 rounded-full bg-primary/12 blur-3xl"
            animate={{ x: [0, 16, 0], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-16 -right-8 w-56 h-56 rounded-full bg-secondary/25 blur-3xl"
            animate={{ x: [0, -14, 0], y: [0, 8, 0] }}
            transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <ShoppingCart className="w-9 h-9 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Your cart is waiting</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start with our handcrafted favorites and build a premium basket in minutes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/send-gifts-abroad"
                className="inline-flex items-center gap-2 border border-border px-8 py-3 rounded-xl font-semibold hover:bg-muted transition-colors"
              >
                <Gift className="w-4 h-4" />
                Send Gifts Abroad
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 md:py-14">
      <section className="mb-7 md:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary mb-3">Checkout Basket</p>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Your Cart</h1>
          <p className="text-muted-foreground mt-2">{itemCount} item(s) selected for this order.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border font-medium hover:bg-muted transition-colors"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={clearCart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border font-medium hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
            Clear Cart
          </button>
        </div>
      </section>

      <section className="mb-7 md:mb-9 rounded-2xl border border-border bg-card px-4 py-3 md:px-5 md:py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Truck className="w-4 h-4 text-primary" />
          {freeShippingGap > 0 ? `${formatInr(freeShippingGap)} away from free shipping.` : "You unlocked free shipping."}
        </div>
        <div className="w-full md:w-[260px] h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${Math.min(100, (totalPrice / 500) * 100)}%` }}
          />
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] gap-7 lg:gap-9 items-start">
        <div className="space-y-4">
          {items.map(({ product, quantity }, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`rounded-3xl border p-4 md:p-5 shadow-sm ${cartCardThemes[index % cartCardThemes.length]}`}
            >
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                <Link to={`/product/${product.id}`} className="sm:w-[112px] flex-shrink-0">
                  <div className="w-full sm:w-[112px] h-[112px] rounded-2xl overflow-hidden bg-muted">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Link to={`/product/${product.id}`} className="font-heading text-xl font-semibold text-foreground hover:text-primary transition-colors">
                        {product.name}
                      </Link>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-background px-2.5 py-1 text-xs font-medium border border-border">
                          {product.weight}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-background px-2.5 py-1 text-xs font-medium border border-border capitalize">
                          Spice: {product.spiceLevel}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-background px-2.5 py-1 text-xs font-medium border border-border">
                          Shelf life: {product.shelfLife}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                    <div className="inline-flex items-center rounded-xl border border-border bg-background overflow-hidden">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label={`Decrease quantity for ${product.name}`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label={`Increase quantity for ${product.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Unit: {formatInr(product.price)}</p>
                      <p className="text-xl font-bold text-foreground">{formatInr(product.price * quantity)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {recommendations.length > 0 && (
            <section className="rounded-3xl border border-border bg-card p-5 md:p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-primary mb-1">Add-Ons</p>
                  <h2 className="font-heading text-2xl font-bold">You may also like</h2>
                </div>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {recommendations.map((product) => (
                  <article key={product.id} className="rounded-2xl border border-border bg-background p-3">
                    <div className="h-28 rounded-xl overflow-hidden bg-muted mb-3">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <Link to={`/product/${product.id}`} className="text-sm font-semibold leading-tight hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">{product.weight}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-bold text-sm">{formatInr(product.price)}</span>
                      <button
                        onClick={() => {
                          addToCart(product);
                          toast.success(`${product.name} added to cart.`);
                        }}
                        className="text-xs px-2.5 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                      >
                        Add
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="xl:sticky xl:top-24 space-y-4">
          <section className="rounded-3xl border border-border bg-card p-5 md:p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-bold mb-5">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>{formatInr(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className={shippingFee === 0 ? "text-primary font-semibold" : ""}>
                  {shippingFee === 0 ? "Free" : formatInr(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Platform fee</span>
                <span>{formatInr(0)}</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between text-foreground">
                <span className="text-base font-semibold">Grand Total</span>
                <span className="text-xl font-bold">{formatInr(grandTotal)}</span>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-border bg-background p-3">
              <label htmlFor="coupon" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Coupon
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 h-10 rounded-lg border border-border bg-card px-3 text-sm"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="h-10 px-3 rounded-lg bg-muted hover:bg-muted/80 text-sm font-semibold inline-flex items-center gap-1.5"
                >
                  <TicketPercent className="w-4 h-4" />
                  Apply
                </button>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-5 h-12 rounded-xl bg-primary text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-muted-foreground text-center mt-3">
              Taxes included where applicable. Final shipping is shown at checkout.
            </p>
          </section>

          <section className="rounded-3xl border border-border bg-card p-5 md:p-6">
            <h3 className="font-heading text-xl font-bold mb-4">Cart Protection</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                <span>Secure checkout with encrypted payment processing.</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-primary mt-0.5" />
                <span>Dispatch in 24-48 hours for ready products.</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="w-4 h-4 text-primary mt-0.5" />
                <span>Dedicated support for gifting and multi-address orders.</span>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
