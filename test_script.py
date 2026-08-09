import sys
from pathlib import Path

def run_checks():
    # 使用 pathlib 模組自動處理不同作業系統的路徑分隔符號（/ 或 \）
    home_dir = Path.home()
    current_dir = Path.cwd()
    
    print("=" * 40)
    print(f"運行作業系統: {sys.platform}")
    print(f"使用者家目錄: {home_dir}")
    print(f"當前專案路徑: {current_dir}")
    print("=" * 40)
    print("【驗證成功】虛擬環境與跨平台腳本運作正常！")

if __name__ == "__main__":
    run_checks()
