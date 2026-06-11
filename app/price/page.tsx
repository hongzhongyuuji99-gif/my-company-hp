import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金比較 | エクシア",
  description: "一般的な業界の料金タイプとの比較。エクシアは初期費用0円・固定費0円・成果報酬のみで、赤字リスクなく始められます。",
};

const others = [
  {
    name: "一般の物販・ビジネスコンサル",
    fee: "月額制（月3〜10万円／高いと月30万円〜）",
    upfront: "毎月固定でかかる",
    noresult: "払い続ける",
  },
  {
    name: "eBay輸出スクール・塾",
    fee: "買い切り（30〜50万円を一括）",
    upfront: "最初にまとめて一括",
    noresult: "基本は返金なし",
  },
  {
    name: "eBay出品代行サービス",
    fee: "月額＋eBay手数料（売上の約17〜20%）",
    upfront: "毎月固定でかかる",
    noresult: "月額が発生",
  },
];

export default function Price() {
  return (
    <div style={{ background: "#0d0d12", minHeight: "100vh", padding: "2.5rem 1.2rem", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: "#d4af37", fontSize: 28, fontWeight: 500, letterSpacing: "0.06em" }}>料金比較</div>
          <div style={{ color: "#a8975a", fontSize: 14, marginTop: 8 }}>― なぜエクシアは「先払い0円」なのか ―</div>
        </div>

        <div style={{ display: "grid", gap: 14, marginBottom: 18 }}>
          {others.map((o) => (
            <div key={o.name} style={{ background: "#17171d", border: "1px solid #3a3320", borderRadius: 12, padding: "1.1rem 1.2rem" }}>
              <div style={{ color: "#e8d18a", fontSize: 17, fontWeight: 500, marginBottom: 10 }}>{o.name}</div>
              <div style={{ color: "#cfcfd4", fontSize: 15, lineHeight: 2 }}>
                <div>料金：<span style={{ color: "#ffffff" }}>{o.fee}</span></div>
                <div>先に払うお金：<span style={{ color: "#e6b86a" }}>{o.upfront}</span></div>
                <div>成果が出なくても：<span style={{ color: "#e6b86a" }}>{o.noresult}</span></div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg,#1c1810,#2a2414)", border: "2px solid #d4af37", borderRadius: 14, padding: "1.4rem 1.3rem", boxShadow: "0 0 26px rgba(212,175,55,0.25)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ color: "#1a1408", background: "#d4af37", fontSize: 12, fontWeight: 500, padding: "3px 12px", borderRadius: 20 }}>当社</span>
            <span style={{ color: "#f5d76e", fontSize: 23, fontWeight: 500 }}>エクシア</span>
          </div>
          <div style={{ color: "#eeeeee", fontSize: 15, lineHeight: 2.1 }}>
            <div>料金：<span style={{ color: "#f5d76e", fontWeight: 500 }}>成果報酬のみ（利益の50%）</span></div>
            <div>先に払うお金：<span style={{ color: "#7ee0a0", fontWeight: 500 }}>0円</span></div>
            <div>成果が出なくても：<span style={{ color: "#7ee0a0", fontWeight: 500 }}>0円・赤字リスクなし</span></div>
          </div>
          <div style={{ color: "#cfc18a", fontSize: 13.5, marginTop: 12, lineHeight: 1.8 }}>
            初期費用も月額もゼロ。利益が出たぶんから50%だけ頂くので、運営もあなたと一緒に「売れる」ことに本気です。
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.2rem" }}>
          <a
            href="https://calendar.app.google/ekqLmu1eTZAXyxhNA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#d4af37", color: "#1a1408", fontSize: 17, fontWeight: 500, padding: "14px 40px", borderRadius: 40, textDecoration: "none" }}
          >
            無料相談を予約する →
          </a>
          <div style={{ color: "#6f6a55", fontSize: 11, marginTop: 18, lineHeight: 1.7 }}>
            ※他社の料金は一般的な業界相場であり、各社により異なります
          </div>
        </div>
      </div>
    </div>
  );
}
