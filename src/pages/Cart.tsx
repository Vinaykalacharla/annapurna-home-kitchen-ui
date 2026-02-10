import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
        <Link
          to="/products/pickles"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Start Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 bg-card rounded-xl p-4 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover bg-muted"
              />
              <div className="flex-1 min-w-0">
                <Link to={`/product/${product.id}`} className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
                  {product.name}
                </Link>
                <p className="text-sm text-muted-foreground">{product.weight}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border rounded-lg overflow-hidden">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-2 hover:bg-muted transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 text-sm font-semibold">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-2 hover:bg-muted transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-foreground">₹{product.price * quantity}</span>
                    <button onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-card rounded-2xl p-6 shadow-sm h-fit lg:sticky lg:top-28">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span className="text-primary font-medium">Free</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between text-foreground font-bold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold mt-6 hover:opacity-90 transition-opacity">
            Proceed to Checkout
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">Secure checkout · Free shipping above ₹500</p>
        </div>
      </div>
    </main>
  );
};

export default Cart;
