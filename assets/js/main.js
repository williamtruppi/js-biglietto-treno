/* Il programma dovrà chiedere all'utente 
il numero di chilometri che vuole percorrere e 
l'età del passeggero. */

var userKilometers = Number(prompt("Quanti kilometri ha intezione di percorrere?"));
var userAge = Number(prompt("Inserire la Sua età"));

console.log(userKilometers, userAge);

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

var finalPrice;

if (userAge < 18) {
  finalPrice = (userKilometers * 0.21) - ((userKilometers * 0.21) * 0.20);
  alert("Lei aderisce allo sconto \"MINORENNI\", pertanto il costo del viaggio è di €. " + finalPrice);
  document.getElementById("finalPrice").innerHTML = "Lei aderisce allo sconto \"MINORENNI\", pertanto il costo del viaggio è di €. " + finalPrice;
} else if (userAge >= 65) {
  finalPrice = (userKilometers * 0.21) - ((userKilometers * 0.21) * 0.40);
  alert("Lei aderisce allo sconto \"OVER 65\", pertanto il costo del viaggio è di €. " + finalPrice);
  document.getElementById("finalPrice").innerHTML = "Lei aderisce allo sconto \"OVER 65\", pertanto il costo del viaggio è di €. " + finalPrice;
} else {
  finalPrice = userKilometers * 0.21;
  alert("Il costo del biglietto è di €. " + finalPrice);
  document.getElementById("finalPrice").innerHTML = "Il costo del biglietto è di €. " + finalPrice;
}