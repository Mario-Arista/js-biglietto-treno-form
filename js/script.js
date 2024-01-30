// INPUT
const inputFullNameElement = document.querySelector("#full_name_user");
const inputKmElement = document.querySelector("#km_needed");
const inputAgeElement = document.querySelector("#choice-age-field");


// BUTTON
const buttonGeneraElement = document.querySelector("#genera");
const buttonAnnullaElement = document.querySelector("#annulla");

// PRICE PER KM 

let pricePerKm;

// RANDOM NUMBERS
const sceltaComputerCarrozza = Math.floor(Math.random() * 15) + 1;
console.log(sceltaComputerCarrozza);

const sceltaComputerCPM = Math.floor(Math.random() * 9999) + 90000;
console.log(sceltaComputerCPM);




/* 
Scrivere un programma che chieda all’utente:
 - Il numero di chilometri da percorrere
 - Età del passeggero

 Sulla base di queste informazioni dovrà calcolare il prezzo 
 totale del biglietto di viaggio, secondo le seguenti regole:
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65.
*/



buttonGeneraElement.addEventListener("click",
    function() {

        // al click sul bottone genera, si generano gli output:

        // NOME
        document.getElementById("output-name").innerHTML = inputFullNameElement.value;

        // NUMERO RANDOM CARROZZA
        document.getElementById("carrozza-random").innerHTML = sceltaComputerCarrozza;

        // NUMERO RANDOM CODICE
        document.getElementById("codice-random").innerHTML = sceltaComputerCPM;

        // PREZZO PER KM + AGE CHOICE 

        if (inputAgeElement.value == "Minorenne") {
            document.getElementById("type_ticket").innerHTML = "Biglietto scontato del 20%";
            document.getElementById("out-price").innerHTML = (inputKmElement.value * 0.21 * 0.80);
        } else if (inputAgeElement.value == "Over 65") {
            document.getElementById("type_ticket").innerHTML = "Biglietto scontato del 40%";
            document.getElementById("out-price").innerHTML = (inputKmElement.value * 0.21 * 0.60);

        } else {
            document.getElementById("type_ticket").innerHTML = "Biglietto standard";
            document.getElementById("out-price").innerHTML = (inputKmElement.value * 0.21);
        }

    }
)

buttonAnnullaElement.addEventListener("click",
    function() {

        // al click sul bottone annulla, si resettano gli imput

        inputFullNameElement.value = "";
        inputKmElement.value = "";
        inputAgeElement.value = `<option id="over_18" selected="selected">Maggiorenne<option>`;

    }
)

