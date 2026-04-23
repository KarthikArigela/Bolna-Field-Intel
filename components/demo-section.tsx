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
  "h-[46px] w-full border-2 border-plum rounded-[14px] bg-white px-3.5 text-[15px] font-sans text-plum placeholder:text-plum/40 focus:outline-none shadow-[3px_3px_0_0_var(--plum)] focus:-translate-x-px focus:-translate-y-px focus:shadow-[4px_4px_0_0_var(--plum)] transition-[transform,box-shadow]"

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

      if (!res.ok || data.error) throw new Error(data.error ?? "Failed to initiate call")
      if (!data.call_id) throw new Error("No call ID returned")

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

      if (elapsed > 300) {
        clearInterval(interval)
        setStatus("error")
        setErrorMsg("Call timed out. Please try again.")
        return
      }

      if (current === "calling" && elapsed > 25) setStatus("connected")

      try {
        const res = await fetch(`/api/call-status/${id}`)
        const data: { status?: string; smart_status?: string; error?: string } = await res.json()

        if (data.error) return

        const s = (data.status ?? "").toLowerCase()
        const ss = (data.smart_status ?? "").toLowerCase()

        if (s === "completed" || ss.includes("completed")) {
          setStatus("processing")
          clearInterval(interval)
          setTimeout(() => setStatus("done"), 2500)
        } else if (s === "failed" || ss.includes("failed")) {
          setStatus("error")
          setErrorMsg("Call failed. Please try again.")
          clearInterval(interval)
        } else if ((s === "in_progress" || ss.includes("in_progress")) && current === "calling") {
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

  const displayPhone = form.phone_number ? `+91${form.phone_number}` : "+91XXXXXXXXXX"

  const statusDisplay: Record<Exclude<CallStatus, "idle">, { icon: string; label: string; sub?: string }> = {
    initiating: { icon: "⏳", label: "Initiating call...", sub: "Keep your phone nearby." },
    calling:    { icon: "📞", label: `Calling ${displayPhone}...`, sub: "Priya will connect shortly." },
    connected:  { icon: "✅", label: "Connected", sub: "Priya is asking questions. Answer naturally." },
    processing: { icon: "🔄", label: "Processing debrief...", sub: "Your report is being generated." },
    done:       { icon: "✉️", label: `Report sent to ${submittedEmail}`, sub: "Check your inbox." },
    error:      { icon: "❌", label: errorMsg || "Something went wrong" },
  }

  return (
    <section id="demo" className="max-w-[1200px] mx-auto px-7 pb-[72px]">
      <div className="max-w-[720px] mx-auto mb-10 text-center">
        <span className="inline-flex items-center gap-2 border-2 border-plum bg-background rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plum mb-4 shadow-brutal-sm">
          <span className="w-2 h-2 rounded-full bg-pink inline-block" />
          Try it on yourself
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-normal leading-[1.05] tracking-tight text-plum mb-3">
          Enter your number.<br /><em>Priya calls in 30 seconds.</em>
        </h2>
        <p className="text-[17px] leading-relaxed text-plum/80">
          Pretend you&apos;re a field rep finishing a retailer visit. Speak Hindi, Hinglish, anything.
          Your report will be in your inbox before the page scrolls.
        </p>
      </div>

      {status === "idle" ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-[680px] mx-auto bg-peach border-2 border-plum rounded-[28px] p-9 shadow-brutal-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-plum tracking-wide">Your name</label>
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
              <label className="text-sm font-semibold text-plum tracking-wide">Retailer name</label>
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
              <label className="text-sm font-semibold text-plum tracking-wide">Your location</label>
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
              <label className="text-sm font-semibold text-plum tracking-wide">Phone number</label>
              <div className="flex">
                <span className="inline-flex items-center h-[46px] px-3.5 border-2 border-r-0 border-plum rounded-l-[14px] bg-yellow font-bold text-sm text-plum select-none">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={form.phone_number}
                  onChange={(e) => updateField("phone_number", e.target.value.replace(/\D/g, ""))}
                  className="flex-1 h-[46px] border-2 border-plum rounded-r-[14px] bg-white px-3.5 text-[15px] font-sans text-plum placeholder:text-plum/40 focus:outline-none shadow-[3px_3px_0_0_var(--plum)] focus:shadow-[4px_4px_0_0_var(--plum)] transition-[transform,box-shadow]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mt-4">
            <label className="text-sm font-semibold text-plum tracking-wide">Email (for the report)</label>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex gap-3.5 mt-6 justify-center flex-wrap">
            <Button type="submit" size="lg">Call me now</Button>
            <Button asChild size="lg" variant="outline">
              <a href="#report">See a sample first</a>
            </Button>
          </div>
          <p className="text-xs text-plum/75 mt-3.5 text-center">
            ⚠️ This places a real call to your number. ~3 minutes, in Hindi/Hinglish.
          </p>
        </form>
      ) : (
        <div className="max-w-[680px] mx-auto bg-mint border-2 border-plum rounded-[28px] p-10 flex flex-col items-center gap-3 text-center shadow-brutal-lg">
          <div className="text-5xl">{statusDisplay[status].icon}</div>
          <p className="text-plum font-bold text-lg font-heading">{statusDisplay[status].label}</p>
          {statusDisplay[status].sub && (
            <p className="text-sm text-plum/70">{statusDisplay[status].sub}</p>
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
