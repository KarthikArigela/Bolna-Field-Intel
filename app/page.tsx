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
                kaisa tha — cooperative tha ya kuch tension thi?
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
            — which means she understands Hinglish, handles Indian telephony
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
