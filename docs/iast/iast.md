# DevSecOps
## IAST
<i>Interactive application security testing</i> (IAST) predstavlja automatizovani proces koji se bavi analizom koda prilikom koga posvećuje pažnju bezbedonosnim propustima koji se nalaze u već pokrenbutoj aplikaciji. IAST vrši bezbednosna testiranja aplikacije <i>in real time</i> (irl) prilikom pokretanja automatskih testova, pokretanja aplikacije za potrebe ljudskih testera ili dok samu aplikaciju koristi običan korisnik.

IAST radi unutar aplikacije za razliku od statičke SAST i dinamičke DAST analize. IAST ne testira celu aplikaciju ili ceo kod. IAST testira samo one delove koji se koriste prilikom testiranja.

Osnova IAST alata jestu senzorski moduli. Senzorski moduli predstavljaju biblioteke uključene u kod aplikacije. Moduli prate ponašanje pokrenute aplikacije. Prilikom otkrivanja ranjivosti upozorenje se šalje irl. Primer neke ranjivosti je hardkodovan API ključ. 

IAST je dosta sličan DAST-u. Fokusiran je na ponašanje aplikacije u toku njenog rada. IAST analiza predstavlja kombinaciju <i>black-box</i> testiranja,skeniranja i analiziranja internih tokova aplikacije. Prednost IAST-a jeste njgova sposobnost da poveže pronađene DAST ranjivosti sa izvornim kodom kao SAST. Loša strana IAST-a je to što ga ovakav pristup čini zavisnim od programskog jezika i mora biti pokrenut pri kraju <i>pipeline</i>-a

U suštini IAST alati predstavljaju kombinaciju DAST i SAST alata. Ovom se dobija dinamična identifikacija problema u toku rada aplikacije kao u DAST-u, ali se pokrece iz servera aplikacije i analizira izvorni kod kao što to radi SAST. 


Lista alata koji se bave <i>Interactive application security testing</i>-om je velika. U nastavku će biti opisani neki od najznačajnijih.

<h1><i>HCL AppScan</i></h1> - Postoji besplatan demo ovog alata, ali da bi mogli da koristimo ovaj alat moramo da pošaljemo rahtev <i>HCL Software</i> organizaciji. Za vreme ovog istraživanja nisam dobio nazad odgovor sa njihove strane.
<h1><i>Semgrep</i></h1> - Za ovaj alat je isti slučaj kao i za prethodni.
<h1><i>Contrast Security</i></h1> - Za ovaj alat je isti slućaj kao i za prethodna dva, ali su traženi potrebni podaci za slanje zahteva za demo alata dosta opširniji.
<h1><i>Snyk</i></h1>


## Literatura
[1] IAST osnove - https://www.veracode.com/security/interactive-application-security-testing-iast#:~:text=IAST%20(interactive%20application%20security%20testing,interacting”%20with%20the%20application%20functionality.

[2] IAST osnove 2 - https://snyk.io/learn/application-security/iast-interactive-application-security-testing/#what-is