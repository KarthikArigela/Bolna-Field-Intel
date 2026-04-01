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
            Forward this report to Claude or ChatGPT: &quot;Based on this field
            visit report, what are the top 3 actions the area sales manager
            should take this week?&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
