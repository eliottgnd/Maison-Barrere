import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import heroVideo from "./assets/herovideomaquette.mp4";
import Vitrine from "./pages/Vitrine";
import APropos from "./pages/APropos";

function Home() {
  return (
    <HeroVideo
      // No props are passed. <HeroVideo /> does not accept src/fallbackImage props anymore.
    />
  );
}

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitrine" element={<Vitrine />} />
          <Route path="/apropos" element={<APropos />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
