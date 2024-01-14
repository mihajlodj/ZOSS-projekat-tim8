# DevSecOps
## DAST
Prilikom implementacije DAST alata naleteli smo na razne probleme i poteškoće. OWASP ZAP alat je uspešno implementiran i integriran u <i>Jenkins pipeline</i>, dok ostale alate nismo uspeli da implementiramo iz raznih razloga. U nastavku su dokumentovani svi DAST alati koje nismo uspeli da implementiramo kao i razlozi zbog kojih to nismmo uspeli.

## W3AF
Problem kod W3AF DAST alata jeste to što novije verzije ovog alata ne podržavaju <i>Windows</i> operativni sistem, kao što je i prikazano na slici ispod.

![W3AF graph](/docs/images/w3af_windows.PNG)

Kao alternativu smo našli stariji <i>Windows</i> instaler na sajtu [Source Forge](https://sourceforge.net/projects/w3af/). Problem kod ovog pristupa jeste što je i na samom sajtu naglašeno da je <i>malware</i> detektovan u instalacionom fajlu.

![W3AF graph](/docs/images/w3af_windows_malware.PNG)


## Literatura
[1] IAST osnove - https://www.veracode.com/security/interactive-application-security-testing-iast#:~:text=IAST%20(interactive%20application%20security%20testing,interacting”%20with%20the%20application%20functionality.

[2] IAST osnove 2 - https://snyk.io/learn/application-security/iast-interactive-application-security-testing/#what-is

[3] About HCL AppScan - https://help.hcltechsw.com/appscan/Standard/10.0.4/home.html

[4] About Semgrep - https://semgrep.dev/docs/

[5] About Contrast Security - https://docs.contrastsecurity.com/?lang=en