# ZOSS – opis projekta
## Uvod
DevSecOps predstavlja nadogradnju na DevOps ciklus razvoja softvera, koja promoviše implementaciju sigurnosnih kontrola ranije u toku razvoja softvera, umesto da se implementiraju tek na kraju, nakon što su odrađeni svi funkcionalni zahtevi. Na ovaj način sigurnost se uključuje u svaki koraka razvoja softvera. Takođe nalaže da se u toku razvoja softvera prate dobre sigurnosne prakse i sigurnosni dizajn šabloni, te da se testovi sigurnosti obavljaju kontinualno, nakon svake izmene u projektu [1]. Pri tome je sigurnosne kontrole u DevOps <i>workflow</i>-u potrebno automatizovati, jer uvedena sigurnost ne sme da naruši agilnost razvoja koju DevOps omogućava. Automatizovane sigurnosne kontrole su efektivnije i skalabilnije, brzo otkrivaju ranjivosti, izveštavaju o njima i daju predloge za izmene [2].

Međutim, javljaju se poteškoće u ostvarivanju potpune automatizacije tradicionalnih bezbednosnih praksi, koje se inače obavljaju ručno. U te prakse spadaju briga o zaštiti privatnosti i podataka prilikom dizajniranja softverskog rešenja, modelovanje pretnji i upravljanje rizicima [3]. DevSecOps se značajno oslanja na upotrebu alata, te je razvijen velik broj alata za sve korake DevSecOps-a. Pošto alati nisu dovoljno standardizovani, različiti timovi koriste različite alate, što dodatno otežava automatizaciju sigurnosnih kontrola. Takođe, alati su često kompleksni i nekada nemaju dovoljno dobru dokumentaciju koja se odnosi na njihova sigurnosna podešavanja, što može biti problematično za programere koji nemaju značajno znanje iz oblasti sigurnosti [3]. 

Fokus ovog projekta će biti izučavanje i upotreba alata koji omogućavaju sledeće vrste sigurnosnih provera: 
1. Provera sadržavanja [<i>Git Secrets</i>](/docs/git-secrets.md)-a – da li sam source kod sadrži neku tajnu (secret)
2. Provera [<i>Software Composition Analysis</i>](/docs/sca/sca.md) – provera ranjivosti u 3rd party bibliotekama koje softver koji razvijamo koristi
3. [<i>Static Application Security Testing</i>](/docs/sast.md) (SAST) - analiza source koda rešenja koje razvijamo kako bi se pronašle ranjivosti
4. [<i>Dynamic Application Security Testing</i>](/docs/dast.md) (DAST) - simuliranje ponašanja napadača, izvodi se na serveru koji se koristi za testiranje (nakon <i>deploy</i>-ovanja aplikacije)

Ove provere će se obavljati u sklopu DevOps <i>[pipeline](/docs/pipeline/Jenkinsfile)</i>-a. Projekat se inicijalizuje i postavlja na GitHub, te se nakon svakog <i>push</i>-a prvo obavlja provera postojanja osetljivih kredencijala u kodu (<i>Git secrets</i>). Tu proveru će obavljati *Trufflehog* alat. Ako kod ne sadrži osetljive kredencijale, može se vršiti kompalacija (<i>build</i>). Po završetku kompajliranja proverava se postojanje ranjivosti u zavisnostima koje projekat koristi (SCA), za šta će u sklopu *pipeline*-a biti implementiran *Snyk* alat. Ako ne postoje poznate ranjivosti, prelazi sa statičku analizu izvornog koda (SAST). Za ovu proveru će biti implementirani alati *SonarQube* i *Semgrep*. Nakon toga se vrši <i>deploy</i> na testno okruženje. U tom okruženju će se izvršavati dinamičko testiranje da bi se otkrile ranjivosti koje nije moguće naći statičkom analizom. Dinamičko testiranje će biti izvršeno uz pomoć OWASP ZAP alata. Svaki od alata korišćeni u ove svrhe generišu svoje izveštaje, i ti izveštaji se <i>upload</i>-uju u <i>DefectDojo</i>(Alat za prikaz izveštaja). Grafički prikaz <i>pipeline</i>-a dat je na slici ispod.  

![Pipeline diagram](/docs/images/pipeline_diagram.png)

Ono što neće biti fokus ovog istraživanja jeste razvijanje same aplikacije. Za testiranje će biti upotrebljena OWASP *Juice Shop* aplikacija, koja je savremena veb aplikacija sa poznatim ranjivostima. Tehnologije koje koristi su *Angular*, *Node.js* i *Express*.  Razvoj i demonstracija <i>pipeline</i>-a će se obaviti u lokalu (odnosno ručnim pokretanjem na jednom računaru), iako se pravi <i>pipeline</i>-ovi se <i>host</i>-uju na serverima (serveri mogu biti u <i>cloud</i> okruženju ali i <i>on-prem</i>). Pokretanje automatskih testova i izvršavanje manuelnih testova kako bi se proverio rad samog softverskog rešenja koje se razvija nije fokus ovog istraživanja i neće biti implementirano u <i>pipeline</i>-u.

## Literatura:
[1]	Kumar, R. and Goyal, R., 2020. <i>Modeling continuous security: A conceptual model for automated DevSecOps using open-source software over cloud (ADOC)</i>. Computers & Security, 97, p.101967.

[2]	Myrbakken, H. and Colomo-Palacios, R., 2017. DevSecOps: <i>a multivocal literature review. In Software Process Improvement and Capability Determination</i>: 17th International Conference, SPICE 2017, Palma de Mallorca, Spain, October 4–5, 2017, Proceedings (pp. 17-29). Springer International Publishing.

[3]	Rajapakse, R.N., Zahedi, M., Babar, M.A. and Shen, H., 2022. <i>Challenges and solutions when adopting DevSecOps: A systematic review</i>. Information and software technology, 141, p.106700.
