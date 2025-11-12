import React, { useEffect, useState } from "react";
import "./philosophy.css";

const Philosophy = ({ active }) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showText, setShowText] = useState(false);

  // index === 1（＝Philosophy表示）になったタイミングで発火
  useEffect(() => {
    if (active) {
      const t1 = setTimeout(() => setShowTitle(true), 300);
      const t2 = setTimeout(() => setShowMain(true), 1000);
      const t3 = setTimeout(() => setShowText(true), 1800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      // 次のセクションに移動したらリセット（戻ってきた時再発火する）
      setShowTitle(false);
      setShowMain(false);
      setShowText(false);
    }
  }, [active]);

  return (
    <section className="philosophy-section">
      <div className="philosophy-bg" />

      <div className="philosophy-inner">
        <h3
          className={`philosophy-subtitle ${showTitle ? "fade-in-left" : ""}`}
        >
          LAB PHILOSOPHY
        </h3>

        <h2 className={`philosophy-main ${showMain ? "fade-in-up" : ""}`}>
          学びは、静かな実験だ。
        </h2>

        <p className={`philosophy-text ${showText ? "fade-in-up" : ""}`}>
          AI LABは、AI時代の人間が
          <br />
          “創造力”を取り戻すための研究所。
          <br />
          我々は、知識ではなく思考の深度を探る。
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
