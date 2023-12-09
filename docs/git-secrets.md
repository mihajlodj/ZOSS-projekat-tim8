# DevSecOps
## Git Secrets
<i>Secrets</i> (tajne) se danas koriste svuda (API ključevi, sertifikati, kredencijali baze podataka, SSH ključevi, lozinke, itd). Češto se dešava da organizacije ostave ove osetljive podatke u <i>plain-text</i> formatu u konfiguracionim fajlovima ili u samom kodu projekta.[1]

Iz ovog razloga postoje različiti koncepti najboljih praksi kojih programeri i developeri treba da se pridržavaju, kao i alati koji tome pomažu. Neke od tih praksi su: dodavanje osetljivih fajlova u <i>.gitignore</i>, konstantno menjanje tajni (tj, korišćenje tajni sa kratkim životnim vekom), <i>whitelisting</i> IP adresa (ako je to moguće), definisanje minimalnih potrebnih privilegija (<i>permissions</i>) API-jima koji su u upotrebi, itd.[1]

Jedna od najbitnijih praksi jeste automatizacija pronalaženja tajni u kodu. Iako se za slične potrebe (tj. proveru koda) koristi <i>code-review</i>, on nije pouzdan jer je čovek taj koji proverava kod, a čovek je sklon greškama. U te svrhe se koriste alati koji mogu taj posao uraditi umesto čoveka. Često se ovi alati mogu i integrisati u CI/CD <i>pipeline</i>.

Alati koji služe za automatizaciju pronalaženja tajni (i ostalog) su: <i>GitGuardian</i> (<i>ggshield</i> - CLI API za <i>GitGuardian</i>), <i>GitLeaks</i>, <i>Trufflehog</i>, <i>GitRob</i>, <i>GitWatchman</i>, itd.

## Literatura
[1] OWASP Cheatsheet series, (n.d.), Cheatsheet series, owasp.org <i>Secrets management cheatsheet - OWASP cheatsheet series</i>: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html