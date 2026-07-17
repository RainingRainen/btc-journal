"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function SubscribeModal({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // 這裡未來會接後端 API
    console.log("Subscribing email:", email)
    
    // 模擬成功
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1500)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#0a0a0a] border-[#1a1a1a] text-white">
        <DialogHeader>
          <DialogTitle className="text-[#ff9500] tracking-widest uppercase">Subscribe to Journal</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            只要有最新的 Weekly Journal 更新，我會第一時間發信通知你。
          </DialogDescription>
        </DialogHeader>
        
        {status === "success" ? (
          <div className="py-6 text-center space-y-2">
            <div className="text-2xl">🎉</div>
            <p className="text-[#22c55e] font-bold">訂閱成功！</p>
            <p className="text-sm text-muted-foreground">請檢查你的信箱確認訂閱。</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-4 py-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="yourname@example.com"
                className="bg-black border-[#1a1a1a] focus:border-[#ff9500]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#ff9500] text-black font-bold hover:bg-[#ffb54d]"
              disabled={status === "loading"}
            >
              {status === "loading" ? "處理中..." : "立即訂閱"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
