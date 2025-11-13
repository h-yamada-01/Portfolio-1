import React, { useEffect, useState } from "react";
import Loading from "./loading/loading";
import Header from "./header/header";
import Hero from "./hero/hero";
import Philosophy from "./philosophy/philosophy";
import Principles from "./principles/principles";
import Process from "./process/process";
import Members from "./members/members";
import Contact from "./contact/contact";
import WaterRippleEffect from "./effects/WaterRippleEffect";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true); // Hero表示状態
  const [philoLeaving, setPhiloLeaving] = useState(false); // Philosophy→Hero制御用

  const handleLoadingComplete = () => {
    setTimeout(() => setIsLoading(false), 500);
  };

  const moveTo = (next) => {
    if (locked) return;
    const max = 6;
    const clamped = Math.max(0, Math.min(next, max));
    if (clamped === index) return;

    // === Hero → Philosophy ===
    if (index === 0 && clamped === 1) {
      setLocked(true);
      setShowRipple(true);
      setHeroVisible(false); // Heroをフェードアウトへ

      setTimeout(() => {
        setIndex(1);
        setShowRipple(false);
        setLocked(false);
      }, 3000);
      return;
    }

    // === Philosophy → Hero ===
    if (index === 1 && clamped === 0) {
      setLocked(true);
      setPhiloLeaving(true); // Philosophyをフェードアウト状態に
      setHeroVisible(false); // 一旦Heroを非表示

      setTimeout(() => {
        setIndex(0); // Heroに切替
        setPhiloLeaving(false);
        setTimeout(() => {
          setHeroVisible(true); // Heroをフェードイン
          setLocked(false);
        }, 100);
      }, 1500);
      return;
    }

    // === 通常セクション間のフェード切替 ===
    setLocked(true);
    setIndex(clamped);
    setTimeout(() => setLocked(false), 1500);
  };

  const moveNext = () => moveTo(index + 1);
  const movePrev = () => moveTo(index - 1);

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (locked) return;

      if (e.deltaY > 5) moveNext();
      else if (e.deltaY < -5) movePrev();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [index, locked]);

  return (
    <div className="app-wrapper">
      {isLoading ? (
        <Loading onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Header />

          <div className="fullpage-container">
            {/* ===== Heroセクション ===== */}
            <section
              className={`section hero-section ${
                heroVisible ? "fade-in" : "fade-out"
              } ${index === 0 ? "active" : ""}`}
            >
              <Hero />
              {showRipple && <WaterRippleEffect />}
            </section>

            {/* ===== Philosophy ===== */}
            <section
              className={`section philosophy-section ${
                index === 1 && !philoLeaving ? "fade-in active" : "fade-out"
              } ${philoLeaving ? "leaving" : ""}`}
            >
              <Philosophy active={index === 1 && !philoLeaving} />
            </section>

            {/* ===== 以下すべてフェード遷移 ===== */}
            <section
              className={`section ${index === 2 ? "fade-in active" : "fade-out"}`}
            >
              <Principles active={index === 2} />
            </section>

            <section
              className={`section ${index === 3 ? "fade-in active" : "fade-out"}`}
            >
              <Process active={index === 3} onNext={() => moveTo(index + 1)} />
            </section>

            <section
              className={`section ${index === 4 ? "fade-in active" : "fade-out"}`}
            >
              <Members />
            </section>

            <section
              className={`section ${index === 5 ? "fade-in active" : "fade-out"}`}
            >
              <Contact />
            </section>
          </div>
        </>
      )}
    </div>
  );
}

/* コメント　*/

export default App;
