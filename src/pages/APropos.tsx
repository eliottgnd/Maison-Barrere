import { useRef } from "react";

const copy = {
  lead:
    "Une collection limitée pour les fêtes. Ils se ressemblent tous, mais aucun n’est tout à fait pareil. Comme une famille réunie autour de la table le 25.",
  craft: "Soufflés un à un dans mon atelier à Barcelone, chaque verre est unique, mélange entre artisanat et objet d’art.",
  workshop: "Toutes les pièces sont faites main et fabriquées dans notre atelier.",
};

export default function APropos() {
  const mentionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section style={styles.wrapper}>
      <article style={styles.content}>
        <p style={styles.kicker}>Maison Barrere</p>
        <h1 style={styles.title}>LES IMPARFAITS</h1>
        <p style={styles.paragraph}>{copy.lead}</p>
        <p style={styles.paragraph}>{copy.craft}</p>
        <p style={styles.paragraph}>{copy.workshop}</p>

        <div ref={mentionRef} style={styles.instagram}>
          <div>
            <p style={styles.instagramText}>
              Commandes en messages privés sur{" "}
              <a style={styles.instagramLink} href="https://instagram.com/maison_barrere">
                @maison_barrere
              </a>
              .
            </p>
          </div>
        </div>

        <footer style={styles.footer}>
          <p style={styles.footerLine}>MAISON BARRERE© 2025 — Tous droits réservés</p>
          <p style={styles.footerLine}>
            site internet codé avec amour par{" "}
            <a style={styles.footerLink} href="https://www.bymocha.studio" target="_blank" rel="noreferrer">
              mochastudio
            </a>
          </p>
        </footer>
      </article>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    width: "100%",
    minHeight: "100%",
    padding: "140px 32px 80px",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  content: {
    maxWidth: "760px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  kicker: {
    fontFamily: "var(--font-serif)",
    fontSize: "14px",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "rgba(0,0,0,0.45)",
    margin: 0,
  },
  title: {
    fontFamily: "var(--font-serif)",
    fontSize: "61px",
    lineHeight: 1.1,
    fontWeight: 400,
    margin: 0,
  },
  paragraph: {
    fontFamily: "var(--font-serif)",
    fontSize: "18px",
    lineHeight: 1.6,
    margin: 0,
  },
  instagram: {
    marginTop: "32px",
    fontFamily: "var(--font-serif)",
    fontSize: "16px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    color: "#000",
  },
  instagramLink: {
    color: "#000",
    textDecoration: "underline",
  },
  footer: {
    position: "static",
    width: "100%",
    fontFamily: "var(--font-serif)",
    fontSize: "16px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "flex",
    gap: "8px",
    background: "#fff",
    padding: "16px 32px",
    boxSizing: "border-box",
    zIndex: 100,
    justifyContent: "center",
    marginTop: "40px",
  },
};

