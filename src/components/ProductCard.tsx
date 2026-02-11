import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Star, BadgeCheck, ChevronDown, Loader2 } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import ProductMediaSwap from "@/components/ProductMediaSwap";

interface ProductCardProps {
  product: Product;
  compactMedia?: boolean;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const inr = new Intl.NumberFormat("en-IN");

  const categoryLabel = {
    pickles: "Andhra Special",
    odiyalu: "Crispy Classics",
    podilu: "Podi Blend",
    special: "From Western Ghats",
  }[product.category];

  const ratingSeed = product.id.length * 13 + product.name.length;
  const rating = Number((4.8 + (ratingSeed % 3) * 0.1).toFixed(1));
  const comparePrice = Math.round(product.price * 1.12);
  const discountPercent = Math.max(
    0,
    Math.round(((comparePrice - product.price) / comparePrice) * 100),
  );
  const inStock = product.inStock ?? true;

  const weightOptions = useMemo(() => {
    const match = product.weight.toLowerCase().match(/^(\d+(?:\.\d+)?)\s*(g|kg)$/);
    if (!match) return [product.weight];

    const value = Number(match[1]);
    const unit = match[2];

    if (unit === "g") {
      const options = [
        Math.max(100, Math.round((value * 0.5) / 50) * 50),
        Math.round(value / 10) * 10,
        Math.round((value * 1.5) / 50) * 50,
      ];
      return Array.from(new Set(options))
        .sort((a, b) => a - b)
        .map((option) => `${option}g`);
    }

    const options = [
      Math.max(0.25, Number((value * 0.5).toFixed(2))),
      Number(value.toFixed(2)),
      Number((value * 1.5).toFixed(2)),
    ];
    return Array.from(new Set(options))
      .sort((a, b) => a - b)
      .map((option) => `${option}kg`);
  }, [product.weight]);

  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]);
  const [isAdding, setIsAdding] = useState(false);
  const [isSelectFocused, setIsSelectFocused] = useState(false);

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!inStock || isAdding) return;
    setIsAdding(true);
    await new Promise((resolve) => window.setTimeout(resolve, 420));
    addToCart(product);
    toast.success(`${product.name} (${selectedWeight}) added to cart`);
    setIsAdding(false);
  };

  return (
    <article className="group mx-auto w-full max-w-[320px] rounded-[20px] bg-white p-4 [font-family:Inter,Poppins,Manrope,sans-serif] shadow-[0px_8px_24px_rgba(0,0,0,0.06)] transition-[box-shadow,transform] duration-200 hover:shadow-[0px_14px_30px_rgba(0,0,0,0.10)]">
      <div className="relative mb-3">
        <ProductMediaSwap
          to={`/product/${product.id}`}
          primarySrc={product.image}
          primaryAlt={product.name}
          secondary={
            product.hoverVideo || product.video
              ? { kind: "video", src: product.hoverVideo ?? product.video, poster: product.image }
              : product.hoverImage
                ? { kind: "image", src: product.hoverImage, alt: `${product.name} alternate view` }
                : undefined
          }
        />
        {discountPercent > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-[#113d34] px-2.5 py-1 text-[11px] font-semibold leading-none tracking-[0.2px] text-white">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      <div className="space-y-3">
        <span className="inline-flex w-fit items-center rounded-[12px] bg-[#F2F1FF] px-[10px] py-[6px] text-[12px] font-medium leading-none text-[#5B5BD6]">
          {categoryLabel}
        </span>

        <Link
          to={`/product/${product.id}`}
          className="block line-clamp-2 text-[18px] font-semibold leading-6 text-[#111111] transition-colors group-hover:text-[#0f4b36]"
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-[6px]">
          <Star className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
          <span className="text-[14px] font-medium leading-none text-[#FFB800]">{rating.toFixed(1)}</span>
          <BadgeCheck className="h-4 w-4 text-[#28b8c3]" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[20px] font-bold leading-none text-[#111111]">
            {"\u20B9"} {inr.format(product.price)}
          </span>
          <span className="text-[14px] font-normal leading-none text-[#9E9E9E] line-through">
            {"\u20B9"} {inr.format(comparePrice)}
          </span>
        </div>

        <div className="relative">
          <select
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
            onFocus={() => setIsSelectFocused(true)}
            onBlur={() => setIsSelectFocused(false)}
            className={`h-11 w-full appearance-none rounded-[12px] border px-3 pr-10 text-[14px] font-medium text-[#111111] outline-none transition-[border-color,box-shadow,background-color] ${
              isSelectFocused
                ? "border-[#1FAFAF] bg-white shadow-[0_0_0_3px_rgba(31,175,175,0.12)]"
                : "border-[#E5E5E5] bg-[#F9F9F9]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {weightOptions.map((option) => (
              <option key={`${product.id}-${option}`} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B6B6B] transition-transform duration-200 ${
              isSelectFocused ? "rotate-180" : ""
            }`}
          />
        </div>

        <button
          onClick={handleAdd}
          disabled={!inStock || isAdding}
          className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-[14px] text-[16px] font-semibold tracking-[0.3px] text-white transition-[background-color,transform] ${
            inStock
              ? "bg-[#1FAFAF] hover:bg-[#178f8f] active:scale-[0.98]"
              : "cursor-not-allowed bg-[#BDBDBD]"
          } ${isAdding ? "cursor-wait" : ""}`}
        >
          {isAdding ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Adding...
            </>
          ) : inStock ? (
            "Add To Cart"
          ) : (
            "Out of Stock"
          )}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
