import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Real2Own",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten durch Real2Own.",
};

const navigation = [
  {
    label: "Allgemeine Hinweise",
    href: "#allgemeine-hinweise",
  },
  {
    label: "Verantwortlicher",
    href: "#verantwortlicher",
  },
  {
    label: "Hosting",
    href: "#hosting",
  },
  {
    label: "Kontaktaufnahme",
    href: "#kontaktaufnahme",
  },
  {
    label: "Cookies",
    href: "#cookies",
  },
  {
    label: "Ihre Rechte",
    href: "#rechte",
  },
  {
    label: "Aufsichtsbehörde",
    href: "#aufsichtsbehoerde",
  },
];

export default function DatenschutzPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <Link className={styles.backLink} href="/">
            <Icon name="arrow" size={15} />
            Zurück zur Startseite
          </Link>

          <p className={styles.eyebrow}>Rechtliche Informationen</p>

          <h1>Datenschutzerklärung</h1>

          <p className={styles.updated}>Stand: Juli 2026</p>
        </header>

        <div className={styles.layout}>
          <nav
            className={styles.navigation}
            aria-label="Inhalt der Datenschutzerklärung"
          >
            <p>Inhalt</p>

            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <article className={styles.content}>
            <section id="allgemeine-hinweise">
              <h2>1. Allgemeine Hinweise</h2>

              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns ein
                besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften, insbesondere der
                Datenschutz-Grundverordnung, sowie dieser
                Datenschutzerklärung.
              </p>

              <p>
                Personenbezogene Daten sind alle Informationen, die sich auf
                eine identifizierte oder identifizierbare natürliche Person
                beziehen. Dazu gehören beispielsweise Name, Anschrift,
                E-Mail-Adresse, Telefonnummer, IP-Adresse sowie Informationen
                über die Nutzung dieser Website.
              </p>
            </section>

            <section id="verantwortlicher">
              <h2>2. Verantwortlicher</h2>

              <p>
                Verantwortlicher im Sinne der
                Datenschutz-Grundverordnung ist:
              </p>

              <address className={styles.address}>
                <strong>real2own</strong>
                <br />
                Inhaber: Hüseyin Bayram
                <br />
                Landsberger Str. 455
                <br />
                81241 München
                <br />
                Deutschland
                <br />
                <br />
                Telefon:{" "}
                <a href="tel:+491791415281">
                  +49 179 14 15 281
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>
              </address>
            </section>

            <section id="hosting">
              <h2>3. Hosting und Website-Betrieb über Vercel</h2>

              <p>
                Diese Website wird bei folgendem Dienstleister gehostet:
              </p>

              <address className={styles.address}>
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                Vereinigte Staaten
              </address>

              <p>
                Vercel verarbeitet technisch notwendige Daten, um diese Website
                bereitzustellen, Inhalte an Ihr Endgerät auszuliefern und die
                Sicherheit, Stabilität und Funktionsfähigkeit der technischen
                Infrastruktur zu gewährleisten.
              </p>

              <p>Dabei können insbesondere folgende Daten verarbeitet werden:</p>

              <ul>
                <li>IP-Adresse des aufrufenden Endgeräts,</li>
                <li>Datum und Uhrzeit des Zugriffs,</li>
                <li>aufgerufene Seite oder Datei,</li>
                <li>HTTP-Methode und HTTP-Statuscode,</li>
                <li>Browsertyp und Browserversion,</li>
                <li>verwendetes Betriebssystem,</li>
                <li>Referrer-URL,</li>
                <li>Geräte-, Netzwerk- und Verbindungsinformationen,</li>
                <li>technische Fehler- und Sicherheitsinformationen.</li>
              </ul>

              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Unser berechtigtes Interesse besteht in der
                sicheren, stabilen und effizienten Bereitstellung unseres
                Onlineangebots sowie in der Erkennung und Abwehr technischer
                Angriffe.
              </p>

              <h3>Auftragsverarbeitung</h3>

              <p>
                Soweit Vercel personenbezogene Daten in unserem Auftrag
                verarbeitet, erfolgt dies auf Grundlage eines Vertrags zur
                Auftragsverarbeitung gemäß Art. 28 DSGVO.
              </p>

              <p>
                Vercel kann zur Bereitstellung seiner Dienste weitere
                vertraglich verpflichtete Unterauftragsverarbeiter einsetzen.
                Diese können insbesondere Leistungen in den Bereichen
                Cloud-Infrastruktur, Netzwerkauslieferung, Sicherheit und
                technische Unterstützung erbringen.
              </p>

              <h3>Internationale Datenübermittlung</h3>

              <p>
                Vercel verwendet eine global verteilte technische
                Infrastruktur. Daher können technische Daten auch außerhalb
                Deutschlands und außerhalb des Europäischen Wirtschaftsraums
                verarbeitet werden.
              </p>

              <p>
                Im Rahmen der Nutzung von Vercel können personenbezogene Daten
                insbesondere in die Vereinigten Staaten übermittelt werden.
              </p>

              <p>
                Vercel ist nach eigenen Angaben unter dem EU-US Data Privacy
                Framework zertifiziert. Soweit eine Übermittlung nicht auf
                Grundlage dieses Angemessenheitsmechanismus erfolgt, können
                insbesondere die Standardvertragsklauseln der Europäischen
                Kommission oder andere geeignete Garantien verwendet werden.
              </p>

              <h3>Speicherdauer</h3>

              <p>
                Technische Protokoll- und Sicherheitsdaten werden nur so lange
                verarbeitet, wie dies für die Bereitstellung, Sicherheit und
                Stabilität der Website erforderlich ist.
              </p>

              <p>
                Die konkrete Speicherdauer kann von der Art des Protokolls, dem
                verwendeten Vercel-Tarif und der jeweiligen technischen
                Konfiguration abhängen. Eine längere Speicherung kann erfolgen,
                wenn dies zur Untersuchung eines Sicherheitsvorfalls, zur
                Erfüllung gesetzlicher Verpflichtungen oder zur Durchsetzung
                beziehungsweise Abwehr von Rechtsansprüchen erforderlich ist.
              </p>
            </section>

            <section id="kontaktaufnahme">
              <h2>4. Kontaktformulare und Kontaktaufnahme</h2>

              <p>
                Wenn Sie uns per E-Mail, telefonisch oder über ein auf dieser
                Website bereitgestelltes Formular kontaktieren, verarbeiten wir
                die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer
                Anfrage.
              </p>

              <p>Dies kann insbesondere folgende Angaben betreffen:</p>

              <ul>
                <li>Vor- und Nachname,</li>
                <li>E-Mail-Adresse,</li>
                <li>Telefonnummer,</li>
                <li>Inhalt der Nachricht,</li>
                <li>Angaben zu einer Immobilie oder einem Grundstück,</li>
                <li>Angaben zu einer Immobilienempfehlung,</li>
                <li>
                  Angaben im Rahmen einer Bewertungs- oder Vermittlungsanfrage,
                </li>
                <li>
                  Angaben zu gewünschten Immobilien oder Suchkriterien,
                </li>
                <li>
                  Angaben zur Registrierung für exklusive Immobilienangebote.
                </li>
              </ul>

              <p>
                Erfolgt die Kontaktaufnahme zur Anbahnung oder Durchführung
                eines Vertrags, ist Art. 6 Abs. 1 lit. b DSGVO die
                Rechtsgrundlage.
              </p>

              <p>
                Bei sonstigen Anfragen erfolgt die Verarbeitung auf Grundlage
                von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
                besteht in der sachgerechten Bearbeitung und Beantwortung Ihrer
                Anfrage.
              </p>

              <p>
                Soweit wir für eine bestimmte Verarbeitung ausdrücklich Ihre
                Einwilligung einholen, erfolgt die Verarbeitung auf Grundlage
                von Art. 6 Abs. 1 lit. a DSGVO.
              </p>

              <p>
                Formulardaten werden ausschließlich zur Bearbeitung der
                jeweiligen Anfrage verarbeitet. Sofern hierfür ein externer
                technischer Dienstleister eingesetzt wird, erfolgt die
                Verarbeitung auf Grundlage einer entsprechenden vertraglichen
                und datenschutzrechtlichen Grundlage.
              </p>
            </section>

            <section id="zwecke">
              <h2>5. Zwecke der Datenverarbeitung</h2>

              <p>
                Wir verarbeiten personenbezogene Daten insbesondere zu
                folgenden Zwecken:
              </p>

              <ul>
                <li>Bereitstellung und Absicherung dieser Website,</li>
                <li>Bearbeitung und Beantwortung von Anfragen,</li>
                <li>Kontaktaufnahme mit Interessenten und Kunden,</li>
                <li>Anbahnung und Durchführung von Vertragsverhältnissen,</li>
                <li>Vermittlung von Immobilien und Grundstücken,</li>
                <li>Bearbeitung von Immobilienempfehlungen,</li>
                <li>Durchführung von Immobilienbewertungen,</li>
                <li>
                  Vermittlung zwischen Interessenten, Eigentümern und
                  Projektpartnern,
                </li>
                <li>Erfüllung gesetzlicher Verpflichtungen.</li>
              </ul>
            </section>

            <section id="rechtsgrundlagen">
              <h2>6. Rechtsgrundlagen</h2>

              <p>
                Abhängig von der jeweiligen Verarbeitung kommen insbesondere
                folgende Rechtsgrundlagen zur Anwendung:
              </p>

              <ul>
                <li>
                  Art. 6 Abs. 1 lit. a DSGVO, wenn Sie in eine Verarbeitung
                  eingewilligt haben,
                </li>

                <li>
                  Art. 6 Abs. 1 lit. b DSGVO, wenn die Verarbeitung zur
                  Durchführung eines Vertrags oder vorvertraglicher Maßnahmen
                  erforderlich ist,
                </li>

                <li>
                  Art. 6 Abs. 1 lit. c DSGVO, wenn die Verarbeitung zur
                  Erfüllung einer gesetzlichen Verpflichtung erforderlich ist,
                </li>

                <li>
                  Art. 6 Abs. 1 lit. f DSGVO, wenn die Verarbeitung zur Wahrung
                  unserer berechtigten Interessen oder der Interessen eines
                  Dritten erforderlich ist und Ihre Interessen oder
                  Grundrechte nicht überwiegen.
                </li>
              </ul>
            </section>

            <section id="speicherdauer">
              <h2>7. Speicherdauer</h2>

              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für
                den jeweiligen Verarbeitungszweck erforderlich ist.
              </p>

              <p>
                Daten aus Kontakt-, Bewertungs- und Vermittlungsanfragen werden
                grundsätzlich gelöscht, wenn die Anfrage abschließend
                bearbeitet wurde und keine weitere Speicherung erforderlich
                ist.
              </p>

              <p>
                Eine längere Speicherung kann insbesondere erfolgen, wenn
                gesetzliche Aufbewahrungspflichten bestehen, die Daten zur
                Erfüllung eines Vertrags erforderlich sind oder berechtigte
                Interessen, beispielsweise zur Geltendmachung oder Abwehr von
                Rechtsansprüchen, einer Löschung entgegenstehen.
              </p>

              <p>
                Bestehen gesetzliche Aufbewahrungspflichten, werden die
                betroffenen Daten nach Ablauf der jeweiligen
                Aufbewahrungsfrist gelöscht, sofern kein weiterer
                Rechtsgrund für die Speicherung besteht.
              </p>
            </section>

            <section id="cookies">
              <h2>8. Cookies und ähnliche Technologien</h2>

              <p>
                Diese Website kann Cookies und ähnliche Technologien
                verwenden. Cookies sind kleine Dateien oder Informationen, die
                auf Ihrem Endgerät gespeichert oder von diesem ausgelesen
                werden können.
              </p>

              <h3>Technisch notwendige Technologien</h3>

              <p>
                Technisch notwendige Cookies und vergleichbare Technologien
                werden nur eingesetzt, soweit sie erforderlich sind, um die
                Website sicher und funktionsfähig bereitzustellen oder eine von
                Ihnen ausdrücklich gewünschte Funktion auszuführen.
              </p>

              <p>
                Die Speicherung von Informationen in Ihrem Endgerät oder der
                Zugriff auf bereits gespeicherte Informationen erfolgt in
                diesen Fällen auf Grundlage von § 25 Abs. 2 TDDDG.
              </p>

              <p>
                Soweit dabei personenbezogene Daten verarbeitet werden, erfolgt
                dies auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse besteht in der sicheren und
                funktionsfähigen Bereitstellung der Website.
              </p>

              <h3>Nicht notwendige Technologien</h3>

              <p>
                Analyse-, Marketing- oder Personalisierungstechnologien werden
                nur eingesetzt, wenn Sie zuvor wirksam eingewilligt haben.
              </p>

              <p>
                In diesem Fall erfolgt die Speicherung oder der Zugriff auf
                Grundlage von § 25 Abs. 1 TDDDG. Die anschließende Verarbeitung
                personenbezogener Daten erfolgt auf Grundlage Ihrer
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
              </p>

              <p>
                Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für
                die Zukunft über die auf der Website angebotenen
                Einwilligungseinstellungen widerrufen oder ändern.
              </p>

              <h3>Browser-Einstellungen</h3>

              <p>
                Sie können Ihren Browser so konfigurieren, dass Sie über das
                Setzen von Cookies informiert werden, Cookies nur im Einzelfall
                zulassen oder Cookies generell ablehnen.
              </p>

              <p>
                Bei der Deaktivierung technisch notwendiger Cookies oder
                vergleichbarer Speichertechnologien kann die Funktionalität der
                Website eingeschränkt sein.
              </p>
            </section>

            <section id="weitergabe">
              <h2>9. Empfänger und Weitergabe von Daten</h2>

              <p>
                Personenbezogene Daten werden von uns nicht verkauft.
              </p>

              <p>
                Eine Weitergabe oder Offenlegung erfolgt nur, soweit dies zur
                Erfüllung eines Vertrags oder einer Anfrage erforderlich ist,
                eine gesetzliche Verpflichtung besteht, ein berechtigtes
                Interesse vorliegt oder Sie zuvor eingewilligt haben.
              </p>

              <p>
                Im Rahmen einer konkret angefragten Immobilienvermittlung
                können personenbezogene Daten insbesondere an Eigentümer,
                Immobilienanbieter, Makler, Projektentwickler, Baupartner oder
                andere an der angefragten Leistung beteiligte Stellen
                übermittelt werden.
              </p>

              <p>
                Eine solche Übermittlung erfolgt nur, soweit sie zur Bearbeitung
                Ihrer Anfrage, zur Durchführung vorvertraglicher Maßnahmen oder
                zur Erfüllung eines Vertrags erforderlich ist oder Sie in die
                Übermittlung eingewilligt haben.
              </p>

              <p>
                Technische Dienstleister können im Rahmen einer
                Auftragsverarbeitung Zugriff auf personenbezogene Daten
                erhalten. Dazu gehört insbesondere der Hostinganbieter Vercel.
              </p>
            </section>

            <section id="rechte">
              <h2>10. Ihre Datenschutzrechte</h2>

              <p>
                Sie haben im Rahmen der gesetzlichen Voraussetzungen
                insbesondere folgende Rechte:
              </p>

              <ul>
                <li>
                  Recht auf Auskunft über die von uns verarbeiteten
                  personenbezogenen Daten,
                </li>
                <li>Recht auf Berichtigung unrichtiger Daten,</li>
                <li>Recht auf Löschung Ihrer personenbezogenen Daten,</li>
                <li>Recht auf Einschränkung der Verarbeitung,</li>
                <li>Recht auf Datenübertragbarkeit,</li>
                <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen,</li>
                <li>
                  Recht auf Widerruf einer erteilten Einwilligung mit Wirkung
                  für die Zukunft,
                </li>
                <li>
                  Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde.
                </li>
              </ul>

              <p>
                Zur Ausübung Ihrer Rechte können Sie sich an folgende
                E-Mail-Adresse wenden:
              </p>

              <p>
                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>
              </p>
            </section>

            <section id="widerruf">
              <h2>11. Widerruf und Widerspruch</h2>

              <h3>Widerruf einer Einwilligung</h3>

              <p>
                Sie können eine erteilte Einwilligung jederzeit mit Wirkung für
                die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum
                Widerruf auf Grundlage der Einwilligung erfolgten Verarbeitung
                bleibt unberührt.
              </p>

              <h3>Widerspruch gegen die Verarbeitung</h3>

              <p>
                Erfolgt eine Verarbeitung auf Grundlage von Art. 6 Abs. 1
                lit. e oder lit. f DSGVO, haben Sie das Recht, aus Gründen, die
                sich aus Ihrer besonderen Situation ergeben, jederzeit
                Widerspruch gegen die Verarbeitung Ihrer personenbezogenen
                Daten einzulegen.
              </p>

              <p>
                Nach einem Widerspruch verarbeiten wir die betroffenen
                personenbezogenen Daten grundsätzlich nicht mehr, es sei denn,
                wir können zwingende schutzwürdige Gründe für die Verarbeitung
                nachweisen, die Ihre Interessen, Rechte und Freiheiten
                überwiegen, oder die Verarbeitung dient der Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen.
              </p>
            </section>

            <section id="aufsichtsbehoerde">
              <h2>12. Beschwerderecht bei einer Aufsichtsbehörde</h2>

              <p>
                Sie haben das Recht, sich bei einer
                Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten zu beschweren.
              </p>

              <p>
                Für nicht öffentliche Unternehmen mit Sitz in Bayern ist
                insbesondere folgende Aufsichtsbehörde zuständig:
              </p>

              <address className={styles.address}>
                <strong>
                  Bayerisches Landesamt für Datenschutzaufsicht
                </strong>
                <br />
                Promenade 18
                <br />
                91522 Ansbach
                <br />
                Deutschland
                <br />
                <br />
                Telefon:{" "}
                <a href="tel:+499811800930">
                  +49 981 180093-0
                </a>
              </address>

              <p>
                Sie können sich auch an eine andere zuständige
                Datenschutzaufsichtsbehörde wenden, insbesondere an die
                Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsortes, Ihres
                Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes.
              </p>
            </section>

            <section id="verschluesselung">
              <h2>13. SSL- beziehungsweise TLS-Verschlüsselung</h2>

              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- beziehungsweise
                TLS-Verschlüsselung.
              </p>

              <p>
                Eine verschlüsselte Verbindung erkennen Sie in der Regel an
                der Verwendung von „https://“ in der Adresszeile Ihres
                Browsers.
              </p>
            </section>

            <section id="automatisierte-entscheidungen">
              <h2>14. Automatisierte Entscheidungsfindung und Profiling</h2>

              <p>
                Es findet keine ausschließlich automatisierte
                Entscheidungsfindung im Sinne von Art. 22 DSGVO statt.
              </p>

              <p>
                Personenbezogene Daten werden nicht für ein Profiling
                verwendet, das Ihnen gegenüber rechtliche Wirkung entfaltet
                oder Sie in ähnlich erheblicher Weise beeinträchtigt.
              </p>
            </section>

            <section id="datenschutzkontakt">
              <h2>15. Kontakt zum Datenschutz</h2>

              <p>
                Bei Fragen zum Datenschutz, zur Verarbeitung Ihrer
                personenbezogenen Daten oder zur Ausübung Ihrer Rechte wenden
                Sie sich bitte an:
              </p>

              <address className={styles.address}>
                <strong>real2own</strong>
                <br />
                Inhaber: Hüseyin Bayram
                <br />
                Landsberger Str. 455
                <br />
                81241 München
                <br />
                Deutschland
                <br />
                <br />
                E-Mail:{" "}
                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>
              </address>
            </section>

            <section id="aktualisierung">
              <h2>16. Aktualisierung dieser Datenschutzerklärung</h2>

              <p>
                Wir können diese Datenschutzerklärung anpassen, wenn sich
                gesetzliche Anforderungen, Funktionen dieser Website, die Art
                der Datenverarbeitung oder die eingesetzten technischen
                Dienstleister ändern.
              </p>

              <p>
                Es gilt die jeweils auf dieser Website veröffentlichte
                Fassung.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}