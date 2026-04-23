import { cn } from "@/lib/utils"

export const reportData = {
  rep: "Rajesh Kumar",
  retailer: "Sharma Medical Store",
  location: "Pune, Maharashtra",
  duration: "116s",
  fields: [
    { label: "Mood",       value: "Owner was cooperative and in a good mood — no tension during the visit.",              tagClass: "mood"       },
    { label: "Complaint",  value: "Two strips of paracetamol missing in the last delivery. Flagged for logistics.",       tagClass: "complaint"  },
    { label: "Competitor", value: "MedX representative visited yesterday with a new paracetamol pricing offer.",          tagClass: "competitor" },
    { label: "Order",      value: "Paracetamol ×3 strips ordered. Cough syrup refused — perceived as over-priced.",      tagClass: "order"      },
    { label: "Follow-up",  value: "Logistics escalation: paracetamol short-supply. ASM to call back within 24 hours.",   tagClass: "followup"   },
    { label: "Summary",    value: "Visit went well overall. Key action: delivery escalation & MedX pricing check.",      tagClass: "summary"    },
  ],
}

type ReportData = typeof reportData

export function ReportCard({ data }: { data: ReportData }) {
  return (
    <div className="bg-white border-2 border-plum rounded-2xl overflow-hidden shadow-brutal">
      {/* Header */}
      <div className="bg-plum px-5 py-4 flex flex-wrap gap-x-6 gap-y-1">
        {[
          ["Rep",      data.rep],
          ["Retailer", data.retailer],
          ["Location", data.location],
          ["Duration", data.duration],
        ].map(([k, v]) => (
          <div key={k} className="text-xs text-yellow/70 uppercase tracking-widest font-bold">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow mr-1.5 align-middle" />
            {k}
            <span className="block font-heading text-base text-white/95 normal-case tracking-normal mt-0.5">
              {v}
            </span>
          </div>
        ))}
      </div>

      {/* Fields */}
      <div className="divide-y divide-dashed divide-plum/20">
        {data.fields.map((f) => (
          <div key={f.label} className="flex gap-3 px-5 py-4 items-start">
            {/* Pill tag — colour varies by tagClass */}
            <span
              className={cn(
                "flex-shrink-0 mt-0.5 rounded-full border-2 border-plum px-3 py-1",
                "text-[11px] font-bold uppercase tracking-wider text-plum",
                "shadow-[2px_2px_0_0_var(--plum)] whitespace-nowrap",
                {
                  "bg-[#C9E8D1]": f.tagClass === "mood",
                  "bg-[#FFD8A8]": f.tagClass === "complaint",
                  "bg-[#FAE3B7]": f.tagClass === "competitor",
                  "bg-[#CDE4F5]": f.tagClass === "order",
                  "bg-[#F9D1CB]": f.tagClass === "followup",
                  "bg-plum !text-white shadow-[2px_2px_0_0_rgba(58,0,29,.4)]": f.tagClass === "summary",
                }
              )}
            >
              {f.label}
            </span>
            <p className="text-sm text-plum leading-relaxed">{f.value}</p>
          </div>
        ))}
      </div>

      {/* LLM Prompt Box */}
      <div className="mx-5 mb-5 border-2 border-dashed border-plum rounded-[18px] bg-yellow p-4 shadow-[3px_3px_0_0_var(--plum)]">
        <p className="text-[11px] font-bold uppercase tracking-widest text-plum mb-1.5">
          💡 Pro Tip · LLM Insight
        </p>
        <p className="text-xs text-plum leading-relaxed">
          Paste 50 reports like this into Claude or ChatGPT:{" "}
          <em>&quot;Across these visits, what are the top 3 patterns my ASMs should act on this week?&quot;</em>
          {" "}— Priya gives you the raw data. You extract the pattern.
        </p>
      </div>
    </div>
  )
}
