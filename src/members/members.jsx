import React from "react";
import "./members.css";

const members = [
  {
    img: "/person1.png",
    name: "高橋 雄大（Yudai Takahashi）",
    role: "AI CREATOR / MARKETER",
    desc: "AIと人間の共創をテーマに、ビジュアル制作・文章生成・戦略設計を横断的に手がける。AIリサーチャーとしての観点からプロジェクトの推進に貢献。専門分野：AI活用設計・マーケティング支援・映像デザイン。",
  },
  {
    img: "/person2.png",
    name: "清水 健（Ken Shimizu）",
    role: "DATA STRATEGIST / ANALYTIC RESEARCHER",
    desc: "AIによる戦略的思考を軸にした分析設計者。データ分析・統計をもとに事業構築の根幹を設計。AIリサーチにおける人間中心設計の専門家。専門分野：データ分析・AIプロトタイピング・AIモデル評価。",
  },
  {
    img: "/person3.png",
    name: "高橋 怜（Rei Takahashi）",
    role: "DESIGN ENGINEER / VISUAL RESEARCHER",
    desc: "AIとデザインの融合領域で活動。UI/UX設計とビジュアル生成を統合した開発を行う。Figma・Midjourney・Runwayを駆使し、AIデザインワークショップを展開中。",
  },
  {
    img: "/person4.png",
    name: "松村 泰平（Taihei Matsumura）",
    role: "PRODUCT DIRECTOR / AI FACILITATOR",
    desc: "AIツールを活用したプロダクト開発と教育プログラム設計に従事。AI人材育成と企業導入支援の両面で活動。専門分野：AI導入支援・教育設計・プロジェクトマネジメント。",
  },
];

const Members = () => {
  return (
    <section className="members-section">
      {/* 左上タイトル */}
      <h3 className="members-title-en">INSTRUCTORS / LAB MEMBERS</h3>

      <div className="members-inner">
        {/* 無限ループスライダー */}
        <div className="members-slider">
          <div className="members-track">
            {members.concat(members).map((member, index) => (
              <div className="member-card" key={index}>
                <div className="member-image">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <h5>{member.role}</h5>
                  <p>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
