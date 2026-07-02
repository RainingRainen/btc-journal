"use client"

export function Indicators() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Knowledge Base</p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl text-amber-500">
          Trading Indicators Guide
        </h1>
        <p className="mt-3 text-zinc-400">
          這裡放你的指標使用方針、量化交易學習筆記與策略研究。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 指標卡片 1 */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-zinc-100 mb-2">RSI (相對強弱指標)</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            主要用於判斷市場的超買與超賣狀態。一般而言，RSI 大於 70 代表市場處於超買熱絡期，可能面臨回檔；小於 30 則代表超賣悲觀期，可能存在反彈機會。
          </p>
        </div>

        {/* 指標卡片 2 */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-zinc-100 mb-2">MACD (平滑異同移動平均線)</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            透過快慢線的交叉來判斷趨勢的動能。當快線（DIF）由下往上突破慢線（MACD）時為金叉，暗示多頭動能轉強；反之由上往下跌破時為死叉。
          </p>
        </div>
      </div>
    </section>
  )
}
