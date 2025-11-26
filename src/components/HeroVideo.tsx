import type { CSSProperties } from "react";
import LogoMaisonBarrere from "../assets/logo.svg";

export default function HeroVideo() {
  return (
    <section style={styles.container}>
      <img
        src={LogoMaisonBarrere}
        alt="Logo Maison Barrère"
        style={styles.logo}
        draggable={false}
      />
    </section>
  );
}

const styles: Record<"container" | "logo", CSSProperties> = {
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
    background: "#fff", // Or any appropriate background
  },
  logo: {
    width: "28vw",
    maxWidth: "420px",
    minWidth: "160px",
    height: "auto",
    display: "block",
    pointerEvents: "none",
    userSelect: "none",
  },
};
