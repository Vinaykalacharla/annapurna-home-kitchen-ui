import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type SpiceFilter = "all" | "mild" | "medium" | "hot";
type SortOption = "default" | "low" | "high";

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const [spiceFilter, setSpiceFilter] = useState<SpiceFilter>("all");
  const [sort, setSort] = useState<SortOption>("default");

  const cat = categories.find((c) => c.slug === category);
  const title = cat ? cat.name : "All Products";

  const filtered = useMemo(() => {
    let list = category ? products.filter((p) => p.category === category) : products;
    if (spiceFilter !== "all") list = list.filter((p) => p.spiceLevel === spiceFilter);
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, spiceFilter, sort]);

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground mt-2">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
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
            className="bg-muted text-foreground text-sm px-3 py-1.5 rounded-lg border-none outline-none"
          >
            <option value="default">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-20">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Products;
