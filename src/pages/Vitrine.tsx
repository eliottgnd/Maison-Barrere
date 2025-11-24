import { useMemo } from "react";
import { useRef, useState } from "react";
import "./Vitrine.css";
import heroVideo from "../assets/herovideomaquette.mp4";
import productImage from "../assets/imparfaitstest.jpg";

type Product = {
  id: string;
  name: string;
  category: string;
};

const products: Product[] = [
  {
    id: "verre-erable",
    name: "Verre 1",
    category: "Verre",
  },
  {
    id: "verre-cypres",
    name: "Verre 2",
    category: "Verre",
  },
  {
    id: "verre-oranger",
    name: "Verre 3",
    category: "Verre",
  },
  {
    id: "verre-santal",
    name: "Verre 4",
    category: "Verre",
  },
];

function useSquareSize() {
  return useMemo(
    () => ({
      width: "100%",
      aspectRatio: "1 / 1",
    }),
    []
  );
}

function ProductCard({ product }: { product: Product }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const squareStyle = useSquareSize();

  const startPreview = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (video) {
      void video.play();
    }
  };

  const stopPreview = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onFocus={startPreview}
      onBlur={stopPreview}
      onTouchStart={startPreview}
      onTouchEnd={stopPreview}
      onTouchCancel={stopPreview}
      tabIndex={0}
    >
      <div style={{ ...styles.mediaWrapper, ...squareStyle }}>
        <img
          src={productImage}
          alt={product.name}
          style={{
            ...styles.media,
            opacity: isHovered ? 0 : 1,
          }}
          loading="lazy"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            ...styles.media,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div style={styles.cardFooter}>
        <p style={styles.productCategory}>{product.category}</p>
        <p style={styles.productName}>{product.name}</p>
      </div>
    </div>
  );
}

export default function Vitrine() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.intro}>
        <p style={styles.kicker}>Collection permanente</p>
        <h1 style={styles.title}>Vitrine</h1>
        <p style={styles.subtitle}>
          Une sélection curatée de nos pièces signature. Survolez pour voir la matière prendre vie.
        </p>
      </div>

      <div className="vitrine-grid" style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <p style={styles.notice}>
        Chaque pièce est façonnée à la main et disponible uniquement sur commande via un message privé Instagram.
      </p>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    width: "100%",
    padding: "140px 32px 48px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    boxSizing: "border-box",
  },
  intro: {
    maxWidth: "640px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  kicker: {
    fontFamily: "var(--font-serif)",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: "rgba(0,0,0,0.5)",
    margin: 0,
  },
  title: {
    fontFamily: "var(--font-serif)",
    fontSize: "48px",
    margin: 0,
    fontWeight: 400,
  },
  subtitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "18px",
    margin: 0,
    lineHeight: 1.4,
    color: "rgba(0,0,0,0.7)",
  },
  grid: {
    width: "100%",
    gap: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    outline: "none",
  },
  mediaWrapper: {
    position: "relative",
    overflow: "hidden",
    background: "#f5f5f5",
    border: "1px solid rgba(0,0,0,0.05)",
  },
  media: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.3s ease",
  },
  cardFooter: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  productCategory: {
    margin: 0,
    fontFamily: "var(--font-serif)",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "rgba(0,0,0,0.5)",
  },
  productName: {
    margin: 0,
    fontFamily: "var(--font-serif)",
    fontSize: "18px",
    fontWeight: 400,
  },
  notice: {
    margin: "12px 0 0",
    fontFamily: "var(--font-serif)",
    fontSize: "14px",
    color: "rgba(0,0,0,0.6)",
    textAlign: "center",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
};

