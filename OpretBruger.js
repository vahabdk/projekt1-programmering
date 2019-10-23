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


    // for at definere en start tid skal time og minut kobles. Af hensyn til JS kalender koden,
    // konverteres 30 min til 0.5 time
    var startTid = startTime + ":" + startMinut;
    if (startMinut == 30){
        startMinut = 0.5
    }

    // for at definere en slut tid, skal time og minut valget kobles. Af hensyn til JS kalender koden,
    // konverteres 30 min til 0.5 time
    var slutTid = slutTime + ":" + slutMinut;
    if (slutMinut == 30){
        slutMinut = 0.5
    }

    //Test af at det virker
    console.log(fornavn+efternavn+email+tlf+startTid+slutTid+brugernavn+kodeord);

    //For at funktionen kan køre, skal den køres. Det gør den her
    kontrolInput();

    //For at kontrollere input tilføjes denne function
   function kontrolInput() {
        var inputCorrect = true;

       //Her kontrolleres indholdet
       if (fornavn==null || fornavn=="") {
           //Hvis dette gør sig gældende, påkaldes det id som er givet i HTML dokumentet
           document.getElementById("fejlFornavn").innerHTML = "Indtast fornavn";
           inputCorrect = false;
       }

       if (efternavn==null || efternavn=="") {
           document.getElementById("fejlEfternavn").innerHTML = "Indtast efternavn";
           inputCorrect = false;
       }

       //Ved kontrol af korrekt email skal @ og . eksistere. Punktummet skal være efter @
       //Ved at bruge .indexof metoden, kan man tælle hvor et givent tegn befinder sig.
       //Derfor skal @>1 og punktum >2
       //For at bruge den her indexof metode, skal der laves to variabler

       var snabelA = email.indexOf("@");
       var punktum = email.indexOf(".");

       if (email==null || email=="" || snabelA<1 || punktum<2) {
           document.getElementById("fejlEmail").innerHTML = "Indtast korrekt email";
           inputCorrect = false;
       }

       //Da HTML siden er lavet sådan at der kun kan indtastes tal, er det ikke nødvendigt at definere her.
       //Et tlf nr skal være på minimum 8 tal og under 10 tal (i tilfælde af at de skriver +45)
       //Derfor skal nr ligge mellem 10 mio og 1 mia
       if (tlf==null || tlf<=10000000 || tlf>=1000000000) {
           document.getElementById("fejlTlf").innerHTML = "Indtast korrekt tlf nr.";
           inputCorrect = false;
       }
       //Det skal ikke være muligt at have kunder fra 1400-0800 f.eks. derfor skal start tid
       //være mindre end sluttiden. Der refereres til de tidligere definerede variabler
       //Inde i HTML, er det defineret at man ikke kan taste et tal som er større end 24
       if (startTime>slutTime) {
           document.getElementById("fejlTid").innerHTML = "Indtast korrekt tid";
           inputCorrect = false;
       }

       //Kontrol af brugernavn
       if (brugernavn==null || brugernavn=="") {
           document.getElementById("fejlBrugernavn").innerHTML = "Indtast brugernavn";
           inputCorrect = false;
       }

       //Kontrol af kodeord
       if (kodeord==null || kodeord=="") {
           document.getElementById("fejlKodeord").innerHTML = "Indtast kodeord";
           inputCorrect = false;
       }


        //Her påkaldes den besked som skal dukke op, ved korrekt udfyldelse
        if(inputCorrect) {
            alert("Revisor oprettet");
        }

    }



    saveToDB();


    function saveToDB(){
        var nyRevisor;

        var gemtRevisorhus =JSON.parse(localStorage.getItem('gemtRevisorhus'));

        if(gemtRevisorhus != null){
            nyRevisor = new Revisor(fornavn + ' ' + efternavn, new Array(), Number(startTime) + Number(startMinut),
                Number(slutTime) + Number(slutMinut), email, tlf, brugernavn, kodeord);
            gemtRevisorhus.addRevisor(nyRevisor);

            localStorage = JSON.parse(localStorage.setItem('gemtRevisorhus', gemtRevisorhus));
        }
    }



}