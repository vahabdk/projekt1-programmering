# projekt1

Gruppe 19
Beskrivelse af systemet
Formålet er at lave et online bookingsystem til en revisorvirksomhed. Dette afsnit er delt op i, en analyse - hvad systemet skal kunne og et design - hvordan det skal laves.
Analyse - hvad systemet skal kunne
Programmet skal gøre revisorvirksomhedens kontaktflade større. Systemet skal gøre det lettere, for kunder at booke møder med revisorvirksomheden, også uden for almindelige åbningstider. Målgruppen er både eksisterende kunder samt nye kunder, som ønsker et uforpligtende møde. Der skal gå minimum 24 timer fra, at kunden booker et møde, til at det kan finde sted. Kunden får mulighed for at oprette login, for at have mulighed for at ændre/slette en booking. Hvis kunden ikke ønsker at oprette login, kan man stadig anmode om et møde, dog uden mulighed for at ændre/slette efterfølgende.
Design - hvordan det skal laves
Systemet skal fungere på en underside til en hjemmeside. Systemet skal laves så det er muligt at implementere på andre hjemmesider tilhørende andre revisorvirksomheder. Systemet skal altså laves så det bliver et “off the shelf product”.
Herunder er brugerens vej gennem bookingsystemet visualiseret:

Gruppe 19
 Det er tanken at en bruger går ind på en revisors hjemmeside, og vælger en underside med navnet ‘Mødebooking’ eller lignende. Dette er første punkt på grafen.
Her vælger man hvilken revisor man ønsker at booke tid hos, og vælger hvilken type møde man skal have - dette kan fx være momsregnskab eller en anden type møde, som har forskellige længder af tid.
Herefter viser kalenderen (som er lavet i HTML), hvilke dage i den pågældende måned, at der er ledige tider. De dage som er helt bookede, vil være røde, og de dage som har ledige tider vil være grønne. Vil man booke et møde som ikke er i nuværende måned, kan man ændre måneden, og herefter vil de ledige dage blive genopfrisket for det pågældende møde.
Når man trykker på en dag med ledige tider, får man en oversigt over, hvilke tider der er tilgængelige. Her kan man så lave en ny aftale, hvor man indtaster de nødvendige oplysninger såsom beskrivelse og navn, som vil blive ‘gemt’.

Gruppe 19
Brugeren kan vælge at oprette et login, som gør at de kan ændre og opdatere aftalen efterfølgende. Alternativt kan de fortsætte som gæst, og kan så ikke have mulighed for at ændre eller opdatere aftalen gennem systemet.
Efterfølgende skal en revisor acceptere tid, hvorefter der bliver sendt en bekræftelse på brugerens oplyste mail.
Det grafiske design skal være enkelt og overskueligt. Selve kalenderen skal vise en måned ad gangen.
Kravspecifikationer
Dette afsnit konkretiserer det som blev forklaret i beskrivelsen af systemet. Det er kravspecifikationerne som er rettesnoren for projektet og det endelige produkt.
Aktører
• Kunde
• Revisor
• Admin
Kunden
• Kunden skal vælge en ønsket/bestemt revisor
• Der skal kunne vælges mellem 2 revisorer
• Kunden skal vælge mellem en halv times møde eller en times møde
• Kalenderen skal vise en måned ad gangen
• Kunden skal visuelt kunne se hvilke datoer som er ledige
• De ledige datoer skal være markeret med grøn

Gruppe 19
• De fuldt bookede datoer skal være markeret med rød
• På en ledig dato skal der være minimum en ledig tid af den ønskede type møde
• Der skal gå minimum 24 timer fra booking, til at et møde kan finde sted
• Kunden skal udfylde kontaktinformation ved booking af et møde
• Kontaktinformation skal indeholde følgende:
• Navn
• Kommentar
• tlf. nr
• E-mail
• Kunden som ønsker et møde, skal kunne gøre dette uden at oprette login
• Skal kunne ændre ændre og/eller aflyse møde, ved oprettet login
Revisor
• Revisor skal godkende enhver anmodning om møde
• Når revisoren enten har accepteret eller afvist anmodning om møde, skal kunden have
besked via e-mail
• Skal kunne ændre og/eller aflyse møder
Admin
• Skal kunne alt som Revisor og kunde kan
• Tilføje nye revisorer

Gruppe 19
Klassediagram
 
