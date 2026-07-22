import { getDemoSession } from "@/lib/demoAuth";
import { HeaderClient } from "./HeaderClient";

export async function Header() {
  const session = await getDemoSession();

  const accountName = session
    ? session.username === "admin"
      ? "Admin"
      : session.username
    : null;

  return (
    <HeaderClient
      accountName={accountName}
    />
  );
}