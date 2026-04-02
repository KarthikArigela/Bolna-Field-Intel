# Priya - Field Intelligence Agent

A Hindi-speaking AI voice agent for Indian pharma and FMCG field teams. Built on Bolna AI's voice stack. Live at bolna.karthikarigela.in.

## What it does
Priya calls your field rep after a retailer visit. Asks 5 structured questions in Hindi. Sends a structured debrief report to the manager in under 3 minutes.

No new app. No new behavior. Just a phone call they already know how to take.

## The problem it solves

A mid-size pharma company has 300+ MRs, each visiting 8–10 retailers a day. That's thousands of data points - retailer mood, delivery complaints, competitor moves, order details that die in WhatsApp threads or get forgotten on the drive home. The Area Sales Manager sees almost none of it in real time.

## Why this works
- Built on Bolna's Hindi-native voice stack. No translation layer, no generic TTS
- Hinglish, accents, and incomplete answers handled natively
- At Bolna's per-minute pricing: ₹8–12 per visit vs ₹200–500 via a research agency

## Tech stack 
- Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · shadcn/ui
- Bolna AI API (voice agent + execution status polling) 
- Make.com (Email report generation from Bolna's Call Transcripts)
- Deployed on Vercel with custom domain

## Why I built this
This is a prototype I built as part of exploring the EIR / Forward Deployed Engineer role at Bolna AI. The mandate for me was: find a real problem, build proof, show the business case. This is what this role looks like in practice.

## Run locally
cp .env.local.example .env.local\
Add BOLNA_API_KEY and BOLNA_AGENT_ID\
npm install && npm run dev