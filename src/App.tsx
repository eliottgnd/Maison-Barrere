import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import heroVideo from "./assets/herovideomaquette.mp4";

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
      <HeroVideo
        src={heroVideo}
        fallbackImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80"
      />
    </div>
  );
}

export default App;
