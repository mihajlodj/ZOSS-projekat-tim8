# DevSecOps
## SCA
<i>Software Composition Analysis</i> (SCA) predstavlja automatizovani proces koji se bavi analizom otvorenog softvera. Preciznije, SCA se bavi evaluacijom bezbednosti, usklađenosti licenci i kvaliteta koda.[1] Većina današnjih aplikacija je napravljena i pravi se pomoću otvorenog softvera. Korišćenjem otvorenog softvera ubrzavamo i olakšavamo proces kreiranja aplikacija, smanjujemo neophodne troškove i kreiramo bolji i kvalitetniji softver. Problemi ovog pristupa nastaju kada posmatramo bezbednost.

Softver otvorenog tipa nije bezbedan po difoltu i može da ima ranjivosti. Postoje dve vrste ranjivosti: one opasnije, <i>"Unknown vulnerabilities"</i> odnosno nepoznate ranjivosti, i one manje opasne, <i>"Known vulnerabilities"</i>. Kada se otkrije nepoznata ranjivost, ona se šalje u CVE (<i>Common Vulnerabilities and Exposures</i>) bazu podataka. Primer jedne takve CVE baze podataka jeste NVD, koja predstavlja bazu podataka o upravljanju ranjivostima u SAD-u. Nakon što nepoznata ranjivost završi u CVE bazi, postaje poznata ranjivost. CVE daju skor od 1 do 10 na osnovu lakoće eksploatacije. SCA koristi CVE baze podataka da bi naše aplikacije sačuvale pri kreiranju i korišćenju.

U sistemu koji koristi softver otvorenog koda, imamo sledeću strukturu [2]:
- Paket otvorenog koda (<i>open-source package</i>): datoteke i metapodaci koji opisuju izvorni kod projekta
- Menadžer paketa (<i>Package manager</i>): program koji primenjuje, automatizuje i upravlja paketima
- Registar paketa (<i>Package Registry</i>): usluga hostinga koja pruža mogućnost uvoza paketa
- Zavisnost (<i>Dependency</i>): softver koji koristi pakete ili biva korišćen kao paket
Ako se naš projekat oslanja na paket otvorenog koda, onda naš projekat zavisi od njega, što predstavlja direktnu zavisnost. Ukoliko naš projekat koristi paket otvorenog koda, a taj paket otvorenog koda koristi neki drugi paket otvorenog koda, dolazimo do indirektne zavisnosti.

Ručno praćenje svih ovih obaveza je vremenom postalo previše. Često se previđao kod od njegovih pratećih ranjivosti. Iz toga je i nastala potreba za automatizacijom tog sistema. Ranije i kontinuirano SCA testiranje omogućilo je programerima i bezbednosnim timovima da povećaju produktivnost bez ugrožavanja bezbednosti i kvaliteta softvera.

SCA automatski prati prethodno spomenute obaveze i sve otvorene softvere koje identifikuje ubacuje u BOM (<i>Bill of Materials</i>), koji se zatim upoređuje sa raznim bazama poznatih ranjivosti.

Alati <i>Software Composition Analysis</i>-a:
Većina ovih alata sadrži sledeće odlike:

- <i>Dependency analysis</i> odnosno analiza zavisnosti. SCA alati automatski skeniraju kod aplikacije zarad kreiranja baze znanja koja se sastoji od <i>open source</i> komponenti, <i>third-party</i> biblioteka kao i od njihovih verzija i zavisnostima. Ovime ovi alati olakšavaju celokupni poregled svih korišćenih projektnih komponenti.

- <i>Vulnerability detection</i> odnosno detekcija ranjivosti. SCA alati vrše proveru ranjivosti zavisnosti i biblioteka aplikacije pomoću pređašnje kreirane baze znanja. Svaki podatak iz baze znanja se upoređuje sa poznatim ranjivostima iz neke CVE baze. Većina SCA alata pored standardne NVD baze poznatih ranjivosti imaju i svoje privatne baze ranjivosti koje redovno ažuriraju.

- <i>License compliance</i> odnosno usklađenosti sa licencama. SCA alati analiziraju licence svih korišćenih <i>open source</i> komponenti. Samim developerima je značajno olakšano pridržavanje svih neophodnih zakonskih zahteva i obaveza.

- <i>Prioritization</i> odnosno određivanje prioriteta. SCA alati na osnovu ozbiljnosti otkrivenih ranjivosti pomažu u određivanju prioriteta rešavanja problema. Ukoliko se problem rešava ažuriranjem verzije zavisnosti većina alata će to ažuriranje i predložiti.

Lista alata koji se bave <i>Software Composition Analysis</i>-om je velika. U nastavku će biti opisani neki od najznačajnijih.

<h1><i>GitHub</i></h1>
<h1><i>Snyk</i></h1>
<h1><i>Soos</i></h1>


## Literatura
[1] Nierstrasz, O., & Meijler, T. D. (1995). Research directions in software composition. <i>ACM Computing Surveys</i> (CSUR), 27(2), 262-264.

[2] Zhao, L., Chen, S., Xu, Z., Liu, C., Zhang, L., Wu, J., ... & Liu, Y. (2023, November). Software composition analysis for vulnerability detection: An empirical study on Java projects. <i>In Proceedings of the 31st ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering</i> (pp. 960-972).
