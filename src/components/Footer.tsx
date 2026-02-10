import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-3">Annapurna Home Foods</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Bringing the authentic taste of South Indian kitchens to your home. Made with love, tradition, and the finest ingredients.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/products/pickles" className="hover:text-primary-foreground transition-colors">Pickles</Link></li>
            <li><Link to="/products/odiyalu" className="hover:text-primary-foreground transition-colors">Odiyalu</Link></li>
            <li><Link to="/products/podilu" className="hover:text-primary-foreground transition-colors">Podilu</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Get in Touch</h4>
          <div className="text-sm text-primary-foreground/70 space-y-2">
            <p>📧 hello@annapurnahomefoods.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Vijayawada, Andhra Pradesh</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Instagram</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Facebook</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © 2026 Annapurna Home Foods. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
