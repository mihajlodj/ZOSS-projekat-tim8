## Sposobnosti *crawler*-a

*Crawler* (*spider*) je alat čija je namena otkrivanje dostupnih URL-ova i resursa aplikacije, odnosno otkrivanje površine napada aplikacije. Na osnovu identifikovanih URL-ova i resursa formira se interna reprezentacija aplikacije u vidu hijerarhijski organizovanih čvorova (mogućih tački za napad).

Da bi *crawler* mogao biti primenljiv nad modernim veb aplikacijama, mora imati način da identifikuje i one URL-ove koji nisu zadati u HTML kodu, već koji se generišu pomoću *JavaScript*-a ili na neki drugi način. Takođe, potrebno je naći balans između vremena utrošenog na otkrivanje URL-ova i temeljnosti pretrage, te je poželjno da alat ponudi mogućnost konfiguracije tog procesa. U nastavku je dato poređenje alata prema podršci koju pružaju za *crawling*.

- ### Podrška za moderne veb aplikacije
    
    **ZAP** ima dva *spider*-a: tradicionalni i AJAX *spider*. Tradicionalni spider pronalazi linkove tako što analizira HTML kod koji je dobijen u odgovoru veb aplikacije. On je brz, ali nema mogućnost otkrivanja linkova koji su generisani upotrebom *JavaScript* koda, te nije pogodan za moderne veb aplikacije. Međutim, AJAX *spider* ima tu mogućnost. On pokreće *browser* i koristi *Selenium* alat za otkrivanje i praćenje linkova.

    ***Burp Suite*** (plaćena verzija) sadrži integrisani *Chromium browser* koji omogućava navigaciju kroz aplikaciju, te je moguće analizirati aplikacije koje su dinamičke i značajno se oslanjaju na JavaScript.

    **W3AF** omogućava *JavaScript crawling* kroz *web_spider plugin*. Ovaj crawler može koristiti *Google Chrome* ili *Chromium* *browser* za interakciju sa veb aplikacijama (preporučuje se *Google Chrome* jer ima bolje performanse). Ukoliko je potrebno analizirati neku kompleksniju veb aplikaciju, koja koristi tehnologije poput *Flash*-a i *Java applet*-a, za crawling je potrebno iskoristiti *spider_man plugin*. Ovakva analiza mora ručno da se obavlja. *spider_man plugin* pokreće HTTP proxy, a korisnik ručno navigira sajtom. Kroz taj proces *plugin* dobavlja potrebne informacije iz HTTP zahteva. 

    ***Arachni*** sadrži integrisani *browser* koji omogućava da se testiraju veb aplikacije koje koriste tehnologije kao što su HTML5, *JavaScript*, DOM manipulacija i AJAX.

- ### Mogućnost konfigurisanja

    **ZAP** 

    Prilikom konfiguracije *spider*-a moguće je zadati:
    - maksimalnu dubinu do koje može doći počevši od zadatog URL-a
    - broj niti koje se koriste tokom *crawling*-a
    - maksimalno trajanje procesa *crawling*-a
    - maksimalni broj potomačkih čvorova koji će biti obiđeni za svaki čvor
    - maksimalnu veličinu koju odgovor može imati da bi bio parsiran
    - način za upravljanje parametrima upita
    - da li će se postavljati *Referer* zaglavlje na poslate zahteve
    - da li cookie-ji treba da se prihvate, način na koji se obrađuju forme
    - da li će se parsirati HTML komentari, robots.txt fajlovi, sitemap.xml fajlove, te određeni fajlovi sa metapodacima.
    
    Prilikom konfiguracije AJAX *spider*-a moguće je podesiti:
    - koji *browser* se koristi i u kom režimu (podrazumevano je *Firefox Headless*)
    - broj prozora koje će spider korisititi (što je više prozora, proces će se brže obaviti)
    - maksimalnu dubinu do koje može doći počevši od zadatog URL-a
    - maksimalan broj stanja
    - maksimalno trajanje procesa
    - koliko dugo se čeka na događaj *browser*-a
    - koliko dugo se čeka nakon što se URL *reload*-uje
    - da li će se sa elementima pokušati interagovati samo jednom ili više puta
    - da li će poljima formi zadavati nasumične ili prazne vrednosti
    - da li će se operacija klika obavljati samo nad „*a*“, „*button*“ i „*input*“ elementima ili i nad nekim drugim
    - koje vrste resursa se mogu dobaviti.

    ***Burp Suite*** (plaćena verzija)
    
    Moguće je podesiti: 
    - maksimalan broj prelaza sa jednog linka na drugi
    - kredencijale koji će se korisititi za login (u suprotnom se obavlja neautentifikovani crawl)
    - strategiju koja omogućava prilagođavanje specifičnoj aplikaciji (definiše odnos između brzine i pokrivenosti – default, Faster, Fastest, More complete, Most complete)
    - ograničenja za trajanje procesa na osnovu proteklog vremena, ukupnog broja HTTP zahteva i broja jedinstvenih otkrivenih tačaka u aplikaciji
    - način reakcije na funkcionalnost login-a (pokušaj samostalne registracije na aplikaciju radi login-a ili namerno slanje pogrešnih kredencijala da bi se došlo do opcija za povratak naloga – pri tome se ne šalje pogrešna lozinka za neki od zadatih korisničkih imena kako ne bi došlo do zaključavanja naloga)
    - kako će se rukovati greškama, kao što su prekid konekcije ili timeout-ovi (može se podesiti broj uzastopnih timed-out zahteva pre pauziranja procesa, procenat timed-out zahteva pre pauziranja procesa ili ?)
    - da li će se forme submit-ovati
    - postavljanje vrednosti User-Agent header-a
    - da li će se korisniku prikazivati browser (default je da režim bude headless)
    - da li će se parsirati API definicije, robots.txt fajlovi, sitemap.xml fajlovi
    - način za prepoznavanje fragmenata koji se koriste za rutiranje kod *Single Page* aplikacija.

    **W3AF**
    
    Konfiguracija se najvećim delom svodi na uključivanje različitih *crawl* *plugin*-a, kojih je moguće uključiti proizvoljno mnogo. Takođe je moguće uključiti *bruteforce* *plugin* ukoliko je potrebno odraditi *bruteforce* *login*. Osim toga, moguće je podesiti:
    - da li će se skenirati sadržaj samo jednog direktorijuma
    - da li će se određene forme ili URL-ovi ignorisati

    ***Arachni***
    
    Moguće je podesiti: 
    - broj upotrebljenih *browser worker*-a
    - maksimalno vreme koje se proces može obavljati
    - da li će se omogućiti učitavanje slika
    - dimenzije ekrana, radi testiranja responzivnosti
    - da li će se čekati na određene elemente da se pojave na veb stranici

