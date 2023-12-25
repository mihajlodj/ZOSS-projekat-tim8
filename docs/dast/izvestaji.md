## Izveštaji

Potrebno je da alati omoguće generisanje izveštaja sa podesivim sadržajem i u različitim formatima, kako bi rezultati skeniranja bili vidljivi i kako bi se mogli analizirati van samog alata. Mogućnost podešavanja sadržaja izveštaja je posebno značajna, jer izveštaje često analiziraju ljudi iz različitih timova u okviru organizacije. U nastavku je da to poređenje alata po njihovim mogućnostima za generisanje izveštaja.

- ### Podržani formati

    U nastavku su za svaki alat nabrojani formati u koje je moguće eksportovati generisane izvešate.

    **ZAP**: HTML, XML, JSON, Markdown, PDF

    ***Burp Suite*** (plaćena verzija): XML, HTML, slanje putem *mail*-a

    **W3AF**: CSV, HTML, Text, XML, slanje putem *mail*-a

    ***Arachni***: HTML, XML, Text, JSON, Marshal, YAML, AFR (*Arachni Framework Report*)

- ### Mogućnost podešavanja

    **ZAP**
    
    Postoji Report Generation *add-on* koji omogućava podešavanja sadržaja i formata izveštaja. Takođe postoji više predefinisanih šablona za generisanje izveštaja, koji se međusobno razlikuju po formatu, nivuo detaljnosti i sadržaju. Moguće je odabrati kontekste i sajtove čije ranjivosti će se prikazivati u izveštaju (podrazumevano će svi biti uključeni)

    ***Burp Suite*** (plaćena verzija)
    
    Postoji report wizard u kome je moguće podesiti željeni sadržaj i format izveštaja. Moguće je podesiti na koji način će se razmenjene HTTP poruke prikazati u izveštaju (u potpunosti se prikazuju, prikazuju se samo relevantni delovi, ne prikazuju se uopšte). Mogu se izabrati oni tipovi ranjivosti koji će se prikazati u izveštaju, da se ne prikazuju oni koji su manje interesantni za konkretan slučaj. Takođe je moguće zadati način na koji će prikazane ranjivosti biti grupisane u okviru izveštaja (po tipu, po ozbiljnosti ili po URL-u), te kao i na kom nivuo detaljnosti će biti prikazane.

    **W3AF**
    
    U dokumentaciji su navedene samo mogućnosti za podešavanje lokacije izveštaja i toga da li će uklučiti debug informacije ili ne.

    ***Arachni***
    
    U dokumentaciji nisu navedeni načini za podešavanje izveštaja

- ### Sadržaj

    **ZAP**
    
    Konkretan sadržaj izveštaja zavisi od odabranog šablona prema kome se izveštaj pravi. U informacije koje izveštaji mogu prikazati spadaju:
    - Procenat i broj ranjivosti po ozbiljnosti (*High*, *Medium*, *Low*, *Informational*)
    - Broj i nazivi identifikovanih ranjivosti
    - URL-ovi na kojima su ranjivosti identifikovane
    - Objašenjenje uticaja koje identifikovane ranjivosti imaju na aplikaciju
    - Broj identifikovanih ranjivosti po nivou rizika (*High*, *Medium*, *Low*, *Informational*) i po nivou poverljivosti (*User Confirmed*, *High*, *Medium*, *Low*)
    - Broj identifikovanih ranjivosti (po nivou rizika) za svaki sajt
    - Zaglavlje i telo HTTP zahteva i odgovora

    ***Burp Suite*** (plaćena verzija)
    
    Omogućava generisanje standardnih izveštaja i compliance izveštaja. Podaci koji mogu da se nađu i izveštaju su tip otkrivenih ranjivosti, njegov opis, standardi predlog za otklanjanje tipa ranjivosti, specifične informacije relevantne za ranjivost, specifičan predlog za otklanjanje konkretne ranjivosti, mapiranje ranjivosti na Common Weakness Enumeration listu, te URL na kom je otkrivena ranjivost i razmenjene HTTP poruke.

    **W3AF**
    
    U dokumentaciji nije navedeno šta konkretno ulazi u sadržaj izveštaja.

    ***Arachni***
    
    U dokumentaciji nije navedeno šta konkretno ulazi u sadržaj izveštaja.
