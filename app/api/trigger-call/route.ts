import { NextRequest, NextResponse } from "next/server"

interface TriggerCallBody {
  rep_name?: string
  retailer_name?: string
  location?: string
  phone_number?: string
  email?: string
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.BOLNA_API_KEY
  const agentId = process.env.BOLNA_AGENT_ID

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: "Missing API configuration" },
      { status: 500 }
    )
  }

  let body: TriggerCallBody
  try {
    body = (await request.json()) as TriggerCallBody
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { rep_name, retailer_name, location, phone_number, email } = body

  if (!rep_name || !retailer_name || !location || !phone_number || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    )
  }

  try {
    const response = await fetch("https://api.bolna.ai/call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        agent_id: agentId,
        recipient_phone_number: `+91${phone_number}`,
        user_data: {
          rep_name,
          retailer_name,
          location,
          email,
          timezone: "Asia/Kolkata",
        },
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      return NextResponse.json(
        { error: errText || "Bolna API error" },
        { status: 500 }
      )
    }

    const data = (await response.json()) as Record<string, unknown>
    const callId =
      (data.call_id as string) ??
      (data.id as string) ??
      (data.execution_id as string)

    return NextResponse.json({ call_id: callId })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Network error" },
      { status: 500 }
    )
  }
}
