import { Link } from "react-router-dom";
import { Leaf, Heart, Shield, ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import picklesImg from "@/assets/category-pickles.jpg";
import odiyaluImg from "@/assets/category-odiyalu.jpg";
import podiluImg from "@/assets/category-podilu.jpg";
import specialImg from "@/assets/category-special.jpg";

const categoryCards = [
  { name: "Pickles", slug: "pickles", image: picklesImg, desc: "Traditional sun-ripened pickles" },
  { name: "Odiyalu", slug: "odiyalu", image: odiyaluImg, desc: "Crispy sun-dried delicacies" },
  { name: "Podilu", slug: "podilu", image: podiluImg, desc: "Aromatic spice powders" },
  { name: "Special Home Foods", slug: "special", image: specialImg, desc: "Festive sweets & snacks" },
];

const whyChoose = [
  { icon: Heart, title: "Homemade with Love", desc: "Every product is handcrafted in small batches using time-honored family recipes." },
  { icon: Leaf, title: "No Preservatives", desc: "Pure, natural ingredients with zero artificial colors, flavors, or preservatives." },
  { icon: Shield, title: "Authentic Taste", desc: "Recipes passed down through generations, preserving the true South Indian flavors." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Traditional South Indian food spread" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-xl animate-fade-in-up">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">Annapurna Home Foods</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Cooking With Love
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
              Authentic South Indian homemade foods crafted with tradition, care, and the finest natural ingredients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products/pickles"
                className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products/special"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Our Collections</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Explore our range of authentic South Indian homemade products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-1">{cat.name}</h3>
                <p className="text-primary-foreground/70 text-sm">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-md mx-auto">What makes Annapurna Home Foods special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Taste the Tradition
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
            Order your favorite homemade foods today and experience the authentic flavors of South India, delivered to your doorstep.
          </p>
          <Link
            to="/products/pickles"
            className="bg-secondary text-secondary-foreground px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Shop Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
