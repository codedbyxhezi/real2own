import {
  createHash,
  createHmac,
  timingSafeEqual,
} from "node:crypto";
import { cookies } from "next/headers";

export const DEMO_SESSION_COOKIE =
  "real2own_demo_session";

export const DEMO_SESSION_MAX_AGE =
  60 * 60 * 8;

export const DEMO_SESSION_REMEMBER_MAX_AGE =
  60 * 60 * 24 * 30;

type DemoAuthConfig = {
  username: string;
  password: string;
  secret: string;
};

export type DemoSession = {
  username: string;
  role: "admin";
  issuedAt: number;
  expiresAt: number;
};

function isRecord(
  value: unknown
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null
  );
}

function getDemoAuthConfig():
  | DemoAuthConfig
  | null {
  if (
    process.env.DEMO_AUTH_ENABLED !==
    "true"
  ) {
    return null;
  }

  const username =
    process.env.DEMO_ADMIN_USERNAME;

  const password =
    process.env.DEMO_ADMIN_PASSWORD;

  const secret =
    process.env.DEMO_SESSION_SECRET;

  if (
    !username ||
    !password ||
    !secret ||
    secret.length < 32
  ) {
    return null;
  }

  return {
    username,
    password,
    secret,
  };
}

function hashValue(value: string) {
  return createHash("sha256")
    .update(value)
    .digest();
}

function safeEqual(
  first: string,
  second: string
) {
  return timingSafeEqual(
    hashValue(first),
    hashValue(second)
  );
}

function createSignature(
  encodedPayload: string,
  secret: string
) {
  return createHmac(
    "sha256",
    secret
  )
    .update(encodedPayload)
    .digest("base64url");
}

export function isDemoAuthConfigured() {
  return getDemoAuthConfig() !== null;
}

export function validateDemoCredentials(
  username: string,
  password: string
) {
  const config = getDemoAuthConfig();

  if (!config) {
    return false;
  }

  return (
    safeEqual(
      username,
      config.username
    ) &&
    safeEqual(
      password,
      config.password
    )
  );
}

export function createDemoSessionToken(
  username: string,
  maxAge: number
) {
  const config = getDemoAuthConfig();

  if (!config) {
    throw new Error(
      "Demo authentication is not configured."
    );
  }

  const currentTime = Math.floor(
    Date.now() / 1000
  );

  const session: DemoSession = {
    username,
    role: "admin",
    issuedAt: currentTime,
    expiresAt:
      currentTime + maxAge,
  };

  const encodedPayload =
    Buffer.from(
      JSON.stringify(session)
    ).toString("base64url");

  const signature =
    createSignature(
      encodedPayload,
      config.secret
    );

  return `${encodedPayload}.${signature}`;
}

export function verifyDemoSessionToken(
  token: string
): DemoSession | null {
  const config = getDemoAuthConfig();

  if (!config) {
    return null;
  }

  const tokenParts = token.split(".");

  if (tokenParts.length !== 2) {
    return null;
  }

  const [
    encodedPayload,
    providedSignature,
  ] = tokenParts;

  if (
    !encodedPayload ||
    !providedSignature
  ) {
    return null;
  }

  const expectedSignature =
    createSignature(
      encodedPayload,
      config.secret
    );

  if (
    !safeEqual(
      providedSignature,
      expectedSignature
    )
  ) {
    return null;
  }

  try {
    const decodedPayload =
      Buffer.from(
        encodedPayload,
        "base64url"
      ).toString("utf8");

    const payload: unknown =
      JSON.parse(decodedPayload);

    if (!isRecord(payload)) {
      return null;
    }

    const {
      username,
      role,
      issuedAt,
      expiresAt,
    } = payload;

    if (
      typeof username !== "string" ||
      role !== "admin" ||
      typeof issuedAt !== "number" ||
      typeof expiresAt !== "number" ||
      !Number.isFinite(issuedAt) ||
      !Number.isFinite(expiresAt)
    ) {
      return null;
    }

    const currentTime = Math.floor(
      Date.now() / 1000
    );

    if (
      expiresAt <= currentTime ||
      issuedAt > currentTime + 60
    ) {
      return null;
    }

    return {
      username,
      role,
      issuedAt,
      expiresAt,
    };
  } catch {
    return null;
  }
}

export async function getDemoSession() {
  const cookieStore =
    await cookies();

  const token =
    cookieStore.get(
      DEMO_SESSION_COOKIE
    )?.value;

  if (!token) {
    return null;
  }

  return verifyDemoSessionToken(
    token
  );
}