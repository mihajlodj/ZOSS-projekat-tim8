
## PCI DSS

### PCI DSS standard
<i>Payment Card Industry Data Security Standard</i> (PCI DSS) je standard za bezbednost podataka platnih kartica [1]. Predstavlja sveobuhvatan set sigurnosnih protokola uspostavljenih kako bi se osiguralo bezbedno rukovanje informacijama o platnim karticama od strane organizacija koje učestvuju u transakcijama plaćanja. 

Ovaj standard je globalno priznat i dizajniran je da zaštiti podatke vlasnika kartica od neovlašćenog pristupa, s ciljem uspostavljanja sigurnih praksi u obradi, čuvanju i prenosu detalja o kreditnim karticama [7].

### <i>Payment Card Industry Security Standards Council</i> (PCI SSC) 
<i>Payment Card Industry Security Standards Council</i> (PCI SSC) je konzorcijum koji održava i razvija PCI DSS [7].
Formiran je od strane vodećih kompanija za platne kartice kao što su 
[Visa](https://en.wikipedia.org/wiki/Visa_Inc.)[2], 
[MasterCard]()[3], 
[American Express](https://en.wikipedia.org/wiki/American_Express)[4], 
[Discover](https://en.wikipedia.org/wiki/Discover_Card)[5] i 
[JCB](https://en.wikipedia.org/wiki/JCB_Co.,_Ltd.)[6]. 
Ovi zahtevi obuhvataju niz direktiva i smernica za bezbednost kojih se organizacije moraju pridržavati kako bi postigle i održale usaglašenost sa standardom.

### Sigurnosna pravila
Sigurnosna pravila se grupišu prema cilju koji zadovoljavaju. Postoje 6 ciljeva i 12 pravila [8][9].
#### Cilj <b>Pravljenje i održavanje bezbedne računarske mreže</b>
1. Instalirajte i održavajte konfiguraciju <i>firewall</i>-a radi zaštite podataka vlasnika kartica.
2. Ne koristite podrazumevane vrednosti koje dolaze od dobavljača za sistemsku lozinku i druge sigurnosne parametre.
#### Cilj <b>Zaštita podataka vlasnika kartice</b>
3. Štitite uskladištene podatke vlasnika kartice.
4. Šifrujte prenos podataka vlasnika kartice preko otvorenih, javnih mreža.
#### Cilj <b>Održavanje programa upravljanja ranjivostima</b>
5. Koristite i redovno ažurirajte antivirusni softver ili programe.
6. Razvijajte i održavajte sigurne sisteme i aplikacije.
#### Cilj <b>Implementacija jake kontrole pristupa</b>
7. Ograničite pristup podacima vlasnika kartice prema poslovnoj potrebi za znanjem.
8. Dodelite jedinstveni identifikacioni broj svakoj osobi sa pristupom računaru.
9. Ograničite fizički pristup podacima vlasnika kartice.
#### Cilj <b>Redovno praćenje i testiranje mreže</b>
10. Praćenje i nadgledanje svih pristupa resursima mreže i podacima vlasnika kartice.
11. Redovno testirajte sigurnosne sisteme i procese.
#### Cilj <b>Održavanje politike informacione bezbednosti</b>
12. Održavajte politiku koja se odnosi na informacionu bezbednost za zaposlene i ugovorne radnike.

## Literatura

[1] Wiki stranica o PCI DSS https://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard

[2] Wiki stranica kompanije Visa Inc. https://en.wikipedia.org/wiki/Visa_Inc.

[3] Wiki stranica kompanije Mastercard https://en.wikipedia.org/wiki/Mastercard

[4] Wiki stranica kompanije American Express https://en.wikipedia.org/wiki/American_Express

[5] Wiki stranica kompanije Discover https://en.wikipedia.org/wiki/Discover_Card

[6] Wiki stranica kompanije JBC Co Ltd. https://en.wikipedia.org/wiki/JCB_Co.,_Ltd.

[7] Web stranica konzorcijuma PCI SSC https://www.pcisecuritystandards.org/

[8] Dokument PCI DSS standarda https://listings.pcisecuritystandards.org/documents/PCI_DSS-QRG-v3_2_1.pdf

[9] Članak IT Governance o PCI DSS-u https://www.itgovernance.co.uk/pci_dss
