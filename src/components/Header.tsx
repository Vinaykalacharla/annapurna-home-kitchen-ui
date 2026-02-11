import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import picklesImg from "@/assets/category-pickles.jpg";
import odiyaluImg from "@/assets/category-odiyalu.jpg";
import podiluImg from "@/assets/category-podilu.jpg";
import specialImg from "@/assets/category-special.jpg";
import kandiPodiImg from "@/assets/product-kandi-podi.png";

type MenuLink = { to: string; label: string; blurb?: string };
type VisualCard = { to: string; label: string; caption: string; image: string };

const shopMegaColumns: Array<{ title: string; links: MenuLink[] }> = [
  {
    title: "Shop by Category",
    links: [
      { to: "/collections/combos", label: "Combos", blurb: "Gift-ready mix boxes" },
      { to: "/collections/tamil-nadu-sweets-snacks", label: "Sweets & Snacks", blurb: "Festival favorites" },
      { to: "/collections/south-indian-homemade-pickle", label: "Pickles", blurb: "Andhra style classics" },
      { to: "/collections/podi-masala-ghee", label: "Podi, Masala & Ghee", blurb: "Daily meal boosters" },
      { to: "/collections/vathals-fryums", label: "Vathals & Fryums", blurb: "Crunchy side bites" },
    ],
  },
  {
    title: "Pantry and Wellness",
    links: [
      { to: "/collections/groceries", label: "Groceries", blurb: "Kitchen staples" },
      { to: "/collections/coffee-beverages", label: "Coffee & Beverages", blurb: "Brew and sip" },
      { to: "/collections/honey", label: "Honey", blurb: "Raw and wild variants" },
      { to: "/collections/ready-to-cook", label: "Ready to Cook", blurb: "Fast traditional prep" },
      { to: "/products", label: "View All Products", blurb: "Complete catalog" },
    ],
  },
  {
    title: "Occasion Paths",
    links: [
      { to: "/corporate-gifting", label: "Corporate Bulk Gifting", blurb: "Teams and clients" },
      { to: "/send-gifts-abroad", label: "Send Gifts Abroad", blurb: "Global delivery" },
      { to: "/get-a-pack-give-a-pack", label: "Get a Pack Give a Pack", blurb: "Impact linked gifting" },
      { to: "/customer-reviews", label: "Customer Reviews", blurb: "Verified feedback" },
      { to: "/track-order", label: "Track Order", blurb: "Live shipment status" },
    ],
  },
];

const discoverLinks: MenuLink[] = [
  { to: "/our-story", label: "Our Story" },
  { to: "/get-a-pack-give-a-pack", label: "Get a Pack Give a Pack" },
  { to: "/customer-reviews", label: "Customer Reviews" },
  { to: "/news-media", label: "News and Media" },
  { to: "/faqs", label: "FAQs" },
  { to: "/duties-clearance", label: "Duties and Clearance" },
  { to: "/partner-with-us", label: "Partner With Us" },
  { to: "/contact", label: "Contact" },
];

const shopVisualCards: VisualCard[] = [
  { to: "/collections/tamil-nadu-sweets-snacks", label: "Sweets & Snacks", caption: "Festival classics", image: specialImg },
  { to: "/collections/south-indian-homemade-pickle", label: "Pickles", caption: "Andhra flavor", image: picklesImg },
  { to: "/collections/podi-masala-ghee", label: "Podi & Masala", caption: "Daily meal boosters", image: podiluImg },
  { to: "/collections/vathals-fryums", label: "Fryums", caption: "Crispy side bites", image: odiyaluImg },
  { to: "/collections/combos", label: "Combos", caption: "Gift-ready boxes", image: kandiPodiImg },
];

const Header = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"shop" | "discover" | null>(null);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  const isShopActive = location.pathname.startsWith("/products") || location.pathname.startsWith("/collections");
  const isDiscoverActive = discoverLinks.some((link) => isActive(link.to));

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground text-xs border-b border-primary-foreground/15">
        <div className="container mx-auto px-4 h-8 flex items-center justify-between">
          <p className="hidden sm:block tracking-wide">Pan-India and Global Delivery | Fresh Batch Dispatch in 24-48 Hours</p>
          <p className="sm:hidden tracking-wide">Fresh dispatch in 24-48 hours</p>
          <div className="hidden sm:flex items-center gap-4">
            <Link to="/send-gifts-abroad" className="hover:text-primary-foreground/80 transition-colors">
              Global Gifting
            </Link>
            <Link to="/faqs" className="underline underline-offset-4 hover:text-primary-foreground/80 transition-colors">
              Support Center
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-primary/15 bg-gradient-to-b from-primary/10 via-background/95 to-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3">
          <div className="h-16 rounded-2xl border border-primary/15 bg-background/85 shadow-[0_16px_34px_-24px_hsl(var(--primary))] px-3 md:px-5 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 min-w-0 shrink-0">
              <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold">
                A
              </span>
              <div className="min-w-0">
                <p className="text-2xl leading-none font-heading font-bold text-primary tracking-tight">Annapurna</p>
                <p className="text-[10px] font-body text-foreground/65 tracking-[0.18em] uppercase mt-1 truncate">Home Foods</p>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1 relative">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                  isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("shop")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors inline-flex items-center gap-1.5 ${
                    isShopActive || activeDropdown === "shop"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  Shop All
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "shop" ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1040px] rounded-2xl border border-primary/15 bg-background/95 backdrop-blur-md shadow-2xl p-5 transition-all duration-200 ${
                    activeDropdown === "shop" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <div className="space-y-5">
                    <div className="grid grid-cols-5 gap-3">
                      {shopVisualCards.map((card) => (
                        <Link
                          key={card.to}
                          to={card.to}
                          className="group rounded-xl overflow-hidden border border-primary/20 bg-card hover:shadow-md transition-all"
                        >
                          <div className="h-24 overflow-hidden">
                            <img
                              src={card.image}
                              alt={card.label}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-2.5">
                            <p className="text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors">{card.label}</p>
                            <p className="text-[11px] text-muted-foreground mt-0.5">{card.caption}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="grid grid-cols-4 gap-5">
                      {shopMegaColumns.map((column) => (
                        <div key={column.title}>
                          <p className="text-[11px] uppercase tracking-[0.14em] text-primary font-semibold mb-3">{column.title}</p>
                          <div className="space-y-2">
                            {column.links.map((link) => (
                              <Link
                                key={link.to + link.label}
                                to={link.to}
                                className="block rounded-lg px-3 py-2 hover:bg-primary/8 transition-colors"
                              >
                                <p className="text-sm font-semibold text-foreground/85 hover:text-primary">{link.label}</p>
                                {link.blurb && <p className="text-xs text-muted-foreground mt-0.5">{link.blurb}</p>}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="space-y-3">
                        <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                            <Sparkles className="w-3.5 h-3.5" />
                            Trending This Week
                          </div>
                          <p className="mt-3 text-sm text-foreground/85">Palakara-style festive gift boxes are moving fast.</p>
                          <Link to="/collections/combos" className="mt-3 inline-flex text-sm font-semibold text-primary">
                            Explore Combos
                          </Link>
                        </div>

                        <div className="rounded-xl border border-secondary/40 bg-secondary/12 p-4">
                          <p className="text-xs uppercase tracking-[0.14em] text-foreground/80 font-semibold">Global Ready Picks</p>
                          <p className="mt-2 text-sm text-foreground/85">Long shelf-life products curated for overseas gifting.</p>
                          <Link to="/send-gifts-abroad" className="mt-3 inline-flex text-sm font-semibold text-primary">
                            View Global Shipping
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/corporate-gifting"
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                  isActive("/corporate-gifting") || isActive("/bulk-gifting")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                Bulk Gifting
              </Link>
              <Link
                to="/send-gifts-abroad"
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                  isActive("/send-gifts-abroad") || isActive("/global-shipping")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                Send Gifts Abroad
              </Link>
              <Link
                to="/track-order"
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                  isActive("/track-order")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                Track Order
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("discover")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors inline-flex items-center gap-1.5 ${
                    isDiscoverActive || activeDropdown === "discover"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  Discover
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "discover" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute right-0 top-full mt-3 w-72 rounded-xl border border-primary/15 bg-background/95 backdrop-blur-md shadow-xl p-2 transition-all duration-200 ${
                    activeDropdown === "discover" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  {discoverLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.to)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <Link
                to="/corporate-gifting"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Plan Gifts
              </Link>
              <Link
                to="/cart"
                className="relative w-10 h-10 rounded-full border border-primary/20 bg-background/80 hover:bg-primary/10 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-[11px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button
                className="xl:hidden w-10 h-10 rounded-full border border-primary/20 bg-background/80 hover:bg-primary/10 transition-colors flex items-center justify-center"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav className="xl:hidden border-b border-primary/15 bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-5 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary font-semibold">Menu</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link to="/" onClick={() => setMobileOpen(false)} className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive("/") ? "bg-primary text-primary-foreground" : "bg-primary/5 text-foreground/80 hover:bg-primary/10 hover:text-primary"}`}>
                Home
              </Link>
              <Link to="/corporate-gifting" onClick={() => setMobileOpen(false)} className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${(isActive("/corporate-gifting") || isActive("/bulk-gifting")) ? "bg-primary text-primary-foreground" : "bg-primary/5 text-foreground/80 hover:bg-primary/10 hover:text-primary"}`}>
                Bulk Gifting
              </Link>
              <Link to="/send-gifts-abroad" onClick={() => setMobileOpen(false)} className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${(isActive("/send-gifts-abroad") || isActive("/global-shipping")) ? "bg-primary text-primary-foreground" : "bg-primary/5 text-foreground/80 hover:bg-primary/10 hover:text-primary"}`}>
                Send Gifts Abroad
              </Link>
              <Link to="/track-order" onClick={() => setMobileOpen(false)} className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive("/track-order") ? "bg-primary text-primary-foreground" : "bg-primary/5 text-foreground/80 hover:bg-primary/10 hover:text-primary"}`}>
                Track Order
              </Link>
            </div>

            <details className="rounded-xl border border-primary/15 bg-primary/5 p-3">
              <summary className="cursor-pointer list-none flex items-center justify-between text-sm font-semibold text-foreground/85">
                Shop Collections
                <ChevronDown className="w-4 h-4" />
              </summary>
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {shopVisualCards.map((card) => (
                  <Link
                    key={`vm-${card.to}`}
                    to={card.to}
                    onClick={() => setMobileOpen(false)}
                    className="min-w-[150px] rounded-lg overflow-hidden border border-primary/15 bg-background/85"
                  >
                    <div className="h-16">
                      <img src={card.image} alt={card.label} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="px-2.5 py-2">
                      <p className="text-xs font-semibold text-foreground/85 leading-tight">{card.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {shopMegaColumns.flatMap((col) => col.links).map((link) => (
                  <Link
                    key={`m-${link.to}-${link.label}`}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-lg bg-background/85 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="rounded-xl border border-primary/15 bg-primary/5 p-3">
              <summary className="cursor-pointer list-none flex items-center justify-between text-sm font-semibold text-foreground/85">
                Discover
                <ChevronDown className="w-4 h-4" />
              </summary>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {discoverLinks.map((link) => (
                  <Link
                    key={`d-${link.to}`}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(link.to)
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/85 text-foreground/80 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
