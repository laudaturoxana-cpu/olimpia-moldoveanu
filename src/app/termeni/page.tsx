"use client";

import Link from "next/link";

const TermsAndConditions = () => {
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
          Termeni și Condiții
        </h1>
        <p className="font-montserrat text-gri-mediu mb-8">
          Ultima actualizare: [DATA_ACTUALIZARE]
        </p>

        <div className="prose prose-lg max-w-none font-montserrat text-charcoal">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              1. Informații Generale
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Prezentul document stabilește termenii și condițiile generale de utilizare a site-ului web [URL_SITE] (denumit în continuare &quot;Site-ul&quot;) și a serviciilor oferite de [NUME_FIRMA].
            </p>
            <div className="bg-white rounded-lg p-6 border border-gri-deschis mb-4">
              <p className="text-charcoal mb-2"><strong>Denumirea operatorului:</strong> [NUME_FIRMA]</p>
              <p className="text-charcoal mb-2"><strong>Sediul social:</strong> [ADRESA_COMPLETA]</p>
              <p className="text-charcoal mb-2"><strong>CUI:</strong> [CUI]</p>
              <p className="text-charcoal mb-2"><strong>Nr. Registrul Comerțului:</strong> [NR_REG_COM]</p>
              <p className="text-charcoal mb-2"><strong>Email:</strong> [EMAIL_CONTACT]</p>
              <p className="text-charcoal"><strong>Telefon:</strong> [TELEFON]</p>
            </div>
            <p className="text-gri-mediu leading-relaxed">
              Prin accesarea și utilizarea Site-ului, confirmați că ați citit, înțeles și acceptat acești Termeni și Condiții în integralitatea lor. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați Site-ul sau serviciile noastre.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              2. Definiții
            </h2>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li><strong>&quot;Prestator&quot;</strong> - [NUME_FIRMA], persoană juridică română</li>
              <li><strong>&quot;Client&quot; / &quot;Utilizator&quot;</strong> - persoana fizică sau juridică care accesează Site-ul sau achiziționează servicii</li>
              <li><strong>&quot;Servicii&quot;</strong> - serviciile de coaching transformator, consultanță, programe de grup și materiale digitale oferite de Prestator</li>
              <li><strong>&quot;Conținut&quot;</strong> - toate materialele, textele, imaginile, video-urile și resursele disponibile pe Site</li>
              <li><strong>&quot;Contract&quot;</strong> - acordul dintre Prestator și Client pentru furnizarea Serviciilor</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              3. Descrierea Serviciilor
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              [NUME_FIRMA] oferă servicii de coaching transformator prin aplicarea Legilor Universale, incluzând, dar fără a se limita la:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Sesiuni individuale de coaching (online sau față-în-față)</li>
              <li>Programe de grup pentru transformare personală</li>
              <li>Materiale digitale educaționale (ghiduri, meditații, exerciții)</li>
              <li>Suport prin grupuri WhatsApp sau alte platforme</li>
              <li>Workshop-uri și evenimente</li>
            </ul>
            <p className="text-gri-mediu leading-relaxed">
              <strong>Important:</strong> Serviciile de coaching nu constituie terapie psihologică, psihoterapie sau tratament medical. Coaching-ul este un proces de dezvoltare personală care vizează clarificarea obiectivelor, depășirea blocajelor și realizarea potențialului personal. În cazul în care aveți probleme de sănătate mintală care necesită tratament specializat, vă recomandăm să consultați un profesionist în sănătate mintală.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              4. Încheierea Contractului
            </h2>
            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">4.1. Procesul de înscriere</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Contractul se consideră încheiat în momentul în care Clientul:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Completează formularul de înscriere și acceptă prezentele Termeni și Condiții</li>
              <li>Primește confirmarea înscrierii din partea Prestatorului</li>
              <li>Efectuează plata (integrală sau primul avans, după caz)</li>
            </ul>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">4.2. Confirmarea</h3>
            <p className="text-gri-mediu leading-relaxed">
              După finalizarea înscrierii, Clientul va primi pe email confirmarea înregistrării, detaliile serviciului achiziționat și instrucțiunile necesare pentru începerea programului.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              5. Prețuri și Modalități de Plată
            </h2>
            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">5.1. Prețuri</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Prețurile serviciilor sunt cele afișate pe Site la momentul achiziției. Toate prețurile sunt exprimate în RON (Lei românești) și includ TVA, dacă este cazul, conform legislației în vigoare.
            </p>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">5.2. Modalități de plată</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Plata se poate efectua prin:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Transfer bancar în contul [BANCA] - IBAN: [IBAN]</li>
              <li>Plată online cu cardul (prin procesator de plăți securizat)</li>
              <li>Plată în rate (conform opțiunilor disponibile pentru fiecare program)</li>
            </ul>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">5.3. Facturare</h3>
            <p className="text-gri-mediu leading-relaxed">
              Factura fiscală va fi emisă în conformitate cu legislația română și transmisă electronic pe adresa de email indicată de Client în maximum 5 zile lucrătoare de la încasarea plății.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              6. Dreptul de Retragere și Politica de Rambursare
            </h2>
            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">6.1. Dreptul de retragere (conform OUG 34/2014)</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Conform legislației privind protecția consumatorilor la contractele încheiate la distanță, aveți dreptul de a vă retrage din contract în termen de 14 zile calendaristice de la data încheierii contractului, fără a fi necesar să indicați un motiv.
            </p>
            <p className="text-gri-mediu leading-relaxed mb-4">
              <strong>Excepție:</strong> Dreptul de retragere nu se aplică în cazul în care:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Serviciul a fost prestat integral și executarea a început cu acordul prealabil expres al Clientului</li>
              <li>Conținutul digital (ghiduri, materiale) a fost descărcat/accesat</li>
              <li>Clientul a participat la prima sesiune de coaching sau la prima întâlnire de grup</li>
            </ul>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">6.2. Exercitarea dreptului de retragere</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Pentru a vă exercita dreptul de retragere, trebuie să ne informați printr-o declarație clară (email sau scrisoare) la adresa [EMAIL_CONTACT].
            </p>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">6.3. Rambursarea</h3>
            <p className="text-gri-mediu leading-relaxed mb-4">
              În cazul retragerii valide, vom rambursa toate plățile primite în termen de maximum 14 zile de la data la care am fost informați despre decizia dumneavoastră de retragere, utilizând aceeași metodă de plată folosită pentru tranzacția inițială.
            </p>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">6.4. Anulări și reprogramări</h3>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li>Sesiunile individuale pot fi reprogramate cu minimum 24 de ore înainte</li>
              <li>Sesiunile anulate cu mai puțin de 24 de ore înainte se consideră consumate</li>
              <li>Pentru programe de grup, condițiile specifice sunt comunicate la înscriere</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              7. Obligațiile Părților
            </h2>
            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">7.1. Obligațiile Prestatorului</h3>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Să furnizeze serviciile conform descrierii și la standardele profesionale promise</li>
              <li>Să respecte confidențialitatea informațiilor primite de la Client</li>
              <li>Să ofere suportul necesar conform programului ales</li>
              <li>Să răspundă la solicitările Clientului în termen rezonabil</li>
              <li>Să informeze Clientul despre orice modificări ale serviciilor</li>
            </ul>

            <h3 className="font-cormorant text-xl text-charcoal mb-3 mt-6">7.2. Obligațiile Clientului</h3>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li>Să furnizeze informații corecte și complete la înscriere</li>
              <li>Să efectueze plățile la termenele stabilite</li>
              <li>Să participe activ la sesiuni și să îndeplinească sarcinile asumate</li>
              <li>Să respecte regulile grupului (în cazul programelor de grup)</li>
              <li>Să păstreze confidențialitatea informațiilor despre alți participanți</li>
              <li>Să nu distribuie sau să revândă materialele primite</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              8. Proprietate Intelectuală
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Toate drepturile de proprietate intelectuală asupra conținutului Site-ului și materialelor furnizate (texte, grafice, logo-uri, imagini, video-uri, exerciții, meditații, metodologii) aparțin exclusiv [NUME_FIRMA] sau licențiatorilor săi.
            </p>
            <p className="text-gri-mediu leading-relaxed mb-4">
              <strong>Este interzis:</strong>
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Copierea, reproducerea sau distribuirea materialelor fără acordul scris</li>
              <li>Utilizarea comercială a conținutului</li>
              <li>Modificarea sau adaptarea materialelor</li>
              <li>Partajarea accesului la conținutul digital cu terțe persoane</li>
            </ul>
            <p className="text-gri-mediu leading-relaxed">
              Încălcarea drepturilor de proprietate intelectuală poate atrage răspunderea civilă și penală conform legislației române.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              9. Confidențialitate
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Toate informațiile împărtășite în cadrul sesiunilor de coaching sunt strict confidențiale. Prestatorul se obligă să păstreze confidențialitatea asupra:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Conținutului sesiunilor individuale</li>
              <li>Experiențelor și informațiilor personale ale Clientului</li>
              <li>Oricăror documente sau materiale furnizate de Client</li>
            </ul>
            <p className="text-gri-mediu leading-relaxed">
              <strong>Excepții:</strong> Confidențialitatea poate fi încălcată doar în situații prevăzute de lege, precum riscul iminent de vătămare a Clientului sau a altor persoane, sau la solicitarea autorităților competente.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              10. Limitarea Răspunderii
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              [NUME_FIRMA] își asumă responsabilitatea pentru furnizarea serviciilor conform descrierii, însă:
            </p>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2 mb-4">
              <li>Nu garantează rezultate specifice, întrucât succesul depinde în mare măsură de implicarea și acțiunile Clientului</li>
              <li>Nu își asumă responsabilitatea pentru deciziile luate de Client pe baza sesiunilor de coaching</li>
              <li>Nu oferă sfaturi medicale, juridice sau financiare</li>
              <li>Nu răspunde pentru probleme tehnice cauzate de furnizori terți (internet, platforme video, etc.)</li>
            </ul>
            <p className="text-gri-mediu leading-relaxed">
              Răspunderea Prestatorului este limitată la valoarea serviciilor achitate de Client.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              11. Forța Majoră
            </h2>
            <p className="text-gri-mediu leading-relaxed">
              Niciuna dintre părți nu va fi răspunzătoare pentru neîndeplinirea obligațiilor contractuale dacă aceasta se datorează unor circumstanțe de forță majoră (evenimente imprevizibile și inevitabile, în afara controlului părților). Partea afectată va notifica cealaltă parte în cel mai scurt timp posibil și va depune eforturi rezonabile pentru a minimiza efectele.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              12. Protecția Datelor Personale
            </h2>
            <p className="text-gri-mediu leading-relaxed">
              Prelucrarea datelor cu caracter personal se realizează în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română. Pentru detalii complete, consultați{" "}
              <Link href="/confidentialitate" className="text-auriu hover:underline">
                Politica de Confidențialitate
              </Link>.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              13. Modificarea Termenilor
            </h2>
            <p className="text-gri-mediu leading-relaxed">
              [NUME_FIRMA] își rezervă dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările vor fi publicate pe Site și vor intra în vigoare la data publicării. Continuarea utilizării Site-ului sau serviciilor după publicarea modificărilor constituie acceptarea noilor termeni.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              14. Soluționarea Litigiilor
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              În cazul apariției unor dispute, părțile vor încerca mai întâi soluționarea amiabilă. În cazul în care nu se ajunge la o înțelegere în termen de 30 de zile, litigiul va fi soluționat de instanțele judecătorești competente din România.
            </p>
            <p className="text-gri-mediu leading-relaxed">
              <strong>Soluționarea alternativă a litigiilor (SAL):</strong> Conform OG 38/2015, consumatorii pot recurge la proceduri de soluționare alternativă a litigiilor. Platforma europeană de soluționare online a litigiilor (SOL) este disponibilă la: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-auriu hover:underline">https://ec.europa.eu/consumers/odr</a>
            </p>
          </section>

          {/* Section 15 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              15. Legislație Aplicabilă
            </h2>
            <p className="text-gri-mediu leading-relaxed">
              Prezentul contract este guvernat de legislația română. Orice litigiu va fi soluționat de instanțele competente din România.
            </p>
          </section>

          {/* Section 16 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              16. Dispoziții Finale
            </h2>
            <ul className="list-disc pl-6 text-gri-mediu space-y-2">
              <li>Nulitatea unei clauze nu afectează validitatea celorlalte clauze</li>
              <li>Neexercitarea unui drept nu constituie renunțare la acesta</li>
              <li>Prezentele Termeni și Condiții constituie acordul integral între părți</li>
              <li>Orice comunicare oficială se va face în scris (email sau poștă)</li>
            </ul>
          </section>

          {/* Section 17 */}
          <section className="mb-10">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              17. Contact
            </h2>
            <p className="text-gri-mediu leading-relaxed mb-4">
              Pentru orice întrebări referitoare la acești Termeni și Condiții:
            </p>
            <div className="bg-white rounded-lg p-6 border border-gri-deschis">
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

export default TermsAndConditions;
