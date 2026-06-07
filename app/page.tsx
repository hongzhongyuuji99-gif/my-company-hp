export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{background: "#f0f4f8"}}>

      {/* ナビゲーション */}
      <header className="sticky top-0 z-50 shadow-sm" style={{background: "#f0f4f8"}}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-700">Gathering of Genius</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#service" className="hover:text-blue-600">サービス</a>
            <a href="#merit" className="hover:text-blue-600">選ばれる理由</a>
            <a href="#flow" className="hover:text-blue-600">ご利用の流れ</a>
            <a href="#contact" className="hover:text-blue-600">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="text-white py-28 px-6" style={{background: "linear-gradient(135deg, #1a3a5c 0%, #2e6fa8 25%, #5ab4d6 50%, #1e5f8e 75%, #0d2a47 100%)"}}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">eBay副業コンサルティング</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              固定費0円！<br />安心安全な副業！
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-10">
              出品・在庫管理はすべておまかせ。<br />
              成果報酬型だから<span className="font-bold text-white">赤字になるリスクなし。</span>
            </p>
              <a
                href="#contact"
                className="glow-button inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg px-10 py-4 rounded-full shadow-lg transition"
              >
                無料相談はこちら
              </a>
          </div>
          <div className="flex-1 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero.jpg.png"
              alt="スーツ姿の女性"
              className="rounded-3xl shadow-2xl w-80 md:w-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section id="service" className="py-24 px-6" style={{background: "#e8eef4"}}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">サービス内容</h2>
          <p className="text-gray-500 mb-14">eBay販売のすべてをプロがサポート</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📦", title: "出品代行", desc: "商品リサーチから出品作業まで、すべてこちらで対応します。" },
              { icon: "📊", title: "在庫管理", desc: "在庫の確認・補充・調整を一括管理。手間いらずです。" },
              { icon: "💰", title: "成果報酬型", desc: "利益が出た分からのみ報酬をいただきます。固定費は一切かかりません。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow p-8 text-left hover:shadow-md transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section id="merit" className="py-24 px-6" style={{background: "#f0f4f8"}}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">選ばれる3つの理由</h2>
          <p className="text-gray-500 mb-14">リスクゼロではじめられる副業の仕組み</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "固定費0円", desc: "月額料金・初期費用は一切不要。利益が出たときだけ報酬が発生します。" },
              { num: "02", title: "3ヶ月で利益確約", desc: "適切な運用を続ければ、3ヶ月以内に確実に利益が出る仕組みを提供します。" },
              { num: "03", title: "完全おまかせ", desc: "副業初心者でも安心。面倒な作業はすべてプロが代行します。" },
            ].map((item) => (
              <div key={item.num} className="border border-blue-100 rounded-2xl p-8 text-left hover:border-blue-400 transition">
                <div className="text-5xl font-extrabold text-blue-400 mb-3">{item.num}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 利用者の声 */}
      <section className="py-24 px-6" style={{background: "#e8eef4"}}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">利用者の声</h2>
          <p className="text-gray-500 mb-14">実際に始めた方々のリアルな声</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: "",
                offset: "0% 20%",
                name: "田中 さゆり（30代・主婦）",
                text: "子育ての合間にできる副業を探していました。固定費がかからないので気軽に始められて、3ヶ月で月3万円の利益が出ています！",
              },
              {
                img: "",
                offset: "50% 20%",
                name: "鈴木 健太（20代・会社員）",
                text: "本業が忙しくて時間がない中でも、出品や管理を全部やってもらえるので助かります。リスクなしで始められたのが決め手でした。",
              },
              {
                img: "",
                offset: "100% 20%",
                name: "山本 あおい（40代・パート）",
                text: "副業は難しそうと思っていましたが、担当の方が丁寧にサポートしてくれて安心でした。赤字にならない仕組みが本当にありがたいです。",
              },
            ].map((v) => (
              <div key={v.name} className="flex flex-col items-center">
                {/* 吹き出し */}
                <div className="relative bg-white rounded-2xl shadow-md p-6 text-left mb-6 w-full">
                  <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
                  {/* 吹き出しの三角 */}
                  <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderTop: "14px solid white"}} />
                </div>
                {/* アバター */}
                <div className="w-48 h-48 rounded-full shadow-md border-4 border-white" style={{
                  backgroundImage: "url('/voices.jpg.png')",
                  backgroundSize: "300% 200%",
                  backgroundPosition: v.offset,
                  backgroundRepeat: "no-repeat",
                }} />
                <p className="text-sm text-gray-500 mt-2 font-medium">{v.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section id="flow" className="py-24 px-6" style={{background: "#dce6f0"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ご利用の流れ</h2>
          <p className="text-gray-500 mb-14">最短即日でスタートできます</p>
          <div className="flex flex-col gap-6">
            {[
              { step: "STEP 1", title: "無料相談", desc: "まずはお気軽にお問い合わせください。現状や目標をヒアリングします。" },
              { step: "STEP 2", title: "プラン提案", desc: "あなたに合った最適なプランをご提案します。" },
              { step: "STEP 3", title: "運用スタート", desc: "出品・在庫管理などの作業をすべて弊社が代行します。" },
              { step: "STEP 4", title: "利益発生・報酬", desc: "利益が出た分から成果報酬をいただきます。赤字リスクは0です。" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl shadow p-6 flex gap-6 items-start text-left">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mt-1 whitespace-nowrap">{item.step}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-24 px-6 text-white text-center" style={{background: "linear-gradient(135deg, #1a3a5c 0%, #2e6fa8 25%, #5ab4d6 50%, #1e5f8e 75%, #0d2a47 100%)"}}>
        <h2 className="text-4xl font-bold mb-4">まずは無料相談から</h2>
        <p className="text-blue-200 mb-10 text-lg">お気軽にお問い合わせください。副業スタートをしっかりサポートします。</p>
        <a
          href="mailto:hongzhongyuuji99@gmail.com"
          className="glow-button inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg px-10 py-4 rounded-full shadow-lg transition"
        >
          メールで問い合わせる
        </a>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 text-sm">
        © 2026 Gathering of Genius. All rights reserved.
      </footer>

    </div>
  );
}
