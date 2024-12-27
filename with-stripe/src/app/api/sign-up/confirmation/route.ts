import { createClient } from "@/lib/server/supabase";
import { NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const supabase = await createClient();

  const params = new URLSearchParams(req.url.split("?")[1]);
  const code = params.get("code") as string;
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    const errors = {
      email_address_invalid: "The email address is invalid.",
    } as Record<string, string>;

    return NextResponse.json(
      { error: errors?.[error?.code as string] || "Invalid credentials" },
      { status: 400 },
    );
  }
  if (code && data) {
    redirect("/login");
  } else {
    redirect("/");
  }
}
