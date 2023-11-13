// INFORMAZIONI UTENTE 

let numberOfKm = prompt("Inserisci i km da percorrere");
let age = prompt("Inserisci la tua età");

numberOfKm = parseInt(numberOfKm);
age = parseInt(age);

// CALCOLO COSTO VIAGGIO

let totalCost = numberOfKm * 0.21

if (age < 18) {
    totalCost = totalCost - totalCost * 0.2;
} else if (age >= 65) {
    totalCost = totalCost - totalCost * 0.4;
}

let finalCost = totalCost.toFixed(2);

document.getElementById("finalCost").addEventListener("click", function () {
    finalCost = totalCost.toFixed(2);
    // PREZZO VISUALIZZATO SULLA PAGINA
    document.getElementById("finalCostShow").innerHTML = `Prezzo: ${finalCost}€`;
});





// PARTE CONSOLE

let informations = `
--- Informazioni Utente ---
Numero di Km: ${numberOfKm}
Eta: ${age}
Prezzo Base: ${totalCost}
Prezzo Finale: ${finalCost}
`

console.log(informations);
