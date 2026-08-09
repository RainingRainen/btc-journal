import datetime
from pathlib import Path

def update_btc_journal():
    # 自動定位專案根目錄 (適用 macOS / Windows / Linux)
    base_dir = Path(__file__).resolve().parent.parent
    target_file = base_dir / "data_log.md"

    current_time = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    content_to_append = f"- [BTC Journal 自動紀錄] 系統成功修復並同步於：`{current_time}`\n"

    if not target_file.exists():
        target_file.write_text(f"# BTC Journal 自動化日誌\n\n{content_to_append}", encoding="utf-8")
    else:
        with open(target_file, "a", encoding="utf-8") as f:
            f.write(content_to_append)

    print(f"成功更新檔案：{target_file}")

if __name__ == "__main__":
    update_btc_journal()
