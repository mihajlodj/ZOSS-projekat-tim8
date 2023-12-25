## Sposobnosti skenera

Skeniranje veb aplikacije predstavlja proces otkrivanja njenih ranjivosti. U ovom poglavlju su razmotreni različiti aspekti procesa skeniranja i mogućnosti koje svaki od alata za njih pruža.

- ### Podržani protokoli
    Da bi se veb aplikacija mogla temeljno testirati, potrebno je da skener podrži komunikacione protokole koje koriste veb aplikacije i mrežni uređaji. U nastavku je za svaki od alata navedeno koje transportne protokole podržava.

    **ZAP**: HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3, SSL/TLS, HTTP Keep-Alive

    ***Burp Suite***: HTTP/1.0, HTTP/1.1, SSL/TLS, HTTP/2 (*plaćena verzija*), HTTP Keep-Alive

    **W3AF**: HTTP/1.0, HTTP/1.1, SSL/TLS

    ***Arachni***: HTTP/1.0, HTTP/1.1, SSL/TLS

- ### Podržane aplikacije

    U ovom poglavlju će za svaki od alata biti navedene vrste aplikacija koje je moguće testirati. 
    
    **ZAP**: Veb aplikacije, API *endpoint*-i, mrežni portovi, veb *socket*-i, mobilne aplikacije (*Android* i IOS)

    ***Burp Suite***: Veb aplikacije, API *endpoint*-i, veb socket-i, mobilne aplikacije (*Android* i IOS)

    **W3AF**: Veb aplikacije, API *endpoint*-i 

    ***Arachni***: Veb aplikacije

- ### Mogućnost automatskog skeniranja
    Automatsko skeniranje veb aplikacija omogućavaju svi alati osim *Burp Suite* besplatne verzije.

- ### Podržani režimi skeniranja
    
    Alati mogu podržavati različite režime skeniranja, koji se razlikuju po tome koje akcije su dozvoljene u okviru njih, odnosno koliko mogu da ugroze ciljnu aplikaciju. 

    **ZAP**

    Ima mogućnost aktivnog i pasivnog skeniranja. Prilikom pasivnog skeniranja, HTTP zahtevi i odgovori se ne menjaju na način koji može da ugrozi aplikaciju, dok se u toku aktivnog skeniranja aplikacija napada kako bi se pronašle ranjivosti i potencijalno se ugrožava.
    Takođe su podržani različiti režimi rada alata:
    - *Safe* režim – nisu dozvoljene potencijalno opasne operacije (operacije koje mogu ugroziti aplikaciju)
    - *Protected* režim – potencijalno opasne operacije su dozvoljene samo nad unapred definisanim URL-ovima (koji su dodati u *scope*)
    -  Standard režim (podrazumevani) – ne postoje ograničenja koja se tiču toga koje operacije su dozvoljene
    -  *Attack* režim – novi čvorovi u *scope*-u se aktivno skeniraju čim se dodaju u *scope*

    ***Burp Suite***

    Takođe pruža mogućnost aktivnog i pasivnog skeniranja, koji funkcionišu po istom principu kao i u slučaju ZAP alata.

    **W3AF**
    
    Postoje *grep plugin*-i, čiji je zadatak analiziraju HTTP zahteve i odgovore radi prikupljanja informacija o ciljnoj aplikaciji, kao što su greške, cookie-ji, email-ovi, komentari i slično. Međutim, veći je fokus na aktivnom skeniranju nego na pasivnom. 

    ***Arachni***

    Pruža mogućnost aktvnog i pasivnog skeniranja. Pasivno skeniranje se najviše svodi na utvrđivanje postojanja određenih fajlova i foldera.

- ### Mogućnost konfiguracije skenera

    Da bi se skeniranje moglo obaviti što temeljnije i efikasnije, potrebno je da alati omoguće konfiguraciju skenera tako da se on prilagodi specifičnoj aplikaciji.

    **ZAP**

    Dozvoljena podešavanja prilikom aktivnog skeniranja:

    - broj *host*-ova koji će biti skenirani konkurentno
    - broj niti koje će biti upotrebljene prilikom skeniranja (po *host*-u)
    - maksimalan broj rezultata koji će biti prikazani
    - maksimalno vreme trajanja skeniranja za jedno pravilo
    - maksimalan broj upozorenja koje pravilo može generisati tokom skeniranja (ukoliko se taj broj prevaziđe, pravilo se preskače)
    - maksimalno vreme trajanja celokupnog skeniranja
    - vremenski razmak između zahteva
    - zadavanje polise skeniranja (polisa skeniranja definiše koja pravila će se pokretati u sklopu aktivnog skeniranja i koliko zahteva će se za njih praviti)
    - da li je potrebno ponovo skenirati sve čvorove ako se *scope* promeni pri *attack* režimu

    Dozvoljena podešavanja prilikom pasivnog skeniranja:

    - da li se skeniranje sprovodi samo nad zahtevima iz *scope*-a
    - maksimalan broj upozorenja koja se mogu generisati pravilom
    - maksimalna dozvoljena veličina zahteva koji može biti skeniran

    ***Burp Suite***

    Postoje predefinisana podešavanja skenera, koji omogućavaju da se brzo odabere odgovarajući balans između brzine i temeljnosti skeniranja. Takođe je moguće zadati sopstvena, detaljnija podešavanja, kako bi se skener još bolje prilagodio aplikaciji.

    Predefinisana podešavanja skenera su:
    
    - *Lightweight* - najbrži režim, skeniranje traje najviše 15 minuta
    - *Fast* - brzo daje generalni pregled sigurnosnih aspekata aplikacije 
    - *Balanced* - koristi se za skeniranje opšte namene, predstavlja dobar balans između brzine i temeljnosti
    - *Deep* - namenjen za detaljan uvid u sigurnosne aspekte aplikacije, može dugo da traje

    Podešavanja koje korisnik može da zada:

    - brzina skeniranja (*Fast*, *Normal*, *Thorough*)
    - preciznost - definiše koliko "dokaza" je potrebno skeneru da bi nešto prijavio kao ranjivost (cilj može biti smanjenje broja *false positive*-a ili *false negative*-a)
    - maksimalna dužina trajanja skeniranja
    - da li će se automatski održavati sesija
    - da li će se pratiti preusmeravanja (*redirect*), pošto se neke ranjivosti samo tako mogu otkriti

    **W3AF**

    Podešavanje skeniranja se svodi na to koji *plugin*-i će biti uključeni u proces i kako će biti podešeni. Svaki *plugin* ima svoja specifična podešavanja.

    ***Arachni***
    
    Konkretna podešavanja skenera nisu navedena u dokumentaciji


- ### Ranjivosti koje se mogu otkriti ###
    Svi alati omogućavaju otkrivanje najčešćih grupa ranjivosti, u koje spadaju *injection* napadi, *path traversal* napadi, XSS, CORS i slično. Međutim, razlikuju se po ukupnom broju ranjivosti koje mogu da otkriju.

    **ZAP** definiše 147 pravila za detekciju ranjivosti u aplikacijama. Međutim, moguće je sa ZAP *Marketplace*-a instalirati dodatna pravila, čime se omogućava detektovanje ukupno oko 230 ranjivosti. Njih 96 se identifikuje aktivnim skeniranjem, dok se ostali mogu identifikovati pasivnim skeniranjem. 
    
    ***Burp Suite*** definiše 170 kategorija koje obuhvataju ukupno 290 ranjivosti. Sva pravila za njihovo detektovanje su ugrađena u alat, te nije potrebno instalirati dodatne *plugin*-e.

    **W3AF** omogućava detekciju oko 200 ranjivosti. Ne postoje ugrađena pravila, već je za svaku kategoriju ranjivosti je potrebno instralirati odgovarajući plugin.
    
    ***Arachni*** omogućava detekciju oko 110 ranjivosti, čija su pravila ugrađena, odnosno nije neophodno instalirati dodatne plugin-e.

- ### Upravljanje *false positive*-ima ###

    Prilikom upotrebe svaki od navedenih alata, moguće je da se dobiju *false positive*-i kao ranjivost prijavi nešto što ne predstavlja zaista problem.

    **ZAP** omogućava dodatno podešavanje pravila skeniranja, polise skeniranja i alert filtera, kako bi se smanjio broj mogućih false positive rezultata. Za pasivna pravila je moguće postaviti prag da prijave potencijalnu ranjivost.Ako je prag nizak (*Low*), više ranjivosti će biti prijavljeno, što može dovesti do većeg broja *false positive*-a. Ako je prag visok (*High*), manja je verovatnoća da je biti prijavljeni *false positive*-i, ali zato postoji mogućnost da neke stvarne ranjivosti ne budu prijavljene (*false negative*-i).

    ***Burp Suite*** omogućava da se dobijeni false positive rezultati zapamte za buduća skeniranja, kako se ne bi ponavljali. Takođe omogućava podešavanje prepoznavanja *false positive*-a. Podešavanjem preciznosti skenera moguće je smanjiti broj *false positive*-a.

    **W3AF** i ***Arachni*** u svojim dokumentacijama ne navodi nikakav konkretan mehanizam za smanjenja broja dobijenih *false positive* rezultata.
