# DevSecOps
## SAST
Statičko testiranje bezbednosti aplikacija (SAST) se koristi za obezbeđivanje softvera pregledom izvornog koda softvera da bi se identifikovali izvori ranjivosti. SAST alati se fokusiraju na sadržaj programskog koda aplikacije i njegove komponente kako bi utvrdili potencijalne bezbednosne propuste, <i>white-box</i> testiranje. U životnom ciklusu razvoja softvera (SDLC - <i>software development life cycle</i>), SAST je poželjno izvoditi u ranoj fazi. Iako mnogi testovi rezultuju lažno pozitivnim (<i>false-positive</i>) rezultatima i ometaju usvajanje od strane programera, dobra praksa je koristiti ih[1].

SAST alati skeniraju kompletan izvorni kod (<i>source code</i>) i pokrivenost može da bude čak i 100%, dok dinamičko testiranje DAST pokriva njegovo izvršavanje, koje ne mora biti 100%-tno i takođe ne testira neobezbeđenu konfiguraciju u konfiguracionim fajlovima.

SAST alati mogu ponuditi i proširene funkcionalnosti kao što su testiranje kvaliteta i testiranje arhitekture rešenja. Između kvaliteta softvera i sigurnosti postoji direktna korelacija, jer softver lošijeg kvaliteta je vrlo verovatno i loše obezbeđen softver.

Iako programeri žele da koriste SAST alate, postoje izazovi koje programeri trebaju da prebrode. Upotrebljivost izlaza (izveštaja) koji se generiše od strane alata može uticati na to koliko programeri mogu da iskoriste ove alate. Rana upotreba SAST alata prilikom rada po Agilnim metodologijama može proizvesti dosta bagova, jer programeri koji koriste ovu metodologiju se fokusiraju najviše na funkcionalnosti i isporuku rešenja[2]. Alati mogu generisati mnogo lažno pozitivnih (<i>false-positive</i>) problema i time povećaju vreme neophodno za istraživanje problema i smanjuje se poverenje programera u sam alat.

Alati koji bi se istraživali su: <i>SonarQube, Veracode, Checkmarx, Fortify, Coverity</i>. Nakon istraživanja alata jedan bi se iskoristio za implementaciju u samom <i>pipeline</i>-u.

## Sonarqube

Sonarqube je <i>open-source</i> platforma koja je namenjena kontinualnoj inspekciji kvaliteta programskog koda.

TODO> Ubaciti opsti tekst o alatu.

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
- <i>Developer Edition</i> - Plaćena verzija. Nudi 
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

## Veracode

## Checkmarx

## Fortify

## Literatura
[1] Aloraini, B., Nagappan, M., German, D. M., Hayashi, S., & Higo, Y. (2019). An empirical study of security warnings from static application security testing tools. <i>Journal of Systems and Software</i>, 158, 110427.

[2] Yang, J., Tan, L., Peyton, J., & Duer, K. A. (2019, May). Towards better utilizing static application security testing. In 2019 <i>IEEE/ACM 41st International Conference on Software Engineering: Software Engineering in Practice (ICSE-SEIP)</i> (pp. 51-60). IEEE.

[3] Sonarqube dokumentacija https://www.sonarsource.com/products/sonarqube/
