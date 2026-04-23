# Bolna Landing Page Context

Here are the complete code details for the current landing page in the `bolna-field-intel-agent` app. You can use this context to understand the exact styling, components, and layout currently implemented so you can accurately modify it.

## `app/layout.tsx`
```tsx
import { Geist, Geist_Mono, DM_Sans, Raleway } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const ralewayHeading = Raleway({subsets:['latin'],variable:'--font-heading'});

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", dmSans.variable, ralewayHeading.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
```

## `app/page.tsx`
```tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroCallAnimation } from "@/components/hero-call-animation"
import { DemoSection } from "@/components/demo-section"
import { ReportCard, reportData } from "@/components/report-card"

export default function Page() {
  return (
    <div className="min-h-svh bg-background">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Copy */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest">
              Field Intelligence · Built on Bolna AI
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
              Priya calls your MR.
              <br />
              They talk for 3 mins.
              <br />
              Your manager gets this.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A Hindi-speaking voice agent for Indian pharma and FMCG field
              teams. No forms. No apps. Just a phone call.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#demo">Try it on yourself →</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/sample">See a sample report</Link>
              </Button>
            </div>
          </div>

          {/* Animated call card */}
          <div className="flex-shrink-0">
            <HeroCallAnimation />
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-12">
          It&apos;s embarrassingly simple.
        </h2>

        <div className="flex flex-col gap-4">
          {/* 1 — Priya opens */}
          <div className="flex gap-3 items-end">
            <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 font-heading">
              P
            </div>
            <div className="max-w-sm bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-sm text-foreground">
                Namaste Rajesh Kumar! Main Priya bol rahi hoon. Aapki aaj ki
                retailer visit ke baare mein ek choti si baat karni thi. Sirf
                3 minute lagenge.
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Priya · Field Agent
              </p>
            </div>
          </div>

          {/* 2 — Rep accepts */}
          <div className="flex gap-3 items-end flex-row-reverse">
            <div className="size-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm flex-shrink-0 font-heading">
              R
            </div>
            <div className="max-w-sm bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3">
              <p className="text-sm text-foreground">हां जी बोलिए</p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Rajesh · Field Rep
              </p>
            </div>
          </div>

          {/* 3 — Priya asks about mood */}
          <div className="flex gap-3 items-end">
            <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 font-heading">
              P
            </div>
            <div className="max-w-sm bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-sm text-foreground">
                Aaj Sharma Medical Store ki visit kaisi rahi? Owner ka mood
                kaisa tha? cooperative tha ya kuch tension thi?
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Priya · Field Agent
              </p>
            </div>
          </div>

          {/* 4 — Rep answers mood */}
          <div className="flex gap-3 items-end flex-row-reverse">
            <div className="size-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm flex-shrink-0 font-heading">
              R
            </div>
            <div className="max-w-sm bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3">
              <p className="text-sm text-foreground">
                नहीं कुछ tension नहीं था, अच्छा ही चल रहा था
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Rajesh · Field Rep
              </p>
            </div>
          </div>

          {/* 5 — Priya asks about order */}
          <div className="flex gap-3 items-end">
            <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 font-heading">
              P
            </div>
            <div className="max-w-sm bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-sm text-foreground">
                Aaj ka order kya hua? Aur kuch tha jo unhone lene se mana
                kiya?
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Priya · Field Agent
              </p>
            </div>
          </div>

          {/* 6 — Rep answers order */}
          <div className="flex gap-3 items-end flex-row-reverse">
            <div className="size-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm flex-shrink-0 font-heading">
              R
            </div>
            <div className="max-w-sm bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3">
              <p className="text-sm text-foreground">
                Paracetamol ka tha
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Rajesh · Field Rep
              </p>
            </div>
          </div>

          {/* 7 — Priya closes */}
          <div className="flex gap-3 items-end">
            <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 font-heading">
              P
            </div>
            <div className="max-w-sm bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-sm text-foreground">
                Bahut shukriya Rajesh Kumar ji. Aapki feedback manager tak
                pahunch jaayegi. Aage ki visit ke liye all the best!
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Priya · Field Agent
              </p>
            </div>
          </div>

          {/* 8 — Email delivery */}
          <div className="flex gap-3 items-start mt-2">
            <div className="size-9 rounded-full bg-green-500/15 flex items-center justify-center text-green-500 text-sm flex-shrink-0">
              ✉
            </div>
            <div className="bg-card border border-border rounded-xl px-4 py-3 max-w-sm">
              <p className="text-sm font-medium text-foreground">
                Report in inbox.
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                90 seconds after the call ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why This Exists ───────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-xl text-muted-foreground leading-relaxed">
          Indian FMCG & Pharma companies have hundreds of field reps touching
          thousands of retailers every day. That intelligence dies in WhatsApp
          threads, Weekly review decks, or simply forgotten while driving. Priya
          captures it automatically, in Hindi, at the moment it&apos;s freshest.
        </p>
      </section>

      {/* ── Market Thesis ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <div className="border-l-2 border-primary pl-6 flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-4xl font-bold font-heading text-foreground">
                300+
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                MRs in a mid-size pharma company
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold font-heading text-foreground">
                8–10
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                retailer visits per MR per day
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold font-heading text-foreground">
                ~0
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                structured data points that reach the Area Sales Manager
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I built Priya after mapping how field data actually moves inside
            Indian pharma. The problem isn&apos;t that reps lack information.
            It&apos;s that there&apos;s no moment in their day where capturing
            it is easier than forgetting it. Priya creates that moment: a
            2-minute call, in Hindi, right after the visit. No new app. No new
            behavior. Just a call they already know how to take.
          </p>
          <div className="grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
            <div className="bg-card px-5 py-4">
              <p className="text-2xl font-bold font-heading text-foreground">
                ₹8–12
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                per visit with Priya
                <span className="block text-primary font-medium mt-0.5">
                  at Bolna&apos;s per-minute pricing
                </span>
              </p>
            </div>
            <div className="bg-card px-5 py-4">
              <p className="text-2xl font-bold font-heading text-muted-foreground line-through decoration-red-500">
                ₹200–500
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                per report via a field research agency
                <span className="block text-muted-foreground mt-0.5">
                  delivered days later, not minutes
                </span>
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground border-t border-border pt-5">
            Priya runs on{" "}
            <span className="text-foreground font-medium">
              Bolna&apos;s Hindi native voice stack
            </span>{" "}
            which means she understands Hinglish, handles Indian telephony
            natively, and works across accents. No translation layer. No generic
            TTS. This only works because of what Bolna built.
          </p>
        </div>
      </section>

      {/* ── Sample Report ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          What lands in your manager&apos;s inbox, 90 seconds after the call.
        </p>
        <ReportCard data={reportData} />
        <div className="mt-4">
          <Button asChild variant="link" className="px-0">
            <Link href="/sample">See full report →</Link>
          </Button>
        </div>
      </section>

      {/* ── Demo ──────────────────────────────────────────── */}
      <DemoSection />

      {/* ── Founder CTA ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <div className="bg-card border border-border rounded-2xl px-6 py-10 text-center flex flex-col gap-3">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">
            For Maitreya & Prateek.
          </p>
          <h3 className="text-2xl font-bold font-heading text-foreground max-w-lg mx-auto">
            I didn&apos;t apply. I built the thing first.
          </h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I tried to identify a use case independently, validated the problem, and
            shipped it, before applying to join your team. 
          </p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I believe there&apos;s a commercial story here, Maitreya. The code is on GitHub, Prateek.
          </p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            
          </p>
                      
          <div className="flex justify-center gap-3 mt-3 flex-wrap">
            <Button asChild size="lg">
              <a
                href="https://www.linkedin.com/in/karthikarigela"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
                            <a
                href="https://karthikarigela.super.site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="border-t border-border py-12">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Built with Bolna AI · An experiment by Karthik Arigela
          </p>
          <div className="flex justify-center gap-5 mt-3">
            <a
              href="https://karthikarigela.super.site"
              className="text-sm text-primary hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              karthikarigela.super.site
            </a>
            <a
              href="https://github.com/karthikarigela"
              className="text-sm text-primary hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karthikarigela"
              className="text-sm text-primary hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
```

## `app/globals.css`
```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

:root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.148 0.004 228.8);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0.148 0.004 228.8);
    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.148 0.004 228.8);
    --primary: oklch(0.5 0.134 242.749);
    --primary-foreground: oklch(0.977 0.013 236.62);
    --secondary: oklch(0.967 0.001 286.375);
    --secondary-foreground: oklch(0.21 0.006 285.885);
    --muted: oklch(0.963 0.002 197.1);
    --muted-foreground: oklch(0.56 0.021 213.5);
    --accent: oklch(0.5 0.134 242.749);
    --accent-foreground: oklch(0.977 0.013 236.62);
    --destructive: oklch(0.577 0.245 27.325);
    --border: oklch(0.925 0.005 214.3);
    --input: oklch(0.925 0.005 214.3);
    --ring: oklch(0.723 0.014 214.4);
    --chart-1: oklch(0.809 0.105 251.813);
    --chart-2: oklch(0.623 0.214 259.815);
    --chart-3: oklch(0.546 0.245 262.881);
    --chart-4: oklch(0.488 0.243 264.376);
    --chart-5: oklch(0.424 0.199 265.638);
    --radius: 0.625rem;
}

.dark {
    --background: oklch(0.148 0.004 228.8);
    --foreground: oklch(0.987 0.002 197.1);
    --card: oklch(0.218 0.008 223.9);
    --card-foreground: oklch(0.987 0.002 197.1);
    --popover: oklch(0.218 0.008 223.9);
    --popover-foreground: oklch(0.987 0.002 197.1);
    --primary: oklch(0.443 0.11 240.79);
    --primary-foreground: oklch(0.977 0.013 236.62);
    --secondary: oklch(0.274 0.006 286.033);
    --secondary-foreground: oklch(0.985 0 0);
    --muted: oklch(0.275 0.011 216.9);
    --muted-foreground: oklch(0.723 0.014 214.4);
    --accent: oklch(0.443 0.11 240.79);
    --accent-foreground: oklch(0.977 0.013 236.62);
    --destructive: oklch(0.704 0.191 22.216);
    --border: oklch(1 0 0 / 10%);
    --input: oklch(1 0 0 / 15%);
    --ring: oklch(0.56 0.021 213.5);
    --chart-1: oklch(0.809 0.105 251.813);
    --chart-2: oklch(0.623 0.214 259.815);
    --chart-3: oklch(0.546 0.245 262.881);
    --chart-4: oklch(0.488 0.243 264.376);
    --chart-5: oklch(0.424 0.199 265.638);
}

@theme inline {
    --font-sans: var(--font-sans);
    --font-heading: var(--font-heading);
    --color-ring: var(--ring);
    --color-input: var(--input);
    --color-border: var(--border);
    --color-destructive: var(--destructive);
    --color-accent-foreground: var(--accent-foreground);
    --color-accent: var(--accent);
    --color-muted-foreground: var(--muted-foreground);
    --color-muted: var(--muted);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-secondary: var(--secondary);
    --color-primary-foreground: var(--primary-foreground);
    --color-primary: var(--primary);
    --color-popover-foreground: var(--popover-foreground);
    --color-popover: var(--popover);
    --color-card-foreground: var(--card-foreground);
    --color-card: var(--card);
    --color-foreground: var(--foreground);
    --color-background: var(--background);
    --radius-sm: calc(var(--radius) * 0.6);
    --radius-md: calc(var(--radius) * 0.8);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) * 1.4);
    --radius-2xl: calc(var(--radius) * 1.8);
    --radius-3xl: calc(var(--radius) * 2.2);
    --radius-4xl: calc(var(--radius) * 2.6);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
    }
  body {
    @apply bg-background text-foreground;
    }
  html {
    @apply font-sans;
    }
}
```

## `components/demo-section.tsx`
```tsx
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
```

## `components/hero-call-animation.tsx`
```tsx
"use client"

import { useEffect, useState } from "react"

const WAVE_DELAYS = [0, 0.15, 0.3, 0.15, 0]

const MAX_SECONDS = 179 // 2:59 — we claim < 3 mins

export function HeroCallAnimation() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s >= MAX_SECONDS) {
          clearInterval(interval)
          return MAX_SECONDS
        }
        return s + 1
      })
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
```

## `components/report-card.tsx`
```tsx
export const reportData = {
  rep: "Rajesh Kumar",
  retailer: "Sharma Medical Store",
  location: "Pune, Maharashtra",
  duration: "116s",
  fields: [
    {
      label: "Retailer Mood",
      value:
        "Owner was cooperative and in a good mood, no tension during the visit.",
      color: "bg-green-500",
    },
    {
      label: "Complaint",
      value: "Two strips of paracetamol were missing in the last delivery.",
      color: "bg-yellow-500",
    },
    {
      label: "Competitor Activity",
      value: "MedX representative visited with a new paracetamol offer.",
      color: "bg-orange-500",
    },
    {
      label: "Order Details",
      value:
        "Three strips of paracetamol ordered. Cough syrup was refused.",
      color: "bg-blue-500",
    },
    {
      label: "Follow Up",
      value: "Delivery issue needs escalation to logistics team.",
      color: "bg-red-500",
    },
    {
      label: "Summary",
      value: "Visit went well overall. Key action is delivery escalation.",
      color: "bg-primary",
    },
  ],
}

type ReportData = typeof reportData

export function ReportCard({ data }: { data: ReportData }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border bg-muted/30">
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
          <span>
            <span className="font-medium text-foreground">Rep:</span> {data.rep}
          </span>
          <span>
            <span className="font-medium text-foreground">Retailer:</span>{" "}
            {data.retailer}
          </span>
          <span>
            <span className="font-medium text-foreground">Location:</span>{" "}
            {data.location}
          </span>
          <span>
            <span className="font-medium text-foreground">Duration:</span>{" "}
            {data.duration}
          </span>
        </div>
      </div>

      {/* Fields */}
      <div className="divide-y divide-border">
        {data.fields.map((field) => (
          <div key={field.label} className="flex gap-3 px-5 py-4">
            <div
              className={`w-1 rounded-full flex-shrink-0 self-stretch ${field.color}`}
            />
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                {field.label}
              </p>
              <p className="text-sm text-foreground">{field.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* LLM Prompt Box */}
      <div className="px-5 py-4">
        <div className="rounded-lg border-2 border-dashed border-green-500/40 bg-green-500/5 px-4 py-3">
          <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">
            💡 LLM Insight Prompt
          </p>
          <p className="text-xs text-muted-foreground">
            Paste 50 reports like this into Claude or ChatGPT:{" "}
            &quot;Across these visits, what are the top 3 patterns my ASMs
            should act on this week?&quot; — Priya gives you the raw data. You
            get the pattern.
          </p>
        </div>
      </div>
    </div>
  )
}
```
