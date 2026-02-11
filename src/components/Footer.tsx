import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative z-20 bg-primary text-primary-foreground border-t border-primary-foreground/10">
    <div className="container mx-auto px-4 py-14 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-3">Annapurna Home Foods</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Thoughtfully curated Indian foods for home dining, festive gifting, and global delivery.
          </p>
          <p className="text-xs text-primary-foreground/60 mt-4">Fresh batches. Responsible sourcing. Reliable support.</p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/products" className="hover:text-primary-foreground transition-colors">Shop All</Link></li>
            <li><Link to="/products/pickles" className="hover:text-primary-foreground transition-colors">Pickles</Link></li>
            <li><Link to="/products/odiyalu" className="hover:text-primary-foreground transition-colors">Odiyalu</Link></li>
            <li><Link to="/products/podilu" className="hover:text-primary-foreground transition-colors">Podilu</Link></li>
            <li><Link to="/products/special" className="hover:text-primary-foreground transition-colors">Specials</Link></li>
            <li><Link to="/track-order" className="hover:text-primary-foreground transition-colors">Track Order</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/our-story" className="hover:text-primary-foreground transition-colors">Our Story</Link></li>
            <li><Link to="/get-a-pack-give-a-pack" className="hover:text-primary-foreground transition-colors">Get a Pack Give a Pack</Link></li>
            <li><Link to="/customer-reviews" className="hover:text-primary-foreground transition-colors">Customer Reviews</Link></li>
            <li><Link to="/news-media" className="hover:text-primary-foreground transition-colors">News and Media</Link></li>
            <li><Link to="/corporate-gifting" className="hover:text-primary-foreground transition-colors">Corporate Gifting</Link></li>
            <li><Link to="/send-gifts-abroad" className="hover:text-primary-foreground transition-colors">Send Gifts Abroad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            <li><Link to="/faqs" className="hover:text-primary-foreground transition-colors">FAQs</Link></li>
            <li><Link to="/duties-clearance" className="hover:text-primary-foreground transition-colors">Duties and Clearance</Link></li>
            <li><Link to="/partner-with-us" className="hover:text-primary-foreground transition-colors">Partner With Us</Link></li>
          </ul>
          <div className="text-sm text-primary-foreground/70 mt-5 space-y-1">
            <p>hello@annapurnahomefoods.com</p>
            <p>+91 98765 43210</p>
            <p>Vijayawada, Andhra Pradesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        Copyright 2026 Annapurna Home Foods. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
