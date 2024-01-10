# DevSecOps
## Soos
Karakteristike:

- Predlog rešavanja problema

- Jednostavna integracija

- Sigurnost životnog ciklusa razvoja

- Sigurnost koda

- Kreiranje <i>issu</i>-a

Cena:
<i>Soos</i> nudi razlicite pakete za SCA, SAST, DAST i jos mnogo toga.

- 5 developera po mesecu -100$


Dobre stvari:
- Lako se integriše.

- Vrlo detaljan prikaz poznatih ranjivosti

- Pored SCA analize nudi i SAST i DAST analize

Loše stvari:
- Nije besplatan alat

- Loš UI


Za implementaciju <i>Soos</i> alata za detektovanje poznatih ranjivosti koristio sam <i>GitHub actions</i> 

![SOOS graph](/docs/images/githubActions.PNG)

Github akcija se nalazi u .github/workflows direktorijumu i sacuvana je kao python-app.yml fajl. Prilikom svakog <i>push</i> i <i>pull request</i>-a se pokreće <i>SOOS Core SCA</i> analiza.

![SOOS graph](/docs/images/soosYMLfile.PNG)

Klikom na ReportUrl korisnik se prebacuje na Soos report stranicu 

![SOOS graph](/docs/images/reportUriSOOS.PNG)

![SOOS graph](/docs/images/soosPage.PNG)

Korisniku su prikazane sve poznate ranjivosti. Klikom na svaku od njih dobijamo više detalja o samoj ranjivosti kao i mogućnost kreiranja <i>issue</i>-a za ažuriranje poznate ranjivosti.


## Literatura
[1] About Soos - https://kb.soos.io/help