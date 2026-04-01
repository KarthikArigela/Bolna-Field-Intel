import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const apiKey = process.env.BOLNA_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing API configuration" },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(`https://api.bolna.ai/execution/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch status" },
        { status: response.status }
      )
    }

    const data = (await response.json()) as Record<string, unknown>

    return NextResponse.json({
      status: data.status,
      smart_status: data.smart_status,
      conversation_duration: data.conversation_duration,
    })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Network error" },
      { status: 500 }
    )
  }
}
