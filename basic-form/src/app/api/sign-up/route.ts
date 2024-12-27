import { createClient } from "@/lib/server/supabase";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const supabase = await createClient();
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const body = await req.json(); // Parse the request body

  const { email, password, name } = body;
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and Password are required" },
      { status: 400 },
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });
  if (error) {
    const errors = {
      email_address_invalid: "The email address is invalid.",
    } as Record<string, string>;

    return NextResponse.json(
      { error: errors?.[error?.code as string] || "Invalid credentials" },
      { status: 400 },
    );
  }

  return NextResponse.json({ user: data?.user }, { status: 200 });
}
