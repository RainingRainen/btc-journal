export type ContentBlock = {
  type: "text" | "image"
  value: string
}

export type WeeklyUpdate = {
  week: number
  title: string
  chart: string
  brief: string
  content: ContentBlock[]
}

export const weeklyUpdates: WeeklyUpdate[] = [
  {
   {
    week: 26,
    title: "熊市尚未結束",
    chart: "https://i.postimg.cc/4xy0F7ww/jie-tu-2026-06-27-xia-wu4-44-05.png", // 第一張圖直接當作卡片大封面
    brief: "從宏觀資金流向來看，近期現貨 ETF 呈現持續且瘋狂的淨流出狀態。然而在經歷連續下跌後，短線的博弈邏輯正在發生微妙的變化...",
    content: [
      { 
        type: "text", 
        value: "從宏觀資金流向來看，近期現貨 ETF 呈現持續且瘋狂的淨流出的狀態。ETF 作為本輪週期最主要的資金，其流出意味著市場不看到短期加密市場。這種資金面的失血會對市場整體估值造成持續的擠壓，因此從大級別趨勢來看，長線的熊市修正結構依然沒有宣告結束，市場仍承受著基本面的下行壓力。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/L6N7TBk3/jie-tu-2026-06-27-xia-wu4-38-30.png" 
      },
      { 
        type: "text", 
        value: "然而，市場在經歷連續下跌後，短線的博弈邏輯正在發生微妙的變化：目前市場底部的流動性與賣盤深度已然嚴重不足。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/Fzx6w02M/jie-tu-2026-06-27-xia-wu4-37-27.png" 
      },
      { 
        type: "text", 
        value: "聚焦到微觀的 1 小時 K 線圖上，價格目前正處於一個標準的「熊旗」調整通道中。雖然熊旗通常是看跌續行情，但如果多頭能在此處逆勢放量向上突破熊旗的上軌，將會引發短線空頭的集體止損。一旦突破確立，上方缺乏實質拋壓，價格順勢上攻並回測 $58,000 關卡將不是難事。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/m28qwN3B/jie-tu-2026-06-27-xia-wu4-42-29.png" 
      },
      { 
        type: "text", 
        value: "儘管我強調長線熊市尚未完全終結，但各項週期性指標顯示，我已經無限接近這輪調整的尾聲。從經典的比特幣彩虹對數圖來看，目前的價格區間已經正式進入了歷史性的「底部」，甚至在局部時間點出現了稍微跌破藍色底部支撐線的極端現象。" 
      }
    ]
  }
  },
  {
    week: 25,
    title: "Chop Before the Break",
    description:
      "A tight consolidation week. Volatility compressed into a coil — historically a precursor to an expansion move. Staying patient and letting price show its hand.",
    chart: "/charts/chart-2.png",
  },
  {
    week: 24,
    title: "Flushing the Late Longs",
    description:
      "Sharp wick down cleared out over-leveraged positions before a strong recovery. Funding reset to neutral, which I read as constructive for the weeks ahead.",
    chart: "/charts/chart-3.png",
  },
]
eek: 26, date: "Jun 30", btcPrice: 73400, portfolioValue: 61500, change: 10.22 },
]
