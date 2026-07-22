import { NextResponse } from "next/server";
import {
  createDemoSessionToken,
  DEMO_SESSION_COOKIE,
  DEMO_SESSION_MAX_AGE,
  DEMO_SESSION_REMEMBER_MAX_AGE,
  isDemoAuthConfigured,
  validateDemoCredentials,
} from "@/lib/demoAuth";

export const runtime = "nodejs";

type LoginBody = {
  username?: unknown;
  password?: unknown;
  remember?: unknown;
};

export async function POST(
  request: Request
) {
  let body: LoginBody;

  try {
    body =
      (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid_request",
      },
      {
        status: 400,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }

  if (!isDemoAuthConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }

  const username =
    typeof body.username === "string"
      ? body.username.trim()
      : "";

  const password =
    typeof body.password === "string"
      ? body.password
      : "";

  const remember =
    body.remember === true;

  if (
    !validateDemoCredentials(
      username,
      password
    )
  ) {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid_credentials",
      },
      {
        status: 401,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }

  const maxAge = remember
    ? DEMO_SESSION_REMEMBER_MAX_AGE
    : DEMO_SESSION_MAX_AGE;

  const token =
    createDemoSessionToken(
      username,
      maxAge
    );

  const response =
    NextResponse.json(
      {
        ok: true,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

  response.cookies.set({
    name: DEMO_SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure:
      process.env.NODE_ENV ===
      "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });

  return response;
}