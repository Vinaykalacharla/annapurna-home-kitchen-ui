import aboutImg from "@/assets/about-story.jpg";

const About = () => (
  <main>
    {/* Hero */}
    <section className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Our Story</h1>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          A journey rooted in tradition, love, and the authentic flavors of South India.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img src={aboutImg} alt="Traditional cooking" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">From Our Kitchen to Yours</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Annapurna Home Foods was born from a simple belief — that the best food is made at home, with love and patience. 
              Our founder grew up in a traditional Andhra household where every meal was a celebration of flavors.
            </p>
            <p>
              The pickles were sun-dried on the terrace, the podis were hand-ground on stone, and the odiyalu were shaped 
              by caring hands. These weren't just recipes — they were rituals passed down through generations.
            </p>
            <p>
              Today, we bring those same traditions to your kitchen. Every jar of pickle, every packet of podi is 
              made using the same age-old methods, the same premium ingredients, and the same unwavering commitment to quality.
            </p>
            <p className="font-medium text-foreground">
              No shortcuts. No preservatives. Just pure, authentic, homemade goodness.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { emoji: "🌾", title: "Natural Ingredients", desc: "We source the freshest produce and finest spices directly from local farmers." },
            { emoji: "👩‍🍳", title: "Handcrafted Quality", desc: "Every product is made in small batches, ensuring consistent taste and quality." },
            { emoji: "🏡", title: "Family Tradition", desc: "Recipes that have been perfected over generations, preserving authentic South Indian heritage." },
          ].map((v) => (
            <div key={v.title} className="bg-background rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl mb-4">{v.emoji}</div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
