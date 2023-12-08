# DevSecOps
## SAST
Statičko testiranje bezbednosti aplikacija (SAST) se koristi za obezbeđivanje softvera pregledom izvornog koda softvera da bi se identifikovali izvori ranjivosti. SAST alati se fokusiraju na sadržaj programskog koda aplikacije i njegove komponente kako bi utvrdili potencijalne bezbednosne propuste, <i>white-box</i> testiranje. U životnom ciklusu razvoja softvera (SDLC - <i>software development life cycle</i>), SAST je poželjno izvoditi u ranoj fazi. Iako mnogi testovi rezultuju lažno pozitivnim (<i>false-positive</i>) rezultatima i ometaju usvajanje od strane programera, dobra praksa je koristiti ih[1].

SAST alati skeniraju kompletan izvorni kod (<i>source code</i>) i pokrivenost može da bude čak i 100%, dok dinamičko testiranje DAST pokriva njegovo izvršavanje, koje ne mora biti 100%-tno i takođe ne testira neobezbeđenu konfiguraciju u konfiguracionim fajlovima.

SAST alati mogu ponuditi i proširene funkcionalnosti kao što su testiranje kvaliteta i testiranje arhitekture rešenja. Između kvaliteta softvera i sigurnosti postoji direktna korelacija, jer softver lošijeg kvaliteta je vrlo verovatno i loše obezbeđen softver.

Iako programeri žele da koriste SAST alate, postoje izazovi koje programeri trebaju da prebrode. Upotrebljivost izlaza (izveštaja) koji se generiše od strane alata može uticati na to koliko programeri mogu da iskoriste ove alate. Rana upotreba SAST alata prilikom rada po Agilnim metodologijama može proizvesti dosta bagova, jer programeri koji koriste ovu metodologiju se fokusiraju najviše na funkcionalnosti i isporuku rešenja[2]. Alati mogu generisati mnogo lažno pozitivnih (<i>false-positive</i>) problema i time povećaju vreme neophodno za istraživanje problema i smanjuje se poverenje programera u sam alat.

Alati koji bi se istraživali su: <i>SonarQube, Veracode, Checkmarx, Fortify, Coverity</i>. Nakon istraživanja alata jedan bi se iskoristio za implementaciju u samom <i>pipeline</i>-u.

## Literatura
[1] Aloraini, B., Nagappan, M., German, D. M., Hayashi, S., & Higo, Y. (2019). An empirical study of security warnings from static application security testing tools. <i>Journal of Systems and Software</i>, 158, 110427.

[2] Garbajosa, J., Wang, X., & Aguiar, A. (Eds.). (2018). Agile Processes in Software Engineering and Extreme Programming: 19th International Conference, XP 2018, Porto, Portugal, May 21–25, 2018, Proceedings.
