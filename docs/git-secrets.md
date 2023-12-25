# DevSecOps
## Git Secrets
<i>Secrets</i> (tajne) se danas koriste svuda (API ključevi, sertifikati, kredencijali baze podataka, SSH ključevi, lozinke, itd). Češto se dešava da organizacije ostave ove osetljive podatke u <i>plain-text</i> formatu u konfiguracionim fajlovima ili u samom kodu projekta.[1]

Iz ovog razloga postoje različiti koncepti najboljih praksi kojih programeri i developeri treba da se pridržavaju, kao i alati koji tome pomažu. Neke od tih praksi su: dodavanje osetljivih fajlova u <i>.gitignore</i>, konstantno menjanje tajni (tj, korišćenje tajni sa kratkim životnim vekom), <i>whitelisting</i> IP adresa (ako je to moguće), definisanje minimalnih potrebnih privilegija (<i>permissions</i>) API-jima koji su u upotrebi, itd.[1]

Jedna od najbitnijih praksi jeste automatizacija pronalaženja tajni u kodu. Iako se za slične potrebe (tj. proveru koda) koristi <i>code-review</i>, on nije pouzdan jer je čovek taj koji proverava kod, a čovek je sklon greškama. U te svrhe se koriste alati koji mogu taj posao uraditi umesto čoveka. Često se ovi alati mogu i integrisati u CI/CD <i>pipeline</i>.

Alati koji služe za automatizaciju pronalaženja tajni (i ostalog) su: <i>GitGuardian</i> (<i>ggshield</i> - CLI API za <i>GitGuardian</i>), <i>GitLeaks</i>, <i>Trufflehog</i>, <i>GitRob</i>, <i>GitWatchman</i>, itd.

U ovom radu ćemo se primarno fokusirati na Trufflehog i Gitleaks. Za razliku od većine svojih alternativa, ova dva alata su besplatna i dobijaju redovna ažuriranja. I Trufflehog i Gitleaks su CL (<i>Command Line</i>) alati koji rade istu stvar (skeniraju izvorni kod da bi pronašli osetljive informacije), jedina razlika je u tome koje tehnike koriste za detektovanje tih tajni. Trufflehog koristi regularne izraze dok se Gitleaks oslanja na regularne izraze i proveru entropije.
Postoji i rešenje kao GitGuardian koje je veoma moćno i sveobuhvatno, ali je primarno komercionalno rešenje sa veoma skupom godišnjom subskripcijom.

Karakteristike <i>Trufflehog</i>-a:

Prednosti:
- Podržava skeniranje <i>remote</i> repozitorijuma
- Dobro klasifikuje tajne
- Jednostavno pokretanje i integracija u CI <i>pipeline</i>

Mane:
- U poređenju sa <i>Gitleaks</i>-om, prepoznaje manje tajni

Karakteristike <i>Gitleaks</i>-a:

Prednosti:
- Prepoznaje veliki broj tajni
- Čitljiviji i informativniji format izveštaja

Mane:
- Od verzije 8.0.0 više ne podržava skeniranje <i>remote</i> repozitorijuma
- Komplikovana komanda za pokretanje, pa je i integracija u CI <i>pipeline</i> komplikovanija (da bi se vršilo detektovanje tajni, potrebno je prvo povući čitav repozitorijum u lokalno okruženje)


## Literatura
[1] OWASP Cheatsheet series, (n.d.), Cheatsheet series, owasp.org <i>Secrets management cheatsheet - OWASP cheatsheet series</i>: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html