/*
Inserisci un numero, se è pari stampa il numero, 
se è dispari stampa il numero successivo.
*/

const insertNumber = document.getElementById("insertNumber");
const submitButton = document.getElementById("inserisci");
const yourNumber = document.getElementById("your-number");

submitButton.addEventListener("click", function() {
        

    if (insertNumber.value % 2 === 0) {
        yourNumber.innerHTML = insertNumber.value;
        console.log(insertNumber.value);
    } else {
        yourNumber.innerHTML = "";
    }
}

)
