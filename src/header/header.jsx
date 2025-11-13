import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        {/* 左側ロゴ */}
        <div className="header-logo">
          <img src="/service-logo.png" alt="AI LAB" />
        </div>

        {/* 右側CTA */}
        <button className="header-btn">Join the Lab</button>
      </div>
    </header>
  );
};

export default Header;
