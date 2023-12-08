## DAST
DAST (<i>Dynamic Application Security Testing</i>) predstavlja testiranje u okviru kog se simulira ponašanje napadača, odnosno veb aplikacija se napada spolja. Izvršava se nakon deploy-a aplikacije. Ovakvo testiranje je nezavisno od programskog jezika i korišćenih tehnologija.
Ranjivosti koje se najčešće otkrivaju na ovaj način su: <i>Cross Site Scripting</i> (XSS), <i>SQL Injection</i>, <i>Cross-Site Request Forgery</i> (CSRF), <i>Denial of Service</i> (DOS), korupcija memorije i izlaganje osetljivih informacija [1].

Posmatraju se dve tehnike:
1. <i>Web Application Security Testing</i> (WAST)
2. <i>Security API Scanning</i> (SAS)

WAST je tehnika u okviru koje se aplikacija napada preko korisničkog interfejsa. Izvršava se u tri koraka [2]:
1. <i>Spider scan</i> – vrši se <i>crawling</i> veb aplikacije, da bi se otkrili svi dostupni URL-ovi i resursi, odnosno traži se površina napada veb aplikacije i pravi se reprezentacija strukture aplikacije.
2. <i>Active scan</i> – šalju se maliciozni zahtevi za svaki identifikovani resurs i analiziraju se dobijeni odgovori kako bi se utvrdilo da li postoje ranjivosti.
3. <i>Result reporting</i> – dobijeni rezultati se agregiraju u izveštaj. Izveštaj treba ručno da se analizira da bi se odbacili <i>false positive</i>-i.

Tok aktivnosti u okviru WAST tehnike je prikazan na slici [2].

![WAST graph](/docs/images/wast.png)

SAS je tehnika u okviru koje se veb servis napada preko API-a. Na ovaj način je moguće detaljno testirati svaki <i>endpoint</i>. Glavni cilj je da se identifikuju ranjivosti vezane za autentifikaciju, autorizaciju, validaciju ulaza, <i>error handling</i> i sl. HTTP zahtev se šalje API-u  pomoću <i>request</i> komponente. Svi HTTP zahtevi prolaze kroz <i>proxy</i> komponentu koja presreće saobraćaj između <i>request</i> komponente i aplikacije. Ona omogućava inspekciju i izmenu HTTP zahteva i odgovora, te evaluira presretnuti saobraćaj radi pronalaska ranjivosti. Nakon obavljenog testa, <i>proxy</i> komponenta kreira izveštaj sa rezultatima evaluacije [2].

Tok aktivnosti u okviru SAS tehnike je prikazan na slici.

![SAS graph](/docs/images/sas.png)

Najčešće korišćeni alati za implementaciju DAST-a su OWASP ZAP i <i>Burp Suite</i>.

## Literatura
[1]	Felderer, M., Büchler, M., Johns, M., Brucker, A.D., Breu, R. and Pretschner, A., 2016. <i>Security testing: A survey. In Advances in Computers</i> (Vol. 101, pp. 1-51). Elsevier.

[2]	Rangnau, T., Buijtenen, R.V., Fransen, F. and Turkmen, F., 2020, October. </i>Continuous security testing: A case study on integrating dynamic security testing tools in ci/cd pipelines</i>. In 2020 IEEE 24th International Enterprise Distributed Object Computing Conference (EDOC) (pp. 145-154). IEEE.

[TODO] Mateo Tudela, F., Bermejo Higuera, J.R., Bermejo Higuera, J., Sicilia Montalvo, J.A. and Argyros, M.I., 2020. <i>On Combining Static, Dynamic and Interactive Analysis Security Testing Tools to Improve OWASP Top Ten Security Vulnerability Detection in Web Applications</i>. Applied Sciences, 10(24), p.9119.

[TODO] Prates, L., Faustino, J., Silva, M. and Pereira, R., 2019. <i>Devsecops metrics. In Information Systems: Research, Development, Applications, Education</i>: 12th SIGSAND/PLAIS EuroSymposium 2019, Gdansk, Poland, September 19, 2019, Proceedings 12 (pp. 77-90). Springer International Publishing.

