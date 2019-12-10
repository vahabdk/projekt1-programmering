/*Lavet af AD
Formålet med denne JS fil er at få korrekt data på de revisorer som opretter sig og så
disse data bliver brugt på henholdsvis revisor siden og i kalenderen*/

function kontrolInfo() {
    // alle indtast muligheder hentes via en getElementById. Værdierne hentes ved at bruge .value
    var fornavn = document.getElementById("Fornavn").value;
    var efternavn = document.getElementById("Efternavn").value;
    var email = document.getElementById("Email").value;
    var tlf = document.getElementById("Tlf").value;
    var startTime = document.getElementById("startTime").value;
    var startMinut = document.getElementById("startMinut").value;
    var slutTime = document.getElementById("slutTime").value;
    var slutMinut = document.getElementById("slutMinut").value;
    var brugernavn = document.getElementById("Brugernavn").value;
    var kodeord = document.getElementById("Kodeord").value;


    /* for at definere en start tid skal time og minut kobles. Af hensyn til JS kalender koden,
    konverteres 30 min til 0.5 time. Fordi der er i HTML er defineret at man kun kan vælge 30 eller nul, defineres
    der ikke ydereligere */
    var startTid = startTime + ":" + startMinut;
    if (startMinut == 30){
        startMinut = 0.5
    }

    // Samme princip som ovenover
    var slutTid = slutTime + ":" + slutMinut;
    if (slutMinut == 30){
        slutMinut = 0.5
    }

    //Test af at det virker
    console.log(fornavn+efternavn+email+tlf+startTid+slutTid+brugernavn+kodeord);

    //For at funktionen kan køre, skal den køres. Det gør den her
    kontrolInput();

    /*For at kontrollere input tilføjes denne function. Som udgangspunkt er de
    indtastede værdier korrekte, det defineres i den første variabel, derfor sættes den som true. Efterfølgende sker
    kontrollen med if statements, som så kan forkaste at første antagelse var korrekt */
   function kontrolInput() {
        var inputCorrect = true;

       /*Her kontrolleres indholdet med If statements. Else statementet går igen hele vejen og er lavet på samme måde.
       Den gør at hvis input udfyldes korrekt, så fjernes fejlbeskeden, hvis den er kommet frem */

       if (fornavn==null || fornavn=="") {
           //Hvis dette gør sig gældende, påkaldes det id som er givet i HTML dokumentet
           document.getElementById("fejlFornavn").innerHTML = "Indtast fornavn";
           inputCorrect = false;
       } else {
           document.getElementById("fejlFornavn").innerHTML = "";
       }

       if (efternavn==null || efternavn=="") {
           document.getElementById("fejlEfternavn").innerHTML = "Indtast efternavn";
           inputCorrect = false;
       } else {
           document.getElementById("fejlEfternavn").innerHTML = "";
       }

       /*Ved kontrol af korrekt email skal @ og . eksistere.
       Ved at bruge .indexof metoden, kan man tælle hvor et givent tegn befinder sig.
       Derfor skal @>1 og punktum >2. Der kan ikke skrives snabelA<punktum da nogle mails indeholder punktum før og efter @
       For at bruge den her indexof metode, skal der laves to variabler */

       var snabelA = email.indexOf("@");
       var punktum = email.indexOf(".");

       if (email==null || email=="" || snabelA<1 || punktum<2) {
           document.getElementById("fejlEmail").innerHTML = "Indtast korrekt email";
           inputCorrect = false;
       } else {
           document.getElementById("fejlEmail").innerHTML = "";
       }

       /*Da HTML siden er lavet sådan at der kun kan indtastes tal, er det ikke nødvendigt at definere her.
       Et tlf nr skal være på minimum 8 tal og under 10 tal (i tilfælde af at de skriver +45)
       Derfor skal nr ligge mellem 10 mio og 1 mia */
       if (tlf==null || tlf<=10000000 || tlf>=1000000000) {
           document.getElementById("fejlTlf").innerHTML = "Indtast korrekt tlf nr.";
           inputCorrect = false;
       } else {
           document.getElementById("fejlTlf").innerHTML = "";
       }
       /*Det skal ikke være muligt at have kunder fra f.eks. kl. 1400-0800 derfor skal start tid
       //være mindre end sluttiden. Der refereres til de tidligere definerede variabler
       Inde i HTML, er det defineret at man ikke kan taste et tal som er større end 24 */
       if (startTime>slutTime) {
           document.getElementById("fejlTid").innerHTML = "Indtast korrekt tid";
           inputCorrect = false;
       } else {
           document.getElementById("fejlTid").innerHTML = "";
       }

       /*Kontrol af brugernavn, først kontrolleres at der bliver skrevet noget til brugernavnet. Dernæste skal det kontrolleres,
       at brugernabnet er unikt. Der er lavet et for loop som kører alle brugernavnene igennem og hvis et navn er lig med det
       indtastede, så kommer en fejlbesked. Der anvendes funktioner fra databehandling og revisor.
        Hvis loopet finder et match tidligt, standses loopet med break;*/
       if (brugernavn==null || brugernavn=="") {
           document.getElementById("fejlBrugernavn").innerHTML = "Indtast brugernavn";
           inputCorrect = false;
           console.log(brugernavn);
       } else {
          var rh = getGemtRevisorHus();
          var listRevisorer = rh.getRevisorer();

          for (var i = 0; i < listRevisorer.length; i++) {
              console.log(listRevisorer [i].getBrugernavn());

              if (listRevisorer [i].getBrugernavn() == brugernavn) {
                  document.getElementById("fejlBrugernavn").innerHTML = "Brugernavn allerede taget";
                  inputCorrect = false;
                  break;
              } else{
                  document.getElementById("fejlBrugernavn").innerHTML = "";
              }
          }

       }

       /*Kontrol af at brugernavn er unikt. Der hentes en funktion fra revisor.js og databehandling.js
       Herfra bruges et loop til at gå igennem alle oprettede revisorer i local storage. */


       //Kontrol af kodeord
       if (kodeord==null || kodeord=="") {
           document.getElementById("fejlKodeord").innerHTML = "Indtast kodeord";
           inputCorrect = false;
       } else {
           document.getElementById("fejlKodeord").innerHTML = "";
       }

       /* Her påkaldes den besked som skal dukke op, ved korrekt udfyldelse
       saveToDB er en reference til den lokale database som er oprettet i funktionen nedenunder */
        if(inputCorrect) {
            saveToDB();
            alert("Revisor oprettet");
            location.replace("revisorLoginside.html")
        }

    }

/* Lavet af FH
Herunder bliver den indtastet data gemt i local storage og tilføjet til class revisorhus og ind i databehandling filen.
 På denne måde bliver det muligt at anvende revisoren på tværs af html og JS filer. */

    function saveToDB(){

        var gemtRevisorhus = getGemtRevisorHus();

        if(gemtRevisorhus != null){
            var nyRevisor = new Revisor(fornavn + ' ' + efternavn, new Array(), Number(startTime) + Number(startMinut),
                Number(slutTime) + Number(slutMinut), email, tlf, brugernavn, kodeord);
            gemtRevisorhus.addRevisor(nyRevisor);

            localStorage.setItem('gemtRevisorhus', JSON.stringify(gemtRevisorhus));
        }
    }

}
