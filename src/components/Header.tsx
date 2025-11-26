import React from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import LogoMaisonBarrere from "../assets/logo.svg";

const navLinks = [
  { label: "Vitrine", path: "/vitrine" },
  { label: "À propos", path: "/apropos" },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const menuContentRef = React.useRef<HTMLElement | null>(null);
  const navButtonRefs = React.useRef<HTMLButtonElement[]>([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);
  const goHome = () => {
    navigate("/");
  };
  const handleNavigate = (path: string) => {
    navigate(path);
    closeMenu();
  };

  React.useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const items = menuContentRef.current ? Array.from(menuContentRef.current.children) : [];

    if (overlay) {
      gsap.set(overlay, { yPercent: -100 });
    }

    if (items.length) {
      gsap.set(items, { opacity: 0, y: 20 });
    }
  }, []);

  React.useEffect(() => {
    const buttons = navButtonRefs.current;
    const cleanups: Array<() => void> = [];

    buttons.forEach((button) => {
      if (!button) {
        return;
      }

      const onEnter = () => {
        gsap.to(button, {
          letterSpacing: "0.3em",
          opacity: 0.7,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(button, {
          letterSpacing: "0.15em",
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", onEnter);
      button.addEventListener("mouseleave", onLeave);
      button.addEventListener("focus", onEnter);
      button.addEventListener("blur", onLeave);

      cleanups.push(() => {
        button.removeEventListener("mouseenter", onEnter);
        button.removeEventListener("mouseleave", onLeave);
        button.removeEventListener("focus", onEnter);
        button.removeEventListener("blur", onLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  React.useEffect(() => {
    const overlay = overlayRef.current;
    const items = menuContentRef.current ? Array.from(menuContentRef.current.children) : [];

    if (overlay) {
      gsap.to(overlay, {
        yPercent: isMenuOpen ? 0 : -100,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }

    if (items.length) {
      gsap.to(items, {
        opacity: isMenuOpen ? 1 : 0,
        y: isMenuOpen ? 0 : 20,
        stagger: 0.08,
        duration: 0.4,
        delay: isMenuOpen ? 0.1 : 0,
        ease: "power3.out",
      });
    }

    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerSlot}>
          <button
            type="button"
            style={{
              ...styles.burgerButton,
              visibility: isMenuOpen ? "hidden" : "visible",
              pointerEvents: isMenuOpen ? "none" : "auto",
            }}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              style={{
                ...styles.burgerLine,
                top: isMenuOpen ? "50%" : "calc(50% - 8px)",
                transform: isMenuOpen
                  ? "translate(-50%, -50%) rotate(45deg)"
                  : "translate(-50%, -50%)",
              }}
            />
            <span
              style={{
                ...styles.burgerLine,
                top: "50%",
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                ...styles.burgerLine,
                top: isMenuOpen ? "50%" : "calc(50% + 8px)",
                transform: isMenuOpen
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, -50%)",
              }}
            />
          </button>
        </div>

        <div style={styles.logoSlot}>
          <button type="button" style={styles.logoButton} onClick={goHome} aria-label="Retour à l’accueil">
            <img src={LogoMaisonBarrere} alt="Maison Barrere" style={styles.logoImage} />
          </button>
        </div>

        <div style={styles.headerSlot}>
          <a
            href="https://instagram.com/maison_barrere"
            target="_blank"
            rel="noreferrer"
            style={styles.socialButton}
            aria-label="Instagram Maison Barrere"
          >
            <svg viewBox="0 0 24 24" style={styles.socialIcon} role="img" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm9 2a1 1 0 100 2 1 1 0 000-2zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c2.758 0 5-2.243 5-5s-2.242-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"
              />
            </svg>
          </a>
        </div>
      </header>

        <div
          ref={overlayRef}
          style={{ ...styles.menuOverlay, pointerEvents: isMenuOpen ? "auto" : "none" }}
          aria-hidden={!isMenuOpen}
        >
        <button
          type="button"
          style={styles.overlayCloseButton}
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <span
            style={{
              ...styles.burgerLine,
              top: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />
          <span
            style={{
              ...styles.burgerLine,
              top: "50%",
              opacity: 0,
            }}
          />
          <span
            style={{
              ...styles.burgerLine,
              top: "50%",
              transform: "translate(-50%, -50%) rotate(-45deg)",
            }}
          />
        </button>
        <nav ref={menuContentRef} style={styles.menuContent}>
          {navLinks.map((link, index) => (
            <button
              key={link.path}
              style={styles.menuButton}
              type="button"
              ref={(el) => {
                if (el) {
                  navButtonRefs.current[index] = el;
                }
              }}
              onClick={() => handleNavigate(link.path)}
            >
              {link.label}
            </button>
          ))}
          <p style={styles.menuFooter}>maisonbarrere®</p>
        </nav>
      </div>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "16px 24px",
    display: "grid",
    gridTemplateColumns: "48px 1fr 48px",
    alignItems: "center",
    background: "white",
    zIndex: 1000,
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
  },
  headerSlot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "48px",
  },
  logoSlot: {
    display: "flex",
    justifyContent: "center",
  },
  logoButton: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    outline: "none",
    WebkitTapHighlightColor: "transparent",
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "48px",
    objectFit: "contain",
  },
  burgerButton: {
    width: "48px",
    height: "48px",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    background: "none",
    border: "none",
    borderRadius: "0",
    cursor: "pointer",
    outline: "none",
    WebkitTapHighlightColor: "transparent",
    transition: "border-color 0.2s ease",
  },
  overlayCloseButton: {
    position: "absolute",
    top: "20px",
    left: "24px",
    width: "48px",
    height: "48px",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    border: "none",
    borderRadius: "0",
    cursor: "pointer",
    outline: "none",
    WebkitTapHighlightColor: "transparent",
  },
  burgerLine: {
    position: "absolute",
    left: "50%",
    width: "24px",
    height: "2px",
    backgroundColor: "#000",
    borderRadius: "1px",
    transition: "all 0.3s ease",
    transform: "translate(-50%, -50%)",
  },
  menuOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    zIndex: 1100,
  },
  menuContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  menuButton: {
    fontFamily: "var(--font-sans)",
    fontSize: "28px",
    textDecoration: "none",
    color: "#000000",
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    letterSpacing: "0.15em",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
  },
  menuFooter: {
    marginTop: "40px",
    fontFamily: "var(--font-sans)",
    fontSize: "16px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  socialButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    borderRadius: "0",
    background: "transparent",
    color: "#000",
    border: "none",
    textDecoration: "none",
    outline: "none",
    WebkitTapHighlightColor: "transparent",
  },
  socialIcon: {
    width: "18px",
    height: "18px",
  },
};
