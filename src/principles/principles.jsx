import React, { useEffect, useState } from "react";
import "./principles.css";

const Principles = ({ active }) => {
  const [showTitle, setShowTitle] = useState(false);
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    if (active) {
      const t1 = setTimeout(() => setShowTitle(true), 300);
      const t2 = setTimeout(() => setVisible([true, false, false]), 1000);
      const t3 = setTimeout(() => setVisible([true, true, false]), 1600);
      const t4 = setTimeout(() => setVisible([true, true, true]), 2200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    } else {
      setShowTitle(false);
      setVisible([false, false, false]);
    }
  }, [active]);

  return (
    <section className="principles-section">
      <div className="principles-bg" />

      <div className="principles-inner">
        <div className={`principles-header ${showTitle ? "fade-in-left" : ""}`}>
          <h3 className="principles-title-en">PRINCIPLES</h3>
          <h2 className="principles-title-jp">ラボを支える3つの原理</h2>
        </div>

        <div className="principles-list">
          <div
            className={`principle-item glass ${
              visible[0] ? "show" : ""
            }`}
          >
            <h4>01 EXPERIMENTAL CURRICULUM</h4>
            <p>実践を通じてAIを“研究”する</p>
          </div>

          <div
            className={`principle-item glass ${
              visible[1] ? "show" : ""
            }`}
          >
            <h4>02 HUMAN × AI</h4>
            <p>人とAIの共創で“探究”する</p>
          </div>

          <div
            className={`principle-item glass ${
              visible[2] ? "show" : ""
            }`}
          >
            <h4>03 REAL-WORLD PERFORMANCE</h4>
            <p>現場に還元される実践力</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
