## Prava pristupa

U ovom poglavlju su razmotrene tehnike autorizacija i upravljanja sesijom koje alati mogu da podrže. U većini aplikacija, glavnim fukcionalnostima se može pristupiti tek nakon uspešno obavljene autentifikacije. Zbog toga i alati moraju pronaći način da se autentifikuju kako bi pronašli sve ranjivosti u aplikaciji. Takođe, tokom skeniranja je neophodno da alati održavaju sesiju sa aplikacijom kako bi uspeli otkriti što veću površinu za napad i kako bi mogli slati validne zahteve koji će biti prihvaćeni. Ukoliko se ne održava sesija, aplikacija će tretirati alat kao da nije autentifikovan.

- ### Autentifikacija

    U česte metode za autentifikaciju spadaju:
    
    - HTTP Basic
    - HTTP Digest
    - HTTP Negotiate (NTLM i Kerberos)
    - Form-based - postiže se *submit*-ovanjem forme ili slanjem GET zahteva sa korisničkim imenom i lozinkom
    - JSON-based - postiže se slanjem JSON objekta sa kredencijalima na *login* URL
    - Script-based - koristi se kada je autentifikacija kompleksnija i postiže se definisanjem odgovarajuće skripte 

    U nastavku je za svaki alat naveden spisak metoda za autentifikaciju koji on podržava.
    
    **ZAP**: 
    - Ručna autentifikacija - korisnik se autentifikuje u *browser*-u dok se ZAP nalazi kao *proxy*
    - Form-based
    - JSON-based
    - HTTP/NTLM (HTTP Basic, Http Digest, NTLM)
    - Script-based
    - Browser-based (*add-on*)

    Metod za autentifikaciju se definiše na nivou konteksta.

    ***Burp Suite***: 
    - HTTP Basic
    - NTLMv1
    - NTLMv2

    **W3AF**: 
    - HTTP Basic
    - NTLM
    - Form-based
    - Postavljanje HTTP cookie-a - koristi se ako form-based autentifikacije ne uspe (ako login forma ima anti-CSRF tokene ili multifaktorsku autentifikaciju)

    ***Arachni***: 
    - HTTP Basic
    - NTLM
    - SSL-based
    - Form-based (*plugin*)
    - Kerberos
    - Script-based (*plugin*)

- ### Upravljanje sesijom

    Alati treba da znaju kada je potrebno započeti sesiju, kako *refresh*-ovati token sesije, kada je sesija istekla i kako u tom slučaju ponovo dobiti token.
    U nastavku je za svaki alat naveden spisak metoda za upravljanje sesijom koji on podržava.
    
    **ZAP** podržava sledeće metode za upravljanje sesijom:
    - Cookie-based
    - HTTP Authentication
    - *Script-based* - koristi se kada je upravljanje sesijom kompleksnije
    - *Header-based* (*add-on*)

    Cookie-based metod omogućava HTTP Sessions ekstenzija, koja 

    ***Burp Suite*** (plaćena i besplatna verzija) omogućava konfiguraciju sledećih mehanizama za upravljenje sesijom:

    - Cookie Jar - omogućava čuvanje svih cookie-ja koje je izdala veb aplikacija
      - Iz njega se uzimaju cookie-ji i ugrađuju se u HTTP zahteve
      - Moguće je podesiti na osnovu kog konkretnog Burp alata će se ažurirati njegov sadržaj (predefinisano na osnovu saobraćaja *Proxy* alata)
    - Pravila za upravljanje sesijom - pomoću njih korisnik definiše kako će se upravljati sesijama za zadatu aplikaciju
      - Za svako pravilo se definiše opseg (skup URL-ova na koje se pravilo odnosi) i akcije koje se izvršavaju kada se pravilo primeni na HTTP zahtev
      - Za svaki HTTP zahtev se određuje koja pravila treba da budu primenjena
    - Makro - predstavlja sekvencu HTTP zahteva
      - Mogu se korisiti u sklupu pravila za upravljanje sesijom radi obavljanja zadataka kao što su: dobavljanje veb stranice kako bi se utvrdilo da li je sesija još uvek validna, obavljanje *login* operacije radi dobavljanja nove sesije, dobavljanje tokena koji će se koristiti kao parametar u nekom drugom zahtevu i slično. 
    

    **W3AF** sadrži *plugin*-e za autentifikaciju (*generic* i *detailed*), koji obezbeđuju održavanje sesije tokom skeniranja. Oni se izvršavaju pre početka skeniranja, kako bi dobavili novu sesiju i nakon toga na svakih 5 sekundi, kako bi proverili da li je sesija još uvek aktivna i da li treba dobaviti novu. Dobijeni cookie-ji se čuvaji u cookie jar fajlu. 

    ***Arachni*** ima mogućnost upravljanja cookie-ima koje izdaje veb aplikacija. Oni se čuvaju u Cookie Jar-u.
