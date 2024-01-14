# DevSecOps
## DAST
Prilikom implementacije DAST alata naleteli smo na razne probleme i poteškoće. OWASP ZAP alat je uspešno implementiran i integriran u <i>Jenkins pipeline</i>, dok ostale alate nismo uspeli da implementiramo iz raznih razloga. U nastavku su dokumentovani svi DAST alati koje nismo uspeli da implementiramo kao i razlozi zbog kojih to nismmo uspeli.

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


## Literatura
[1] About W3af - https://w3af.org

[2] IAST osnove 2 - https://snyk.io/learn/application-security/iast-interactive-application-security-testing/#what-is

[3] About HCL AppScan - https://help.hcltechsw.com/appscan/Standard/10.0.4/home.html

[4] About Semgrep - https://semgrep.dev/docs/

[5] About Contrast Security - https://docs.contrastsecurity.com/?lang=en