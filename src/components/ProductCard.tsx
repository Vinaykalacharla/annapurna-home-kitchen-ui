import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Star, BadgeCheck, Loader2 } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        <Link to={`/product/${product.id}`} className="block">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-[260px] w-full rounded-[16px] bg-[#F6F6F6] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>
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

        <Select value={selectedWeight} onValueChange={setSelectedWeight}>
          <SelectTrigger
            className="relative h-11 w-full rounded-[12px] border border-[#E5E5E5] bg-[#F9F9F9] px-3 pr-10 text-[14px] font-medium text-[#111111] transition-[border-color,box-shadow,background-color,transform] duration-300 hover:border-[#7ad6d6] hover:bg-white data-[state=open]:border-[#1FAFAF] data-[state=open]:bg-white data-[state=open]:shadow-[0_0_0_3px_rgba(31,175,175,0.14),0_14px_24px_-16px_rgba(31,175,175,0.9)] data-[state=open]:-translate-y-[1px] before:pointer-events-none before:absolute before:-left-4 before:top-1/2 before:h-7 before:w-7 before:-translate-y-1/2 before:rounded-full before:bg-[#1FAFAF]/20 before:blur-xl after:pointer-events-none after:absolute after:inset-x-4 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#1FAFAF]/60 after:to-transparent [&>span]:line-clamp-1 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-[#5f6a6a] [&_svg]:transition-transform [&_svg]:duration-300 data-[state=open]:[&_svg]:rotate-180"
            aria-label={`Select weight for ${product.name}`}
          >
            <SelectValue placeholder="Select weight" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            sideOffset={8}
            className="z-[70] w-[var(--radix-select-trigger-width)] rounded-2xl border border-[#c5ece9] bg-white/98 p-1.5 text-[#1d2e2e] backdrop-blur-xl shadow-[0_24px_40px_-22px_rgba(9,86,86,0.55)] data-[state=open]:slide-in-from-top-3 data-[state=open]:zoom-in-95"
          >
            {weightOptions.map((option) => (
              <SelectItem
                key={`${product.id}-${option}`}
                value={option}
                className="min-h-10 cursor-pointer rounded-xl py-2.5 pl-8 pr-3 text-[14px] font-medium outline-none transition-all duration-200 focus:bg-[#eaf9f8] focus:text-[#105d57] data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#1FAFAF]/15 data-[state=checked]:to-[#1FAFAF]/5 data-[state=checked]:text-[#0f6159]"
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

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
