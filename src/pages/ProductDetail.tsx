import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Product Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Go back home</Link>
      </main>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    toast.success(`${qty}x ${product.name} added to cart`);
  };

  const spiceBadgeColors: Record<string, string> = {
    mild: "bg-olive/20 text-olive",
    medium: "bg-secondary/30 text-secondary-foreground",
    hot: "bg-destructive/15 text-destructive",
  };

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <Link
        to={`/products/${product.category}`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Back to {product.category}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Image */}
        <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${spiceBadgeColors[product.spiceLevel]}`}>
              {product.spiceLevel.toUpperCase()}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {product.isVeg ? "🌿 Veg" : "🍖 Non-Veg"}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{product.name}</h1>
          <p className="text-muted-foreground mb-1">{product.weight}</p>
          <p className="text-3xl font-bold text-foreground mt-4 mb-6">₹{product.price}</p>

          <p className="text-foreground/80 leading-relaxed mb-8">{product.description}</p>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-border rounded-xl overflow-hidden">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-muted transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-5 font-semibold text-foreground">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-muted transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-4 border-t border-border pt-6">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Ingredients</h3>
              <p className="text-sm text-muted-foreground">{product.ingredients}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Shelf Life</h3>
              <p className="text-sm text-muted-foreground">{product.shelfLife}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Storage</h3>
              <p className="text-sm text-muted-foreground">{product.storage}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
