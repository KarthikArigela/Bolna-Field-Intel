"use client"

import { useEffect, useState } from "react"

const WAVE_DELAYS = [0, 0.15, 0.3, 0.15, 0]

export function HeroCallAnimation() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  const timeString = `${minutes}:${secs.toString().padStart(2, "0")}`

  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5 w-72">
      <style>{`
        @keyframes waveBar {
          0%, 100% { height: 6px; }
          50% { height: 30px; }
        }
      `}</style>

      {/* Caller info */}
      <div className="flex items-center gap-3">
        <div className="size-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-base font-heading flex-shrink-0">
          P
        </div>
        <div>
          <p className="font-semibold text-foreground font-heading">Priya</p>
          <p className="text-xs text-muted-foreground">Field Intelligence Agent</p>
        </div>
      </div>

      {/* Waveform */}
      <div className="flex items-center justify-center gap-1.5 h-10">
        {WAVE_DELAYS.map((delay, i) => (
          <div
            key={i}
            className="w-2 rounded-full bg-primary"
            style={{
              height: "6px",
              animation: "waveBar 0.9s ease-in-out infinite",
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      {/* Status row */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs text-green-500 font-medium">
          <span className="size-1.5 rounded-full bg-green-500 inline-block" />
          Connected
        </span>
        <span className="text-xs text-muted-foreground font-mono tabular-nums">
          {timeString}
        </span>
      </div>

      {/* Active question */}
      <div className="border-t border-border pt-4">
        <p className="text-xs text-muted-foreground leading-relaxed">
          &ldquo;Namaste Rajesh ji! Aaj ki visit kaisi rahi?&rdquo;
        </p>
      </div>
    </div>
  )
}
