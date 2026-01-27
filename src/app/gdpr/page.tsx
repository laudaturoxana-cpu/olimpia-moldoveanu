"use client";

import Link from "next/link";

const GDPRCookies = () => {
  return (
    <main className="min-h-screen bg-crem pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-auriu hover:text-charcoal transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-montserrat text-sm">Înapoi la pagina principală</span>
        </Link>

        {/* Header */}
        <h1 className="font-cormorant text-4xl md:text-5xl text-charcoal mb-8">
          Politica de Cookie-uri și Conformitate GDPR
        </h1>
        <p className="font-montserrat text-gri-mediu mb-8">
          Ultima actualizare: [DATA_ACTUALIZARE]
        </p>

        <div className="prose prose-lg max-w-none font-montserrat text-charcoal">
          {/* PART 1: COOKIES */}
          <div className="bg-verde-sage/10 rounded-lg p-6 mb-10">
            <h2 className="font-cormorant text-3xl text-charcoal mb-2">
              Partea I: Politica de Cookie-uri
            </h2>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              1. Ce sunt cookie-urile?
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul dumneavoastră (computer, telefon mobil, tabletă) atunci când vizitați un site web. Cookie-urile sunt utilizate pe scară largă pentru a face site-urile să funcționeze eficient și pentru a furniza informații proprietarilor site-urilor.
            </p>
            <p className="text-gri-mediu leading-relaxed">
              Cookie-urile nu pot rula programe sau transmite viruși pe dispozitivul dumneavoastră. Ele sunt unice pentru dumneavoastră și pot fi citite doar de serverul web al domeniului care v-a emis cookie-ul.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              2. Tipuri de Cookie-uri Utilizate
            </h2>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">2.1. Cookie-uri strict necesare</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate. Ele sunt setate de obicei ca răspuns la acțiunile dumneavoastră, cum ar fi setarea preferințelor de confidențialitate, autentificarea sau completarea formularelor.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gri-deschis">
                <thead>
                  <tr className="bg-roz-pudrat/20">
                    <th className="border border-gri-deschis p-3 text-left font-medium">Nume Cookie</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Scop</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Durată</th>
                  </tr>
                </thead>
                <tbody className="text-gri-mediu text-sm">
                  <tr>
                    <td className="border border-gri-deschis p-3">cookie_consent</td>
                    <td className="border border-gri-deschis p-3">Stochează preferințele de cookie</td>
                    <td className="border border-gri-deschis p-3">1 an</td>
                  </tr>
                  <tr>
                    <td className="border border-gri-deschis p-3">session_id</td>
                    <td className="border border-gri-deschis p-3">Menține sesiunea utilizatorului</td>
                    <td className="border border-gri-deschis p-3">Sesiune</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">2.2. Cookie-uri de performanță și analiză</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic pentru a măsura și îmbunătăți performanța site-ului nostru. Ne ajută să știm care pagini sunt cele mai și cele mai puțin populare și să vedem cum se deplasează vizitatorii pe site.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gri-deschis">
                <thead>
                  <tr className="bg-roz-pudrat/20">
                    <th className="border border-gri-deschis p-3 text-left font-medium">Nume Cookie</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Furnizor</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Scop</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Durată</th>
                  </tr>
                </thead>
                <tbody className="text-gri-mediu text-sm">
                  <tr>
                    <td className="border border-gri-deschis p-3">_ga</td>
                    <td className="border border-gri-deschis p-3">Google Analytics</td>
                    <td className="border border-gri-deschis p-3">Distinge utilizatorii unici</td>
                    <td className="border border-gri-deschis p-3">2 ani</td>
                  </tr>
                  <tr>
                    <td className="border border-gri-deschis p-3">_ga_*</td>
                    <td className="border border-gri-deschis p-3">Google Analytics</td>
                    <td className="border border-gri-deschis p-3">Menține starea sesiunii</td>
                    <td className="border border-gri-deschis p-3">2 ani</td>
                  </tr>
                  <tr>
                    <td className="border border-gri-deschis p-3">_gid</td>
                    <td className="border border-gri-deschis p-3">Google Analytics</td>
                    <td className="border border-gri-deschis p-3">Distinge utilizatorii</td>
                    <td className="border border-gri-deschis p-3">24 ore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">2.3. Cookie-uri de marketing și publicitate</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Aceste cookie-uri pot fi setate prin site-ul nostru de către partenerii noștri de publicitate. Ele pot fi folosite de aceste companii pentru a construi un profil al intereselor dumneavoastră și pentru a vă arăta reclame relevante pe alte site-uri.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gri-deschis">
                <thead>
                  <tr className="bg-roz-pudrat/20">
                    <th className="border border-gri-deschis p-3 text-left font-medium">Nume Cookie</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Furnizor</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Scop</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Durată</th>
                  </tr>
                </thead>
                <tbody className="text-gri-mediu text-sm">
                  <tr>
                    <td className="border border-gri-deschis p-3">_fbp</td>
                    <td className="border border-gri-deschis p-3">Facebook</td>
                    <td className="border border-gri-deschis p-3">Urmărire pentru Facebook Ads</td>
                    <td className="border border-gri-deschis p-3">3 luni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              3. Cum să Gestionați Cookie-urile
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Puteți controla și/sau șterge cookie-urile după preferințe. Puteți șterge toate cookie-urile care sunt deja pe computerul dumneavoastră și puteți seta majoritatea browserelor să împiedice plasarea lor.
            </p>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">3.1. Prin bannerul de consimțământ</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              La prima vizită pe site-ul nostru, veți vedea un banner care vă solicită consimțământul pentru utilizarea cookie-urilor. Puteți alege să acceptați sau să refuzați diferite categorii de cookie-uri.
            </p>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">3.2. Prin setările browserului</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Majoritatea browserelor vă permit să:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Vedeți ce cookie-uri aveți și să le ștergeți individual</li>
              <li>Blocați cookie-uri de la terți</li>
              <li>Blocați cookie-uri de la anumite site-uri</li>
              <li>Blocați setarea tuturor cookie-urilor</li>
              <li>Ștergeți toate cookie-urile când închideți browserul</li>
            </ul>

            <div className="bg-white rounded-lg p-6 border border-gri-deschis">
              <p className="text-charcoal mb-3"><strong>Link-uri către instrucțiunile browserelor:</strong></p>
              <ul className="text-gri-mediu space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-auriu hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/ro/kb/activarea-si-dezactivarea-cookie-urilor" target="_blank" rel="noopener noreferrer" className="text-auriu hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-auriu hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/ro-ro/microsoft-edge/sterge%C8%9Bi-cookie-urile-%C3%AEn-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-auriu hover:underline">Microsoft Edge</a></li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              4. Cookie-uri Terță Parte
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Site-ul nostru poate conține link-uri către alte site-uri web sau servicii integrate (cum ar fi video-uri YouTube, butoane de partajare social media). Aceste site-uri terțe pot seta propriile cookie-uri. Nu avem control asupra acestor cookie-uri și vă recomandăm să consultați politicile de confidențialitate ale acestor site-uri.
            </p>
            <p className="text-gri-mediu leading-relaxed">
              Servicii terțe pe care le putem utiliza:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mt-4">
              <li>Google Analytics (analiză)</li>
              <li>Facebook Pixel (marketing)</li>
              <li>YouTube (conținut video integrat)</li>
              <li>Calendly/Google Calendar (programări)</li>
            </ul>
          </section>

          {/* PART 2: GDPR */}
          <div className="bg-auriu/10 rounded-lg p-6 mb-10 mt-16">
            <h2 className="font-cormorant text-3xl text-charcoal mb-2">
              Partea II: Informații GDPR
            </h2>
          </div>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              5. Ce este GDPR?
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Regulamentul General privind Protecția Datelor (GDPR - General Data Protection Regulation) este un regulament al Uniunii Europene privind protecția datelor și confidențialitatea, aplicabil din 25 mai 2018. GDPR oferă cetățenilor UE un control mai mare asupra datelor lor personale și stabilește reguli stricte pentru organizațiile care prelucrează aceste date.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              6. Drepturile Dumneavoastră conform GDPR
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              GDPR vă conferă următoarele drepturi în legătură cu datele dumneavoastră personale:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gri-deschis">
                <h3 className="font-cormorant text-xl text-charcoal mb-2">Dreptul de a fi informat</h3>
                <p className="text-gri-mediu text-sm">Aveți dreptul să știți cum sunt colectate și utilizate datele dumneavoastră. Această politică îndeplinește acest obiectiv.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gri-deschis">
                <h3 className="font-cormorant text-xl text-charcoal mb-2">Dreptul de acces</h3>
                <p className="text-gri-mediu text-sm">Puteți solicita o copie a tuturor datelor personale pe care le deținem despre dumneavoastră. Vom răspunde în termen de 30 de zile.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gri-deschis">
                <h3 className="font-cormorant text-xl text-charcoal mb-2">Dreptul la rectificare</h3>
                <p className="text-gri-mediu text-sm">Dacă datele pe care le deținem sunt incorecte sau incomplete, aveți dreptul să solicitați corectarea lor.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gri-deschis">
                <h3 className="font-cormorant text-xl text-charcoal mb-2">Dreptul la ștergere</h3>
                <p className="text-gri-mediu text-sm">Puteți solicita ștergerea datelor dumneavoastră în anumite circumstanțe (de ex., dacă datele nu mai sunt necesare sau v-ați retras consimțământul).</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gri-deschis">
                <h3 className="font-cormorant text-xl text-charcoal mb-2">Dreptul la restricționarea prelucrării</h3>
                <p className="text-gri-mediu text-sm">Puteți solicita limitarea modului în care utilizăm datele dumneavoastră în anumite situații.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gri-deschis">
                <h3 className="font-cormorant text-xl text-charcoal mb-2">Dreptul la portabilitatea datelor</h3>
                <p className="text-gri-mediu text-sm">Puteți solicita să primiți datele într-un format structurat, utilizat în mod curent și care poate fi citit automat.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gri-deschis">
                <h3 className="font-cormorant text-xl text-charcoal mb-2">Dreptul la opoziție</h3>
                <p className="text-gri-mediu text-sm">Puteți să vă opuneți prelucrării datelor în scopuri de marketing direct sau când prelucrarea se bazează pe interese legitime.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gri-deschis">
                <h3 className="font-cormorant text-xl text-charcoal mb-2">Dreptul de a nu face obiectul unei decizii automate</h3>
                <p className="text-gri-mediu text-sm">Aveți dreptul de a nu fi supus unei decizii bazate exclusiv pe prelucrare automată, inclusiv profilare, care produce efecte juridice.</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              7. Cum să Vă Exercitați Drepturile
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Pentru a vă exercita oricare dintre drepturile menționate mai sus, vă rugăm să ne contactați:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gri-deschis mb-4">
              <p className="text-charcoal mb-2"><strong>Email:</strong> [EMAIL_CONTACT]</p>
              <p className="text-charcoal mb-2"><strong>Adresă:</strong> [ADRESA_COMPLETA]</p>
              <p className="text-charcoal"><strong>Telefon:</strong> [TELEFON]</p>
            </div>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Vom răspunde la solicitarea dumneavoastră în termen de <strong>30 de zile calendaristice</strong>. În cazuri complexe, acest termen poate fi prelungit cu încă 60 de zile, cu notificare prealabilă.
            </p>
            <p className="text-gri-mediu leading-relaxed">
              Este posibil să vă solicităm informații suplimentare pentru a vă verifica identitatea înainte de a procesa cererea.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              8. Temeiul Legal pentru Prelucrare
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Conform GDPR, putem prelucra datele dumneavoastră personale doar dacă avem un temei legal valid. Temeiurile pe care ne bazăm sunt:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-3">
              <li><strong>Consimțământul (Art. 6(1)(a)):</strong> Ați fost de acord cu prelucrarea pentru scopuri specifice (ex: newsletter, cookie-uri de marketing)</li>
              <li><strong>Executarea contractului (Art. 6(1)(b)):</strong> Prelucrarea este necesară pentru furnizarea serviciilor solicitate</li>
              <li><strong>Obligație legală (Art. 6(1)(c)):</strong> Trebuie să respectăm obligații legale (ex: păstrarea facturilor)</li>
              <li><strong>Interese legitime (Art. 6(1)(f)):</strong> Avem un interes legitim de afaceri care nu prevalează asupra drepturilor dumneavoastră</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              9. Măsuri de Securitate
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Implementăm măsuri tehnice și organizatorice adecvate pentru a asigura un nivel de securitate corespunzător riscului, incluzând:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li>Criptare SSL/TLS pentru toate comunicațiile</li>
              <li>Acces restricționat la date pe bază de necesitate</li>
              <li>Parole puternice și autentificare în doi pași</li>
              <li>Monitorizare continuă pentru detectarea breșelor</li>
              <li>Proceduri de backup și recuperare</li>
              <li>Instruirea personalului în domeniul protecției datelor</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              10. Notificarea Breșelor de Securitate
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              În cazul unei breșe de securitate a datelor care prezintă un risc pentru drepturile și libertățile dumneavoastră, vom:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li>Notifica Autoritatea Națională de Supraveghere (ANSPDCP) în maximum 72 de ore</li>
              <li>Vă informa direct dacă breșa prezintă un risc ridicat pentru dumneavoastră</li>
              <li>Documenta breșa și acțiunile corective luate</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              11. Transferul Internațional de Date
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              În cazul în care datele dumneavoastră sunt transferate în afara Spațiului Economic European (SEE), ne asigurăm că:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li>Țara destinatară beneficiază de o decizie de adecvare din partea Comisiei Europene, sau</li>
              <li>Sunt implementate garanții adecvate (clauze contractuale standard), sau</li>
              <li>Se aplică una dintre derogările prevăzute de GDPR</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              12. Plângeri
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Dacă considerați că am încălcat drepturile dumneavoastră privind protecția datelor, aveți dreptul să depuneți o plângere la:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gri-deschis">
              <p className="text-charcoal font-medium mb-2">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</p>
              <p className="text-gri-mediu mb-1">B-dul G-ral. Gheorghe Magheru 28-30</p>
              <p className="text-gri-mediu mb-1">Sector 1, București, cod poștal 010336</p>
              <p className="text-gri-mediu mb-1">Telefon: +40.318.059.211 / +40.318.059.212</p>
              <p className="text-gri-mediu mb-1">Email: anspdcp@dataprotection.ro</p>
              <p className="text-gri-mediu">Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-auriu hover:underline">www.dataprotection.ro</a></p>
            </div>
            <p className="text-gri-mediu leading-relaxed mt-4">
              Vă încurajăm totuși să ne contactați mai întâi pentru a încerca să rezolvăm orice problemă direct.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              13. Modificări ale Acestei Politici
            </h2>
            <p className="text-gri-mediu leading-relaxed">
              Această politică poate fi actualizată periodic pentru a reflecta modificări ale practicilor noastre sau ale legislației aplicabile. Data ultimei actualizări este afișată în partea de sus a acestei pagini. Vă recomandăm să verificați periodic această pagină pentru a fi la curent cu orice modificări.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              14. Contact
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Pentru orice întrebări legate de cookie-uri, GDPR sau protecția datelor dumneavoastră:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gri-deschis">
              <p className="text-charcoal mb-2"><strong>[NUME_FIRMA]</strong></p>
              <p className="text-charcoal mb-2"><strong>Email:</strong> [EMAIL_CONTACT]</p>
              <p className="text-charcoal mb-2"><strong>Telefon:</strong> [TELEFON]</p>
              <p className="text-charcoal"><strong>Adresă:</strong> [ADRESA_COMPLETA]</p>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gri-deschis">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/confidentialitate" className="text-auriu hover:underline">
              Politica de Confidențialitate
            </Link>
            <span className="text-gri-deschis">|</span>
            <Link href="/termeni" className="text-auriu hover:underline">
              Termeni și Condiții
            </Link>
            <span className="text-gri-deschis">|</span>
            <Link href="/" className="text-auriu hover:underline">
              Pagina principală
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GDPRCookies;
