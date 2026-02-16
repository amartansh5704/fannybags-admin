import { NextResponse } from "next/server";
import { getDeals, addDeal, updateDeal } from "@/lib/store";
import { Deal } from "@/types/deal";

export async function GET() {
  return NextResponse.json(getDeals());
}

export async function POST(req: Request) {
  const body: Deal = await req.json();
  addDeal(body);
  return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
  const body = await req.json();
  updateDeal(body.id, body);
  return NextResponse.json({ success: true });
}
