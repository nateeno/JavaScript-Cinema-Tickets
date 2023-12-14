// KODE FOR JS

// lager array for alle billettene
const bilettregister = [];

// event for registrering
function registrer(){
    // null stiller evt. feil meldinger man har fra før av
    // (for de gangene man prøver flere ganger)
    document.getElementById("film-e").innerHTML = "";
    document.getElementById("antall-e").innerHTML = "";
    document.getElementById("fname-e").innerHTML = "";
    document.getElementById("lname-e").innerHTML = "";
    document.getElementById("phone-e").innerHTML = "";
    document.getElementById("email-e").innerHTML = "";

    // Henter verdiene fra form
    let filmI = document.getElementById("film").value
    let antallI = document.getElementById("antall").value
    let fnameI = document.getElementById("fname").value
    let lnameI = document.getElementById("lname").value
    let phoneI = document.getElementById("phone").value
    let emailI = document.getElementById("email").value

    // Kode for error melding
    let error = 0;
    var x = filmI;
    // Hvis film 0 er valgt feil melding (det er teksten "velg film")
    if (x == 0) {
        document.getElementById("film-e").innerHTML = "velg film du ønsker å se";
        error += 1;
    }

    var x = antallI;
    if (x === "" || x == null) {
        document.getElementById("antall-e").innerHTML = "velg hvor mange biletter du vil ha";
        error += 1;
    }

    var x = fnameI;
    if (x === "" || x == null) {
        document.getElementById("fname-e").innerHTML = "skriv inn fornavnett ditt";
        error += 1;
    }

    var x = lnameI;
    if (x === "" || x == null) {
        document.getElementById("lname-e").innerHTML = "fyll inn etternavn";
        error += 1;
    }

    var x = phoneI;
    if (x === "" || x == null) {
        document.getElementById("phone-e").innerHTML = "skriv inn mobilnr ditt";
        error += 1;
    }

    // hvis input mail ikke har @ gi feilmelding
    var x = emailI;
    if (x === "" || x == null || !x.includes("@")) {
        document.getElementById("email-e").innerHTML = "fyll inn en gyldig epost";
        error += 1;
    }

    // Hvis det ikke var noen feilmeldinger push array
    if(error === 0){
        const bilett = {
            filmI: filmI,
            antallI: antallI,
            fnameI: fnameI,
            lnameI: lnameI,
            phoneI: phoneI,
            emailI: emailI,
        };
        console.log(bilett)
        bilettregister.push(bilett);

        //nullstill inputboksene i form samt error meldinger
        document.getElementById('film').value = "0";
        document.getElementById("antall").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";

        document.getElementById("film-e").innerHTML = "";
        document.getElementById("antall-e").innerHTML = "";
        document.getElementById("fname-e").innerHTML = "";
        document.getElementById("lname-e").innerHTML = "";
        document.getElementById("phone-e").innerHTML = "";
        document.getElementById("email-e").innerHTML = "";


        //skriver ut bestillingen i table
        let ut =
            "<table><tr>" +
            "<th>film</th> <th>antall</th>" +
            "<th>navn</th> <th>etternavn</th>" +
            "<th>phone</th> <th>email</th>" +
            "</tr>";

        for (let p of bilettregister) {
            ut +=  "<tr>";
            ut += "<td>" +
                p.filmI + "</td> <td>" +
                p.antallI + "</td> <td>" +
                p.fnameI + "</td> <td>" +
                p.lnameI + "</td> <td>" +
                p.phoneI + "</td> <td>" +
                p.emailI + "</td>";
            ut +=  "</tr>";
        }
        document.getElementById("allebiletter").innerHTML = ut;
    }
}

//sletter alle billettene ved å sette verdien lik ""
function slett(){
    let ut ="";
    document.getElementById("allebiletter").innerHTML = ut;
}



// Sorterer bilettregisteret basert på filmI
function sortAfterMovie() {
    bilettregister.sort(function(a, b) {
        var filmA = a.filmI.toUpperCase(); // gjør om til store bokstaver for å unngå case-sensitivity
        var filmB = b.filmI.toUpperCase();

        if (filmA < filmB) {
            return -1;
        }
        if (filmA > filmB) {
            return 1;
        }
        return 0;
    });

    // Oppdaterer tabellen med den sorterte listen
    let ut =
        "<table><tr>" +
        "<th>film</th> <th>antall</th>" +
        "<th>navn</th> <th>etternavn</th>" +
        "<th>phone</th> <th>email</th>" +
        "</tr>";

    for (let p of bilettregister) {
        ut +=  "<tr>";
        ut += "<td>" +
            p.filmI + "</td> <td>" +
            p.antallI + "</td> <td>" +
            p.fnameI + "</td> <td>" +
            p.lnameI + "</td> <td>" +
            p.phoneI + "</td> <td>" +
            p.emailI + "</td>";
        ut +=  "</tr>";
    }
    
    document.getElementById("allebiletter").innerHTML = ut;
}
