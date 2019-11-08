console.log(k)

//Validerer info
function validereInfo() {
    //Tilknytter JS variablerne til værdierne indtastet i HTML-filen
    var kundenavn = document.getElementById("kundenavn").value;
    var tlfnr = document.getElementById("tlfnr").value;
    var mail = document.getElementById("mail").value;
    var mødetype = document.getElementById("mødetype").value;
    var kommentar = document.getElementById("kommentar").value;

    validereInput();

    function validereInput() {
        korrektInput = true;

        //Validerer navnet
        if (kundenavn == null || kundenavn == "") {
            // Tilføjer en besked
            document.getElementById("fejlKundenavn").innerHTML = "Hov! Du har glemt at indtaste dit navn. <br/>"
            // sætter formen til false
            korrektInput = false;
        }

        //Validerer tlf.
        if (tlfnr == null || tlfnr <= 10000000 || tlfnr >= 1000000000) {
            document.getElementById("fejlTlfnr").innerHTML = "Hov! Det indtastede telefonnummer er ikke korrekt <br/>";
            korrektInput = false;
        }

        //Validerer mail
        var snabelA = mail.indexOf("@");
        var punktum = mail.indexOf(".");

        if (mail == null || mail == "" || snabelA < 1 || punktum < 2) {
            document.getElementById("fejlEmail").innerHTML = "Hov! Den indtastede email er ikke korrekt. <br/>";
            korrektInput = false;
        }

        //Validerer at mødetype er valgt
        if (mødetype == 0) {
            document.getElementById("fejlMødetype").innerHTML = "Husk at vælge en mødetype! <br/>";
            korrektInput = false;
        }

        if(korrektInput) {
            gemtilLS();
            alert("Mødet er oprettet.");
        }


        function gemtilLS() {
            if (korrektInput) {
                console.log('hej')
                var nytMøde = new Møde(nuværendeSluttidspunkt, nuværendeSluttidspunkt, kommentar, kundenavn, tlfnr, mail);

                localStorage.setItem('gemtilLS', JSON.stringify(gemtilLS()));
                                                       
            }
        }


    }
}