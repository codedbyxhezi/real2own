import { NextResponse } from "next/server";
import {
  DEMO_SESSION_COOKIE,
} from "@/lib/demoAuth";

export const runtime = "nodejs";

function getSafeRedirect(
  value: FormDataEntryValue | null
) {
  if (
    typeof value !== "string" ||
    !value.startsWith("/") ||
    value.startsWith("//")
  ) {
    return "/anmelden";
  }

  return value;
}

export async function POST(
  request: Request
) {
  let redirectTo = "/anmelden";

  try {
    const formData =
      await request.formData();

    redirectTo = getSafeRedirect(
      formData.get("redirectTo")
    );
  } catch {
    redirectTo = "/anmelden";
  }

  const response =
    NextResponse.redirect(
      new URL(
        redirectTo,
        request.url
      ),
      303
    );

  response.cookies.set({
    name: DEMO_SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure:
      process.env.NODE_ENV ===
      "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
  });

  return response;
}