# DevSecOps
## DAST
Prilikom implementacije DAST alata naleteli smo na razne probleme i poteškoće. OWASP ZAP alat je uspešno implementiran i integriran u <i>Jenkins pipeline</i>, dok ostale alate nismo uspeli da implementiramo iz raznih razloga. U nastavku su dokumentovani svi DAST alati koje nismo uspeli da implementiramo kao i razlozi zbog kojih to nismo uspeli.

## W3AF
Problem kod W3AF DAST alata jeste to što novije verzije ovog alata ne podržavaju <i>Windows</i> operativni sistem, kao što je i prikazano na slici ispod.

![W3AF graph](/docs/images/w3af_windows.PNG)

Kao alternativu smo našli stariji <i>Windows</i> instaler na sajtu [Source Forge](https://sourceforge.net/projects/w3af/). Problem kod ovog pristupa jeste što je i na samom sajtu naglašeno da je <i>malware</i> detektovan u instalacionom fajlu.

![W3AF graph](/docs/images/w3af_windows_malware.PNG)

## Arachni Scanner
Kod ovog alata postoji više problema. 
 - Prvi jeste da je podrška za ovaj alat prekinuta. Uprkos tome uspeli smo da instaliramo i integrišemo ovaj alat u naš <i>Jenkins pipeline</i>. 
 - Drugi problem jeste to što ovaj alat ne može da skenira <i>localhost</i> stranice.  
 ![Arachni graph](/docs/images/arachni_noLocalHost.PNG)

 - Treći problem jeste nepoklapanje odgovarajućih verzija <i>chroma</i>.
 ![Arachni graph](/docs/images/arachni_chromePNG.PNG)

Primer <i>pipeline</i>-a: 
```
pipeline {
   agent any
   stages {
      stage('Scanning') {
         steps {
            arachniScanner checks: '', format: 'json', scope: [excludePathPattern: '', pageLimit: '100'], url: 'http://localhost:3000/#/', userConfig: [filename: '']
         }
      }
   }
}

```


## SOOS
Kod implementacije Soos DAST alata naišli smo na problem <i>docker daemon</i>-a koji nismo uspeli da rešimo. Primer izlaza:
```
+ docker run --rm soosio/dast http://localhost:3000/#/ --clientId= --apiKey= --projectName=Jenkins SOOS DAST Analysis --scanMode=baseline --apiURL=https://api.soos.io/api/ --integrationName=Jenkins --debug --ajaxSpider
docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?.
See 'docker run --help'.
```

Primer <i>pipeline</i>-a: 
```
pipeline {
    agent any

    environment {
        SOOS_PROJECT_NAME = "Jenkins SOOS DAST Analysis"
        SOOS_SCAN_MODE = "baseline"
        SOOS_API_BASE_URL= "https://api.soos.io/api/"
        SOOS_TARGET_URL= "http://localhost:3000/#/"
    }

    stages {
        stage('SOOS DAST Analysis') {
            steps {
                sh '''
                    PARAMS="--clientId=${jtrsqusur} --apiKey=${MTlkMDM2ZjQtNzZhYyOOM2ZlLWJiZjktNzY20TAxNDhkYWNm} --projectName=${SOOS_PROJECT_NAME} --scanMode=${SOOS_SCAN_MODE} --apiURL=${SOOS_API_BASE_URL} --integrationName=\"Jenkins\""
                    
                    PARAMS="${PARAMS} --debug"
                    PARAMS="${PARAMS} --ajaxSpider"
                    docker run --rm soosio/dast ${SOOS_TARGET_URL} $PARAMS 
                '''
            }
        }
    }
}

```

## Nuclei
Problem kod ovag alata je taj iako može da se implementira u <i>Jenkins</i>-u ima ograničenja na <i>Freestyle project</i>-e. Nema podršku za implementaciju u sam <i>pipeline</i>.

![Nuclei graph](/docs/images/Nuclei.PNG)

## Sken.ai
Problem kod ovog alata je bila neaktivna stranica. Praćenjem linka koji se nalazi na <i>jenkins plugin</i> stranici dolazimo do stranice koja nije aktivna. Iz tog razloga ne možemo da naprvimo traženi nalog zarad korišćenja ovog alata.

![Sken graph](/docs/images/skenaiNosite.PNG)

![Sken graph](/docs/images/skenActualPage.PNG)

## Breachlock
Ovde smo naišli na problem dostupnosti alata. Da bi dobili pristup alatu neophodno je da agnciji <i>Breachlock</i> pošaljemo zahtev sa osnovnim podacima o sebi kao i e-mail adresu i broj telefona. Zbog tih zahteva nismo kreirali naloga na njihovom sajtu, te nismo uspeli da implementiramo ovaj alat.

![Breachlock graph](/docs/images/breachlock.PNG)



## Literatura
[1] About W3af - https://w3af.org

[2] About Arachni Scanner - https://github.com/Arachni/arachni

[3] About SOOS - https://soos.io

[4] About Nuclei in Jenkins - https://plugins.jenkins.io/nuclei/

[5] About Sken.ai in Jenkins - https://plugins.jenkins.io/skenai/

[5] About Breachlock in Jenkins - https://plugins.jenkins.io/breachlock-dast/