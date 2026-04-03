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
      "Mulți femei speră că anxietatea va trece de la sine. Descoperă de ce această strategie nu funcționează, care este mecanismul real din spatele anxietății cronice și ce schimbare interioară face cu adevărat diferența.",
    date: "2026-03-28",
    category: "Anxietate & Emoții",
    readTime: "16 min citire",
    featured: true,
    content: `
      <p>„Am crezut că va trece singură."</p>

      <p>Aud această frază în aproape fiecare sesiune de coaching despre anxietate. Și înțeleg de unde vine.</p>

      <p>Anxietatea vine și pleacă. Uneori ești bine săptămâni întregi — dormi normal, funcționezi, trăiești. Apoi, dintr-o dată, revine. Mai puternică. Mai greu de gestionat. Și atunci îți spui: „Trebuie să aștept să treacă. La fel cum a trecat data trecută."</p>

      <p>Dar iată adevărul care îi schimbă perspectiva oricărei femei cu care lucrez: anxietatea nu a trecut. Ai supraviețuit episodului. Ai așteptat să se calmeze. Ai amânat. Ai evitat. Dar rădăcina anxietății — acea credință, acea frică, acel model emoțional neprocesat — a rămas acolo. Și de aceea revine.</p>

      <h2>Anxietatea este un semnal, nu o defecțiune</h2>

      <p>Când simți anxietate, sistemul tău nervos îți transmite un mesaj: „Ceva nu este în siguranță." Nu neapărat în exterior — ci în interior. Poate o credință veche care te ține blocată, o frică neprocesată din copilărie, un model emoțional moștenit, un tipar relațional care te epuizează. Toate acestea creează tensiune internă constantă, iar sistemul nervos reacționează logic: „Pericol. Fii în alertă. Scanează constant."</p>

      <p>Imaginează-te că ai un detector de fum în casă. Detectorul sună pentru că este fum în bucătărie. Poți să mergi în bucătărie și să identifici sursa — sau poți să scoți bateriile din detector. Când ignori anxietatea, faci exact varianta a doua. Oprești semnalul prin evitare, distragere, numbing. Dar fumul rămâne. Și sistemul nervos, care te protejează, sună mai tare.</p>

      <p>De aceea anxietatea revine mai puternică după fiecare episod ignorat.</p>

      <h2>Cum arată ciclul pe care nu îl vede nimeni</h2>

      <p>Un eveniment, o conversație, un gând — declanșează anxietatea. Eviți situația, eviți emoția, eviți să te uiți la cauză. Anxietatea scade și îți spui că a trecut. Dar tensiunea interioară rămâne, se adaugă alte situații evitate, sistemul nervos devine mai sensibil. Și anxietatea revine — de data asta mai intensă, mai greu de gestionat.</p>

      <p>Până când nu mai ai episoade separate. Ai un fundal constant de neliniște, iritabilitate, oboseală emoțională. Nu mai știi cum era să te simți bine cu adevărat.</p>

      <h2>Greșelile care amplifică anxietatea fără să știi</h2>

      <p>Cea mai comună greșeală este să aștepți să treacă. Pe termen scurt, anxietatea chiar scade — corpul nu poate susține starea de alertă constantă. Dar nu ai rezolvat cauza, ai supraviețuit simptomului. Devii expertă în a trece prin episoade, nu în a le înțelege. Și după ani de zile, realizezi că nu ai învățat să gestionezi anxietatea — ai învățat doar să o eviți.</p>

      <p>A doua greșeală este să îți spui că ești prea sensibilă. Înțeleg de unde vine gândul — dacă alții nu reacționează la fel, poate problema e la tine, nu? Dar sensibilitatea nu este o defecțiune. Este un sistem de percepție fin. Percepi mai mult, simți mai mult, procesezi mai profund. Problema nu e că ești sensibilă — problema e că nu ai instrumente să procesezi ce percepi. Iar când îți spui că ești prea sensibilă, îți invalidezi experiența și creezi și mai multă anxietate.</p>

      <p>A treia greșeală este să cauți cauza exclusiv în exterior: dacă aș schimba jobul, dacă partenerul meu ar fi altfel, dacă aș avea mai multă stabilitate. Anxietatea are, da, declanșatori externi. Dar rădăcina este mereu interioară. Doi oameni pot trăi aceeași situație — unul dezvoltă anxietate cronică, celălalt o gestionează relativ bine. Diferența o fac modelele interioare, credințele despre sine și despre lume.</p>

      <h2>Ce face cu adevărat diferența</h2>

      <p>În munca mea de coaching, anxietatea se dizolvă când femeia înțelege ce mesaj îi transmite. Nu când o suprimă, nu când o diagnostichează, nu când o etichetează ca boală — ci când o ascultă cu curiozitate, fără judecată.</p>

      <p>Primul pas este recunoașterea simplă: „Da, sunt anxioasă. Și e în regulă să recunosc asta." Fără minimizare, fără judecată, fără presiunea de a fi mai puternică. Ci validare sinceră a ceea ce există.</p>

      <p>Al doilea pas este curiozitatea. Nu o analiză intelectuală rece, ci o întrebare empatică, ca și cum ai asculta o prietenă: „Ce te sperie cu adevărat? De ce ai nevoie ca să te simți în siguranță?"</p>

      <p>Există un moment în orice sesiune când clienta mea zice: „Aaa, acum înțeleg de unde vine." Nu este o înțelegere din cărți. Este o recunoaștere viscerală: „Copilul din mine încă crede că trebuie să fie perfect ca să fie iubit." „Modelul meu de gândire moștenit este că trebuie să mă descurc singură." În acel moment, anxietatea nu mai are aceeași putere. Nu a dispărut magic — a fost integrată.</p>

      <p>Dar înțelegerea singură nu e suficientă. Pasul următor este să îi arăți sistemului nervos că ești în siguranță acum — nu printr-un argument logic, ci printr-o experiență în corp. Respirație ventrală, tapping EFT, reconectare cu prezentul, stabilirea unor limite clare care creează siguranță reală. Și transformarea vine din acțiunea repetată din noua înțelegere. Fiecare decizie luată conștient, în loc de una condusă de frică, reconditionează sistemul nervos.</p>

      <h2>Cum știi că anxietatea ta necesită atenție</h2>

      <p>Anxietatea normală este temporară, legată de un eveniment specific, proporțională cu situația și se ameliorează după ce lucrurile se rezolvă. Anxietatea cronică este persistentă, adesea disproporționată față de situație, interferează cu viața de zi cu zi și revine constant chiar și fără declanșatori clari.</p>

      <p>Există câteva semne clare că anxietatea ta are nevoie de atenție profesională. Dacă persistă mai mult de șase săptămâni consecutive, chiar și atunci când exterior totul e bine. Dacă nu mai poți dormi normal, nu te poți concentra la muncă, nu mai simți plăcere în lucrurile care înainte îți plăceau. Dacă eviți constant conversații dificile, decizii, interacțiuni sociale — pentru că evitarea, deși aduce ușurare pe moment, amplifică anxietatea pe termen lung.</p>

      <p>Alte semne: simptome fizice recurente precum tensiune musculară, palpitații, probleme digestive, oboseală chiar dacă dormi suficient. Gânduri în buclă, scenarii catastrofice, rumination. Sau consumuri compensatorii — alcool, mâncat compulsiv, scroll infinit — ca să calmezi ceva ce nu vrei să simți.</p>

      <p>Dacă te regăsești în mai multe dintre acestea, anxietatea ta necesită ghidare, nu doar tehnici de self-help.</p>

      <h2>Ce poți face începând de astăzi</h2>

      <p>Primul lucru concret este să îți observi tiparul. Timp de șapte zile, notează când apare anxietatea, ce gând ai în acel moment, ce simți în corp și ce faci ca răspuns. Nu ca să te judeci — ci ca să vezi. Acel moment în care recunoști tiparul cu claritate este deja o schimbare.</p>

      <p>Când simți anxietate, nu evita automat. Oprește-te treizeci de secunde. Respiră conștient. Întreabă-te: „De ce îmi este frică cu adevărat?" Și răspunde onest — nu logic, ci emoțional. Frica de respingere, frica de eșec, frica de a fi prea mult sau prea puțin — toate sunt răspunsuri reale care merită văzute, nu evitate.</p>

      <p>Creează siguranță în corp, nu doar în minte. Anxietatea trăiește în corp. Respirația ventrală — cinci secunde inspiră, cinci secunde expiră — activează sistemul parasimpatic și reduce starea de alertă. Tapping-ul EFT eliberează tensiunea fizică acumulată. Tehnica de grounding 5-4-3-2-1 — cinci lucruri pe care le vezi, patru pe care le atingi, trei pe care le auzi, două pe care le miroși, unul pe care îl guști — aduce atenția înapoi în prezent, acolo unde anxietatea nu are putere.</p>

      <p>Și observă cum îți vorbești. Anxietatea se hrănește din autocritică. Fiecare frază de tipul „sunt o proastă" sau „nu merit asta" adaugă tensiune. Nu ai nevoie de gândire pozitivă forțată — ai nevoie de autocompasiune realistă: „Am greșit. Sunt om. Pot învăța."</p>

      <p>Dacă anxietatea ta persistă, interferează cu viața zilnică sau nu răspunde la aceste tehnici, nu mai încerca singură. Transformarea profundă necesită ghidare specializată. Nu e slăbiciune să ceri ajutor — este cel mai onest lucru pe care îl poți face pentru tine.</p>

      <h2>Anxietatea nu este dușmanul. Este mesagerul.</h2>

      <p>Anxietatea nu vrea să te distrugă. Vrea să te protejeze. Îți spune că ceva nu a fost procesat, că ceva necesită atenția ta. Când o ignori, strigă mai tare. Când o asculți cu curiozitate — se transformă.</p>

      <p>Nu dispare magic. Dar își pierde puterea asupra ta. Pentru că nu mai ești victima anxietății — ești cea care o înțelege și o integrează.</p>

      <p>Dacă te regăsești în ce ai citit și vrei să explorăm împreună ce îți transmite anxietatea ta, <a href="https://calendly.com/olimpiamld/30min" target="_blank" rel="noopener noreferrer">programează o sesiune de claritate</a> cu mine — 30 de minute, gratuite, fără obligație. Vom vedea care este rădăcina anxietății tale, ce tipar repeți fără să îl observi și dacă și cum pot să te ghidez mai departe.</p>

      <p>Cu căldură,<br/>Olimpia Moldoveanu</p>
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
