# Real2Own

Lebendige, responsive Immobilienplattform als Next.js-App mit TypeScript und CSS Modules.

## Enthalten

- Next.js App Router
- TypeScript im Strict Mode
- CSS Modules pro Komponente
- Responsive Navigation und mobile Darstellung
- Interaktive Immobiliensuche
- Animierte Sections mit Intersection Observer
- Optimierte lokale WebP-Bilder über `next/image`
- Internationale Destinationen
- Grundstücke, Kauf, Miete, Neubau und Baupartner
- Ohne schweres UI-Framework oder Icon-Paket

## Starten

```bash
npm install
npm run dev
```

Danach `http://localhost:3000` öffnen.

## Produktionsprüfung

```bash
npm run typecheck
npm run build
npm run start
```

## Struktur

Jede UI-Komponente liegt in einem eigenen Ordner:

```text
components/
  Header/
    Header.tsx
    Header.module.css
  Hero/
    Hero.tsx
    Hero.module.css
  ...
```

## Nächste sinnvolle Ausbaustufen

- Datenbank und Such-API
- Authentifizierung für Käufer, Makler und Baupartner
- Kartenansicht
- Favoriten und gespeicherte Suchen
- Mehrsprachigkeit und Währungsumrechnung
- Partner-Dashboard und Lead-Management
- CMS für Objekte und redaktionelle Inhalte

## Windows: saubere Installation

Falls eine frühere Installation mit `EPERM` oder einer falschen Registry fehlgeschlagen ist, PowerShell im Projektordner öffnen und ausführen:

```powershell
powershell -ExecutionPolicy Bypass -File .\install-clean.ps1
```

Alternativ manuell:

```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
npm config set registry https://registry.npmjs.org/
npm install
npm run dev
```
