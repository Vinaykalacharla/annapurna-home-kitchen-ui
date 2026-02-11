import { useRef } from "react";
import { Link } from "react-router-dom";
import "./product-media-swap.css";

type SecondaryMedia =
  | { kind: "image"; src: string; alt?: string }
  | { kind: "video"; src: string; poster?: string };

interface ProductMediaSwapProps {
  to: string;
  primarySrc: string;
  primaryAlt: string;
  secondary?: SecondaryMedia;
  className?: string;
}

const ProductMediaSwap = ({
  to,
  primarySrc,
  primaryAlt,
  secondary,
  className,
}: ProductMediaSwapProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleHoverStart = () => {
    if (secondary?.kind !== "video" || !videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => undefined);
    }
  };

  const handleHoverEnd = () => {
    if (secondary?.kind !== "video" || !videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      to={to}
      className={`product-media-swap ${className ?? ""}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onFocus={handleHoverStart}
      onBlur={handleHoverEnd}
    >
      <figure className="product-media-swap__frame">
        <img
          src={primarySrc}
          alt={primaryAlt}
          loading="lazy"
          className="product-media-swap__layer product-media-swap__primary"
        />

        {secondary?.kind === "image" && (
          <img
            src={secondary.src}
            alt={secondary.alt ?? `${primaryAlt} alternate view`}
            loading="lazy"
            className="product-media-swap__layer product-media-swap__secondary"
          />
        )}

        {secondary?.kind === "video" && (
          <video
            ref={videoRef}
            poster={secondary.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="product-media-swap__layer product-media-swap__secondary"
            aria-label={`${primaryAlt} product video`}
          >
            <source src={secondary.src} type="video/mp4" />
          </video>
        )}
      </figure>
    </Link>
  );
};

export default ProductMediaSwap;
