"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

type FormData = {
  rep_name: string
  retailer_name: string
  location: string
  phone_number: string
  email: string
}

type CallStatus =
  | "idle"
  | "initiating"
  | "calling"
  | "connected"
  | "processing"
  | "done"
  | "error"

const inputClass =
  "h-9 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"

export function DemoSection() {
  const [form, setForm] = useState<FormData>({
    rep_name: "",
    retailer_name: "",
    location: "",
    phone_number: "",
    email: "",
  })
  const [status, setStatus] = useState<CallStatus>("idle")
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  // Refs to avoid stale closures inside polling interval
  const statusRef = useRef<CallStatus>("idle")
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    statusRef.current = status
  }, [status])

  function updateField(key: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("initiating")
    setSubmittedEmail(form.email)

    try {
      const res = await fetch("/api/trigger-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data: { call_id?: string; error?: string } = await res.json()

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Failed to initiate call")
      }
      if (!data.call_id) {
        throw new Error("No call ID returned")
      }

      setStatus("calling")
      startPolling(data.call_id)
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  function startPolling(id: string) {
    startTimeRef.current = Date.now()

    const interval = setInterval(async () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const current = statusRef.current

      // Hard timeout after 5 minutes
      if (elapsed > 300) {
        clearInterval(interval)
        setStatus("error")
        setErrorMsg("Call timed out. Please try again.")
        return
      }

      // Time-based: if still "calling" after 25s, they've likely answered
      if (current === "calling" && elapsed > 25) {
        setStatus("connected")
      }

      try {
        const res = await fetch(`/api/call-status/${id}`)
        const data: {
          status?: string
          smart_status?: string
          error?: string
        } = await res.json()

        if (data.error) return

        const s = (data.status ?? "").toLowerCase()
        const ss = (data.smart_status ?? "").toLowerCase()

        if (s === "completed" || ss.includes("completed")) {
          // Show "processing" briefly before "done" so the transition feels right
          setStatus("processing")
          clearInterval(interval)
          setTimeout(() => setStatus("done"), 2500)
        } else if (s === "failed" || ss.includes("failed")) {
          setStatus("error")
          setErrorMsg("Call failed. Please try again.")
          clearInterval(interval)
        } else if (
          (s === "in_progress" || ss.includes("in_progress")) &&
          current === "calling"
        ) {
          setStatus("connected")
        }
      } catch {
        // silently retry on network error
      }
    }, 3000)
  }

  function reset() {
    setStatus("idle")
    setErrorMsg("")
  }

  const displayPhone = form.phone_number
    ? `+91${form.phone_number}`
    : "+91XXXXXXXXXX"

  const statusDisplay: Record<
    Exclude<CallStatus, "idle">,
    { icon: string; label: string; sub?: string }
  > = {
    initiating: {
      icon: "⏳",
      label: "Initiating call...",
      sub: "Keep your phone nearby.",
    },
    calling: {
      icon: "📞",
      label: `Calling ${displayPhone}...`,
      sub: "Priya will connect shortly.",
    },
    connected: {
      icon: "✅",
      label: "Connected",
      sub: "Priya is asking questions. Answer naturally.",
    },
    processing: {
      icon: "🔄",
      label: "Processing debrief...",
      sub: "Your report is being generated.",
    },
    done: {
      icon: "✉️",
      label: `Report sent to ${submittedEmail}`,
      sub: "Check your inbox.",
    },
    error: {
      icon: "❌",
      label: errorMsg || "Something went wrong",
    },
  }

  return (
    <section id="demo" className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
          Try it on yourself.
        </h2>
        <p className="text-muted-foreground text-lg">
          Enter your number. Priya will call you in 30 seconds.
          <br />
          Speak Hindi. Check your inbox.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Pretend you&apos;re a field rep finishing a retailer visit.
        </p>
      </div>

      {status === "idle" ? (
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Rajesh Kumar"
                value={form.rep_name}
                onChange={(e) => updateField("rep_name", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">
                Retailer Name
              </label>
              <input
                type="text"
                required
                placeholder="Sharma Medical Store"
                value={form.retailer_name}
                onChange={(e) => updateField("retailer_name", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">
                Your Location
              </label>
              <input
                type="text"
                required
                placeholder="Pune, Maharashtra"
                value={form.location}
                onChange={(e) => updateField("location", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 h-9 rounded-l-lg border border-r-0 border-input bg-muted text-sm text-muted-foreground select-none">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={form.phone_number}
                  onChange={(e) =>
                    updateField(
                      "phone_number",
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                  className="flex-1 h-9 rounded-r-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Email (for report)
            </label>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={inputClass}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            ⚠️ This places a real call to your number. ~2 minutes in
            Hindi/Hinglish.
          </p>

          <Button type="submit" size="lg" className="w-full">
            🎙️ Call Me Now
          </Button>
        </form>
      ) : (
        <div className="bg-card border border-border rounded-2xl p-10 flex flex-col items-center gap-3 text-center">
          <div className="text-5xl">{statusDisplay[status].icon}</div>
          <p className="text-foreground font-medium text-lg">
            {statusDisplay[status].label}
          </p>
          {statusDisplay[status].sub && (
            <p className="text-sm text-muted-foreground">
              {statusDisplay[status].sub}
            </p>
          )}
          {(status === "done" || status === "error") && (
            <Button variant="outline" size="sm" onClick={reset} className="mt-2">
              {status === "done" ? "Try again" : "Retry"}
            </Button>
          )}
        </div>
      )}
    </section>
  )
}
