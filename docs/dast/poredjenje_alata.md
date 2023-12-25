# TODO
 - scope i context za zap, cvorovi

U okviru ovog projekta će biti analizirani i upoređeni sledeći alati za dinamičku analizu sigurnosnih aspekata softvera: OWASP ZAP, *Burp Suite* (besplatna i plaćena verzija), W3AF i *Arachni*. Dva najbolja alata će onda biti implementirana u okviru DevSecOps *pipeline*-a. Pri tome u obzir za implementaciju ne dolazi plaćena verzija *Burp Suite*-a, već on ulazi u poređenje da bi se stekao uvid u to koliko open source alati odstupaju od plaćenih alata. Kao izvor informacija o alatima će biti korišćena njihova zvanična dokumentacija, te ako u dokumentaciji nije navedena određena funkcionalnost, smatraće se da je alat ne poseduje.

**ZAP** je *open source* alat koji omogućava ručno i automatizovano testiranje sigurnosnih aspekata softvera. ZAP može da presreće, analizira, menja i prosleđuje zahteve koji se šalju između klijenta i ciljne veb aplikacije. Skeniranje može biti aktivno i pasivno. Pasivno skeniranje se sastoji samo iz pronalaska dostupnih URL-ova i resursa, dok aktivno skeniranje podrazumeva i napade na pronađene URL-ove i resurse. Pasivno skeniranje se smatra sigurnim jer ne menja odgovore. Pasivnim skeniranjem se mogu otkriti neke ranjivosti, te se mogu identifikovati lokacije u softveru koje zahtevaju dalju analizu. Aktivnim skeniranjem se otkriva veći skup ranjivosti u softveru. U okviru njega se softver napada poznatim napadima i moguće ga je ugroziti. Postoji dosta plugina za ZAP koji pružaju dodatne specijalizovane funkcionalnosti. ZAP takođe može izvršavati napade preko API-a, koji se može importovati u više formata (GraphQL, OpenAPI, SOAP, *Postman*). Za svaku veb aplikaciju koja se testira zadaje se kontekst, u okviru kog se navode podešavanja specifična za posmatranu aplikaciju.

***Burp Suite*** alat, kao i ZAP, omogućava ručno i automatizovano testiranje sigurnosnih aspekata softvera, prvenstveno veb aplikacija. Ovaj alat nije *open source*, već ima *Community* verziju koja je besplatna i *Professional* i *Enterprise* verzije koje se plaćaju. Najznačajniji alati od kojih se *Burp Suite* sastoji su: *Proxy*, *Scanner*, *Intruder*, *Repeater*, *Sequencer*, *Decoder* i *Comparer*. *Proxy* alat predstavlja veb *proxy* koji presreće HTTP zahteve između *browser*-a i ciljne aplikacije, te omogućava uvid u njih i izmenu njihovog sadržaja. *Scanner* je zadužen za proces automatskog pronalaska dostupnih URL-ova (navigira kroz aplikaciju i kreira njenu reprezentaciju) i identifikacije ranjivosti veb aplikacija. Nije dostupan u besplatnoj verziji *Burp Suite*-a. *Intruder* omogućava podešavanje napada koji šalju veb aplikaciji isti zahtev više puta, sa različitim payload-ovima. Repeater omogućava izmenu i uzastopno slanje HTTP ili *WebSocket* poruka. Sequencer testira koliko su određene vrednosti zaista nasumične (npr. tokeni sesije, Anti-CSRF tokeni i tokeni za reset-ovanje lozinke). *Decoder* se koristi za enkodovanje i dekodovanje podataka u različite formate. Dekodovanje se može obavljati ručno, a moguće je i automatski detektovati format enkodovanja. Comparer omogućava poređenje razičitih podataka (najčešće HTTP zahteva ili odgovora) i prikazivanje razlika između njih.

**W3AF** je *open source framework*. Ima tri osnovna tipa plugin-a: *crawl*, *audit* i *attack*. Zadatak crawl plugin-a je da pronalaze nove URL-ove veb aplikacije, odnosno da proširuju moguću površinu napada. Pri tome je moguće uključiti više crawl plugin-a istovremeno, koji će onda funkcionisati tako da jedan plugin pronalazi novi URL na osnovu URL-a koji je drugi *plugin* pronašao, i tako u krug. Audit plugin-i generišu podatke na osnovu kojih je moguće identifikovati ranjivosti i šalju ih tačkama koje su *crawl plugin*-i otkrili. Attack plugin-i eksploatišu ranjivosti koje su audit *plugin*-i identifikovali. Osim ova tri glavna tipa, postoje i neki drugi tipovi *plugin*-a, u čije zadatke spadaju: generisanje izveštaja, identifikovanje dodatnih informacija o ciljnom sistemu (npr. operativni sistem i instalirani *web application firewall*-i), izmena HTTP zahteva i odgovora na osnovu regularnih izraza, te *bruteforce*-ovanje *login* stranice. 

***Arachni*** je *open source framework* prvenstveno namenjen za dinamičku analizu sigurnosnih aspekata veb aplikacija. Skeniranje se vrši automatski, nakon što se zada početni URL. Pri tome je moguće zadati kriterijume za filtriranje stranica od interesa i odbacivanje redundantnih stranica. Provere sigurnosnih aspekata se dele na pasivne i aktivne. Pasivne provere proveravaju postojanje određenjih fajlova i foldera, dok aktivne provere interaguju sa veb aplikacijom preko ulaznih komponenti. Omogućeno je instaliranje plugin-a za dodavanje različitih funkcionalnosti koje nisu deo *Arachni* jezgra.

Alati će se porediti po sledećim kriterijumima:

- **[Sposobnosti skenera](sposobnosti_skenera.md)**
    - Podržani protokoli
    - Podržane aplikacije
    - Mogućnost automatskog skeniranja
    - Podržani režimi skeniranja
    - Mogućnost konfiguracije skenera
    - Ranjivosti koje se mogu otkriti
    - Upravljanje *false positive*-ima
- **[Prava pristupa](prava_pristupa.md)**
    - Autentifikacija
    - Upravljanje sesijom 
- **[Sposobnosti *crawler*-a](sposobnosti_crawlera.md)**
    - Mogućnost konfigurisanja
    - Podrška za moderne veb aplikacije
- **[Izveštaji](izvestaji.md)**
    - Podržani formati
    - Sadržaj
    - Mogućnost podešavanja
- **[Mogućnosti kontrole](mogucnosti_kontrole.md)**
    - Zakazivanje skeniranja
    - Mogućnost pauziranja i nastavljanja
    - Mogućnost konkurentnog skeniranja
    - Podržani korisnički interfejsi

U tabeli ispod je dat sažetak karakteristika upoređivanih alata.

<table>
    <tbody>
        <tr>
            <th></th>
            <th>ZAP</th>
            <th>Burp Suite paid</th>
            <th>Burp Suite free</th>
            <th>W3AF</th>
            <th>Arachni</th>
        </tr>
        <tr>
            <td>Podržani protokoli</td>
            <td>HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3, SSL/TLS, HTTP Keep-Alive</td>
            <td>HTTP/1.0, HTTP/1.1, SSL/TLS, HTTP/2, HTTP Keep-Alive</td>
            <td>HTTP/1.0, HTTP/1.1, SSL/TLS, HTTP Keep-Alive</td>
            <td>HTTP/1.0, HTTP/1.1, SSL/TLS</td>
            <td>HTTP/1.0, HTTP/1.1, SSL/TLS</td>
        </tr>
        <tr>
            <td>Podržane aplikacije</td>
            <td>Veb aplikacije, API <i>endpoint</i>-i, mrežni portovi, veb <i>socket</i>-i, mobilne aplikacije</td>
            <td>Veb aplikacije, API <i>endpoint</i>-i, veb <i>socket</i>-i, mobilne aplikacije</td>
            <td>Veb aplikacije, veb <i>socket</i>-i, mobilne aplikacije</td>
            <td>Veb aplikacije, API <i>endpoint</i>-i</td>
            <td>Veb aplikacije</td>
        </tr>
        <tr>
            <td>Mogućnost automatskog skeniranja</td>
            <td>Da</td>
            <td>Da</td>
            <td>-</td>
            <td>Da</td>
            <td>Da</td>
        </tr>
        <tr>
            <td>Podržani režimi skeniranja</td>
            <td>Aktivno i pasivno, <i>safe</i>, <i>protected</i>, <i>standard</i> i <i>attack</i> režim</td>
            <td>Aktivno i pasivno</td>
            <td>-</td>
            <td>Aktivno, <i>grep plugin</i>-i za pasivno</td>
            <td>Aktivno i pasivno</td>
        </tr>
        <tr>
            <td>Mogućnost konfiguracije skenera</td>
            <td>Najviše mogućnosti</td>
            <td>Velik broj mogućnosti</td>
            <td>-</td>
            <td>Manje mogućnosti</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Ranjivosti koje se mogu otkriti</td>
            <td>147 ugrađeno, sa <i>add-on</i>-ima oko 230</td>
            <td>170 kategorija, 290 ranjivosti</td>
            <td>?</td>
            <td>oko 200</td>
            <td>oko 110</td>
        </tr>
        <tr>
            <td>Autentifikacija</td>
            <td>Ručna, HTTP Basic, Digest, NTML, Form-based, JSON-based, Script-based, Browser-based</td>
            <td>HTTP Basic, NTLMv1, NTLMv2</td>
            <td>-</td>
            <td>HTTP Basic, NTLM, Form-based, Postavljanje HTTP cookie-a</td>
            <td>HTTP Basic, NTLM, SSL-based, Form-based, Kerberos, Script-based</td>
        </tr>
        <tr>
            <td>Upravljanje sesijom</td>
            <td>Cookie-based, HTTP Auth, Script-based, Header-based</td>
            <td>Cookie jar, pravila upravljanja, makro</td>
            <td>?</td>
            <td>Authentication plugin-i, cookie jar</td>
            <td>Cookie jar</td>
        </tr>
        <tr>
            <td>Podrška za moderne veb aplikacije</td>
            <td>AJAX spider</td>
            <td>Integrisani Chromium browser</td>
            <td>-</td>
            <td>web_spider plugin, spider_man plugin</td>
            <td>Integrisani browser</td>
        </tr>
        <tr>
            <td>Mogućnost konfigurisanja crawler-a</td>
            <td>Najviše mogućnosti</td>
            <td>Velik broj mogućnosti</td>
            <td>-</td>
            <td>Manje mogućnosti</td>
            <td>Manje mogućnosti</td>
        </tr>
    </tbody>
</table>
