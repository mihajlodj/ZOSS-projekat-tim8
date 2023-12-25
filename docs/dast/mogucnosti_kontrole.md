## Mogućnosti kontrole ## 

- ### Zakazivanje skeniranja

    Pošto skeniranje može dugo trajati, pogodno je da se može unapred zakazati vreme kada će se ono obavljati, kao i maksimalna dužina trajanja skeniranja.

    **ZAP**: Zakazivanje skeniranja nije podržano

    ***Burp Suite***: Moguće je zakazati skeniranje, pri čemu se zadaje datum i vreme prvog skeniranja i period ponavljanja skeniranja. Skeniranje može da se ponavlja zauvek, određen broj puta ili do određenog datuma. Ne postoji način da se zada maksimalno vreme trajanja skeniranja.

    **W3AF**: Zakazivanje skeniranja nije podržano

    ***Arachni***: Zakazivanje skeniranja nije podržano

- ### Mogućnost pauziranja i nastavljanja skeniranja
    
    **ZAP**: Da

    ***Burp Suite***: Da

    **W3AF**: Da

    ***Arachni***: Da. Takođe ima mogućnost suspendovanja procesa i restore-ovanja sa diska.

- ### Mogućnost konkurentnog skeniranja

    **ZAP**: Moguće je konkurentno skenirati više host-ova, kao i podesiti broj niti koje će skener da koristi za jedan host.

    ***Burp Suite***: Da

    **W3AF**: Ne?

    ***Arachni***: Moguće je asinhrono slati HTTP zahteve i podešavati konkurentnost (ručno ili automatski).

- ### Podržani korisnički interfejsi

    **ZAP**: CLI, desktop aplikacija, Heads Up Display (browser) – ne održava se više

    ***Burp Suite***: CLI, desktop aplikacija

    **W3AF**: CLI, desktop aplikacija

    ***Arachni***: CLI, veb interfejs
