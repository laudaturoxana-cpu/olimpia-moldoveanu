"use client";

import Link from "next/link";

const PrivacyPolicy = () => {
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
          Politica de Confidențialitate
        </h1>
        <p className="font-montserrat text-gri-mediu mb-8">
          Ultima actualizare: [DATA_ACTUALIZARE]
        </p>

        <div className="prose prose-lg max-w-none font-montserrat text-charcoal">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              1. Introducere
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              [NUME_FIRMA], cu sediul în [ADRESA_COMPLETA], înregistrată la Registrul Comerțului sub nr. [NR_REG_COM], CUI [CUI], (denumită în continuare &quot;Operatorul&quot;, &quot;noi&quot; sau &quot;nostru&quot;), se angajează să protejeze confidențialitatea și securitatea datelor dumneavoastră cu caracter personal.
            </p>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Prezenta Politică de Confidențialitate descrie modul în care colectăm, utilizăm, stocăm și protejăm datele dumneavoastră personale atunci când vizitați site-ul nostru web [URL_SITE] sau când utilizați serviciile noastre de coaching transformator.
            </p>
            <p className="text-gri-mediu leading-relaxed">
              Vă rugăm să citiți cu atenție această politică pentru a înțelege practicile noastre privind datele dumneavoastră personale.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              2. Operatorul de Date
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Operatorul de date cu caracter personal este:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gri-deschis mb-4">
              <p className="text-charcoal mb-2"><strong>Denumire:</strong> [NUME_FIRMA]</p>
              <p className="text-charcoal mb-2"><strong>Sediu social:</strong> [ADRESA_COMPLETA]</p>
              <p className="text-charcoal mb-2"><strong>CUI:</strong> [CUI]</p>
              <p className="text-charcoal mb-2"><strong>Nr. Reg. Com.:</strong> [NR_REG_COM]</p>
              <p className="text-charcoal mb-2"><strong>Email:</strong> [EMAIL_CONTACT]</p>
              <p className="text-charcoal"><strong>Telefon:</strong> [TELEFON]</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              3. Categorii de Date Personale Colectate
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              În funcție de interacțiunea dumneavoastră cu noi, putem colecta următoarele categorii de date personale:
            </p>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">3.1. Date de identificare</h3>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon</li>
              <li>Adresă de domiciliu/reședință (dacă este necesar)</li>
            </ul>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">3.2. Date de comunicare</h3>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Conținutul mesajelor transmise prin formularul de contact</li>
              <li>Corespondența prin email</li>
              <li>Înregistrări ale comunicărilor (cu acordul dumneavoastră explicit)</li>
            </ul>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">3.3. Date tehnice</h3>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Adresa IP</li>
              <li>Tipul și versiunea browserului</li>
              <li>Sistemul de operare</li>
              <li>Paginile vizitate și timpul petrecut pe site</li>
              <li>Date colectate prin cookie-uri (vezi secțiunea dedicată)</li>
            </ul>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">3.4. Date sensibile (categorii speciale)</h3>
            <p className="text-gri-mediu leading-relaxed">
              În cadrul sesiunilor de coaching, este posibil să ne împărtășiți informații despre starea dumneavoastră emoțională, experiențe personale sau alte date care pot fi considerate sensibile. Aceste informații sunt tratate cu cea mai mare confidențialitate și sunt prelucrate exclusiv în scopul furnizării serviciilor de coaching, cu consimțământul dumneavoastră explicit.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              4. Scopurile și Temeiurile Legale ale Prelucrării
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Prelucrăm datele dumneavoastră personale în următoarele scopuri și pe baza următoarelor temeiuri legale:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gri-deschis mb-4">
                <thead>
                  <tr className="bg-roz-pudrat/20">
                    <th className="border border-gri-deschis p-3 text-left font-medium">Scop</th>
                    <th className="border border-gri-deschis p-3 text-left font-medium">Temei Legal</th>
                  </tr>
                </thead>
                <tbody className="text-gri-mediu">
                  <tr>
                    <td className="border border-gri-deschis p-3">Furnizarea serviciilor de coaching</td>
                    <td className="border border-gri-deschis p-3">Executarea contractului (Art. 6(1)(b) GDPR)</td>
                  </tr>
                  <tr>
                    <td className="border border-gri-deschis p-3">Răspuns la solicitări și întrebări</td>
                    <td className="border border-gri-deschis p-3">Interesul legitim (Art. 6(1)(f) GDPR)</td>
                  </tr>
                  <tr>
                    <td className="border border-gri-deschis p-3">Trimiterea newsletter-ului și materialelor informative</td>
                    <td className="border border-gri-deschis p-3">Consimțământ (Art. 6(1)(a) GDPR)</td>
                  </tr>
                  <tr>
                    <td className="border border-gri-deschis p-3">Îmbunătățirea site-ului și serviciilor</td>
                    <td className="border border-gri-deschis p-3">Interesul legitim (Art. 6(1)(f) GDPR)</td>
                  </tr>
                  <tr>
                    <td className="border border-gri-deschis p-3">Conformitatea cu obligațiile legale</td>
                    <td className="border border-gri-deschis p-3">Obligație legală (Art. 6(1)(c) GDPR)</td>
                  </tr>
                  <tr>
                    <td className="border border-gri-deschis p-3">Facturare și contabilitate</td>
                    <td className="border border-gri-deschis p-3">Obligație legală și executarea contractului</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              5. Perioada de Stocare a Datelor
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li><strong>Date contractuale:</strong> pe durata relației contractuale și încă 3 ani după încetarea acesteia (termen de prescripție generală)</li>
              <li><strong>Date fiscale și contabile:</strong> 10 ani conform legislației fiscale din România</li>
              <li><strong>Date de marketing (newsletter):</strong> până la retragerea consimțământului</li>
              <li><strong>Date tehnice (cookie-uri):</strong> conform duratei specificate în Politica de Cookie-uri</li>
              <li><strong>Corespondență:</strong> 3 ani de la ultima comunicare</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              6. Dezvăluirea Datelor către Terți
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Nu vindem, nu închiriem și nu comercializăm datele dumneavoastră personale. Putem dezvălui datele dumneavoastră următoarelor categorii de destinatari, în măsura necesară:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li><strong>Furnizori de servicii:</strong> hosting, procesare plăți, email marketing (toți operând sub acorduri de prelucrare a datelor conforme cu GDPR)</li>
              <li><strong>Autorități publice:</strong> când suntem obligați legal</li>
              <li><strong>Consilieri profesioniști:</strong> avocați, contabili (sub obligații de confidențialitate)</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              7. Transferul Datelor în Afara UE/SEE
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              În principiu, datele dumneavoastră sunt stocate și prelucrate în Uniunea Europeană. În cazul în care este necesar un transfer către țări terțe (de exemplu, pentru utilizarea unor servicii de cloud sau email), ne asigurăm că există garanții adecvate, precum:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li>Decizii de adecvare ale Comisiei Europene</li>
              <li>Clauze contractuale standard aprobate de Comisia Europeană</li>
              <li>Alte mecanisme de transfer recunoscute legal</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              8. Drepturile Dumneavoastră
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Conform Regulamentului General privind Protecția Datelor (GDPR), aveți următoarele drepturi:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-3">
              <li><strong>Dreptul de acces</strong> - puteți solicita o copie a datelor personale pe care le deținem despre dumneavoastră</li>
              <li><strong>Dreptul la rectificare</strong> - puteți solicita corectarea datelor inexacte sau completarea datelor incomplete</li>
              <li><strong>Dreptul la ștergere (&quot;dreptul de a fi uitat&quot;)</strong> - puteți solicita ștergerea datelor în anumite circumstanțe</li>
              <li><strong>Dreptul la restricționarea prelucrării</strong> - puteți solicita limitarea prelucrării datelor în anumite situații</li>
              <li><strong>Dreptul la portabilitatea datelor</strong> - puteți solicita transferul datelor către alt operator</li>
              <li><strong>Dreptul la opoziție</strong> - puteți să vă opuneți prelucrării în anumite circumstanțe</li>
              <li><strong>Dreptul de a retrage consimțământul</strong> - în orice moment, fără a afecta legalitatea prelucrării anterioare</li>
              <li><strong>Dreptul de a depune plângere</strong> - la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</li>
            </ul>
            <p className="text-gri-mediu leading-relaxed mt-4">
              Pentru exercitarea acestor drepturi, ne puteți contacta la: [EMAIL_CONTACT]
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              9. Securitatea Datelor
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva pierderii, utilizării neautorizate, accesului neautorizat, modificării sau divulgării, inclusiv:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li>Criptare SSL/TLS pentru transmisia datelor</li>
              <li>Acces restricționat la date pe bază de necesitate</li>
              <li>Parolări securizate și autentificare în doi pași</li>
              <li>Backup-uri regulate ale datelor</li>
              <li>Instruirea personalului privind protecția datelor</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              10. Cookie-uri
            </h2>
            <p className="text-gri-mediu leading-relaxed">
              Site-ul nostru utilizează cookie-uri. Pentru informații detaliate despre tipurile de cookie-uri utilizate, scopurile acestora și modul în care le puteți gestiona, vă rugăm să consultați{" "}
              <Link href="/gdpr" className="text-auriu hover:underline">
                Politica noastră de Cookie-uri
              </Link>.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              11. Modificări ale Politicii de Confidențialitate
            </h2>
            <p className="text-gri-mediu leading-relaxed">
              Ne rezervăm dreptul de a actualiza periodic această Politică de Confidențialitate. Orice modificări vor fi publicate pe această pagină, cu indicarea datei ultimei actualizări. Vă recomandăm să verificați periodic această pagină pentru a fi la curent cu eventualele modificări.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              12. Contact
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Pentru orice întrebări sau solicitări legate de această Politică de Confidențialitate sau de prelucrarea datelor dumneavoastră personale, ne puteți contacta la:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gri-deschis">
              <p className="text-charcoal mb-2"><strong>Email:</strong> [EMAIL_CONTACT]</p>
              <p className="text-charcoal mb-2"><strong>Telefon:</strong> [TELEFON]</p>
              <p className="text-charcoal"><strong>Adresă:</strong> [ADRESA_COMPLETA]</p>
            </div>
          </section>

          {/* ANSPDCP Contact */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              13. Autoritatea de Supraveghere
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Dacă considerați că prelucrarea datelor dumneavoastră personale încalcă legislația privind protecția datelor, aveți dreptul să depuneți o plângere la:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gri-deschis">
              <p className="text-charcoal mb-2"><strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong></p>
              <p className="text-gri-mediu mb-2">B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, cod poștal 010336</p>
              <p className="text-gri-mediu mb-2">Telefon: +40.318.059.211 / +40.318.059.212</p>
              <p className="text-gri-mediu">Email: anspdcp@dataprotection.ro</p>
              <p className="text-gri-mediu">Website: www.dataprotection.ro</p>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gri-deschis">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/termeni" className="text-auriu hover:underline">
              Termeni și Condiții
            </Link>
            <span className="text-gri-deschis">|</span>
            <Link href="/gdpr" className="text-auriu hover:underline">
              Politica de Cookie-uri și GDPR
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

export default PrivacyPolicy;
