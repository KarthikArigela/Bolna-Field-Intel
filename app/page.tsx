import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DemoSection } from "@/components/demo-section"
import { ReportCard, reportData } from "@/components/report-card"
import { Card } from "@/components/ui/card"
import { BolnaLogo } from "@/components/bolna-logo"

export default function Page() {
  return (
    <div className="min-h-svh bg-background">

      {/* ── Nav ──────────────────────────────────────────────── */}
      <nav className="max-w-[1200px] mx-auto px-7 flex justify-between items-center py-5">
        <a href="#" className="flex items-center">
          <BolnaLogo width={99} height={63} color="#3A001D" />
        </a>
        <div className="flex gap-1.5 items-center">
          <a href="#how" className="hidden md:block text-sm font-medium text-plum px-3 py-2 rounded-full hover:bg-peach transition-colors">How it works</a>
          <a href="#report" className="hidden md:block text-sm font-medium text-plum px-3 py-2 rounded-full hover:bg-peach transition-colors">Report</a>
          <a href="#demo" className="hidden md:block text-sm font-medium text-plum px-3 py-2 rounded-full hover:bg-peach transition-colors">Demo</a>
          <Button asChild size="sm"><a href="#demo">Try it free</a></Button>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative mt-3 mx-7 overflow-hidden rounded-[2rem] border-2 border-plum bg-[#FFF3DC] px-6 py-14 md:px-12 md:py-20 shadow-brutal-lg text-center">
        <span className="hidden md:inline-flex absolute -top-3 left-[12%] -rotate-6 px-3 py-1.5 rounded-2xl border-2 border-plum bg-pink text-white text-xs font-bold uppercase tracking-wider shadow-brutal-sm">
          Hindi-native AI
        </span>
        <span className="hidden md:inline-flex absolute -bottom-3 right-[8%] rotate-3 px-3 py-1.5 rounded-2xl border-2 border-plum bg-yellow text-plum text-xs font-bold uppercase tracking-wider shadow-brutal-sm">
          ~3 min calls
        </span>
        <span className="hidden md:inline-flex absolute top-[18%] -right-4 rotate-[8deg] px-3 py-1.5 rounded-2xl border-2 border-plum bg-mint text-plum text-xs font-bold uppercase tracking-wider shadow-brutal-sm">
          No app required
        </span>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-plum bg-peach px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-plum shadow-brutal-sm">
            📞 Field Intelligence · Built on Bolna AI
          </span>

          <h1 className="font-heading mt-7 mb-5 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.95] tracking-tight text-plum text-balance max-w-[18ch]">
            Your field team's insights, On {" "}
            <span className="inline-block -rotate-[1.2deg] rounded-[18px] border-2 border-plum bg-yellow px-3 pb-1 italic font-normal shadow-[3px_3px_0_0_var(--plum)]">
              Autopilot.
            </span>{" "}
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-plum/80 leading-relaxed">
Priya calls your reps after every visit and emails a clean summary to managers in under 3 minutes so no insight dies in WhatsApp or on the drive home.
          </p>

          <div className="flex gap-3 flex-wrap justify-center">
            <Button asChild size="lg"><a href="#demo">Call me now</a></Button>
            <Button asChild size="lg" variant="outline"><a href="#report">See a sample report →</a></Button>
          </div>

          {/* Hero inbox card */}
          <div className="relative mt-14 w-full max-w-[480px]">
            <Card className="!p-0 overflow-hidden w-full">
              {/* Inbox chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-peach border-b-2 border-plum">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full border border-plum bg-pink" />
                  <span className="size-2.5 rounded-full border border-plum bg-yellow" />
                  <span className="size-2.5 rounded-full border border-plum bg-mint" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-plum">Inbox · 10:42 AM</span>
              </div>
              {/* Email body */}
              <div className="px-5 py-5 text-left bg-white">
                <p className="text-[11px] uppercase tracking-wider font-bold text-plum/60 mb-1">
                  From: priya@bolna.ai
                </p>
                <h4 className="font-heading text-xl leading-tight text-plum mb-2">
                  Field Report · Rajesh → Sharma Medical
                </h4>
                <p className="text-sm leading-relaxed text-plum/80 mb-4">
                  Visit went well. Owner cooperative. Two paracetamol strips short
                  in last delivery flagged for logistics. MedX rep visited
                  yesterday with new pricing…
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-plum bg-mint shadow-[2px_2px_0_0_var(--plum)]">Mood ✓</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-plum bg-yellow shadow-[2px_2px_0_0_var(--plum)]">Complaint</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-plum bg-cream shadow-[2px_2px_0_0_var(--plum)]">Competitor</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-plum bg-[#CDE4F5] shadow-[2px_2px_0_0_var(--plum)]">Order</span>
                </div>
              </div>
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full border-2 border-plum bg-peach text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_0_var(--plum)] whitespace-nowrap">
              ✉ 90 seconds later
            </span>
            </Card>
          </div>

          {/* Hero stats */}
          <div className="flex gap-10 mt-14 flex-wrap justify-center pt-8 border-t-2 border-dashed border-plum w-full max-w-[720px]">
            <div className="flex flex-col items-center gap-0.5">
              <b className="font-heading text-4xl font-semibold leading-none text-plum">₹8–12</b>
              <span className="text-xs text-plum/70 uppercase tracking-wider font-semibold">per visit, all-in</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <b className="font-heading text-4xl font-semibold leading-none text-plum">90 sec</b>
              <span className="text-xs text-plum/70 uppercase tracking-wider font-semibold">from call to inbox</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <b className="font-heading text-4xl font-semibold leading-none text-plum">300+</b>
              <span className="text-xs text-plum/70 uppercase tracking-wider font-semibold">Avg Sales Reps per Company</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section id="how" className="max-w-[1200px] mx-auto px-7 py-[72px]">
        <div className="max-w-[720px] mx-auto mb-10 text-center">
          <span className="inline-flex items-center gap-2 border-2 border-plum bg-background rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plum mb-4 shadow-brutal-sm">
            <span className="w-2 h-2 rounded-full bg-pink inline-block" />
            It&apos;s embarrassingly simple
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-normal leading-[1.05] tracking-tight text-plum mb-3">
            One call. Two minutes.<br /><em>Structured intelligence.</em>
          </h2>
          <p className="text-[17px] leading-relaxed text-plum/80">
            Priya dials your rep right after each retailer visit. Speaks Hindi, Hinglish, whatever.
            Reps answer like they would a colleague  no form, no app, no new behavior.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto bg-[#FFF3DC] border-2 border-plum rounded-[2rem] p-7 md:p-9 shadow-brutal-lg">
          <div className="flex justify-between items-center pb-4 mb-6 border-b-2 border-dashed border-plum">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-plum">
              <span className="w-2.5 h-2.5 rounded-full bg-green-700 shadow-[0_0_0_3px_var(--plum)]" />
              Priya → Rajesh Kumar · +91 98765 43210
            </div>
            <span className="font-mono text-xs text-plum/70">02:14 · live</span>
          </div>

          <div className="flex flex-col gap-[18px]">
            {([
              { side: "left",  text: "Namaste Rajesh Kumar! Main Priya bol rahi hoon. Aaj ki retailer visit ke baare mein ek choti si baat karni thi  sirf 3 minute lagenge.", meta: "Priya · Field Agent" },
              { side: "right", text: "हां जी बोलिए", meta: "Rajesh · Rep" },
              { side: "left",  text: "Aaj Sharma Medical Store ki visit kaisi rahi? Owner ka mood kaisa tha  cooperative tha ya kuch tension thi?", meta: "Priya · Field Agent" },
              { side: "right", text: "नहीं कुछ tension नहीं था, अच्छा ही चल रहा था। पर last delivery में paracetamol ki 2 strip कम आई थी।", meta: "Rajesh · Rep" },
              { side: "left",  text: "Note kar liya  woh logistics ko escalate kar dungi. Aaj ka order kya hua? Aur kuch tha jo unhone lene se mana kiya?", meta: "Priya · Field Agent" },
              { side: "right", text: "Paracetamol 3 strips, cough syrup mana kar diya. MedX wale bhi aaye the kal  naya offer laaye thay.", meta: "Rajesh · Rep" },
              { side: "left",  text: "Bahut shukriya Rajesh Kumar ji. Aapki feedback manager tak pahunch jaayegi. Aage ki visit ke liye all the best!", meta: "Priya · Field Agent" },
            ] as const).map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3.5 items-start max-w-[84%] ${msg.side === "right" ? "self-end flex-row-reverse" : ""}`}
              >
                <div className={`w-12 h-12 rounded-full flex-shrink-0 border-[3px] border-plum grid place-items-center font-heading text-xl shadow-[3px_3px_0_0_var(--plum)] mt-0.5 ${msg.side === "left" ? "bg-pink text-white" : "bg-yellow text-plum"}`}>
                  {msg.side === "left" ? "P" : "R"}
                </div>
                <div>
                  <div className={`border-2 border-plum px-[18px] py-3.5 text-[15px] leading-[1.55] shadow-brutal-sm ${msg.side === "left" ? "bg-[#FAE3B7] rounded-[22px] rounded-bl-[8px]" : "bg-white rounded-[22px] rounded-br-[8px]"}`}>
                    {msg.text}
                  </div>
                  <div className={`text-[11px] text-plum/60 mt-1.5 uppercase tracking-wider font-semibold ${msg.side === "right" ? "text-right" : ""}`}>
                    {msg.meta}
                  </div>
                </div>
              </div>
            ))}

            <div className="self-center flex items-center gap-2.5 bg-mint border-2 border-plum rounded-full px-5 py-3 text-sm font-bold shadow-[4px_4px_0_0_var(--plum)] mt-3">
              ✉️ Report in your manager&apos;s inbox. 90 seconds after hang up.
            </div>
          </div>
        </div>
      </section>

      {/* ── Thesis ────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-7 pb-[72px]">
        <div className="bg-pink border-2 border-plum rounded-[2rem] px-6 py-12 md:px-10 shadow-brutal-lg">
          <div className="max-w-[720px] mx-auto mb-7 text-center">
            <span className="inline-flex items-center gap-2 bg-white border-2 border-plum rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plum mb-4 shadow-brutal-sm">
              <span className="w-2 h-2 rounded-full bg-yellow inline-block" />
              The market thesis
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-normal leading-[1.05] tracking-tight text-white mb-0">
              Field data is dying in WhatsApp.<br /><em>We built the moment to capture it.</em>
            </h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-7">
            <div className="bg-pink border-2 border-white/40 rounded-3xl p-7 shadow-brutal min-h-[190px] flex flex-col justify-end relative overflow-hidden">
              <span className="absolute -top-8 -right-8 w-28 h-28 rounded-full border-2 border-white opacity-15 pointer-events-none" />
              <span className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full border-2 border-white opacity-10 pointer-events-none" />
              <div className="font-heading text-[clamp(52px,7vw,88px)] leading-[0.9] tracking-tight font-bold text-white">300+</div>
              <div className="text-sm font-semibold mt-2.5 uppercase tracking-wider text-white/90">MRs in a mid-size pharma company</div>
            </div>

            <div className="bg-yellow border-2 border-plum rounded-3xl p-7 shadow-brutal min-h-[190px] flex flex-col justify-end relative overflow-hidden">
              <span className="absolute -top-8 -right-8 w-28 h-28 rounded-full border-2 border-plum opacity-15 pointer-events-none" />
              <div className="font-heading text-[clamp(52px,7vw,88px)] leading-[0.9] tracking-tight font-bold text-plum">8–10</div>
              <div className="text-sm font-semibold mt-2.5 uppercase tracking-wider text-plum/85">Retailer visits per MR, per day</div>
            </div>

            <div className="bg-cream border-2 border-plum rounded-3xl p-7 shadow-brutal min-h-[140px] sm:col-span-2 lg:col-span-1 flex flex-row lg:flex-col items-center lg:items-start lg:justify-end gap-5">
              <div className="font-heading text-[clamp(44px,9vw,72px)] leading-[0.9] tracking-tight font-bold text-plum flex-shrink-0">~0</div>
              <div className="hidden lg:block w-px self-stretch bg-plum rounded-full flex-shrink-0" />
              <div className="text-[15px] font-semibold text-plum max-w-[280px] leading-snug">
                Structured data points reaching the Area Sales Manager  that intelligence dies in WhatsApp threads, weekly decks, or forgotten while driving.
              </div>
            </div>
          </div>

          {/* Overlapping pricing cards  desktop */}
          <div className="relative h-[220px] hidden sm:block">
            <div
              className="absolute left-0 top-0 z-10 w-[58%] bg-mint border-2 border-plum rounded-3xl p-7 shadow-brutal-lg">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest border-[1.5px] border-plum rounded-full px-2.5 py-0.5 mb-2.5 shadow-[2px_2px_0_0_var(--plum)] bg-yellow">Bolna · per visit</span>
              <div className="font-heading text-[clamp(40px,6vw,64px)] leading-none tracking-tight font-bold text-plum">
                ₹8-12
              </div>
              <div className="text-sm mt-2 leading-snug text-plum/80">
                <b>Priya call, all-in.</b> At Bolna&apos;s per-minute pricing. Report in 90 seconds.
              </div>
            </div>
            <div
              className="absolute right-0 top-6 z-[1] w-[52%] bg-white border-2 border-plum rounded-3xl p-7 opacity-75 text-right">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest border-[1.5px] border-plum rounded-full px-2.5 py-0.5 mb-2.5 shadow-[2px_2px_0_0_var(--plum)]">Legacy agency · per report</span>
              <div className="font-heading text-[clamp(28px,4vw,42px)] leading-none tracking-tight font-normal text-plum/55 line-through decoration-pink decoration-[4px]">₹200–500</div>
              <div className="text-sm mt-2 leading-snug text-plum/80">Field research agency. Delivered days later, not minutes.</div>
            </div>
          </div>

          {/* Pricing  mobile stack */}
          <div className="flex flex-col gap-4 sm:hidden">
            <div className="bg-mint border-2 border-plum rounded-3xl p-6 shadow-brutal">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest border-[1.5px] border-plum rounded-full px-2.5 py-0.5 mb-2.5 bg-yellow shadow-[2px_2px_0_0_var(--plum)]">Bolna · per visit</span>
              <div className="font-heading text-5xl leading-none font-bold text-plum">₹8<span className="text-lg font-normal">–12</span></div>
              <div className="text-sm mt-2 leading-snug text-plum/80"><b>Priya call, all-in.</b> Report in 90 seconds.</div>
            </div>
            <div className="bg-white border-2 border-plum rounded-3xl p-6 opacity-80" style={{ boxShadow: "2px 2px 0 0 var(--plum)" }}>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest border-[1.5px] border-plum rounded-full px-2.5 py-0.5 mb-2.5 shadow-[2px_2px_0_0_var(--plum)]">Legacy agency · per report</span>
              <div className="font-heading text-4xl leading-none font-normal text-plum/55 line-through decoration-pink decoration-[4px]">₹200–500</div>
              <div className="text-sm mt-2 leading-snug text-plum/80">Delivered days later, not minutes.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sample Report ─────────────────────────────────── */}
      <section id="report" className="max-w-[1200px] mx-auto px-7 pb-[72px]">
        <div className="max-w-[720px] mx-auto mb-10 text-center">
          <span className="inline-flex items-center gap-2 border-2 border-plum bg-background rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plum mb-4 shadow-brutal-sm">
            <span className="w-2 h-2 rounded-full bg-pink inline-block" />
            What lands in the inbox
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-normal leading-[1.05] tracking-tight text-plum mb-3">
            A structured debrief,<br /><em>not a transcript dump.</em>
          </h2>
          <p className="text-[17px] leading-relaxed text-plum/80">
            Priya turns the call into six structured fields your managers can scan in 30 seconds,
            or pipe into a spreadsheet for LLM pattern-matching.
          </p>
        </div>
        <div className="max-w-[760px] mx-auto">
          <ReportCard data={reportData} />
        </div>

        <div className="max-w-[760px] mx-auto mt-4">
          <Button asChild size="lg"><a href="/sample">See full report →</a></Button>
        </div>
      </section>

      {/* ── Demo ──────────────────────────────────────────── */}
      <DemoSection />

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-7 pb-[72px]">
        <div
          className="bg-plum border-2 border-plum rounded-[2rem] px-6 py-16 md:px-10 text-center shadow-brutal-lg"
          style={{ backgroundImage: "radial-gradient(circle at 12% 20%, rgba(234,61,91,.4) 0, transparent 30%), radial-gradient(circle at 88% 80%, rgba(254,203,102,.35) 0, transparent 28%)" }}
        >
          <span className="inline-flex items-center gap-2 bg-yellow border-2 border-plum rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plum mb-5 shadow-brutal-sm">
            For Maitreya &amp; Prateek
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,64px)] font-normal leading-tight text-cream max-w-[820px] mx-auto mb-4">
            I didn&apos;t apply.{" "}
            <em className="text-yellow">I built the thing first.</em>
          </h2>
          <p className="max-w-[580px] mx-auto mb-7 text-[17px] text-cream/80 leading-relaxed">
            I tried to identify a use case independently, validated the problem, and shipped it
            before applying to join your team. I believe there&apos;s a commercial story here,
            Maitreya. The code is on GitHub, Prateek.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Button asChild size="lg">
              <a href="https://www.linkedin.com/in/karthikarigela" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="https://karthikarigela.super.site" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="py-10 text-center text-sm text-plum/70 border-t border-border">
        <div className="flex justify-center mb-3">
          <BolnaLogo width={66} height={42} color="#3A001D" />
        </div>
        Built with Bolna AI · An experiment by Karthik Arigela
        <div className="flex justify-center gap-5 mt-3">
          <a href="https://karthikarigela.super.site" className="text-plum underline underline-offset-2 decoration-2" target="_blank" rel="noopener noreferrer">
            karthikarigela.super.site
          </a>
          <a href="https://github.com/karthikarigela" className="text-plum underline underline-offset-2 decoration-2" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/karthikarigela" className="text-plum underline underline-offset-2 decoration-2" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>

    </div>
  )
}
