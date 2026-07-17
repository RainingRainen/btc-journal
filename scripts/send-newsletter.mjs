import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendKey = process.env.RESEND_API_KEY;

if (!supabaseUrl || !supabaseKey || !resendKey) {
  console.error('環境變數遺失，請檢查 GitHub Secrets 設定！');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendKey);

async function sendEmails() {
  console.log('開始從 Supabase 撈取訂閱者名單...');

  const { data: subscribers, error } = await supabase
    .from('subscribers')
    .select('email');

  if (error) {
    console.error('撈取訂閱者失敗:', error);
    return;
  }

  if (!subscribers || subscribers.length === 0) {
    console.log('目前沒有訂閱者。');
    return;
  }

  const emails = subscribers.map(sub => sub.email);
  console.log(`準備寄信給 ${emails.length} 位訂閱者...`);

  try {
    // 將每個訂閱者打包成一封獨立的信件 (加入必要的 to 欄位)
    const emailPayloads = emails.map(email => ({
      from: 'BTC Journal <onboarding@resend.dev>',
      to: email,
      subject: '📈 BTC Journal 最新週記已更新！',
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>哈囉！</h2>
          <p>BTC Journal 網站上剛剛更新了最新的市場觀察與週記，快來看看本週的重點吧！</p>
          <p><a href="https://你的網站網址.com" style="color: #0066cc; text-decoration: none; font-weight: bold;">👉 點擊這裡前往閱讀最新文章</a></p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">感謝你訂閱 BTC Journal。</p>
        </div>
      `,
    }));

    // 使用 batch.send 批次發送所有信件
    const { data, error: sendError } = await resend.batch.send(emailPayloads);

    if (sendError) {
      console.error('Resend 寄信失敗:', sendError);
    } else {
      console.log('🎉 寄信成功！API 回應:', data);
    }
  } catch (err) {
    console.error('寄信過程發生意外錯誤:', err);
  }
}

sendEmails();
