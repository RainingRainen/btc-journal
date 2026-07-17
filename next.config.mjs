/** @type {import('next').NextConfig} */
const nextConfig = {
  // 關閉字體優化，防止 Cloudflare 建置時找不到 Geist 字體而報錯
  optimizeFonts: false,
};

export default nextConfig;
