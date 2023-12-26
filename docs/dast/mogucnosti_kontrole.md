## Mogućnosti kontrole

Pod mogućnostima kontrole alata se podrazumevaju aspekti koji se tiču fleksibilnosti pri radu sa alatima. U ovom poglavlju su navedeni neki od takvih aspekata i analizirano je u kojoj meri ih posmatrani alati podržavaju. 

- ### Zakazivanje skeniranja

    Pošto skeniranje može dugo trajati, pogodno je da se može unapred zakazati vreme kada će se ono obavljati, kao i maksimalna dužina trajanja skeniranja.

    **ZAP**: Zakazivanje skeniranja nije podržano

    ***Burp Suite*** (plaćena verzija): Moguće je zakazati skeniranje, pri čemu se zadaje datum i vreme prvog skeniranja i period ponavljanja skeniranja. Skeniranje može da se ponavlja zauvek, određen broj puta ili do određenog datuma. Ne postoji način da se zada maksimalno vreme trajanja skeniranja [1].

    **W3AF**: Zakazivanje skeniranja nije podržano

    ***Arachni***: Zakazivanje skeniranja nije podržano

- ### Mogućnost pauziranja i nastavljanja skeniranja
    
    **ZAP**: Da [2]

    ***Burp Suite*** (plaćena verzija): Da [3]

    **W3AF**: Da [4]

    ***Arachni***: Da. Takođe ima mogućnost suspendovanja procesa i restore-ovanja sa diska [5].

- ### Mogućnost konkurentnog skeniranja

    **ZAP**: Moguće je konkurentno skenirati više host-ova, kao i podesiti broj niti koje će skener da koristi za jedan host [6].

    ***Burp Suite*** (plaćena verzija): Da [7]

    **W3AF**: Ne

    ***Arachni***: Moguće je asinhrono slati HTTP zahteve i podešavati konkurentnost (ručno ili automatski) [5].

- ### Mogućnost ponovnog iskorišćenja konfiguracije skeniranja

    Često je potrebno uložiti dosta vremena kako bi se skener optimalno konfigurisao za posmatranu aplikaciju, te je poželjno da se ta konfiguracija može sačuvati kako bi se iskoristila u budućim skeniranjima.

    **ZAP** omogućava čuvanje celokupne sesije u lokalnoj bazi podataka, koja se može kasnije ponovo učitati [8].

    ***Burp Suite*** (plaćena verzija) omogućava kreiranje projektnog fajla, u kom se čuvaju svi podaci i konfuguracije kreirani prilikom rada sa alatom [9].

    ***Burp Suite*** (besplatna verzija) omogućava samo privremeno čuvanje podataka u memoriji, koji se brišu kada prestane rad sa alatom [9].

    **W3AF** omogućava čuvanje konfiguracija u profile, koji se onda mogu učitati prilikom novog skeniranja. Profile je moguće deliti sa drugim korisnicima [10].

    ***Arachni*** nema mogućnost čuvanja konfiguracije skeniranja.

- ### Podržani korisnički interfejsi

    **ZAP**: CLI, desktop aplikacija, Heads Up Display (browser) – ne održava se više

    ***Burp Suite***: CLI, desktop aplikacija

    **W3AF**: CLI, desktop aplikacija

    ***Arachni***: CLI, veb interfejs

----
## Literatura

[1]

[2]

[3]

[4]

[5]

[6]

[7]

[8]

[9]

[10]