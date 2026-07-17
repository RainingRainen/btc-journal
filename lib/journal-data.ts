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
    week: 1,
    title: "熊市尚未結束",
    chart: "https://i.postimg.cc/4xy0F7ww/jie-tu-2026-06-27-xia-wu4-44-05.png",
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
  },
  {
    week: 2,
    title: "多頭要小心了，資金費率不太妙",
    chart: "https://i.postimg.cc/25D7T18H/jie-tu-2026-07-05-xia-wu4-20-13.png",
    brief: "近期現貨 ETF 在連續流出後迎來首度逆勢淨流入，看似為市場注入強心針。然而，這波樂觀情緒背後卻隱藏著巨大的結構性風險...",
    content: [
      { 
        type: "text", 
        value: "近期現貨 ETF 在連續流出後迎來首度逆勢淨流入，看似為市場注入強心針。然而，這波樂觀情緒背後卻隱藏著巨大的結構性風險。大時區的熊市結構依然對整體估值造成實質壓制，短線的反彈極有可能是多頭的最後掙扎。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/59R5T72q/jie-tu-2026-07-05-xia-wu4-22-30.png" 
      },
      { 
        type: "text", 
        value: "從永續合約的資金費率在反彈中始終維持為正。這意味著多頭正在承擔高昂的槓桿成本。在缺乏法幣實質增量的背景下，這種「正費率」並非牛市蓄勢，而是散戶盲目抄底的訊號，導致期貨市場的槓桿結構變得極度脆弱。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/cH5YqC0q/jie-tu-2026-07-05-xia-wu4-26-10.png" 
      },
      { 
        type: "text", 
        value: "量價結構進一步印證了空頭的壓制。成交量分佈圖中，價格在精準回測價值區下沿（VAL）後隨即放量下跌。VAL 已由先前的支撐徹底轉化為強阻力，顯示多頭試圖收復失地的力量遭遇拒絕。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/4xzzKXbS/jie-tu-2026-07-05-xia-wu4-24-50.png" 
      },
      { 
        type: "text", 
        value: "從清算熱力圖來看，目前最大的清算強度和籌碼密集區，正集中在底部的多單。對於主力而言，這些密集的止損單是絕佳的燃料。主觀推演下，市場極大概率會先發動一次向下插針，精準定點清算這批高槓桿多頭，徹底洗淨市場浮籌並釋放正費率風險後，才有可能迎來健康的觸底反彈。" 
      }
    ]
  },
  {
    week: 23,
    title: "Rainensimpson",
    chart: "/charts/chart-3.png",
    brief: "Sharp wick down cleared out over-leveraged positions.",
    content: [
      { 
        type: "text", 
        value: "Sharp wick down cleared out over-leveraged positions before a strong recovery. Funding reset to neutral, which I read as constructive for the weeks ahead." 
      }
    ]
  },
  {
    week: 2,
    title: "多頭要小心了，資金費率不太妙",
    chart: "https://i.postimg.cc/25D7T18H/jie-tu-2026-07-05-xia-wu4-20-13.png",
    brief: "近期現貨 ETF 在連續流出後迎來首度逆勢淨流入，看似為市場注入強心針。然而，這波樂觀情緒背後卻隱藏著巨大的結構性風險...",
    content: [
      { 
        type: "text", 
        value: "近期現貨 ETF 在連續流出後迎來首度逆勢淨流入，看似為市場注入強心針。然而，這波樂觀情緒背後卻隱藏著巨大的結構性風險。大時區的熊市結構依然對整體估值造成實質壓制，短線的反彈極有可能是多頭的最後掙扎。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/59R5T72q/jie-tu-2026-07-05-xia-wu4-22-30.png" 
      },
      { 
        type: "text", 
        value: "從永續合約的資金費率在反彈中始終維持為正。這意味著多頭正在承擔高昂的槓桿成本。在缺乏法幣實質增量的背景下，這種「正費率」並非牛市蓄勢，而是散戶盲目抄底的訊號，導致期貨市場的槓桿結構變得極度脆弱。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/cH5YqC0q/jie-tu-2026-07-05-xia-wu4-26-10.png" 
      },
      { 
        type: "text", 
        value: "量價結構進一步印證了空頭的壓制。成交量分佈圖中，價格在精準回測價值區下沿（VAL）後隨即放量下跌。VAL 已由先前的支撐徹底轉化為強阻力，顯示多頭試圖收復失地的力量遭遇拒絕。" 
      },
      { 
        type: "image", 
        value: "https://i.postimg.cc/4xzzKXbS/jie-tu-2026-07-05-xia-wu4-24-50.png" 
      },
      { 
        type: "text", 
        value: "從清算熱力圖來看，目前最大的清算強度和籌碼密集區，正集中在底部的多單。對於主力而言，這些密集的止損單是絕佳的燃料。主觀推演下，市場極大概率會先發動一次向下插針，精準定點清算這批高槓桿多頭，徹底洗淨市場浮籌並釋放正費率風險後，才有可能迎來健康的觸底反彈。" 
      }
    ]
  },
