import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金比較 | エクシア",
  description: "一般的な業界の料金タイプとの比較。エクシアは初期費用55,000円・月額0円・成果報酬のみで、月額固定なく始められます。",
};

const others = [
  { name: "一般の物販コンサル", init: "30〜100万円", monthly: "3〜10万円" },
  { name: "eBay輸出スクール・塾", init: "3〜10万円", monthly: "1〜20万円" },
  { name: "eBay出品代行", init: "3〜5万円", monthly: "1〜5万円＋手数料" },
];

export default function Price() {
  return (
    <div style={{ background: "#0d0d12", minHeight: "100vh", padding: "2.5rem 1.1rem", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1.6rem" }}>
          <div style={{ color: "#d4af37", fontSize: 26, fontWeight: 500, letterSpacing: "0.06em" }}>料金比較</div>
        </div>

        <div className="price-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {others.map((o) => (
              <div key={o.name} style={{ background: "#17171d", border: "1px solid #3a3320", borderRadius: 11, padding: "0.9rem 1rem" }}>
                <div style={{ color: "#e8d18a", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{o.name}</div>
                <div style={{ color: "#cfcfd4", fontSize: 13, lineHeight: 1.8 }}>初期費用：<span style={{ color: "#e6b86a" }}>{o.init}</span></div>
                <div style={{ color: "#cfcfd4", fontSize: 13, lineHeight: 1.8 }}>月額：<span style={{ color: "#e6b86a" }}>{o.monthly}</span></div>
              </div>
            ))}
          </div>

          <div style={{ background: "linear-gradient(135deg,#1c1810,#2a2414)", border: "2px solid #d4af37", borderRadius: 14, padding: "1.4rem 1.3rem", boxShadow: "0 0 26px rgba(212,175,55,0.22)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ color: "#1a1408", background: "#d4af37", fontSize: 11, fontWeight: 500, padding: "3px 11px", borderRadius: 20 }}>当社</span>
              <span style={{ color: "#f5d76e", fontSize: 25, fontWeight: 500 }}>エクシア</span>
            </div>
            <div style={{ marginBottom: 11 }}>
              <div style={{ color: "#9a9382", fontSize: 12 }}>初期費用</div>
              <div style={{ color: "#f5d76e", fontSize: 28, fontWeight: 500, lineHeight: 1.2 }}>55,000円</div>
            </div>
            <div style={{ marginBottom: 11 }}>
              <div style={{ color: "#9a9382", fontSize: 12 }}>月額（当社へお支払いする固定費）</div>
              <div style={{ color: "#7ee0a0", fontSize: 28, fontWeight: 500, lineHeight: 1.2 }}>0円</div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ color: "#9a9382", fontSize: 12 }}>成果報酬</div>
              <div style={{ color: "#7ee0a0", fontSize: 20, fontWeight: 500, lineHeight: 1.2 }}>利益の50％のみ</div>
            </div>
            <div style={{ color: "#cfc18a", fontSize: 13, lineHeight: 1.85, marginBottom: 15 }}>
              毎月の固定コンサル費用は不要。必要なのはeBayショップ維持費のみ。利益が出た時だけ成果報酬を頂くため、私たちも本気で売上アップをサポートします。
            </div>
            <a
              href="https://calendar.app.google/ekqLmu1eTZAXyxhNA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "#d4af37", color: "#1a1408", fontSize: 15, fontWeight: 500, padding: "12px 0", borderRadius: 30, textDecoration: "none" }}
            >
              無料相談を予約する →
            </a>
          </div>
        </div>

        <div style={{ color: "#6f6a55", fontSize: 11, textAlign: "center", marginTop: 14, lineHeight: 1.7 }}>
          ※他社の料金は一般的な業界相場であり、各社により異なります
        </div>
      </div>
    </div>
  );
}
