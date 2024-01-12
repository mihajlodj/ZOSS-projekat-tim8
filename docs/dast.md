## DAST
DAST (<i>Dynamic Application Security Testing</i>) predstavlja testiranje u okviru kog se simulira ponašanje napadača, odnosno veb aplikacija se napada spolja. Izvršava se nakon <i>deploy</i>-a aplikacije. Ovakvo testiranje je nezavisno od programskog jezika i korišćenih tehnologija.
Ranjivosti koje se najčešće otkrivaju na ovaj način su [1]: 
- <b><i>Cross Site Scripting</i> (XSS)</b> - Napadač unosi malicioznu skriptu preko polja namenjenog za korisnički unos, te se ona ubacuje u kod aplikacije i izvršava se u određenom trenutku
- <b><i>SQL Injection</i></b> - Napadač šalje na bekend SQL kod umesto nekog podatka nad kojim treba da se izvrši SQL upit, te na taj način manipuliše bazom podataka
- <b><i>Cross-Site Request Forgery</i> (CSRF)</b> - Napad u okviru kog veb aplikacija izvršava akcije na nekoj drugoj veb aplikaciji u ime korisnika koji je na njoj autentifikovan
- <b><i>Denial of Service</i> (DOS)</b> - Napad čiji je cilj da učini određene resurse nedostupnim ciljnim korisnicima
- <b>Korupcija memorije</b> - Menjanje sadržaja memorije na način koji nije predviđen aplikacijom
- <b>Izlaganje osetljivih informacija</b> - Dešava se kada aplikacija otkrije određene informacije o korisnicima nekome kome te informacije nisu namenjene. Informacije se najčešće otkrivaju preko loše formulisanih i previše opširnih poruka o greškama, nezaštićenih API-a, konfiguracionih fajlova koji sadrže osetljive informacije, te ukoliko je omogućeno izlistavanje direktorijuma [2].  

Posmatraju se dve tehnike dinamičkog testiranja veb aplikacija:
1. <b><i>Web Application Security Testing</i> (WAST)</b>
2. <b><i>Security API Scanning</i> (SAS)</b>

WAST je tehnika u okviru koje se aplikacija napada preko korisničkog interfejsa. Izvršava se u tri koraka [3]:
1. <i>Spider scan</i> – vrši se <i>crawling</i> veb aplikacije, da bi se otkrili svi dostupni URL-ovi i resursi, odnosno traži se površina napada veb aplikacije i pravi se reprezentacija strukture aplikacije.
2. <i>Active scan</i> – šalju se maliciozni zahtevi za svaki identifikovani resurs i analiziraju se dobijeni odgovori kako bi se utvrdilo da li postoje ranjivosti.
3. <i>Result reporting</i> – dobijeni rezultati se agregiraju u izveštaj. Izveštaj treba ručno da se analizira da bi se odbacili <i>false positive</i>-i.

Tok aktivnosti u okviru WAST tehnike je prikazan na slici [3].

![WAST graph](/docs/images/wast.png)

SAS je tehnika u okviru koje se veb servis napada preko API-a. Na ovaj način je moguće detaljno testirati svaki <i>endpoint</i>. Glavni cilj je da se identifikuju ranjivosti vezane za autentifikaciju, autorizaciju, validaciju ulaza, <i>error handling</i> i sl. HTTP zahtev se šalje API-u  pomoću <i>request</i> komponente. Svi HTTP zahtevi prolaze kroz <i>proxy</i> komponentu koja presreće saobraćaj između <i>request</i> komponente i aplikacije. Ona omogućava inspekciju i izmenu HTTP zahteva i odgovora, te evaluira presretnuti saobraćaj radi pronalaska ranjivosti. Nakon obavljenog testa, <i>proxy</i> komponenta kreira izveštaj sa rezultatima evaluacije [3].

Tok aktivnosti u okviru SAS tehnike je prikazan na slici [3].

![SAS graph](/docs/images/sas.png)

U sklopu ovog projekta će biti obavljena [komparativna analiza](/docs/dast/poredjenje_alata.md) različitih DAST alata, te će se na osnovu dobijenih rezultata odabrati dva alata koja će biti implementirana u sklopu DevSecOps *pipeline*-a

## Literatura
[1]	Felderer, M., Büchler, M., Johns, M., Brucker, A.D., Breu, R. and Pretschner, A., 2016. <i>Security testing: A survey. In Advances in Computers</i> (Vol. 101, pp. 1-51). Elsevier.

[2]	https://cyberw1ng.medium.com/basics-of-information-disclosure-vulnerability-in-web-app-penetration-testing-2023-fce8786b227b

[3]	Rangnau, T., Buijtenen, R.V., Fransen, F. and Turkmen, F., 2020, October. </i>Continuous security testing: A case study on integrating dynamic security testing tools in ci/cd pipelines</i>. In 2020 IEEE 24th International Enterprise Distributed Object Computing Conference (EDOC) (pp. 145-154). IEEE.
