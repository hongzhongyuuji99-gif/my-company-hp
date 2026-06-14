export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{background: "#f0f4f8"}}>

      {/* ナビゲーション */}
      <header className="sticky top-0 z-50 shadow-sm" style={{background: "#f0f4f8"}}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png.png" alt="EXIA" className="h-12 w-12 object-contain" style={{mixBlendMode: "multiply"}} />
            <span className="text-5xl font-bold text-blue-700">EXIA</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#service" className="hover:text-blue-600">サービス</a>
            <a href="#merit" className="hover:text-blue-600">選ばれる理由</a>
            <a href="#flow" className="hover:text-blue-600">ご利用の流れ</a>
            <a href="#contact" className="hover:text-blue-600">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="text-white py-28 px-6 relative" style={{background: "linear-gradient(135deg, #1a3a5c 0%, #2e6fa8 25%, #5ab4d6 50%, #1e5f8e 75%, #0d2a47 100%)"}}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-200 text-xl font-semibold uppercase tracking-widest mb-4">eBay副業コンサルティング</p>
            <div className="mb-4 flex items-center justify-center" style={{
              width: "440px",
              height: "130px",
              clipPath: "polygon(50% 0%, 56% 12%, 66% 4%, 68% 17%, 80% 8%, 80% 22%, 93% 16%, 90% 30%, 100% 28%, 95% 42%, 100% 50%, 95% 58%, 100% 72%, 90% 70%, 93% 84%, 80% 78%, 80% 92%, 68% 83%, 66% 96%, 56% 88%, 50% 100%, 44% 88%, 34% 96%, 32% 83%, 20% 92%, 20% 78%, 7% 84%, 10% 70%, 0% 72%, 5% 58%, 0% 50%, 5% 42%, 0% 28%, 10% 30%, 7% 16%, 20% 22%, 20% 8%, 32% 17%, 34% 4%, 44% 12%)",
              background: "#e00",
            }}>
              <span className="font-extrabold text-white text-center leading-tight text-5xl">業界初！！</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 whitespace-nowrap">
              固定費0円！<br />安心安全な副業！
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl mb-10">
              出品・在庫管理はすべておまかせ。<br />
              成果報酬型だから<span className="font-bold text-white">赤字になるリスクなし。</span>
            </p>
              <a
                href="https://line.me/R/ti/p/@618affqj"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button inline-flex items-center gap-3 text-white font-bold text-4xl px-12 py-5 rounded-full shadow-lg transition hover:opacity-90"
                style={{background: "#06C755"}}
              >
                <span className="text-4xl">💬</span>
                LINEで無料相談する
              </a>
          </div>
          <div className="flex-1 flex justify-center relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/背景透過画像.png"
              alt="スーツ姿の女性"
              className="object-cover" style={{width: "720px", maxWidth: "90vw"}}
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
              { img: "/出品代行.png", title: "出品代行サービス", desc: "ご自身でリサーチする必要がございません！面倒な事は一切なく利益が出る仕組みを提供いたします！" },
              { img: "/在庫管理.png", title: "在庫管理", desc: "在庫の確認・補充・調整を一括管理。何度もサイトにログインする必要がございません！" },
              { img: "/発送代行.png", title: "発送代行サービス", desc: "面倒な海外への発送作業、全てこちらで行う事が出来ます！！" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow text-left hover:shadow-md transition overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.title} className="w-full object-cover" />
                <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
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
              { num: "01", title: "固定費0円", desc: "成果報酬型なので固定費一切不要！報酬は利益からのみで、赤字のリスクがありません。" },
              { num: "02", title: "3ヶ月で利益確約", desc: "適切な運用を続ければ、3ヶ月以内に確実に利益が出る仕組みを提供します。" },
              { num: "03", title: "完全おまかせ", desc: "副業初心者でも安心。面倒な作業はすべてプロが代行します。" },
            ].map((item) => (
              <div key={item.num} className="border-2 border-gray-800 rounded-2xl p-8 text-left hover:border-black transition">
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
        <div className="flex flex-col items-center gap-5">
          {/* LINE友だち追加（メインCTA） */}
          <a
            href="https://line.me/R/ti/p/@618affqj"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button-line inline-flex items-center gap-3 text-white font-bold text-2xl md:text-3xl px-12 py-5 rounded-full shadow-lg transition hover:opacity-90"
            style={{background: "#06C755"}}
          >
            <span className="text-3xl">💬</span>
            LINEで無料相談する
          </a>
          <p className="text-blue-100 text-sm">＼ 友だち追加して「1日10分の副収入」を気軽に相談 ／</p>
          {/* メール（サブ） */}
          <a
            href="mailto:hongzhongyuuji99@gmail.com"
            className="inline-block text-blue-200 underline text-sm hover:text-white transition"
          >
            または メールで問い合わせる
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 text-sm">
        © 2026 Gathering of Genius. All rights reserved.
      </footer>

    </div>
  );
}
