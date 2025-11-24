import type { CSSProperties } from "react";

interface HeroVideoProps {
  src?: string;
  fallbackImage?: string;
}

export default function HeroVideo({ src, fallbackImage }: HeroVideoProps) {
  const hasVideo = Boolean(src);

  return (
    <section style={styles.container}>
      {hasVideo ? (
        <video
          style={styles.media}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        fallbackImage && (
          <img
            src={fallbackImage}
            alt="Présentation Maison Barrère"
            style={styles.media}
          />
        )
      )}
    </section>
  );
}

const styles: Record<"container" | "media", CSSProperties> = {
  container: {
    width: "100%",
    alignSelf: "stretch",
    flexGrow: 1,
    flexBasis: 0,
    height: "calc(100vh - 80px)", // 80px approx header height
    maxHeight: "800px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
