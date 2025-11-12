import React, { useEffect, useState } from "react";
import "./loading.css";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // 3秒で完了
    const interval = 30; // 更新間隔
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        start = 100;
        clearInterval(timer);
        // 0.5秒後に完了通知
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
      setProgress(start);
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="loading-container">
      <p className="loading-text">Now Loading...</p>

      <div className="loading-bar-container">
        <div className="loading-bar">
          <div
            className="loading-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="loading-percent">{Math.floor(progress)}%</p>
      </div>
    </div>
  );
};

export default Loading;
