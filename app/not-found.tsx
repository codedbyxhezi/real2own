import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "#f5f3ef",
        color: "#171717",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 24px",
            fontSize: "13px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            margin: "0",
            fontSize: "clamp(42px, 8vw, 88px)",
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Seite nicht gefunden.
        </h1>

        <p
          style={{
            maxWidth: "520px",
            margin: "28px auto 0",
            fontSize: "17px",
            lineHeight: 1.7,
            opacity: 0.7,
          }}
        >
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            minHeight: "52px",
            padding: "0 28px",
            background: "#171717",
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}