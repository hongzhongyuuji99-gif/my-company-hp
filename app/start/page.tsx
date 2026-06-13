import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "始め方・流れ | エクシア",
  description: "無料相談からスタートまでの流れ。初期費用55,000円・月額0円・成果報酬制で、赤字リスクなく始められます。",
};

const steps = [
  { no: "01", title: "無料相談（30分）", desc: "LINEから予約 → オンラインで、あなたに合うか・どんな流れかを押し売りなしでご説明します。必要な準備もここでご案内します。" },
  { no: "02", title: "お申込み・初期費用のお支払い", desc: "内容にご納得いただけたら、初期費用 55,000円 をお振込み。月額固定はかかりません。" },
  { no: "03", title: "eBayアカウント準備", desc: "必要書類を揃えて、eBay・Payoneer のアカウントを作成。運営が一緒にサポートします。" },
  { no: "04", title: "出品・運用スタート", desc: "出品リストをお渡し → 出品開始。在庫・発送も代行可能。利益が出たぶんから成果報酬をいただきます。" },
];

const prepare = [
  "本人確認書類（運転免許証など）",
  "本人名義の銀行口座",
  "住民票",
  "クレジット／デビットカード",
  "古物商許可証 または 開業届",
];

export default function Start() {
  return (
    <div style={{ background: "#0d0d12", minHeight: "100vh", padding: "2.5rem 1.1rem", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
          <div style={{ color: "#d4af37", fontSize: 26, fontWeight: 500, letterSpacing: "0.06em" }}>始め方・流れ</div>
          <div style={{ color: "#a8975a", fontSize: 13, marginTop: 7 }}>無料相談からスタートまで、最短4ステップ</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: "2rem" }}>
          {steps.map((s) => (
            <div key={s.no} style={{ background: "#17171d", border: "1px solid #3a3320", borderRadius: 12, padding: "1.1rem 1.2rem", display: "flex", gap: 14 }}>
              <div style={{ color: "#d4af37", fontSize: 26, fontWeight: 500, lineHeight: 1, minWidth: 44 }}>{s.no}</div>
              <div>
                <div style={{ color: "#f0d98a", fontSize: 16, fontWeight: 500, marginBottom: 5 }}>{s.title}</div>
                <div style={{ color: "#cfcfd4", fontSize: 13.5, lineHeight: 1.75 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#15140f", border: "1px solid #3a3320", borderRadius: 12, padding: "1.2rem 1.3rem", marginBottom: "1.6rem" }}>
          <div style={{ color: "#e8d18a", fontSize: 16, fontWeight: 500, marginBottom: 10 }}>準備するもの（eBay登録に必要）</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {prepare.map((p) => (
              <div key={p} style={{ color: "#cfcfd4", fontSize: 13.5, lineHeight: 1.5 }}>・{p}</div>
            ))}
          </div>
          <div style={{ color: "#8a8470", fontSize: 12, marginTop: 11, lineHeight: 1.7 }}>※準備が不安な方も、無料相談で一緒に確認しながら進めるのでご安心ください。</div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "1.6rem" }}>
          <a
            href="https://calendar.app.google/ekqLmu1eTZAXyxhNA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#d4af37", color: "#1a1408", fontSize: 17, fontWeight: 500, padding: "14px 40px", borderRadius: 40, textDecoration: "none" }}
          >
            まず無料相談を予約する →
          </a>
          <div style={{ color: "#9a9382", fontSize: 12.5, marginTop: 10 }}>迷っている方は、まず相談からがおすすめです</div>
        </div>

        <div style={{ background: "#1f1a0e", border: "1px solid #6e5a22", borderRadius: 12, padding: "1.2rem 1.3rem" }}>
          <div style={{ color: "#f0d98a", fontSize: 15, fontWeight: 500, marginBottom: 8 }}>もう決めている方へ</div>
          <div style={{ color: "#cfcfd4", fontSize: 13.5, lineHeight: 1.8 }}>
            サービス内容（出品リスト提供・在庫／発送代行・運用サポート）と料金（初期費用 55,000円 ＋ 成果報酬：利益の50%／月額0円）にご同意のうえ、
            このトークに <span style={{ color: "#f5d76e", fontWeight: 500 }}>「申し込みます」</span> と送ってください。お振込み先をご案内します。
          </div>
          <div style={{ color: "#8a8470", fontSize: 12, marginTop: 10, lineHeight: 1.7 }}>※返金・解約の条件は、お申込み時にお渡しする内容をご確認ください。ご不明点は無料相談でお気軽に。</div>
        </div>

        <div style={{ textAlign: "center", marginTop: "1.4rem" }}>
          <a href="/price" style={{ color: "#a8975a", fontSize: 13, textDecoration: "underline" }}>料金の詳しい比較を見る</a>
        </div>
      </div>
    </div>
  );
}
