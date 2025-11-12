import React, { useEffect, useState } from "react";
import "./hero.css";

const Hero = () => {
  const [showEn, setShowEn] = useState(false);
  const [showJp, setShowJp] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowEn(true), 400);   // 英語タイトル
    const t2 = setTimeout(() => setShowJp(true), 1200);  // 日本語タイトル
    const t3 = setTimeout(() => setShowCta(true), 2000); // CTA
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg" />

      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className={`hero-title-en ${showEn ? "in" : ""}`}>
            Learn. Experiment. Evolve.
          </h1>
          <h2 className={`hero-title-jp ${showJp ? "in" : ""}`}>
            AIと共に進化する学習ラボ
          </h2>

          {/* CTA：独立してアニメーション（位置固定） */}
          <div className="hero-cta-wrapper">
            {showCta && (
              <button className="hero-btn" type="button">
                Enter the Lab
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
