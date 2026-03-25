export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML
  date: string; // "2026-03-20"
  category: string;
  readTime: string;
  featured?: boolean;
}

export const articles: BlogArticle[] = [
  {
    slug: "de-ce-nu-mai-ai-liniste-in-cap",
    title: "De Ce Nu Mai Ai Liniște în Cap (Și Ce Să Faci Cu Asta)",
    excerpt:
      "Descoperă de ce mintea ta nu se mai oprește să gândească și cum să îți recapeți liniștea interioară — pas cu pas, fără promisiuni magice.",
    date: "2026-03-19",
    category: "Anxietate & Emoții",
    readTime: "15 min citire",
    featured: true,
    content: `
      <p>Ești în pat, e ora 23:00, și mintea ta e la capacitate maximă. Replămuiești conversații vechi, faci planuri pentru mâine, îți faci griji pentru peste un an, te judeci pentru ce ai spus azi dimineață. Nu există o oprire.</p>

      <p>Sau ești în mijlocul unei sarcini banale — speli vasele, conduci mașina — și dintr-o dată realizezi că nu ai fost <em>acolo</em> deloc. Ai fost prinsă în vârtejul propriei tale minți.</p>

      <p>Dacă te regăsești în asta, nu ești singură. Și nu este o problemă de voință sau de disciplină. Este ceva mai profund.</p>

      <h2>De ce mintea nu se mai oprește</h2>

      <p>Creierul uman este construit să supraviețuiască, nu să fie fericit. Sistemul tău nervos scanează constant mediul pentru pericole — și în lipsa unor pericole fizice reale, îl creează pe plan mental. Îngrijorările despre viitor, ruminarea trecutului, scenariile catastrofice — toate sunt <strong>mecanisme de supraviețuire transformate în obiceiuri mentale</strong>.</p>

      <p>Cu cât mintea a practicat mai mult această „vigilență", cu atât circuitele neuronale devin mai adânci, mai automate. Nu mai ai nevoie de un declanșator real — mintea rulează pe pilot automat.</p>

      <h2>Cele 4 tipare cele mai comune</h2>

      <h3>1. Mintea care planifică compulsiv</h3>
      <p>Dacă controlezi totul mental — faci liste, refaci liste, anticipezi fiecare scenariu posibil — creierul tău crede că siguranța vine din predictibilitate. Rădăcina: o credință profundă că <em>dacă nu controlezi, lucrurile merg rău</em>.</p>

      <h3>2. Mintea care ruminează trecutul</h3>
      <p>Replămuiești conversații, îți dorești să fi spus altceva, te judeci pentru decizii vechi. Aceasta este o formă de autoagresiune mascată în „analiză". Creierul încearcă să „rezolve" ceva ce nu mai poate fi schimbat.</p>

      <h3>3. Mintea care catastrofizează</h3>
      <p>Pornești de la un simptom fizic și ajungi la un diagnostic grav. Pornești de la o întârziere a partenerului și ajungi la scenariul cel mai negru. Aceasta este o activare a sistemului de alertă — care a rămas blocat în poziția „pornit".</p>

      <h3>4. Mintea care compară</h3>
      <p>Ești mereu în raport cu alții — ce au ei, ce faci tu, unde ar trebui să fii. Social media a amplificat acest tipar la extrem. Rezultatul: o stare cronică de insuficiență.</p>

      <h2>Ce nu funcționează (deși pare logic)</h2>

      <p><strong>Să îți spui să te oprești.</strong> „Nu te mai gândi la asta" nu funcționează. Există un experiment clasic în psihologie: dacă ți se spune să nu te gândești la un urs alb, primul lucru la care te gândești este un urs alb. Suprimarea gândurilor le amplifică.</p>

      <p><strong>Distragerea constantă.</strong> Telefonul, serialele, mâncatul — toate sunt valide pe termen scurt. Problema este că mintea revine exact de unde a plecat, adesea cu mai multă intensitate. Distragerea nu procesează, doar amână.</p>

      <p><strong>Să cauți o soluție logică.</strong> Anxietatea nu este o problemă de logică. Nu poți „gândi" calea spre liniște. Dacă ar fi funcționat, ai fi rezolvat-o deja.</p>

      <h2>Ce face cu adevărat diferența</h2>

      <p>Liniștea interioară nu vine din a opri mintea — vine din a schimba relația cu ea.</p>

      <p>În loc să te lupți cu gândurile, să le suprimi sau să fugi de ele, există o a treia cale: <strong>să le observi fără să te identifici cu ele.</strong></p>

      <p>Când apare un gând anxios, în loc de „sunt anxioasă" (identificare totală) sau „trebuie să opresc asta" (luptă), poți practica: <em>„Observ că mintea mea generează un scenariu de îngrijorare."</em></p>

      <p>Această distanțare minusculă creează un spațiu. Și în acel spațiu poți face o alegere.</p>

      <h2>3 practici concrete pentru această săptămână</h2>

      <p><strong>1. Notează gândul, nu te lupta cu el.</strong> Când mintea pornește un șir de îngrijorări, scrie pe o hârtie: „Mintea mea crede că..." Simplul act de a extrage gândul din cap și de a-l pune pe hârtie îi reduce puterea.</p>

      <p><strong>2. Ancorează-te în prezent prin corp.</strong> Mintea ruminează trecutul sau catastrofizează viitorul — niciunul dintre acestea nu există în corp, în momentul de față. Cinci respirații profunde, cu atenție pe senzația fizică, aduc sistemul nervos înapoi în prezent.</p>

      <p><strong>3. Pune o întrebare diferită.</strong> În loc de „de ce se întâmplă asta?" (care deschide spirale de analiză), încearcă: „Ce am nevoie acum?" Această întrebare întoarce atenția spre tine, nu spre problema externă.</p>

      <h2>Rădăcina mai profundă</h2>

      <p>Dacă practicile de mai sus ajută temporar dar mintea revine mereu la același tipar, există o cauză mai profundă de explorat.</p>

      <p>În munca mea de coaching, am observat că zgomotul mental cronic este aproape întotdeauna conectat cu una sau mai multe dintre acestea:</p>

      <ul>
        <li>O credință de bază de tipul „nu sunt suficientă" sau „lumea nu este sigură"</li>
        <li>Emoții neprocessate — durere, furie, doliu — care nu au avut loc să fie integrate</li>
        <li>O deconectare de la propriile nevoi și valori reale</li>
        <li>Un sistem nervos care a funcționat în alertă atât de mult timp încât alertă a devenit normalul</li>
      </ul>

      <p>Liniștea reală — nu cea cumpărată cu distrageri sau forțată prin voință — vine din a lucra la acest nivel. Din a înțelege ce transmite mintea ta agitatã, din a dizolva credințele care alimentează spiralele, din a-ți recalibra sistemul nervos.</p>

      <p>Acesta este exact tipul de muncă pe care o facem împreună în sesiunile de coaching. Dacă simți că ai citit destule articole și vrei un proces ghidat, personalizat pe situația ta, <a href="/#contact">programează o sesiune de explorare</a> cu mine.</p>
    `,
  },
  {
    slug: "de-ce-anxietatea-nu-dispare-singura",
    title: "De ce anxietatea nu dispare singură — și ce poți face în schimb",
    excerpt:
      "Mulți oameni speră că anxietatea va trece de la sine cu timpul. Aflați de ce această strategie nu funcționează și ce schimbare interioară face cu adevărat diferența.",
    date: "2026-03-20",
    category: "Anxietate & Emoții",
    readTime: "5 min citire",
    featured: true,
    content: `
      <p>Anxietatea este unul dintre cele mai frecvente lucruri cu care femeile vin la mine în sesiunile de coaching. Și cel mai des aud aceeași frază: <em>„Am crezut că va trece singură."</em></p>

      <p>Și înțeleg de ce. Anxietatea vine și pleacă. Uneori ești bine săptămâni întregi, apoi dintr-o dată revine — mai puternică, mai greu de gestionat. Și atunci îți spui că „trebuie să aștepți să treacă".</p>

      <h2>De ce anxietatea nu dispare prin ignorare</h2>

      <p>Anxietatea nu este o problemă de suprafață. Este un semnal al sistemului tău nervos că ceva — o credință, o frică, un model emoțional — nu a fost procesat. Când ignori semnalul, problema rămâne. Sistemul nervos continuă să genereze același semnal, din ce în ce mai puternic, până ești nevoită să-l asculți.</p>

      <p>Este ca și cum ai închide o fereastră cu zgomot de afară. Poți să o ții închisă un timp, dar vântul continuă. Rezolvarea nu este să stai lângă fereastră cu tot corpul — ci să mergi să identifici sursa zgomotului.</p>

      <h2>Cele 3 greșeli comune</h2>

      <p><strong>1. Să aștepți să treacă.</strong> Funcționează pe termen scurt, creează dependență pe termen lung. Devii expertă în a supraviețui episoadelor, nu în a le preveni.</p>

      <p><strong>2. Să îți spui că „ești prea sensibilă".</strong> Sensibilitatea nu este o slăbiciune — este un sistem de percepție fin. Problema nu e sensibilitatea, ci faptul că nu ai instrumente să procesezi ce percepi.</p>

      <p><strong>3. Să cauți cauza exclusiv în exterior.</strong> Anxietatea are, da, declanșatori externi. Dar rădăcina este mereu un model interior: o credință, o frică profundă, un tipar de gândire moștenit.</p>

      <h2>Ce face cu adevărat diferența</h2>

      <p>În munca mea de coaching, anxietatea se dizolvă când femeia înțelege ce mesaj îi transmite. Nu când o suprimă, nu când o diagnostichează — ci când o ascultă cu curiozitate, fără judecată.</p>

      <p>Există un punct în orice sesiune când clienta mea zice: <em>„Aaa, acum înțeleg de unde vine."</em> Și în acel moment, anxietatea nu mai are aceeași putere. Nu a dispărut magic — a fost integrată.</p>

      <p>Dacă te regăsești în ce ai citit și vrei să explorăm împreună ce îți transmite anxietatea ta, <a href="/#contact">programează o sesiune</a> cu mine.</p>
    `,
  },
  {
    slug: "legile-universale-ce-sunt-si-cum-lucreaza",
    title: "Legile Universale: ce sunt și cum schimbă modul în care trăiești",
    excerpt:
      "Legea atracției este doar una dintre cele 12 legi universale. Descoperă cum funcționează toate împreună și de ce fără aliniere interioară, manifestarea nu funcționează.",
    date: "2026-03-10",
    category: "Legi Universale",
    readTime: "7 min citire",
    content: `
      <p>Probabil că ai auzit de Legea Atracției. Poate ai citit „The Secret", poate ai văzut videoclipuri pe YouTube. Și poate, la un moment dat, ai zis: <em>„Nu funcționează pentru mine."</em></p>

      <p>Ei bine, există un motiv pentru asta — și are de-a face cu înțelegerea incompletă a sistemului.</p>

      <h2>Nu există o singură lege</h2>

      <p>Există 12 Legi Universale, toate interconectate. Legea Atracției este una dintre ele — și funcționează cu adevărat, dar nu izolat. Este ca și cum ai vrea să conduci o mașină acționând doar acceleratorul, fără volan și fără frâne.</p>

      <p>Cele mai importante legi cu care lucrez în sesiunile de coaching:</p>

      <p><strong>Legea Vibrației</strong> — totul vibrează la o anumită frecvență, inclusiv gândurile și emoțiile tale. Ce atragi corespunde frecvenței la care ești, nu celei la care vrei să fii.</p>

      <p><strong>Legea Corespondenței</strong> — „Cum este înăuntru, așa este în afară." Realitatea ta exterioară este o oglindă a stării tale interioare. Dacă îți dorești o relație armonioasă, dar în interior ești în război cu tine, lumea din jur va reflecta acel război.</p>

      <p><strong>Legea Cauzei și Efectului</strong> — fiecare acțiune are o reacție. Inclusiv gândurile și credințele tale sunt acțiuni energetice cu efecte reale.</p>

      <h2>De ce manifestarea nu funcționează fără aliniere</h2>

      <p>Poți repeta afirmații pozitive toată ziua. Poți vizualiza scenariul dorit în detaliu. Dar dacă în straturile mai profunde ale ființei tale există o credință de tipul <em>„nu merit"</em> sau <em>„nu e posibil pentru mine"</em> — acea credință va câștiga întotdeauna.</p>

      <p>Munca reală nu este să adaugi gânduri pozitive deasupra. Este să identifici și să dizolvi ce stă în cale.</p>

      <h2>Cum lucrez eu cu Legile Universale</h2>

      <p>În coaching, Legile Universale nu sunt un concept abstract — sunt o hartă practică. Ele îmi arată unde este blocajul, de ce apare și ce transformare interioară este necesară.</p>

      <p>Dacă ești curioasă cum se aplică asta în situația ta concretă, te invit la o <a href="/#contact">sesiune de explorare</a>.</p>
    `,
  },
  {
    slug: "cum-sa-iesi-din-rolul-de-victima",
    title: "Cum să ieși din rolul de victimă — fără să te judeci pentru că ai fost acolo",
    excerpt:
      "Rolul de victimă nu este o slăbiciune de caracter. Este un mecanism de supraviețuire. Înțelegând asta, poți face primul pas real spre puterea personală.",
    date: "2026-02-28",
    category: "Transformare Personală",
    readTime: "6 min citire",
    content: `
      <p>Când spun „rolul de victimă", prima reacție a multor femei este să se apere: <em>„Eu nu mă plâng, eu nu sunt o victimă."</em></p>

      <p>Și înțeleg asta. Cuvântul are o încărcătură negativă imensă în cultura noastră. Dar în psihologie și în munca de coaching, rolul de victimă nu înseamnă că ești slabă sau că te plângi — înseamnă un mod de a percepe realitatea în care lucrurile ți se întâmplă ție, fără putere de influență.</p>

      <h2>Cum recunoști rolul de victimă</h2>

      <p>Nu e mereu evident. Uneori apare în fraze simple:</p>
      <ul>
        <li>„Nu am de ales."</li>
        <li>„Mereu mi se întâmplă mie."</li>
        <li>„Dacă nu ar fi fost el/ea/ei..."</li>
        <li>„Nu pot face nimic în privința asta."</li>
      </ul>

      <p>Nu e vorba că aceste fraze sunt false — uneori situațiile chiar sunt dure. Dar rămânerea în această perspectivă blochează orice posibilitate de schimbare.</p>

      <h2>De ce este greu să ieși</h2>

      <p>Rolul de victimă oferă ceva: scutire de responsabilitate. Dacă totul e din cauza altcuiva, nu trebuie să te confrunți cu propria putere de schimbare — care, bineînțeles, implică și riscul de a eșua.</p>

      <p>Ieșirea din rolul de victimă nu înseamnă că îi ierți pe cei care ți-au greșit. Nu înseamnă că minimizezi ce s-a întâmplat. Înseamnă că decizi că puterea ta de a merge mai departe nu depinde de ei.</p>

      <h2>Primul pas real</h2>

      <p>Cel mai puternic lucru pe care îl poți face este să îți pui întrebarea: <em>„Ce pot eu controla în această situație?"</em> Nu ce pot controla ceilalți. Nu ce ar trebui să se schimbe. Ce poți tu face, gândi, alege — chiar și în cei mai mici pași.</p>

      <p>Această schimbare de perspectivă nu vine dintr-o decizie rațională — vine dintr-un proces de transformare interioară. Și acesta este exact tipul de muncă pe care o facem împreună în coaching.</p>
    `,
  },
  {
    slug: "relatia-cu-banii-si-constientul-tau",
    title: "Relația ta cu banii reflectă relația cu tine însăți",
    excerpt:
      "Banii nu sunt doar un instrument financiar — sunt energie. Iar modul în care îi primești, cheltuiești sau refuzi spune enorm despre ce crezi că meriți.",
    date: "2026-02-15",
    category: "Relație & Abundență",
    readTime: "5 min citire",
    content: `
      <p>Am lucrat cu sute de femei în sesiunile de coaching și un pattern reapare mereu: cele care au dificultăți cu banii au, de obicei, și dificultăți cu a-și permite să primească — iubire, ajutor, recunoaștere.</p>

      <p>Nu este o coincidență. Banii și energia iubirii de sine funcționează pe același circuit interior.</p>

      <h2>Ce îți spune relația cu banii despre tine</h2>

      <p><strong>Dacă cheltuiești compulsiv</strong> — există un gol interior pe care îl umpli cu posesii. Satisfacția durează puțin, nevoia revine.</p>

      <p><strong>Dacă strângi obsesiv și nu îți permiți nimic</strong> — există o frică profundă de nesiguranță, posibil moștenită. Banii devin un scut, nu un instrument.</p>

      <p><strong>Dacă îți este greu să ceri bani pentru munca ta</strong> — nu crezi cu adevărat în valoarea pe care o oferi. Sau crezi că a cere înseamnă a fi „lacomă".</p>

      <p><strong>Dacă banii vin și pleacă repede</strong> — subconstiența ta nu se simte în siguranță să îi rețină. Există o credință de tipul „nu merit să am".</p>

      <h2>Banii ca energie</h2>

      <p>În Legile Universale, banii sunt energie în mișcare. Ei urmează direcția conștiinței tale. Dacă îi privești cu frică, îi respingi energetic. Dacă îi privești cu recunoștință și respect, creezi un canal deschis.</p>

      <p>Asta nu înseamnă că gândindu-te pozitiv la bani îți va crește automat contul bancar. Înseamnă că atunci când îți cureți relația interioară cu conceptul de abundență, deciziile tale financiare se schimbă, oportunitățile devin vizibile, comportamentele se aliniază.</p>

      <h2>Exercițiu simplu pentru această săptămână</h2>

      <p>Observă, fără judecată, de trei ori în această săptămână cum reacționezi când vine vorba de bani — fie că plătești o factură, fie că refuzi ceva pentru tine, fie că cineva îți oferă ceva. Ce simți în corp? Ce gând apare automat?</p>

      <p>Acel gând automat este o ușă spre un tipar pe care merită să îl explorezi.</p>
    `,
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRecentArticles(count = 3): BlogArticle[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
