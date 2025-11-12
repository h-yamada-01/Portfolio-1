import React, { useEffect, useState, useRef } from "react";
import "./process.css";

const steps = [
  {
    month: "1ヶ月目",
    title: "STEP 01 — 観察と理解",
    text: [
      "AIの概念、ChatGPT・Midjourneyなどの主要ツールを理解。",
      "AIの“仕組み”ではなく、“使い方の哲学”に触れる。",
    ],
  },
  {
    month: "2ヶ月目",
    title: "STEP 02 — 実験と体験",
    text: [
      "AIを実際の制作・業務に導入し、実験的に検証。",
      "小さな失敗を通じてAI活用の感覚を養う。",
    ],
  },
  {
    month: "3ヶ月目",
    title: "STEP 03 — 応用と構築",
    text: [
      "自分の領域に合わせたAIワークフローを設計。",
      "業務効率化と創造性向上の両立を実践。",
    ],
  },
  {
    month: "4ヶ月目",
    title: "STEP 04 — 共有と発表",
    text: [
      "自らのAI活用事例を他者と共有。",
      "チームや組織への展開を意識したアウトプットを行う。",
    ],
  },
  {
    month: "5ヶ月目",
    title: "STEP 05 — 改善と深化",
    text: [
      "継続的にAIとの関わりを改善し、精度を高める。",
      "AIとの共創スタイルを確立していく。",
    ],
  },
  {
    month: "6ヶ月目",
    title: "STEP 06 — 成果と次の挑戦",
    text: [
      "学びの成果を発表し、新たなテーマを設定。",
      "AIと人間の共創の未来を見据えた次の実験へ。",
    ],
  },
];

const Process = ({ active, onNext }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  // 自動切り替えロジック（5秒ごと）
  useEffect(() => {
    if (!active) return;
    startAutoLoop();

    return () => stopAutoLoop();
  }, [active]);

  const startAutoLoop = () => {
    stopAutoLoop(); // 既存を停止
    intervalRef.current = setInterval(() => {
      nextStep();
    }, 5000);
  };

  const stopAutoLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextStep = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setFade(true);
    }, 400);
  };

  const handleClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentStep(index);
      setFade(true);
    }, 400);
    startAutoLoop(); // クリック後も自動ループ再開
  };

  return (
    <section className={`process-section ${active ? "active" : ""}`}>
      <div className="process-bg" />
      <div className="process-inner">
        <div className="process-header">
          <h3>EVOLUTION PROCESS</h3>
        </div>

        <div className="process-layout">
          {/* 左：月リスト */}
          <div className="process-months">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`month-item ${i === currentStep ? "active" : ""}`}
                onClick={() => handleClick(i)}
              >
                {step.month}
              </div>
            ))}
          </div>

          {/* 右：内容 */}
          <div className={`process-content ${fade ? "fade-in" : "fade-out"}`}>
            <h4>{steps[currentStep].title}</h4>
            {steps[currentStep].text.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
