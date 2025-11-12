import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* ===== 上半分：Contact ===== */}
      <div className="contact-inner">
        <h2 className="contact-title">あなたも、この実験の一員に。</h2>

        <p className="contact-text">
          ROUTE ACADEMY LABでは、AIと人間の共創をテーマに、<br />
          6ヶ月の実験プログラムを実施しています。<br />
          ここで学ぶのは、ツールの使い方ではなく、<br />
          「AIと共に考える力」。
        </p>

        <div className="contact-buttons">
          <button className="contact-btn">無料カウンセリングを予約</button>
          <button className="contact-btn secondary">資料をダウンロード</button>
        </div>
      </div>

      {/* ===== 下半分：Footer統合 ===== */}
      <footer className="footer-section">
        <div className="footer-inner">
          {/* 左側：ロゴ */}
          <div className="footer-logo">
            <img src="/service-logo.png" alt="AI LAB Logo" />
          </div>

          {/* 右側：運営情報とSNS */}
          <div className="footer-info">
            <div className="footer-company">
              <p>運営会社</p>
              <p>株式会社New Qreate</p>
              <p>東京都渋谷区渋谷</p>
            </div>

            <div className="footer-sns">
              <p>ソーシャルメディア</p>
              <div className="footer-sns-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/x-logo.png" alt="X logo" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/facebook-logo.png" alt="Facebook logo" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/instagram-logo.png" alt="Instagram logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 TRIPLE PERFORMANCE LAB</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
