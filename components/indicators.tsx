"use client"

const indicatorGuides = [
  {
    name: "RSI (相對強弱指標)",
    tag: "動能指標",
    desc: "主要用於判斷市場的超買與超賣狀態。一般而言，RSI 大於 70 代表市場處於超買熱絡期，可能面臨回檔；小於 30 則代表超賣悲觀期，可能存在反彈機會。",
  },
  {
    name: "MACD (平滑異同移動平均線)",
    tag: "趨勢動能",
    desc: "透過快慢線的交叉來判斷趨勢的動能。當快線（DIF）由下往上突破慢線（MACD）時為金叉，暗示多頭動能轉強；反之由上往下跌破時為死叉。",
  },
  {
    name: "EMA (指數移動平均線)",
    tag: "趨勢過濾",
    desc: "相較於簡單均線（SMA），EMA 對近期價格賦予更高權重，常用於追蹤大時區多空結構（如 EMA 20 / 60 / 120）並觀察動態支撐與壓力區間。",
  },
  {
    name: "Funding Rate (永續合約資金費率)",
    tag: "衍生品情緒",
    desc: "反映期貨多空槓桿傾斜程度。若價格反彈但資金費率持續偏高為正，代表多頭需支付高昂持倉成本，槓桿結構脆弱，往往潛藏向下插針清算的風險。",
  },
  {
    name: "Volume Profile & VAL (成交量分佈與價值區下沿)",
    tag: "量價結構",
    desc: "統計各價格區間的累計成交量，找出籌碼最密集的價值區（Value Area）。一旦價格跌破價值區下沿（VAL）且反彈受阻，原先的支撐便會轉化為關鍵壓力。",
  },
  {
    name: "Liquidation Heatmap (清算熱力圖)",
    tag: "流動性分佈",
    desc: "視覺化呈現市場高槓桿多單與空單的潛在強平密集區。價格常朝向流動性最集中的區間掃蕩止損單，搭配資金費率與 ETF 流向可避免盲目追高殺低。",
  },
]

export function Indicators() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Knowledge Base</p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl text-amber-500">
          Trading Indicators Guide
        </h1>
        <p className="mt-3 text-zinc-400 leading-relaxed">
          整理每週盤面分析最常使用的核心技術指標與鏈上衍生品術語，以白話說明其判讀邏輯與風控意涵，幫助讀者快速理解報告內容。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {indicatorGuides.map((item) => (
          <div key={item.name} className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg flex flex-col">
            <span className="mb-3 w-fit rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-400">
              {item.tag}
            </span>
            <h3 className="text-lg font-bold text-zinc-100 mb-2">{item.name}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
