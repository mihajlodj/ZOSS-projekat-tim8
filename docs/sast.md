# DevSecOps
## SAST
Statičko testiranje bezbednosti aplikacija (SAST) se koristi za obezbeđivanje softvera pregledom izvornog koda softvera da bi se identifikovali izvori ranjivosti. SAST alati se fokusiraju na sadržaj programskog koda aplikacije i njegove komponente kako bi utvrdili potencijalne bezbednosne propuste, <i>white-box</i> testiranje. U životnom ciklusu razvoja softvera (SDLC - <i>software development life cycle</i>), SAST je poželjno izvoditi u ranoj fazi. Iako mnogi testovi rezultuju lažno pozitivnim (<i>false-positive</i>) rezultatima i ometaju usvajanje od strane programera, dobra praksa je koristiti ih[1].

SAST alati skeniraju kompletan izvorni kod (<i>source code</i>) i pokrivenost može da bude čak i 100%, dok dinamičko testiranje DAST pokriva njegovo izvršavanje, koje ne mora biti 100%-tno i takođe ne testira neobezbeđenu konfiguraciju u konfiguracionim fajlovima.

SAST alati mogu ponuditi i proširene funkcionalnosti kao što su testiranje kvaliteta i testiranje arhitekture rešenja. Između kvaliteta softvera i sigurnosti postoji direktna korelacija, jer softver lošijeg kvaliteta je vrlo verovatno i loše obezbeđen softver.

Iako programeri žele da koriste SAST alate, postoje izazovi koje programeri trebaju da prebrode. Upotrebljivost izlaza (izveštaja) koji se generiše od strane alata može uticati na to koliko programeri mogu da iskoriste ove alate. Rana upotreba SAST alata prilikom rada po Agilnim metodologijama može proizvesti dosta bagova, jer programeri koji koriste ovu metodologiju se fokusiraju najviše na funkcionalnosti i isporuku rešenja[2]. Alati mogu generisati mnogo lažno pozitivnih (<i>false-positive</i>) problema i time povećaju vreme neophodno za istraživanje problema i smanjuje se poverenje programera u sam alat.

Alati koji bi se istraživali su: <i>SonarQube, Veracode, Checkmarx, Fortify, Coverity</i>. Nakon istraživanja alata jedan bi se iskoristio za implementaciju u samom <i>pipeline</i>-u.

## Sonarqube
SonarQube, ranije poznat kao Sonar, je besplatna platforma otvorenog koda koju je razvio SonarSource [4]. Olivier Gaudin, Freddy Mallet, i Simon Brandhof su 2008 osnovali kompaniju SonarSource u Švajcarskoj [5]. Zaključno sa 2022. kompanija je imala preko sedam miliona korisnika, 21.000 <i>enterprise</i> korisnika i podržavala je rad preko 400.000 organizacija [5].

Svrha platforme je olakšavanje kontinuirane evaluacije kvaliteta koda putem automatizovane analize statičkog koda. Ovaj proces pomaže u identifikaciji bagova i neželjenih programerskih praksi u programskom kodu napisanom u preko 30 programskih jezika. 

SonarQube pruža detaljne izveštaje koji obuhvataju različite aspekte, kao što su duplikati u kodu, pridržavanje standarda kodiranja, rezultati jediničnih testova (engl. <i>unit tests</i>), pokrivenost koda (engl. <i>code coverage</i>), složenost koda, gustina komentara, pojava bagova i preporuke za bezbednost.

### Karakteristike
Neke od karakteristika koje proizvođač alata ističe su [3]:
- 30+ jezika, radnih okvira (engl. <i>frameworks</i>), i IaC platformi
- Integracija sa DevOps platformama
- Kapija kvaliteta (engl. <i>go/no-go Quality gate</i>)
- Visoka operabilnost
- Super brza analiza
- Kritična bezbednosna pravila za ključne jezike
- Deljena, jedinstvena konfiguracija
- <i>Sonarlint IDE</i> integracija

### Jezici
Podržava više popularnih jezika, <i>framework</i>-a i IaC platformi.

Neki od programskih jezika su:
- [Java](https://www.sonarsource.com/knowledge/languages/java/)
- [Kotlin](https://www.sonarsource.com/knowledge/languages/kotlin/)
- [C#](https://www.sonarsource.com/knowledge/languages/csharp/)
- [VB](https://www.sonarsource.com/knowledge/languages/vb-net/)
- [VB6](https://www.sonarsource.com/knowledge/languages/vb6/)
- [C](https://www.sonarsource.com/knowledge/languages/c/)
- [C++](https://www.sonarsource.com/knowledge/languages/cpp/)
- [JS](https://www.sonarsource.com/knowledge/languages/js/)
- [TS](https://www.sonarsource.com/knowledge/languages/ts/)
- [php](https://www.sonarsource.com/knowledge/languages/php/)
- [python](https://www.sonarsource.com/knowledge/languages/python/)
- [COBOL](https://www.sonarsource.com/knowledge/languages/cobol/)
- [Go](https://www.sonarsource.com/knowledge/languages/go/)
- [Objective C](https://www.sonarsource.com/knowledge/languages/objective-c/)
- [Ruby](https://www.sonarsource.com/knowledge/languages/ruby/)
- [Scala](https://www.sonarsource.com/knowledge/languages/scala/)
- [Swift](https://www.sonarsource.com/knowledge/languages/swift/)
- [ABAP](https://www.sonarsource.com/knowledge/languages/abap/)
- [Apex](https://www.sonarsource.com/knowledge/languages/apex/)

Neki od meta jezika su:
- [xml](https://www.sonarsource.com/knowledge/languages/xml/)
- [HTML](https://www.sonarsource.com/knowledge/languages/html/)
- [CSS](https://www.sonarsource.com/knowledge/languages/css/)

Neke od IaC platformi:
- [terraform](https://www.sonarsource.com/knowledge/languages/terraform/)
- [cloudformation](https://www.sonarsource.com/knowledge/languages/cloudformation/)
- [kubernetes](https://www.sonarsource.com/knowledge/languages/kubernetes/)
- [docker](https://www.sonarsource.com/knowledge/languages/kubernetes/)

Ostali:
- [Flex](https://www.sonarsource.com/knowledge/languages/flex/)
- [Pl/I](https://www.sonarsource.com/knowledge/languages/pli/)
- [PL/SQL](https://www.sonarsource.com/knowledge/languages/pl-sql/)
- [RPG](https://www.sonarsource.com/knowledge/languages/rpg/)
- [T-SQL](https://www.sonarsource.com/knowledge/languages/t-sql/)

### Izdanja
Nudi 4 nivoa izdanja:
- <i>Community Edition</i>
- <i>Developer Edition</i>
- <i>Enterprise Edition</i>
- <i>Data Center Edition</i>

#### <i>Community Edition</i>
- Ova verzija je besplatna. 
- Nudi osnovne mogućnosti. 
- Otvorenog je koda.

#### <i>Developer Edition</i>
- Nadogradnja na <i>Community Edition</i>.
- Plaćena verzija.
- Dodatne mogućnosti koje nudi su:
    - 25+ jezika, radnih okvira, i tehnologija
    - Analiza grana
    - Dekoraciju <i>Pull Request</i>-a
    - Analizu zagađenosti (engl. <i>Taint analysis</i>)
    - <i>SonarLint IDE</i> integracija

#### <i>Enterprise Edition</i>
- Nadogradnja na <i>Developer Edition</i>.
- Plaćena verzija.
- Dodatne mogućnosti koje nudi su:
    - 30+ jezika, radnih okvira, i tehnologija
    - Analiza grana
    - Dekoraciju <i>Pull Request</i>-a
    - Analizu zagađenosti (engl. <i>Taint analysis</i>)
    - <i>SonarLint IDE</i> integracija
    - Transfer projekta
    - Bezbednosni izveštaji
    - Menadžment portfolija i generisanje PDF izveštaja za rukovodeći kadar
    - Izveštaji o regulatornim objavama (engl. <i>Regulatory release reports</i>)
    - Paralelno procesuiranje analitičkih izveštaja (engl. <i>Parallel processing of analysis reports</i>)
    - Više instanci <i>DevOps</i> platforme (engl. <i>Multiple DevOps platform instances</i>)
    - 2 dodatne licence za testiranje/fazu (engl. <i>2 additional test/stage licenses</i>)
    - Prilagođavanje <i>Security Engine</i>-a (engl. <i>Security Engine customization</i>)
    - Podrška za dekorisanje PR <i>monorepo</i>-a (engl. <i>Monorepo support for PR decoration</i>)

#### <i>Data Center Edition</i>
- Nadogradnja na <i>Enterprise Edition</i>.
- Plaćena verzija.
- Dodatne mogućnosti koje nudi su:
    - 30+ jezika, radnih okvira, i tehnologija
    - Analiza grana
    - Dekoraciju <i>Pull Request</i>-a
    - Analizu zagađenosti (engl. <i>Taint analysis</i>)
    - <i>SonarLint IDE</i> integracija
    - Transfer projekta
    - Bezbednosni izveštaji
    - Menadžment portfolija i generisanje PDF izveštaja za rukovodeći kadar
    - Izveštaji o regulatornim objavama (engl. <i>Regulatory release reports</i>)
    - Paralelno procesuiranje analitičkih izveštaja (engl. <i>Parallel processing of analysis reports</i>)
    - Više instanci <i>DevOps</i> platforme (engl. <i>Multiple DevOps platform instances</i>)
    - 2 dodatne licence za testiranje/fazu (engl. <i>2 additional test/stage licenses</i>)
    - Prilagođavanje <i>Security Engine</i>-a (engl. <i>Security Engine customization</i>)
    - Podrška za dekorisanje PR <i>monorepo</i>-a (engl. <i>Monorepo support for PR decoration</i>)
    - Otkrivanje naprednih grešaka koje uzrokuju <i>runtime</i> greške i pad sistema (engl. <i>Detection of advanced bugs causing runtime errors and crashes</i>)
    - Redundantnost komponenti (engl. <i>Component redundancy</i>)
    - Otpornost podataka (engl. <i>Data resiliency</i>)
    - Horizontalno skaliranje (engl. <i>Horizontal scalability</i>)

### Tipovi bezbednosnih analiza
Bezbednosne analize koje platforma nudi se mogu grupisati u grupe napada. Najznačajnije grupe su [6]:
- SQL injection vulnerabilities
- Cross-site scripting (XSS)
- Code injection attacks
- Buffer overflows
- Authentication issues
- Cloud secrets detection
- ...

Platforma je usklađena sa bezbednosnim standardima 
[PCI DSS](/docs/pcidss.md), 
CWE Top 25, i 
OWASP Top 10 [6].
TODO: Dodati jos 2 dokumenta za neopisane standarde.

### Podrška za Java programski jezik
- Sve verzije do Java 19 su podržane [7]. 
- Podržani Web radni okviri (engl. <i>web frameworks</i>) su: <i>Struts</i>, <i>JSP</i>, <i>Spring</i> [7]. 
- Podržani radni okviri za testiranje su: <i>JUnit 4</i>, <i>JUnit 5</i>, <i>AssertJ</i>, <i>Mockito</i>, <i>Spring Test</i>, <i>TestNG</i> [7]. 
- Podržana je analiza programskog koda koji koristi ORM mapere: <i>Hibernate</i>, <i>Spring JDBC Template</i>, <i>JDO</i>, <i>VertX SQL</i>. 
- Postoji integracija sa 3 <i>build</i> alata: <i>Maven</i>, <i>Gradle</i> i <i>Ant</i>. 

Za Java programski jezik alat poseduje ukupno 677 pravila [8]. 
Pravila se dele u grupe: 
- Vulnerability
    - <i>Vulnerabiliy</i> (ranjivost) je nedostatak u sistemu koji bi mogao biti zloupotrebljen kako bi se ugrozila njegova bezbednost. Ovo označava konkretan nedostatak koji napadači mogu eksploatisati kako bi dobili neovlašćen pristup, izvršili radnje ili izazvali poremećaje [9].
    - Postoji ukupno 56 pravila koja detektuju ranjivosti [8]. 
- Bug
    - Greška je opšti termin za svaki nenamerni propust ili grešku u softverskoj aplikaciji [10]. Greške mogu varirati od manjih problema koji utiču na korisničko iskustvo do ozbiljnih defekata koji utiču na funkcionalnost. Za razliku od ranjivosti, greške možda neće nužno predstavljati sigurnosni rizik, ali i dalje mogu uticati na performanse softvera [11].
    - Postoji ukupno 167 pravila koja detektuju <i>bug</i>-ove [8].
- Security Hotspot
    - <i>Security Hotspot</i> (Sigurnosno žarište) predstavlja oblast u izvornom kodu gde potencijalno mogu postojati sigurnosni problemi [12]. 
    Ne mora nužno ukazivati na ranjivost, već sugeriše da bi kod trebalo pažljivije pregledati zbog sigurnosnih implikacija. 
    Služe kao fokusi za detaljniju analizu sigurnosti.
    - Postoji ukupno 38 pravila koja detektuju <i>Security Hotspot</i> [8].
- Code Smell
    - Odnosi se na svaki aspekt izvornog koda koji može ukazivati na dublji problem [13]. Ne označava nužno grešku ili ranjivost, već sugeriše da bi kod mogao biti poboljšan radi bolje čitljivosti, održivosti ili performansi. Mirisi koda su subjektivni pokazatelji koji podstiču programere da razmotre refaktorisanje.
    - Postoji ukupno 416 pravila koja detektuju <i>Code Smell</i> [8].
- Quick Fix
    - Brza pomoć se odnosi na pomoć programeru kako bi lakše i brže izmenio deo programskog koda koji sadrži neki problem [14].
    - Postoji ukupno 56 pravila koja detektuju ranjivosti koje se brzo mogu popraviti [8].

## Veracode

## Checkmarx

## Fortify

## Literatura
[1] Aloraini, B., Nagappan, M., German, D. M., Hayashi, S., & Higo, Y. (2019). An empirical study of security warnings from static application security testing tools. <i>Journal of Systems and Software</i>, 158, 110427.

[2] Yang, J., Tan, L., Peyton, J., & Duer, K. A. (2019, May). Towards better utilizing static application security testing. In 2019 <i>IEEE/ACM 41st International Conference on Software Engineering: Software Engineering in Practice (ICSE-SEIP)</i> (pp. 51-60). IEEE.

[3] SonarQube dokumentacija https://www.sonarsource.com/products/sonarqube/

[4] Wiki članak o SonarQube-u https://en.wikipedia.org/wiki/SonarQube

[5] Wiki članak o SonarSource https://en.wikipedia.org/wiki/SonarSource

[6] SonarQube dokumentacija o bezbednosti https://www.sonarsource.com/solutions/security/

[7] SonarQube dokumentacija o Java jeziku https://www.sonarsource.com/knowledge/languages/java/

[8] SonarQube pravila za Java programski jezik. Datum pristupa (23.12.2023.) https://rules.sonarsource.com/java/

[9] Definition of vulnerability https://www.upguard.com/blog/vulnerability

[10] Definition of bug https://en.wikipedia.org/wiki/Security_bug

[11] Bug VS. Vulnerability https://www.informit.com/articles/article.aspx?p=437737&seqNum=2

[12] Security Hotspot definicija https://docs.sonarsource.com/sonarcloud/digging-deeper/security-hotspots/#:~:text=Security%20hotspots-,What%20is%20a%20security%20hotspot%3F,fix%20to%20secure%20the%20code.

[13] Code Smell definition by Martin Fowler https://martinfowler.com/bliki/CodeSmell.html

[14] Quick Fix in SonarQube https://www.sonarsource.com/blog/sonarlint-quick-fixes/
