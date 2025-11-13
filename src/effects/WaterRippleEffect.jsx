import React, { useEffect, useRef } from "react";
import "./waterRipple.css";

const WaterRippleEffect = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const startTime = performance.now();
    const duration = 2000; // 3秒間の演出

    // 泡データ生成
    const bubbles = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      drift: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    function drawFrame(timestamp) {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2); // ease-out
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 背景グラデーション（明→暗）
      const bgGradient = ctx.createLinearGradient(
        0,
        0,
        0,
        canvas.height
      );
      bgGradient.addColorStop(0, `rgba(0, 100, 180, ${1 - progress * 0.4})`);
      bgGradient.addColorStop(1, `rgba(10, 20, 40, ${1})`);
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 波紋（放射状グラデーション）
      const rippleRadius = eased * canvas.width * 0.8;
      const rippleGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        rippleRadius
      );
      rippleGradient.addColorStop(0, `rgba(255,255,255,${0.25 - eased * 0.2})`);
      rippleGradient.addColorStop(0.3, `rgba(120,180,255,${0.3 - eased * 0.25})`);
      rippleGradient.addColorStop(1, `rgba(0,30,80,${1 - eased * 0.8})`);
      ctx.fillStyle = rippleGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 泡の描画
      ctx.beginPath();
      bubbles.forEach((b) => {
        b.y -= b.speed;
        b.x += b.drift;
        if (b.y < -10) {
          b.y = canvas.height + Math.random() * 100;
          b.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = `rgba(255,255,255,${b.opacity})`;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 光の揺らぎ（ゆるく動くサイン波状の明暗）
      const lightStrength = Math.sin(timestamp / 500) * 0.05 + 0.15;
      ctx.fillStyle = `rgba(255,255,255,${lightStrength})`;
      ctx.globalCompositeOperation = "overlay";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      if (progress < 1) {
        requestAnimationFrame(drawFrame);
      } else {
        if (onComplete) onComplete();
      }
    }

    requestAnimationFrame(drawFrame);
  }, [onComplete]);

  return <canvas ref={canvasRef} className="water-ripple-canvas"></canvas>;
};

export default WaterRippleEffect;
