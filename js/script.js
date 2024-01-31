// INPUT
const inputFullNameElement = document.querySelector("#full_name_user");
const inputKmElement = document.querySelector("#km_needed");
const inputAgeElement = document.querySelector("#choice-age-field");


// BUTTON
const buttonGeneraElement = document.querySelector("#genera");
const buttonAnnullaElement = document.querySelector("#annulla");

// OUTPUT
const outputNameElement = document.querySelector("#output-name");
const outputTicketElement = document.querySelector("#type_ticket");
const outputCarrozzaElement = document.querySelector("#carrozza-random");
const outputCodiceElement = document.querySelector("#carrozza-random");
const outputPriceElement = document.querySelector("#out-price");

// PRICE PER KM 

let pricePerKm;

// RANDOM NUMBERS
const sceltaComputerCarrozza = Math.floor(Math.random() * 15) + 1;

const sceltaComputerCPM = Math.floor(Math.random() * 9999) + 90000;


buttonGeneraElement.addEventListener("click",
    function() {

        // al click sul bottone "GENERA", si generano gli output:

        // NOME
        outputNameElement.innerHTML = inputFullNameElement.value;

        // NUMERO RANDOM CARROZZA
        outputCarrozzaElement.innerHTML = sceltaComputerCarrozza;

        // NUMERO RANDOM CODICE
        outputCodiceElement.innerHTML = sceltaComputerCPM;

        // PREZZO PER KM + AGE CHOICE 

        pricePerKm = inputKmElement.value * 0.21;

        if (inputAgeElement.value === "Minorenne") {

            outputTicketElement.innerHTML = "Biglietto scontato del 20%";
            outputPriceElement.innerHTML = pricePerKm * 0.80 + "€";


        } else if (inputAgeElement.value === "Over 65") {

            outputTicketElement.innerHTML = "Biglietto scontato del 40%";
            outputPriceElement.innerHTML = pricePerKm * 0.60 + "€";


        } else {

            outputTicketElement.innerHTML = "Biglietto standard";
            outputPriceElement.innerHTML = pricePerKm;

        }

    }
)

buttonAnnullaElement.addEventListener("click",
    function() {

        // al click sul bottone annulla, si resettano gli imput

        inputFullNameElement.value = "";
        inputKmElement.value = "";
        inputAgeElement.value = "Maggiorenne";

    }
)

