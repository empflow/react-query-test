import axios from "@/utils/axios";
import wait from "@/utils/wait";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, body } = await req.json();
  if (!title) {
    return NextResponse.json({ msg: "No title provided" }, { status: 400 });
  }
  if (!body) {
    return NextResponse.json({ msg: "No body provided" }, { status: 400 });
  }

  if (Math.random() > 0.5) {
    return NextResponse.json(
      { ok: false, errCode: "INVALID_CREDENTIALS" },
      { status: 400 }
    );
  }

  await wait(1000);
  try {
    const payload = { title, body };
    const { data } = await axios.post("http://localhost:4000/posts", payload);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
