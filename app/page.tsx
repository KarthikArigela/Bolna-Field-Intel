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
              They talk for 2 mins.
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

        <div className="flex flex-col gap-5">
          {/* Priya bubble */}
          <div className="flex gap-3 items-end">
            <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 font-heading">
              P
            </div>
            <div className="max-w-sm bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-sm text-foreground">
                Namaste Rajesh ji! Aaj Sharma Medical Store ki visit kaisi
                rahi?
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Priya · Field Agent
              </p>
            </div>
          </div>

          {/* Rep bubble */}
          <div className="flex gap-3 items-end flex-row-reverse">
            <div className="size-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm flex-shrink-0 font-heading">
              R
            </div>
            <div className="max-w-sm bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3">
              <p className="text-sm text-foreground">
                Owner cooperative tha, delivery mein 2 strips missing thi
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                Rajesh · Field Rep
              </p>
            </div>
          </div>

          {/* Email delivery */}
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
          Indian FMCG and Pharma companies have hundreds of field reps touching
          thousands of retailers every day. That intelligence dies — in WhatsApp
          threads, weekly review decks, or simply forgotten in the car. Priya
          captures it automatically, in Hindi, at the moment it&apos;s freshest.
        </p>
      </section>

      {/* ── Sample Report ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          What lands in your manager&apos;s inbox — 90 seconds after the call.
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

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="border-t border-border py-12">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Built with Bolna AI · An experiment by Karthik Arigela
          </p>
          <p className="text-sm text-muted-foreground italic">
            This is a prototype. The idea is real.
          </p>
          <div className="flex justify-center gap-5 mt-3">
            <a
              href="https://karthikarigela.in"
              className="text-sm text-primary hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              karthikarigela.in
            </a>
            <a
              href="https://github.com/karthikarigela"
              className="text-sm text-primary hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
