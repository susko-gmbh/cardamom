import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - Cardamom Progressive Indian Dining',
  description:
    'Impressum und rechtliche Informationen von Cardamom Progressive Indian Dining Hamburg',
};

const ImpressumPage = () => {
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Impressum</h1>
          </div>

          <div className=" rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-card-foreground">
              <div className="space-y-6 leading-relaxed">
                <p>
                  <strong>Anbieter i. S. d. § 5 TMG</strong>
                  <br />
                  Cardamom Kitchen GmbH
                  <br />
                  <strong>Adresse:</strong> Hohe Bleichen 10, 20354 Hamburg
                  <br />
                  <strong>Telefon:</strong> +49 40 80 08 04 18
                  <br />
                  <strong>E-Mail:</strong> kontakt@cardamom-hamburg.de
                  <br />
                  <strong>Registergericht:</strong> folgt in Kürze
                  <br />
                  <strong>Geschäftsführer:</strong> Gurbir Singh
                  <br />
                  <strong>Umsatzsteuer-Identifikationsnummer gem. § 27a UStG:</strong> folgt in
                  Kürze
                  <br />
                  <strong>Verantwortlich für die Inhalte gemäß § 55 Abs. 2 RStV:</strong> Cardamom
                  Kitchen GmbH
                  <br />
                  <strong>Aufsichtsbehörde:</strong> folgt in Kürze
                </p>

                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Als
                  Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich.
                </p>

                <p>
                  <strong>Verbraucherschlichtung:</strong> Die Cardamom Kitchen GmbH ist
                  grundsätzlich nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen. Wir bieten dies auch freiwillig nicht
                  an.
                </p>

                <p>
                  <strong>Online-Streitbeilegung:</strong> Die Europäische Kommission stellt eine
                  Plattform für die außergerichtliche Online- Streitbeilegung (OS-Plattform) bereit,
                  die unter{' '}
                  <a
                    href="https://www.ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    www.ec.europa.eu/consumers/odr
                  </a>{' '}
                  aufrufbar ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImpressumPage;
