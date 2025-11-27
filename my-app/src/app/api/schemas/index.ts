// pages/api/schemas/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("authjs.session-token")?.value;

    if (!sessionToken) {
      throw new Error("Unauthorized");
    }

    const body = await req.json(); // parse JSON body
    const { schema } = body;

    // save to DB
    const newSchema = await prisma.schema.create({
      data: { userId, schema },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    // save to DB
    const user = await prisma.user.create({
      data: { name, email },
    });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}
