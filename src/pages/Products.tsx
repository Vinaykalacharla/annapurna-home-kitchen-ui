import { Link, useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type SpiceFilter = "all" | "mild" | "medium" | "hot";
type SortOption = "default" | "low" | "high";

const categoryAliasMap: Record<string, (typeof categories)[number]["slug"] | undefined> = {
  "shop-all": undefined,
  snacks: "special",
  sweets: "special",
  combos: "special",
  "tamil-nadu-sweets-snacks": "special",
  "tamil-nadu-sweets": "special",
  "tamil-nadu-snacks": "special",
  groceries: "podilu",
  "ghee-and-masala": "podilu",
  "podi-masala-ghee": "podilu",
  pickles: "pickles",
  "south-indian-homemade-pickle": "pickles",
  "andhra-pickle": "pickles",
  "all-pickles": "pickles",
  podis: "podilu",
  "masalas-podis": "podilu",
  podilu: "podilu",
  odiyalu: "odiyalu",
  fryums: "odiyalu",
  "vathals-fryums": "odiyalu",
  coffee: "special",
  "coffee-beverages": "special",
  "coffee-and-tea": "special",
  honey: "special",
  "wild-honey": "special",
  "western-ghats-honey-aligned-products": "special",
  "ready-mix": "special",
  "ready-to-cook": "special",
  "ready-to-cook-beverages": "special",
  "multigrain-dosa-health-mixes": "special",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const [spiceFilter, setSpiceFilter] = useState<SpiceFilter>("all");
  const [sort, setSort] = useState<SortOption>("default");

  const resolvedCategory = category
    ? categoryAliasMap[category] ?? categories.find((c) => c.slug === category)?.slug
    : undefined;

  const cat = categories.find((c) => c.slug === resolvedCategory);
  const title = cat ? cat.name : "All Products";

  const filtered = useMemo(() => {
    let list = resolvedCategory ? products.filter((p) => p.category === resolvedCategory) : products;
    if (spiceFilter !== "all") list = list.filter((p) => p.spiceLevel === spiceFilter);
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [resolvedCategory, spiceFilter, sort]);

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <motion.div className="mb-10" initial="hidden" animate="visible" variants={fadeUp}>
        <p className="uppercase text-xs tracking-[0.18em] text-primary mb-3">
          {category ? "Collection" : "Shop"}
        </p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground mt-2">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-7">
        <Link
          to="/products"
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            !resolvedCategory ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/products/${c.slug}`}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              resolvedCategory === c.slug ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {/* Filters */}
      <motion.div
        className="flex flex-wrap gap-3 mb-8 bg-card border border-border rounded-2xl p-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Spice:</span>
          {(["all", "mild", "medium", "hot"] as SpiceFilter[]).map((level) => (
            <button
              key={level}
              onClick={() => setSpiceFilter(level)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                spiceFilter === level
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {level === "all" ? "All" : level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm font-medium text-muted-foreground">Sort:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="bg-background border border-border text-foreground text-sm px-3 py-1.5 rounded-lg outline-none"
          >
            <option value="default">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </motion.div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-20">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Products;
